/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
const toProxy = new WeakMap();
const toRaw = new WeakMap();
function isObject(val) {
  return typeof val === 'object';
}
const CreateReactiveObject = (target) => {
  if (!isObject(target)) {
    return target;
  }
  const proxy = toProxy.get(target);
  if (proxy) {
    return proxy;
  }
  if (toRaw.has(target)) {
    return target;
  }
  const baseHandler = {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      console.log('get', res);
      return isObject(res) ? recative(res) : res;
    },
    set(target, key, traget, receiver) {
      const res = Reflect.set(target, key, traget, receiver);
      console.log('set', res);
      return res;
    },
    deleteProperty(target, key) {
      const res = Reflect.deleteProperty(target, key);
      console.log('del', res);
      return res;
    }
  };
  const obServed = new Proxy(target, baseHandler);
  toProxy.set(target, obServed);
  toRaw.set(obServed, target);
  return obServed;
};
const recative = (target) => CreateReactiveObject(target);
const proxy = recative([1, 2, 3]);
// proxy.name.a
proxy.push(4);
proxy[2];
console.log(proxy);
