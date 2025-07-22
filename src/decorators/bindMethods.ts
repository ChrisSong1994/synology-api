export type Method = (...args: any[]) => Promise<any>;

// bind methods to BaseSynologyApi instance
function methodsBundler(instance: any, methods: any) {
  const output = {};
  for (const key in methods) {
    output[key] = methods[key].bind(instance);
  }
  return output;
}

/**
 * @param source 
 */
export function BindMethods<T extends object>(source: T): ClassDecorator {
  return function (target: { prototype: any }) {
    const modulesKeys = Object.getOwnPropertyNames(source);
    modulesKeys.forEach((moduleName) => {
      const methods = source[moduleName];
      const descriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
          return methodsBundler(this, methods);
        },
        set() {
          //  this[moduleName] = value;
        },
      };

      Object.defineProperty(target.prototype, moduleName, descriptor);
    });
  };
}
