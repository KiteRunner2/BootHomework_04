//code goes here
const questionsCtrl = (() => {
	let qList = [];
	let randomList = [];
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
		'Ottawa',
		'Washington',
		'Mexico',
		1
	]
	qList.push(newQ);

	newQ = new Object();
	newQ.question = [
		'What is the capital of Italy?',
		'Rome',
		'Washington',
		'Berlin',
		1
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
		'Vienna',
		'Rome',
		'Mexico',
		1
	]
	qList.push(newQ);
	
	
	localStorage.clear();
	//return;
	localStorage.setItem('ql',JSON.stringify(qList));
	let kk = JSON.parse(localStorage.getItem('ql'));
	return {
		questionList: qList,
		q2: kk
	}

})();


const uiCtrl = (() => {

	console.log(' uiCtrl started');
	//some code
})();


const appCtrl = (() => {

	//some code
	console.log('appCtrl started');
	return {
		add: () => {
			console.log('add');
		}
	}
	

})();

init = () =>
	{
		
		document.getElementById("start").addEventListener('click',function(){
			console.log('quiz starts!');
			document.getElementById('firstRow').className = "invisible";
			document.getElementById('secondRow').className = "row py-4 text-center visible";
			let timerInterval = setInterval(Timer,1000);
		})
		//timer -= 1000;
		//console.log(timer.getMinutes());
		//console.log(timer.getTime());
		//console.log(Date.now());
		//console.log(questions);
	}

Timer = () =>
	{
		//debugger;
		let min = parseInt(document.getElementById('min').innerText);
		let sec = parseInt(document.getElementById('sec').innerText);
		if (min == 0 && sec == 0){
			return;
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
		
		//console.log(timer.getMinutes());
		
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
