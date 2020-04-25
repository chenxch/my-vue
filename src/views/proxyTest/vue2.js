/* eslint-disable no-use-before-define */
/* eslint-disable prefer-rest-params */
const oldProperty = Array.prototype;
const proto = Object.create(oldProperty);
const updateView = () => {
  console.log('更新');
};
const defineReactive = (target, key, value) => {
  observe(value);
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newVal) {
      if (newVal !== value) {
        observe(newVal);
        updateView();
        value = newVal;
      }
    }
  });
};

['push', 'shift'].forEach((method) => {
  proto[method] = function () {
    updateView();
    console.log(arguments);
    oldProperty[method].call(this, ...arguments);
  };
});
const observe = (target) => {
  if (typeof target !== 'object' || target === null) {
    return;
  }
  if (Array.isArray(target)) {
    Object.setPrototypeOf(target, proto);
    // target.__proto__ = proto;
  }
  for (const key in target) {
    defineReactive(target, key, target[key]);
  }
};


const data = { name: 'xc', age: [1, 2, 3] };
observe(data);
data.age.push(4);
console.log(data.age);
// const data = {name:'xc',age:{age:2}};
// observe(data);
// // data.age = {age:66};
// data.age.age = 'cxc';
