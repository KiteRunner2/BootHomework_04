/* Quiz application
Choose correct capital of the country
*/

//data intitiation function
// loading questions data and answers
//loading hall of fame dummy names
const initD = (function initData() {
	
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
	
	return {
		noOfQuestions:qList.length
	}
})();



/*data control function for 
1. setting and reading local storage data
2. displaying/setting hall of fame results
3. getting question list
*/

const dataCtrl = (function dCtrl() {
	
	
	//returns questions list in random order from all questions
	getQuestions = (n) => {
		

		let qList = JSON.parse(localStorage.getItem('ql'));
		let qArray = [];
		for (let k = 0; k < n; k++) {
			let ran = Math.floor(Math.random() * qList.length);
			let tmpItem = qList.splice(ran, 1);
			qArray.push(tmpItem);
		}
		return qArray;
	}
	//displays 3 hall of fame results
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
		return false;
		
	}
	//adds new name to hall of fame from input form displayed at the end of quiz
	addFame = () => {
		
		
		let list = JSON.parse(localStorage.getItem('fame'));
		let newPerson = new Object();
		newPerson.name = document.getElementById('inputName').value;
		newPerson.score = parseInt(document.getElementById('displayScore').innerText);
		list.unshift(newPerson);
		localStorage.setItem('fame', JSON.stringify(list));
		return false;
	}

	return {
		questionList: getQuestions,
		setFame: addFame,
		ranks:getFame
	}
})();

const appCtrl = (function apCtrl() {
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
	let scoreBox2 = document.getElementById('displayScore');
	let secBox = document.getElementById('sec');
	let timeLeftBox = document.getElementById('timeLeft');
	let questions;
	let questionNo = 0;
	let score = 0;
	let timerInterval;

	//decrese timer by 5 sec when wrong answer
	function Penalty(){
		secBox.innerText = parseInt(secBox.innerText) - 5;
	}

	//timer function to control timeout and timeout display
	function Timer(){
		let sec = parseInt(secBox.innerText);
		
		if (sec <= 0) {
			answerBox.innerText = 'Time out!';
			secondRow.classList.toggle("invisible");
			firstRow.classList.toggle("invisible");
			clearInterval(timerInterval);
			appCtrl.showForm();
			return false;
		}
		else {
			let timeout = sec * 1000;
			let timer = new Date();
			timer.setTime(timeout);
			timeout -= 1000;
			timer.setTime(timeout);
			if (timeout < 10000) {
				timeLeftBox.className = "font-weight-bold col-md-2 text-danger";
			}
			secBox.innerText = timer.getMinutes(timeout)*60  + timer.getSeconds(timeout);
		}
	}

	function showModal(){
		// Get the modal
		var modal = document.getElementById("myModal");
		// Get the button that opens the modal
		var btn = document.getElementById("myBtn");
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
  			modal.style.display = "none";
		}
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
  			if (event.target == modal) {
    		modal.style.display = "none";
  			}
		}
		modal.style.display = "block";
		btn.addEventListener('click',function(){
			modal.style.display = "none";
			return false;
		})
		return false;
	}
	
	function answer(btn){
			
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
						Penalty();
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
						Penalty();
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
						Penalty();
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
						Penalty();
						break;
					}
			}
			scoreBox.innerText = score;
			scoreBox2.innerText = score;
			appCtrl.nextQuestion(questionNo);
	}

	function quiz(){
		
			firstRow.classList.toggle("invisible");
			secondRow.classList.toggle("invisible");
			timeLeftBox.className = "col-md-2 text-primary";
			answerBox.innerText = '';
			//minBox.innerText = 1;
			secBox.innerText = 60;
			scoreBox.innerText = 0;
			score = 0;
			dataCtrl.ranks();
			clearInterval(timerInterval);
			timerInterval = setInterval(Timer, 1000);
			questions = dataCtrl.questionList(initD.noOfQuestions);
			questionNo = 0;
			appCtrl.nextQuestion(questionNo);
	}

	function next(n){
		
		if (n == questions.length) {
			
			answerBox.innerText = 'End of QUIZ!';
			firstRow.classList.toggle("invisible");
			secondRow.classList.toggle("invisible");
			clearInterval(timerInterval);
			appCtrl.showForm();
			return;
		}
		else {
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
	return {
		showForm:showModal,
		//checking if answer is correct and pushing next question
		checkAnswer: answer, 
		//startup function of the quiz
		startQuiz: quiz,
		//checking if questions finished, displaying questions, setting buttons values
		nextQuestion: next	
	}
})();



//init function, clearing local storage
//building question list
//building initial hall of fame list
//adding event listneres

const init = (function initF() {
	document.getElementById("start").addEventListener('click', appCtrl.startQuiz);
	questionNo = 0;
	
})();


