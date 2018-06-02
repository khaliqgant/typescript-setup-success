class Queue {
  private data = [];
  push = (item) => this.data.push(item);
  pop = () => this.data.shift();
}

const queue = new Queue();
queue.push(0);
queue.push('1');

console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1)); // uhh oh!
