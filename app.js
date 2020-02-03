/* Quiz application
Choose correct capital of the country
*/

(initData = () => {
	localStorage.clear();

	let HoF = [];
	let newPerson;
	newPerson = new Object();
	newPerson.name = 'Master';
	newPerson.score = 15;
	HoF.push(newPerson);

	newPerson = new Object();
	newPerson.name = 'BeatMe';
	newPerson.score = 20;
	HoF.push(newPerson);

	newPerson = new Object();
	newPerson.name = 'Kiss Me';
	newPerson.score = 50;
	HoF.push(newPerson);

	localStorage.setItem('fame', JSON.stringify(HoF));

	let qList = [];
	let newQ;

	newQ = new Object();
	newQ.question = [
		'What is the capital of Poland?',
		'Warsaw',
		'Berlin',
		'Moscow',
		'Cracow',
		1
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Canada?',
		'Washington',
		'Ottawa',
		'Toronto',
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
		'Milan',
		3
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Germany?',
		'Berlin',
		'Moscow',
		'Helsinki',
		'Paris',
		1
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Austria?',
		'Rome',
		'Vienna',
		'Mexico',
		'Linz',
		2
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Ukraine?',
		'Copenhagen',
		'Vatican',
		'Kyiv',
		'Lviv',
		3
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Danmark?',
		'Copenhagen',
		'Moscow',
		'Helsinki',
		'Vienna',
		1
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Sweden?',
		'Stockholm',
		'Helsinki',
		'Oslo',
		'Lviv',
		1
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Finland?',
		'Stockholm',
		'Helsinki',
		'Oslo',
		'Berlin',
		2
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Russia?',
		'Stockholm',
		'Helsinki',
		'Moscow',
		'Petersborg',
		3
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of France?',
		'Stockholm',
		'Helsinki',
		'Moscow',
		'Paris',
		4
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Czechia?',
		'Stockholm',
		'Prague',
		'Moscow',
		'Paris',
		2
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Afghanistan?',
		'Herat',
		'Prague',
		'Kabul',
		'Paris',
		3
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Albania?',
		'Algiers',
		'Luanda',
		'Tirana',
		'Yerevan',
		3
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Algeria?',
		'Luanda',
		'Algiers',
		'Kabul',
		'Manama',
		2
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Angola?',
		'Dhaka',
		'Belmopan',
		'Luanda',
		'Tirana',
		3
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Argentina?',
		'Brasil',
		'Belmopan',
		'Luanda',
		'Buenos Aires',
		4
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Australia?',
		'Sydney',
		'Belmopan',
		'Canberra',
		'Buenos Aires',
		3
	]
	qList.push(newQ);

	localStorage.setItem('ql', JSON.stringify(qList));
})();



/*data control function for 
1. setting and reading local storage data
2. displaying/setting hall of fame results
3. getting question list
*/

const dataCtrl = (() => {
	console.log('dataCtrl module started...');
	let qList = JSON.parse(localStorage.getItem('ql'));
	//returns questions list in random order from all questions
	getQuestions = (n) => {
		//debugger;
		qList = JSON.parse(localStorage.getItem('ql'));
		let qArray = [];
		for (let k = 0; k < n; k++) {
			let ran = Math.floor(Math.random() * qList.length);
			let tmpItem = qList.splice(ran, 1);
			qArray.push(tmpItem);
		}
		return qArray;
	}
	//displays hall of fame results
	getFame = () => {
		let list = JSON.parse(localStorage.getItem('fame'));
		let fameBox1 = document.getElementById('fame-name1');
		let fameScore1 = document.getElementById('fame-score1');
		let fameBox2 = document.getElementById('fame-name2');
		let fameScore2 = document.getElementById('fame-score2');
		let fameBox3 = document.getElementById('fame-name3');
		let fameScore3 = document.getElementById('fame-score3');
		fameBox1.innerText = list[0].name;
		fameScore1.innerText = list[0].score;
		fameBox2.innerText = list[1].name;
		fameScore2.innerText = list[1].score;
		fameBox3.innerText = list[2].name;
		fameScore3.innerText = list[2].score;
		//return list;
	}
	//adds new name to hall of fame
	addFame = (name, score) => {
		let list = JSON.parse(localStorage.getItem('fame'));
		let newPerson = new Object();
		newPerson.name = name;
		newPerson.score = score;
		list.push(newPerson);
		localStorage.setItem('fame', JSON.stringify(list));
	}

	return {

		questionList: getQuestions,
		noOfQuestions: qList.length,
		ranks: getFame,
		setFame: addFame
	}

})();

const appCtrl = (() => {

	let btn1 = document.getElementById('btn1');
	let btn2 = document.getElementById('btn2');
	let btn3 = document.getElementById('btn3');
	let btn4 = document.getElementById('btn4');
	let firstRow = document.getElementById('firstRow');
	let secondRow = document.getElementById('secondRow');
	let thirdRow = document.getElementById('thirdRow');
	let questionBox = document.getElementById('question');
	let answerBox = document.getElementById('answer');
	let scoreBox = document.getElementById('score');
	let minBox = document.getElementById('min');
	let secBox = document.getElementById('sec');
	let timeLeftBox = document.getElementById('timeLeft');
	let questions;
	let penalty = 0;
	let questionNo = 0;
	let score = 0;
	let timerInterval;
	//timer function to control timeout and display
	Timer = (penalty=0) => {
		//debugger;
		let min = parseInt(minBox.innerText);
		let sec = parseInt(secBox.innerText);
		if (min == 0 && sec == 0) {
			answerBox.innerText = 'Time out!';
			secondRow.classList.toggle("invisible");
			firstRow.classList.toggle("invisible");
			return;
		}
		let timeout = min * 60 * 1000 + sec * 1000;
		let timer = new Date();
		timer.setTime(timeout);
		timeout -= 1000;
		timeout -= penalty;
		timer.setTime(timeout);
		if (timeout < 10000) {
			timeLeftBox.className = "font-weight-bold col-md-2 text-danger";
		}
		minBox.innerText = timer.getMinutes(timeout);
		secBox.innerText = timer.getSeconds(timeout);
	}

	return {
		//checking if answer is correct and pushing next question
		checkAnswer: answer = (btn) => {
			console.log('checking answer...');
			//debugger;
			switch (btn) {
				case 1:
					if (btn1.value == "true") {
						answerBox.classList.add('text-success');
						answerBox.classList.remove('text-danger');
						answerBox.innerText = "Correct answer!";
						score++;
						break;
					} else {
						answerBox.classList.add('text-danger');
						answerBox.classList.remove('text-success');
						answerBox.innerText = "Wrong answer!";
						penalty=5000;
						break;
					}

				case 2:
					if (btn2.value == "true") {
						answerBox.classList.add('text-success');
						answerBox.classList.remove('text-danger');
						answerBox.innerText = "Correct answer!";
						score++;
						break;
					} else {
						answerBox.classList.add('text-danger');
						answerBox.classList.remove('text-success');
						answerBox.innerText = "Wrong answer!";
						penalty=5000;
						break;
					}

				case 3:
					if (btn3.value == "true") {
						answerBox.classList.add('text-success');
						answerBox.classList.remove('text-danger');
						answerBox.innerText = "Correct answer!";
						score++;
						break;
					} else {
						answerBox.classList.add('text-danger');
						answerBox.classList.remove('text-success');
						answerBox.innerText = "Wrong answer!";
						penalty=5000;
						break;
					}
				case 4:
					if (btn4.value == "true") {
						answerBox.classList.add('text-success');
						answerBox.classList.remove('text-danger');
						answerBox.innerText = "Correct answer!";
						score++;
						break;
					} else {
						answerBox.classList.add('text-danger');
						answerBox.classList.remove('text-success');
						answerBox.innerText = "Wrong answer!";
						penalty=5000;
						break;
					}
			}
			scoreBox.innerText = score;
			appCtrl.nextQuestion(questionNo);
		},
		//startup function of the quiz
		startQuiz: quiz = () => {
			console.log('starting quiz');
			firstRow.classList.toggle("invisible");
			secondRow.classList.toggle("invisible");
			timeLeftBox.className = "col-md-2 text-primary";
			minBox.innerText = 1;
			secBox.innerText = 30;
			scoreBox.innerText = 0;
			score = 0;
			dataCtrl.ranks();
			clearInterval(timerInterval);
			timerInterval = setInterval(Timer, 1000);
			questions = dataCtrl.questionList(dataCtrl.noOfQuestions);
			questionNo = 0;
			appCtrl.nextQuestion(questionNo);
		},
		//checking if questions finished, displaying questions, setting buttons values
		nextQuestion: next = (n) => {

			if (n == questions.length) {
				console.log('end of questions! Ending game...');
				answerBox.innerText = 'End of QUIZ!';
				thirdRow.classList.toggle("invisible");
				firstRow.classList.toggle("invisible");
				secondRow.classList.toggle("invisible");
				clearInterval(timerInterval);
				return;
			}
			let k = questions[n][0];
			questionBox.innerText = k.question[0];
			btn1.innerText = k.question[1];
			btn2.innerText = k.question[2];
			btn3.innerText = k.question[3];
			btn4.innerText = k.question[4];
			btn1.value = "";
			btn2.value = "";
			btn3.value = "";
			btn4.value = "";
			switch (k.question[5]) {
				case 1:
					btn1.value = "true";
					break;
				case 2:
					btn2.value = "true";
					break;
				case 3:
					btn3.value = "true";
					break;
				case 4:
					btn4.value = "true";
			}
			questionNo++;

		}

	}
})();
//init function, clearing local storage
//building question list
//building initial hall of fame list
//adding event listneres



init = () => {
	document.getElementById("start").addEventListener('click', appCtrl.startQuiz);
	questionNo = 0;
	console.log('init done...');
}

init();
