const notifications = {
    messages: [
      { text: 'Message 1' },
      { text: 'Message 2' },
    ],
    alerts: [
      { text: 'Alert 1' },
      { text: 'Alert 2' },
    ],
  };
  
  function flattenObject(obj) {
    const result = [];
  
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        result.push(...obj[key]);
      } else if (typeof obj[key] === 'object') {
        result.push(...flattenObject(obj[key]));
      }
    }
  
    return result;
  }
  
  const flatNotifications = flattenObject(notifications);
  
  function createFlatIterator(arr) {
    let index = 0;
  
    return {
      next: function () {
        if (index < arr.length) {
          return { value: arr[index++], done: false };
        } else {
          return { done: true };
        }
      },
      [Symbol.iterator]: function () {
        return this;
      },
    };
  }
  
  const flatIterator = createFlatIterator(flatNotifications);
  
  for (const item of flatIterator) {
    console.log(item.text);
  }
  