var main = function (){
	
	$("#answerButton").button();
	$("#answerRadioDiv").buttonset();
	var questions = new Array();
	questions = loadXMLDocTest();
	if (questions.length!=0){
		updateQuestionForm(questions[0]);
	}
	
	$("#answerButton").click(function(){
		var answer = $("#answerRadioForm input[type='radio']:checked").val();
		if (questions.checkAnswer(answer) == true)
			$("#answerResponse").text = "Answer is correct";
		else
			$("#answerResponse").text = "Sorry, Answer is not correct.";
	});
}

var updateQuestionForm = function(question){
	$("#QuestionText").text(question.text);
	$("#AnswerA").text(question.answerA);
	$("#AnswerB").text(question.answerB);
	$("#AnswerC").text(question.answerC);
	$("#AnswerD").text(question.answerD);
}

$(document).ready(main);
