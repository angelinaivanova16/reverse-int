module.exports = function reverse (n) {
  let plus = Math.abs(n);
  let str = plus.toString();
  let arr = str.split( "" );
  let rev = arr.reverse();
  let result = rev.join( "" );
  return result;
}
