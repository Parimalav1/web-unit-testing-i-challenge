module.exports = {
  success,
  fail,
  repair,
  get,
};

// ### Items.

// - Items have `name`, `durability` and `enhancement`.
// - The item's `enhancement` it's a number from 0 to 20.
// - The item's `durability` it's a number from 0 to 100.

// ### When enhancement succeeds

// - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.
 
function success(item) {
  if(item.enhancement === 20) {
    return {...item};
  } else {
    return {...item, enhancement: item.enhancement + 1}
  }
};
// function success(item) {
//   let successItem = {
//     name: item.name,
//     enhancement: item.enhancement,
//     durability: item.durability
//   }
//   if( successItem.enhancement === 20) {
//     return successItem;
//   } else {
//     successItem.enhancement++;
//   }
//   return {...successItem};
// };

// ### When enhancement fails

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function fail(item) {
  let checkItem = { ...item}
  if (checkItem.enhancement > 16 ) {
    checkItem.enhancement --;
    checkItem.durability  = checkItem.durability - 10;
  } else if (checkItem.enhancement >= 15) {
    checkItem.durability  = checkItem.durability - 10;
  } else {
    checkItem.durability = checkItem.durability - 5;
  }
  return checkItem;
};

// a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. 
// This method is the simplest of the three and would be a **good starting point** on this project.

function repair(item) {
  // const repairedItem = {
  //   name: item.name,
  //   enhancement: item.enhancement,
  //   durability: 100,
  // }
  // return repairedItem;
  return { ...item, durability: 100};
};

// if the enhancement level is 0, the the name is not modified.
// if the enhancement level is greater than 0. 
// Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".
function get(item) {
  return { ...item };
};
