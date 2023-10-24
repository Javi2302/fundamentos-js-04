// Escribe tu código aquí:
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
}

for (const prop in car) {
    console.log(`${prop}: ${car[prop]}`)
}
