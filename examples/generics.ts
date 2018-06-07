/**
 *
 * Queue
 * @desc this ties us down to a single type of queue. This is cumbersome
 * and could lead to repeated code
 *
 */
class Queue {
  private data = [];
  push = (item: number) => this.data.push(item);
  pop = (): number => this.data.shift();
}

const queue = new Queue();
queue.push(0);
queue.push('1');

/**
 *
 * IQ ;)
 * @desc this generic usage allows us freedom and instantiate
 * any type of queue at will. IQ++
 *
 */
class IQueue<I> {
    private data = [];
    push = (item: I) => this.data.push(item);
    pop = (): I => this.data.shift();
}

const iQ = new IQueue<number>();
const iQueued = new IQueue<string>();

