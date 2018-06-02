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
 * GQ ;)
 * @desc this generic usage allows us freedom and instantiate
 * any type of queue at will. A true GQ
 *
 */
class GQueue<G> {
    private data = [];
    push = (item: G) => this.data.push(item);
    pop = (): G => this.data.shift();
}

const gQueue = new GQueue<number>();
const gQueued = new GQueue<string>();

