class Queue {
  constructor() {
    this.store = [];
  }

  /*
    store = [3,2,1]
    a = 4
    a = 5
    add(a) => [5,4,3,2,1]
  */
  add(item) {
    this.store.unshift(item);
  }

  /*
    store = [3,2,1]
    remove(a) => [3,2]
  */
  remove() {
    this.store.pop();
  }

  /*
    store = []
    isEmpty() => true
  */
  isEmpty() {
    return this.store.length === 0;
  }

  /*
    store = [3,2,1]
    first() => 3
  */
  first() {
    return this.store[0];
  }

  /*
    store = [3,2,1]
    last() => 1
  */
  last() {
    return this.store[this.store.length - 1];
  }

  /*
    store = [3,2,1]
    size() => 3
  */
  size() {
    return this.store.length;
  }

  /*
    store = [3,2,1]
    print() => [3,2,1]
  */
  print() {
    console.log(this.store);
  }
}

/* For example */
const ticketQueue = new Queue();
const max = 5;
const customerRandom = () => Math.floor(Math.random() * 10);
let times = 0;

const timer = setInterval(() => {
  if (times > 10) {
    clearInterval(timer)
  }
  const customerId = customerRandom()
  if (ticketQueue.size() < max) {
    ticketQueue.add(customerId);
  }

  setTimeout(() => {
    ticketQueue.remove();
  }, 5000);

  ticketQueue.print();
  times++
}, 1000);
