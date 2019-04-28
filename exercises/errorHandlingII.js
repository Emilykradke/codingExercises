module.exports.run = async function(url){
/*
	You are given a url. Make a GET call with axios using the given url. However, there is something wrong with the url, and it throws an error. This error will have a property 'message'. Properly return the message, adding 'Error: ' to the beginning of the message.

    You are welcome to change this function to an async/await.

	Write your code below the comment.
*/
var axios = require("axios");

  try {
    const errorHandler = await axios.get(url)

  } catch (error) {
    var errorMessage = (`${error}`)
    return errorMessage;
  }

};
