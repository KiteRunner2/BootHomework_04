//code goes here
let questions = (function(){
	let qList = [];
	let q = new Map();
		q.set('question','What is my name?');
		q.set(true,'Przemek');
		q.set(2,'Parisa');
		q.set(3,'Mark');
	
	qList.push(q);
	q = new Map();
	q.set('question','What is my birthday?');
	q.set(true,'November 24');
	q.set(1,'March 11');
	q.set(2,'April 3');
	qList.push(q);
	return qList;
})();

function init()
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
		console.log(questions);
	}

function Timer()
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
var x = JSON.stringify(questions[0]);
console.log(x);
//Timer();
