class Lodash {
  compact(array) {
    return array.filter(val => !!val);
  }

  groupBy(array, prop) {
    return array.reduce((acc, item) => {
      const key = typeof prop === 'function' ? prop(item) : item[prop]
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  }

  // sortBy(arr, key) {
  //   return arr.sort((a,b) => a[key] - b[key])
  // }
}

module.exports = Lodash;
