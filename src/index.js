const notifications = {
  facebook: [
    { text: 'Alice', source: 'facebook', date: '19/09/2023' },
    { text: 'Bob', source: 'facebook', date: '19/09/2023' }
  ],
  telegram: [{ text: 'Charlie', source: 'telegram', date: '19/09/2023' }]
};

notifications[Symbol.iterator] = function () {
  const sources = Object.values(this);
  let sourceIndex = 0;
  let itemIndex = 0;

  return {
    next: function () {
      while (sourceIndex < sources.length) {
        const source = sources[sourceIndex];

        if (itemIndex < source.length) {
          return {
            value: source[itemIndex++],
            done: false
          };
        }

        sourceIndex++;
        itemIndex = 0;
      }

      return {
        value: undefined,
        done: true
      };
    }
  };
};

for (const notification of notifications) {
  console.log(notification);
}
