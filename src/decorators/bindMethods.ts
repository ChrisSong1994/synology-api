export type Method = (...args: any[]) => Promise<any>;

// type MethodKeys<T> = {
//   [K in keyof T]: {
//     [M in keyof T[K]]: Method;
//   };
// }[keyof T];

// bind methods to BaseSynologyApi instance
function methodsBundler(instance: any, methods: any) {
  const output = {};
  for (const key in methods) {
    output[key] = methods[key].bind(instance);
  }
  return output;
}

/**
 * 将源对象的方法绑定到目标类的原型上，并确保方法的 this 指向类实例
 * @param source 包含要绑定方法的对象
 */
export function BindMethods<T extends object>(source: T): ClassDecorator {
  return function (target: { prototype: any }) {
    // 获取源对象的所有方法键
    const modulesKeys = Object.getOwnPropertyNames(source);

    // 为每个方法创建绑定版本并定义到原型上
    modulesKeys.forEach((moduleName) => {
      const methods = source[moduleName];
      // 创建绑定方法的描述符
      const descriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false, 
        get() {
          return methodsBundler(this, methods);
        },
        set(  ) {
        //  this[moduleName] = value;
        },
      };

      Object.defineProperty(target.prototype, moduleName, descriptor);
    });
  };
}
