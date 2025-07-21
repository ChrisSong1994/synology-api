// export type Method = (...args: any[]) => Promise<any>;

// type MethodKeys<T> = {
//   [K in keyof T]: {
//     [M in keyof T[K]]: Method;
//   };
// }[keyof T];

// /**
//  * 将源对象的方法绑定到目标类的原型上，并确保方法的 this 指向类实例
//  * @param source 包含要绑定方法的对象
//  */
// export function BindMethods<T extends object>(source: T): ClassDecorator {
//   return function (target: { prototype: any }) {
//     // 获取源对象的所有方法键
//     const methodKeys = Object.getOwnPropertyNames(source).filter(
//       (key): key is MethodKeys<T> => typeof source[key] === "function"
//     );

//     // 为每个方法创建绑定版本并定义到原型上
//     methodKeys.forEach((methodName) => {
//       const originalMethod = source[methodName] as Function;

//       // 创建绑定方法的描述符
//       const descriptor: PropertyDescriptor = {
//         configurable: true,
//         enumerable: false, // 使方法不可枚举

//         // 使用 getter 确保每个实例都有自己的绑定函数
//         get() {
//           // 跳过原型访问，直接返回原始方法
//           if (this === target.prototype || this === undefined) {
//             return originalMethod;
//           }

//           // 为实例创建绑定方法并缓存
//           const boundMethod = originalMethod.bind(this);
//           Object.defineProperty(this, methodName, {
//             value: boundMethod,
//             configurable: true,
//             writable: true,
//             enumerable: false,
//           });
//           return boundMethod;
//         },
//       };

//       // 将绑定方法定义到类原型上
//       Object.defineProperty(target.prototype, methodName, descriptor);
//     });
//   };
// }
