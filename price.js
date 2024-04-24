const price = 5000;

if (price >= 5000) {
    const discount = price * 12 / 100;
    const payableAmount = price - discount;
    console.log(payableAmount);
}
else if (price >= 3000) {
    const discount = price * 5 / 100;
    const payableAmount = price - discount;
    console.log(payableAmount);
}
else {
    console.log(price);
}