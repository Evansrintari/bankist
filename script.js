'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'george wash',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
    <div class="movements__type
     movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovement(account1.movements);
const creeateUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    return username;
  });
};

creeateUserNames('Steven Thomas Williams');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];
// At method
let arr1 = [23, 11, 64, 45];
console.log(arr1[0]);
console.log(arr1.at(0));
// getting the last element
console.log(arr1[arr1.length - 1]);
console.log(arr1.slice(-1)[0]);
console.log(arr1.at(-1));
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`you deposited ${movement}`);
//   } else {
//     console.log(`you withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('----FOR EACH---');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`movement ${i + 1}: you deposited${mov}`);
//   } else {
//     console.log(`movement ${i + 1}: you withdrew${mov}`);
//   }
// });

// // sets && maps
// const ordersSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'risotto',
//   'pasta',
//   'pizza',
// ]);
// console.log(ordersSet);
// // how set works
// console.log(ordersSet.size);
// console.log(ordersSet.has('bread'));
// ordersSet.add('garlic Bread');
// console.log(ordersSet);
// ordersSet.delete('pizza');
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);
// // Example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// console.log(new Set('evansMuriungiRimberia').size);

// const rest = new Map();
// rest.set('name', 'classico italliono');
// rest.set(1, 'firenze, italy');
// console.log(rest.set(2, 'lisbon, portugal'));
// rest
//   .set('categories', ['italian', 'pizzerati', 'vegeterian', 'organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open:')
//   .set(false, 'we are closed: ');

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));

// rest.delete(2);
// console.log(rest);

// // arrays||object as map keys
// // map itteration
// const question = new Map([
//   ['question', 'what is the best program you have enrolled this yeaar'],
//   [1, 'C'],
//   [2, ' Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'correct'],
// ]);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// FOR EACH METHOD ON MAPS && SETS
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// const currenciesUnique = new Set(['USD', 'GDP', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });
