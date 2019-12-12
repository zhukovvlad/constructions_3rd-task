/* eslint-disable */
'use strict';

export default function setUpAttacks(items, shield = true) {
  const result = [];

  // TODO: ваш код
  for (let i = 0; i < items.length; i += 1) {
    result[i] = (x) => {
      items = items.filter(item => item.health > 0);
      for (let item of items) {
        item.health = item.health - (x / items.length);
        if (item.health <= 0 ) {
          item.health = 0;
        }
      };
    }
  }

  return result;
}
/* eslint-enable */
