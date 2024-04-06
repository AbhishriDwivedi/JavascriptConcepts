let add = function addTwoNumbers(a,b)
{
    // console.log(arguments);
    let sum = 0;
    for(let key of arguments)
        sum += key;
    return sum; 
}
