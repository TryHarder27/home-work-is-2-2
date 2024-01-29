let temperature = prompt("Введите температуру:");

if (temperature > 30) {
    console.log("Вы можете надеть легкую одежду.");
} else if (temperature > 20) {
    console.log("Нужно надеть теплую одежду.");
} else if (temperature <= 20) {
    console.log("Сегодня холодно и нужно надевать зимнюю одежду.");
}