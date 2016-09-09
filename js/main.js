"use strict"
// function ucFirst(argum){

// 	var firstLater = argum.charAt(0);
// 	var UpperArgum = firstLater.toUpperCase() + argum.slice(1);
// 	return UpperArgum;
// }
// console.log(ucFirst('loo'));



// function extractCurrencyValue(str){
// 	return str.slice(1);
// }

// console.log(extractCurrencyValue("$129"));

// 

// var schedule = {};
// schedule.name = "ghj";

// function isEmpty(obj){
// 	for(var i in obj){
// 		return false;
// 	}
// 	return true;
// }
// console.log(isEmpty(schedule));


// var zp = {
// 	"Вася": 200,
// 	"Коля": 300,
// 	"Оля": 400,
// 	"title": "My menu"
// }

// function salaries(obj){

// 	var result = 0;
// 	for(var key in obj){

// 		result +=(obj[key]);
// 	}
// 	return result;
// }

// console.log(salaries(zp));




// function multiplyNumeric(obj){
// 	var result = [];
// 	for(var key in obj){
// 		var result1 = obj[key] + obj[key]
// 		result.push(result1);
// 	}
// 	return result;
// }
// console.log(multiplyNumeric(zp));

// var goods = ["Яблоко", "Груша", "Слива"];
// goods[goods.length] = 'Компьютер'
// var lastElem = goods.push('абрекос');
// console.log(goods);
// console.log(goods[goods.length-1]);


// var styles= ['Джаз', 'Блюз'];
// styles.push('Рок-н-Ролл');
// var result = styles[styles.length-2] = 'Классика'
// console.log(styles.shift(0));
// console.log(styles.unshift('Рэп', 'Регги'));
// console.log(styles);
// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// var rand = Math.floor(Math.random() * arr.length);


// alert(arr[rand]);

// var test = prompt('Введиет первое число', 'Например 12');
// var test1 = prompt('Введиет первое число', 'Например 12');
// var pars = parseInt(test);
// var pars1 = parseInt(test1);
// // alert(typeof(test)); 
// alert(pars + pars1);
// var result = 0;
// var number =  prompt('2+2');

// if(number == 4){
// 	alert('Верно');
// 	result++;
// 	console.log(result)
// }
// else{
// 	alert('Не верно');
// }


// var	number1 = prompt('4+4');

// if(number1 == 8){
// 	alert('Верно');
// 	result++;
// 	console.log(result)
// }
// else{
// 	alert('Не верно');
// }


// var	number2 = prompt('8+8');

// if(number2 == 16){
// 	alert('Верно');
// 	result++;
// 	console.log(result)
// }
// else{
// 	alert('Не верно');
// }

// alert('Верных ответов:' + result);

// var corner = parseInt(prompt('Введите угол'));

// if((corner < 80) && (corner > 65)){
// 	alert('Вы попали на в первую мишень!!!');
// }
// else if((corner < 65) && (corner > 25)){
// 	alert('Вы попали во вторую мишень!!!');
// }
// else{
// 	alert('Вы лузер');
// }

// var n = 0;
// do{
// 	if((Math.random() * 6) < 1){
// 		alert('Убыт');
// 		break;
// 	}
// 	n++;
// }
// while(prompt('1 - играем, другое - нет'));
// alert('было сыграно:' + n + 'раундов');

// var questionSum = parseInt(prompt('Введите сумму')),
// 	questionPercent = parseInt(prompt('Введите процент')),
// 	questionYear = parseInt(prompt('Введите год')),
// 	resultAll = 0;

// 	for(var i = 1; i <= questionYear; i++){
// 		var result = ((questionPercent / 100) * questionSum) + questionSum;
// 		resultAll = resultAll + result;
// 		alert('Через ' + i + ' года: ' + resultAll);
// 	}

// var arr = [],
// 	rounds = 100,
// 	min = -1,
// 	max = 1,
// 	zerous = 0,
// 	red = 0,
// 	black = 0,
// 	i = 0;

// for(i = 0; i < rounds; i++) {
// 	arr.push(Math.round(min + Math.random() * (max - min)));
// }

// alert(arr);

// for(i = 0; i < arr.length; i++){
// 	if(arr[i] == 0){
// 		var length = 0,
// 			max_length = 0;
// 		while(i < arr.length && arr[i] == 0) {
// 			i++;
// 			length++;
// 		}
// 		if(length > max_length ){
// 			max_length = length;
// 		}
// 	}
// }

// alert(max_length);

// function getRandomInt(min, max){
// 	return Math.floor(Math.random()*(max - min + 1)) + min;
// }
// function getCard(){
// 	var cards = ['6','7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// 	return cards[getRandomInt(0, cards.length-1)];
// }
// function getSum(arr){
// 	var result = 0;
// 	for(var i = 0; i < arr.length; i++){
// 		var card = arr[i];
// 		if(card != 'A'){
// 			if(arr[i] == 'J' || arr[i] == 'Q' || arr[i] == 'K'){
// 				result += 10;
// 			}
// 			else{
// 				result += parseInt(arr[i]);
// 			}
// 		}

// 	}

// 	for(var i = 0; i < arr.length; i++){
// 		var card = arr[i];
// 		if(card == 'A'){
// 			if(result > 10){
// 				result += 1;
// 			}
// 			else{
// 				result += 11;
// 			}
// 		}

// 	}
// 	return result;
// }

// function getStatus(){
// 	return 'Дилер: ' + dealer.join(' ') + ' Игрок: ' + player.join(' ') + '.';
// }

// var dealer = [getCard()],
// 	player = [getCard(), getCard()],
// 	answer = '';


// if(getSum(player) == 21){
// 	alert('Дьявольское везение! Black Jack на раздаче! $_$');
// }
// else{
// 	do {
// 		answer = prompt(getStatus() + 'Хотите еще карту? 1 - да, иначе - нет');
// 		var sum = 0;
// 		if(answer == '1'){
// 			player.push(getCard());

// 			sum = getSum(player);
// 			if(result > 21){
// 				alert('Перебор T_T' + getStatus());
// 				break;
// 			}
// 			else if(sum == 21){
// 				alert('Black Jack! :P' + getStatus());
// 				break;
// 			}
// 		}
// 		else{
// 			while(getSum(dealer) < 17){
// 				dealer.push(getCard());
// 			}

// 			var sumDealer = getSum(dealer);
// 			var sumPlayer = getSum(player);

// 			if(sumDealer == 21){
// 				alert('Дилер выиграл' + getStatus());
// 			}
// 			else if(sumDealer > 21){
// 				alert('У дилер перебор' + getStatus());
// 			}
// 			else if(sumPlayer == sumDealer){
// 				alert('Ничья' + getStatus());
// 			}
// 			else if(sumPlayer > sumDealer){
// 				alert('Выигрыш' + getStatus());
// 			}
// 			else{
// 				alert('Проигрыш' + getStatus());
// 			}
// 		}
// 	} 
// 	while(answer == '1');
// }



//_______________________________________lessons 3______________________________

// var number = 0,
// 	number2 = 0,
// 	first;

// function removeClass(){

// 	first = document.getElementById('list').children;

// 	for(var i = 0; i < first.length; i++){
// 		first[i].classList.remove("active");
// 	}
// }

// element1.onclick = function() {

// 	removeClass();

// 	first = document.getElementById('list').firstElementChild.classList.add('active');
// }

// element2.onclick = function() {
// 	removeClass();
// 	first = document.getElementById('list').lastElementChild.classList.add('active');

	
// }

// element3.onclick = function() {

// 	removeClass();

// 	first[number].classList.add('active');
// 	number2 = number;
// 	number++;


	
	
// 	console.log(number);
// 	console.log(number2);
// 	if(first[number] == undefined){
// 		number = 0;
// 	}
	
// }
// element4.onclick = function() {

// 	removeClass();

// 	// .previousElementSibling
// 	first[number2].classList.add('active');
// 	number = number2;
// 	number2--;
	
// 	console.log(number2);


// 	if(first[number2] == undefined){
// 		number2 = first.length-1;
// 	}
	
// }
// var div;
// element5.onclick = function(){
// 	div = document.createElement('p');
// 	div.innerHTML = 'New element';
// 	list.appendChild(div);
// }
// element7.onclick = function(){
// 	div = document.createElement('p');
// 	div.innerHTML = 'New element';
// 	list.insertBefore(div, list.firstElementChild);
// }
// element6.onclick = function(){
// 	var d = document.getElementById('list').lastElementChild;
// 	list.removeChild(d);
// }


//_______________________________________lessons 4______________________________




// var timeInterval = 1000;
// var time = 0;
// var myVar;


// function clerTimer(){
// 	clearInterval(myVar);
// 	time = 0;
// 	document.getElementById("d").innerHTML = time + 'сек';
// }

// function startTimer(){
// 	myVar = setInterval(function(){
// 		if(time != 30){
// 			time ++;
// 		}
// 		document.getElementById("d").innerHTML = time + 'сек';
// 	}, timeInterval);
    
// }

// function stopTimer(){
// 	clearInterval(myVar);
// }


//____________________________

var obj = {
  className: 'open menu'
}
// var test = Object.keys(obj);
var test = obj.className = test;

console.log(test);









