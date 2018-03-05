const createEnumerableProperty = property => property;
const createNotEnumerableProperty = property => {
      Object.defineProperty(Object.prototype, property, {
          enumerable: false,
          get: () => this.value,
          set: newValue => this.value = newValue,
      });
      return property
};
const createProtoMagicObject = () => {
    function Func() {}
    Func.__proto__ = Func.prototype;
    return Func
};
const incrementor = () => {
    this.count = this.count || 0;
    incrementor.valueOf = () => this.count;
    this.count++;
    return incrementor
};
const asyncIncrementor = () => {
    this.countAsync = this.countAsync || 0;
    return new Promise(resolve => {
        this.countAsync++;
        resolve(this.countAsync)
    });
};
const createIncrementer = function*() {
      let value = 1;

      while (true) {
        yield value++;
      }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (e) => {
    return new Promise(resolve => setTimeout(() => resolve(e), 1000))
};
const getDeepPropertiesCount = (obj) => {
    let count=0;
    let keys = (obj) => {
        for ( let key in obj ) {
            count++;
            if (typeof obj[key] === 'object' && Object.keys(obj[key]).length > 0 && obj.hasOwnProperty(key)) {
                keys(obj[key]);
            }
        }
    };
    keys(obj);
    return count;
};
const createSerializedObject = () => ({toJSON: () => '',valueOf: () => ''});
const toBuffer = () => {
};
const sortByProto = (array) => {
    return array.sort((a, b) => {
        let first = a.__proto__;
        let second = b.__proto__;

        while (first !== Object.prototype) {
            if (first === second) return false;
            first = first.__proto__;
        }

        return true;
    });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;