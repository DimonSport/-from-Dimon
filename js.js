var randomLoc = Math.floor(Math.random() * 5);
var location2 = randomLoc;
var location3 = location2 + 1;
var location4 = location3 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Это мини игра морской бой :) Ты готов выстрелить? В ячейках расположен 3-ёх палубный корабль врага. Потопи его за меньшее кол-во попыток. Огонь! (введи число 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Введи валидное значение 0-6");
	} else {
		guesses = guesses + 1;
		if (guess == location2 || guess == location3 || guess == location4) {
			alert("Попал");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Ты победил в игре!");
			}
		} else {
			alert("Мимо");
		}
	}
}

var stats = "Ты справился за " + guesses + " попыток. Твоя точность равна " + (3 / guesses);
alert(stats);
