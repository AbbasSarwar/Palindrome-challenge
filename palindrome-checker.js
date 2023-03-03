module.exports = function (str) {
   str = str.replace(/[^0-9a-zA-Z]/g, '');
    str = str.toLowerCase();
     const reversedStr = str.split('').reverse().join('');
      if (str === reversedStr) {
         return true;
         } else {
           return false;
           }
}