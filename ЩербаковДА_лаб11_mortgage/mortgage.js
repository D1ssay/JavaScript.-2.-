export const mortgage = (S, p , n) => {
    let m = p/100/12;
    let col = n*12;
    let ret = S * (m* Math.pow(1 + m, col))/ (Math.pow(1 + m, col) - 1);
   
    return Math.round(ret * 100) / 100;
}

export const overpayment = (S, p, n) => {
    return  n * 12 *mortgage(S, p, n) - S;
}