const temperature = prompt("Введите значение температуры");

if ( temperature >= 30 ) {
    console.log("Можете надеть лёгкую одежду");
} else if ( temperature >= 20 ) {
    console.log("Одеть тёплую одежду");
} else if (temperature <= 10 ) {
    console.log("Одеть зимнюю одежду");
}