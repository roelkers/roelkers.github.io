class Question {
	/*
	var text : String;
	var answerA : String;
	var answerB : String;
	var answerC : String;
	var answerD : String;
	var correctAnswer : char;
	*/
	constructor(text,answerA,answerB,answerC,answerD,correctAnswer){
		this.text = text;
		this.answerA = answerA;
		this.answerB = answerB;
		this.answerC = answerC;
		this.answerD = answerD;
		this.correctAnswer = correctAnswer;
	}

	checkAnswer(answer){
		return this.answer === answer;
	}
}
