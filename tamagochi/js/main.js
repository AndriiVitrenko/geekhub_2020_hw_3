let food, clean, happiness, health, socialization, money;

function Element(id, value = 0) {
	return {
		id: id,
		value: value,
	}
}

function start() {
	food = new Element('food', Math.floor(Math.random()*100) >= 50 ? Math.round(Math.random()*100) : 50);
	clean = new Element('clean', Math.floor(Math.random()*100) >= 50 ? Math.round(Math.random()*100) : 50);
	happiness = new Element('happiness', Math.floor(Math.random()*100) >= 50 ? Math.round(Math.random()*100) : 50);
	health = new Element('health', Math.floor(Math.random()*100) >= 50 ? Math.round(Math.random()*100) : 50);
	socialization = new Element('socialization', Math.floor(Math.random()*100) >= 50 ? Math.round(Math.random()*100) : 50);
	money = new Element('money', Math.floor(Math.random()*100) >= 50 ? Math.round(Math.random()*100) : 50);

	checker(food)
	checker(clean)
	checker(happiness)
	checker(health)
	checker(socialization)
	checker(money)
	
	listenersSetter()
	intervalSetter()
}

function checker(elem) {
	if (elem.value <= 0) {
		elem.value = 0
		alert('Game over!')
		listenersRemover()
		intervalRemover()
	}
	else if (elem.value >= 100) {
		elem.value = 100
	}
	
	$(`#${elem.id} .progress`).attr('data-pct', elem.value)
	$(`#${elem.id} circle`).css('stroke-dashoffset', (100 - elem.value)*3.14)
	
}

function listenersSetter() {
	$('#feed').on('click', eat);
	$('#buy_food').on('click', food1);
	$('#wash').on('click', wash);
	$('#play').on('click', play);
	$('#doctor').on('click', doctor);
	$('#bar').on('click', bar);
	$('#work').on('click', work);
	$('#business').on('click', business);
}

function listenersRemover() {
	$('#feed').off('click', eat);
	$('#buy_food').off('click', food1);
	$('#wash').off('click', wash);
	$('#play').off('click', play);
	$('#doctor').off('click', doctor);
	$('#bar').off('click', bar);
	$('#work').off('click', work);
	$('#business').off('click', business);
}

function intervalSetter () {
	window.generalInterval = setInterval(() => {
		food.value -= 3; checker(food);
		clean.value -= 3; checker(clean)
		happiness.value -= 3; checker(happiness)
		health.value -= 3; checker(health)
		socialization.value -= 3; checker(socialization)
		money.value -= 3; checker(money)
	}, 5000);
}

function intervalRemover() {
	clearInterval(generalInterval)
}

//-------------actions--------------

function eat() {
	food.value += 30;
	clean.value -= 20;

	checker(food)
	checker(clean)
}

function wash() {
	clean.value += 40;
	happiness.value -= 20;

	checker(clean)
	checker(happiness)
}

function play() {
	happiness.value += 15;
	food.value -= 10;

	checker(food)
	checker(happiness)
}

function doctor() {
	health.value += 30;
	money.value -= 20;

	checker(health)
	checker(money)
}

function bar() {
	socialization.value += 40;
	food.value += 10;
	health.value -= 10;
	money.value -= 20;

	checker(socialization)
	checker(food)
	checker(health)
	checker(money)
}

function work() {
	money.value += 50;
	food.value -= 10;
	health.value -= 10;
	socialization.value -= 20;

	checker(money)
	checker(food)
	checker(health)
	checker(socialization)
}

function food1() {
	food.value += 20;
	money.value -= 20;

	checker(food)
	checker(money)
}

function business() {
	money.value += 80;
	happiness.value += 85;
	health.value -= 95;
	socialization.value += 20;

	checker(money)
	checker(happiness)
	checker(health)
	checker(socialization)
}