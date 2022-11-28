
var MyQueue = function () {

    front = 0;
    rear = 0;
    stack = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {

    stack.push(x);
    rear++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {

    let poped = stack[front];
    front++;
    return poped;

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return stack[front];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return front === rear;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */