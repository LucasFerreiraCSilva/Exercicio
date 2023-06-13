let num = prompt("Insira um número: ");
let isPrime = true;

if (num === 1) {
    console.log("1 não é um número primo.");
} else if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num + " é um número primo.");
    } else {
        console.log(num + " não é um número primo.");
    }
} else {
    console.log("O número inserido não é válido.");
}