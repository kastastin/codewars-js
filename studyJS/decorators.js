function slow(x) {
  // intensive workloads
  return x;
}

function cachingDecorator(func) {
  const cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    const result = func(x);

    cache.set(x, result);

    return result;
  };
}

slow = cachingDecorator(slow);
