function myFunction(a) {
   
    return typeof(a);
 }


// myFunction(1)
// // Expected
// // 'number'
// myFunction(false)
// // Expected
// // 'boolean'
// myFunction({})
// // Expected
// // 'object'
// myFunction(null)
// // Expected
// // 'object'
// myFunction('string')
// // Expected
// // 'string'
// myFunction(['array'])
// // Expected
// // 'object'