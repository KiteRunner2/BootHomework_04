const questionsCtrl = (() => {
	console.log('questionCtrl module started...')
		
	getQuestions = (n) => {
		//debugger;
		let qList = JSON.parse(localStorage.getItem('ql'));
		let qArray = [];
		for (let k=0;k<n;k++){
			let ran = Math.floor(Math.random()*qList.length);
			let tmpItem = qList.splice(ran,1);
			qArray.push(tmpItem);
		}
		return qArray;
	}
		
	return {
		
		questionList: getQuestions
	}

})();



const appCtrl = (() => {

	let btn1 = document.getElementById('btn1');
	let btn2 = document.getElementById('btn2');
	let btn3 = document.getElementById('btn3');
	let firstRow = document.getElementById('firstRow');
	let secondRow = document.getElementById('secondRow');
	let questionBox = document.getElementById('question');
	let answerBox = document.getElementById('answer');
	let questions = questionsCtrl.questionList(5);
	let scoreBox = document.getElementById('score');
	let questionNo = 0;
	let score = 0;
	
	Timer = () =>
	{
		//debugger;
		let min = parseInt(document.getElementById('min').innerText);
		let sec = parseInt(document.getElementById('sec').innerText);
		if (min == 0 && sec == 0){
			return {
				end:-1
			}
		}
		let timeout = min*60*1000+sec*1000;
		let timer = new Date();
		timer.setTime(timeout);
		timeout -=1000;
		timer.setTime(timeout);
		if (timeout < 10000){
			document.getElementById('timeLeft').className = "font-weight-bold col-md-2 text-danger";
		}
		document.getElementById('min').innerText = timer.getMinutes(timeout);
		document.getElementById('sec').innerText = timer.getSeconds(timeout);
		return {
			end:timeout
		}
		
		
		
	}
	return {
		checkAnswer:answer = (btn) => {
			console.log('checking answer...');
			//debugger;
			switch(btn){
				case 1:
					if (btn1.value == "true"){
						answerBox.innerText = "Correct answer!";
						score++;
						break;
					}	
					else {
						answerBox.innerText = "Wrong answer!";
						break;
					}
					
				case 2:
					if (btn2.value == "true"){
						answerBox.innerText = "Correct answer!";
						score++;
						break;
						
					}
					else {
						answerBox.innerText = "Wrong answer!";
						break;
					}
					
				case 3:
					if (btn3.value == "true"){
						answerBox.innerText = "Correct answer!";
						score++;
						break;
					}
					else {
						answerBox.innerText = "Wrong answer!";
						break;
					}
			}
			scoreBox.innerText = score;
			appCtrl.nextQuestion(questionNo);
		},
		startQuiz:quiz = () => {
			console.log('starting quiz');
			firstRow.className = "invisible";
			secondRow.className = "row py-4 text-center visible";
			let timerInterval = setInterval(Timer,1000);
			appCtrl.nextQuestion(questionNo);
		},
		nextQuestion:next = (n) => {
			
				if (n == questions.length || Timer.end == -1){
					console.log('end of questions! Ending game...');
					answerBox.innerText = 'End of QUIZ!';
					return;
				}
				let k = questions[n][0];
				questionBox.innerText = k.question[0];
				btn1.innerText = k.question[1];
				btn2.innerText = k.question[2];
				btn3.innerText = k.question[3];
				btn1.value = "";
				btn2.value = "";
				btn3.value = "";
				switch(k.question[4]){
					case 1:
						btn1.value="true";
						break;
					case 2:
						btn2.value="true";
						break;
					case 3:
						btn3.value="true";
				}
				questionNo++;
				
		}
		
	}
	

})();

init = () =>
	{
	let qList = [];
	//let randomList = [];
	let newQ;
	
	newQ = new Object();
	newQ.question = [
		'What is the capital of Poland?',
		'Warsaw',
		'Berlin',
		'Moscow',
		1
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Canada?',
		'Washington',
		'Ottawa',
		'Mexico',
		2
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Italy?',
		'Washington',
		'Berlin',
		'Rome',
		3
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Germany?',
		'Berlin',
		'Moscow',
		'Helsinki',
		1
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Austria?',
		'Rome',
		'Vienna',
		'Mexico',
		2
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Ukraine?',
		'Copenhagen',
		'Vatican',
		'Kyiv',
		3
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Danmark?',
		'Copenhagen',
		'Moscow',
		'Helsinki',
		1
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Sweden?',
		'Stockholm',
		'Helsinki',
		'Oslo',
		1
	]
	qList.push(newQ);
	
	localStorage.clear();
	localStorage.setItem('ql',JSON.stringify(qList));

	document.getElementById("start").addEventListener('click',appCtrl.startQuiz);
			
		//timer -= 1000;
		//console.log(timer.getMinutes());
		//console.log(timer.getTime());
		//console.log(Date.now());
		//console.log(questions);
	}



init();







//var x = JSON.stringify(questions[0]);
//console.log(x);
//Timer();


/*
	newQ.set('question','What is the capital of Poland?');
	newQ.set(true,'Correct!');
	newQ.set(1,'Warsaw');
	newQ.set(2,'Berlin');
	newQ.set(3,'Moscow');
	qList.push(newQ);

	newQ = new Map();
	newQ.set('question','What is the capital of Canada?');
	newQ.set(true,'Correct!');
	newQ.set(1,'Ottawa');
	newQ.set(2,'Washington');
	newQ.set(3,'Mexico');
	qList.push(newQ);

	newQ = new Map();
	newQ.set('question','What is the capital of Italy?');
	newQ.set(true,'Correct!');
	newQ.set(1,'Rome');
	newQ.set(2,'Prague');
	newQ.set(3,'Warsaw');
	qList.push(newQ);

	newQ = new Map();
	newQ.set('question','What is the capital of Germany?');
	newQ.set(true,'Correct!');
	newQ.set(1,'Berlin');
	newQ.set(2,'Helsinki');
	newQ.set(3,'Mexico');
	qList.push(newQ);

	newQ = new Map();
	newQ.set('question','What is the capital of Austria?');
	newQ.set(true,'Correct!');
	newQ.set(1,'Vienna');
	newQ.set(2,'Copenhagen');
	newQ.set(3,'Mexico');
	qList.push(newQ);
	//debugger;

	let i = [1,2,3];
	localStorage.setItem('q',JSON.stringify(i));
	localStorage.setItem('b','hello');
	//let tmp;
	//tmp = new Object();
	//tmp = qList;

	for (let n=0;n<=2;n++){
		let ran = Math.floor(Math.random()*qList.length);
		let tmpItem = qList.splice(ran,1);
		randomList.push(tmpItem);
		//console.log(tmpItem);
	}
	qList = Object.assign(qList,tmp);

	*/
