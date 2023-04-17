/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {

    const orignal_array = [first];

    for (let i = 0; i < encoded.length; i++) {

        orignal_array.push(orignal_array[i] ^ encoded[i]);
    }
    return orignal_array


};