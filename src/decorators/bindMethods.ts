// bind methods to  context
function methodsBundler(cxt: any, methods: any) {
  const output = {};
  for (const key in methods) {
    output[key] = methods[key].bind(cxt);
  }
  return output;
}

/**
 * bind methods to BaseSynologyApi prototype
 * @param source
 */
export function BindMethods<T extends object>(source: T): ClassDecorator {
  return function (target: { prototype: any }) {
    const modulesKeys = Object.getOwnPropertyNames(source);

    modulesKeys.forEach((moduleName) => {
      const methods = source[moduleName];
      const descriptor: PropertyDescriptor = {
        configurable: false,
        enumerable: true,
        get() {
          return methodsBundler(this, methods);
        },
        set() {},
      };

      Object.defineProperty(target.prototype, moduleName, descriptor);
    });
  };
}
