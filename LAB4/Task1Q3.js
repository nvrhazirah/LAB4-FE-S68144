// 3. Write a function to reverse a number
function reverseNumber(number) {
    return parseInt(number.toString().split('').reverse().join(''));
  }
   
//I'm using number.toString to convert the number to String from '12345' to "54321"
//.split('') is to split the number into character array ['1','2','3','4','5']
//.reverse() it to reverse the character array
//.join('') is to join back the array element character
//lastly, parseInt to resulting back the string to number 
// the output will be 54321