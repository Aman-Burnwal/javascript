var MyStack = function () {
    this.stack = [];
    this.stack2 = []

    this.front = 0;
    this.rear = this.stack.length;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.stack[this.rear] = x;
    this.rear++;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.stack.pop();
    this.rear--


};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]

};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.stack.length == 0 ? true : false;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
