class Demo {
    msg = "hello this is a message!"
}
console.log(Demo.msg);  // undefined
// we tried to fetch the “msg” directly with Classname, so we got undefined.

let newDemo = new Demo();
console.log(newDemo.msg); // hello this is a message
// we try to fetch the “msg” value using object “obj”, so we got the result


