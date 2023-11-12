export const localStorageMock = (function () {
  let storage = {};

  return {
    getItem: function (key) {
      return storage[key] || null;
    },
    setItem: function (key, value) {
      storage[key] = value.toString();
    },
    removeItem: function (key) {
      delete storage[key];
    },
    clear: function () {
      storage = {};
    },
  };
})();
