export function applyMixins(target: any, baseClasses: any[]) {
  baseClasses.forEach(baseClass => {
    Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
      target.prototype[name] = baseClass.prototype[name];
    });
  });
}