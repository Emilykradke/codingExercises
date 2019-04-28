module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function. Parse the string so it is an array of objects and return the array. The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/

  var csvSplit = csv.split(/\r\n|\n/);
  var headers = csvSplit[0].split(',');
  var arr = [];

  for (var i=1; i<csvSplit.length; i++) {
    var data = csvSplit[i].split(',');
    var obj = {};

    if (data.length == headers.length) {

      for (var j=0; j<headers.length; j++) {
        obj [headers[j]] = data[j];
      }
      arr.push(obj);
    }

  }
  return arr;

};
