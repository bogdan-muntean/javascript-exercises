function romantoInteger(x) {
    const map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let sum = 0;
    x.split('').forEach((numar, i) => {
        if(Map[numar] < Map[x[i + 1]]) sum -= Map[numar];
        else sum += Map[numar];
    });
}
console.log(romantoInteger("III"));