

var main = function (){

	$("#answerButton").button();




  questions = loadXMLDoc();


	/*
	$("#answerRadioDiv").buttonsequestions = loadQuestions(this);

	$("#answerButton").click(function(){
		var answer = $("#answerRadioForm input[type='radio']:checked").val();
		if (questions.checkAnswer(answer) == true)
			$("#answerResponse").text = "Answer is correct";
		else
			$("#answerResponse").text = "Sorry, Answer is not correct.";
	});
	*/
}


$(document).ready(main);
