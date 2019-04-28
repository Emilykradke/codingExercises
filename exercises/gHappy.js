module.exports.run = function(str) {
/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.
*/

for(var i=0; i<=str.length -1; i++){
  if(str.length == 2 && str.charAt(1) == 'g' && str.charAt(0) == 'g') {
    return true;
  }
  else if (str.length > 2 && str.charAt(i) == 'g' && (str.charAt(i-1) == 'g' || str.charAt(i-1) == 'g')) {
    return true;
  }
  else {
    return false;
  }
  
}

};
