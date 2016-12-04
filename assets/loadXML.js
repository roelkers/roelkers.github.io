function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest
  var questions = new Array();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      questions = loadQuestions(this);
    }
  };
  xmlhttp.open("GET", "Question_catalog.xml", true);
  xmlhttp.send();
  return questions;
}

function loadQuestions(xml) {
  //Create XMLDocument
  var i;
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("QUESTION");
  
  //Create Question Array
  var questions = new Array();
  
  for (i = 0; i <x.length; i++) {
	questions.push(new Question(
		x[i].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue,
		x[i].getElementsByTagName("ANSWERA")[0].childNodes[0].nodeValue,
		x[i].getElementsByTagName("ANSWERB")[0].childNodes[0].nodeValue,
		x[i].getElementsByTagName("ANSWERC")[0].childNodes[0].nodeValue,
		x[i].getElementsByTagName("ANSWERD")[0].childNodes[0].nodeValue,
		x[i].getElementsByTagName("CORRECTANSWER")[0].childNodes[0].nodeValue));  
  }
  return questions;
}
