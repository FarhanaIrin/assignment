
function radianToDegree(radian)
{
    const pi= 3.1416;
    let degree = radian * (180/pi);
    return degree.toFixed(2);
}

let rad = 10;
radianToDegree(rad);
//console.log();
