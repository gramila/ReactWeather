function addPromise (a, b){
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        } else{
            reject("one of the inputs is not a number");
        }
    });
}
var a = 3
addPromise(5, a).then(function(sum){
    console.log('success:', sum);
}, function(err){
    console.log('error:', err);
});