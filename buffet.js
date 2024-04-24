const age = 8;
const price = 990;

if (age < 5) {
    console.log("Your baby can eat free of cost");
}
else if (age >= 7 && age <= 10) {
    const discount = price * 50 / 100;
    const payableAmount = price - discount;
    console.log("You have to pay", payableAmount, "Tk for your baby");
}
else if (age >= 10 && age <= 60) {
    console.log("You can't get any discount");
}
else if (age >= 60) {
    const discount = price * 30 / 100;
    const payableAmount = price - discount;
    console.log(payableAmount);
}
else {
    console.log(price);
}