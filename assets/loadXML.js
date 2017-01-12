function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadQuestions(this);
    }
  };
  xmlhttp.open("GET", "Question_catalog.xml", true);
  xmlhttp.send();
}

function loadQuestions(xml) {

  function updateQuestionForm(question){
  	$("#QuestionText").text(question.text);
  	$("#AnswerA").text(question.answerA);
  	$("#AnswerB").text(question.answerB);
  	$("#AnswerC").text(question.answerC);
  	$("#AnswerD").text(question.answerD);
  };

  //Create XMLDocument
  var i;
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("QUESTION");

  //Create Question Array
  questions = new Array();

  for (i = 0; i <x.length; i++) {
	questions.push(new Question(
		x[i].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue,
		x[i].getElementsByTagName("ANSWERA")[0].childNodes[0].nodeValue,
		x[i].getElementsByTagName("ANSWERB")[0].childNodes[0].nodeValue,
		x[i].getElementsByTagName("ANSWERC")[0].childNodes[0].nodeValue,
		x[i].getElementsByTagName("ANSWERD")[0].childNodes[0].nodeValue,
		x[i].getElementsByTagName("CORRECTANSWER")[0].childNodes[0].nodeValue));
  }
  updateQuestionForm(questions[0]);
}
