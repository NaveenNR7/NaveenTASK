total=0 
function Sum (...args){
    return args.reduce((total,args)=>total+args);
}
console.log(Sum(10,2))
