
const patternMatch = file = () => {
    let args = process.argv.slice([2]);
    //console.log(`${args}`);
    //console.log(args)
    let numberOfPatterns = args[0];
    let numberOfPaths = args[2]
    let patterns = [args[1]]
    let paths = [args[3]]
    //console.log(numberOfPatterns,numberOfPaths)
    //console.log("Patterns:",patterns,"Paths:",paths);

    for(let i = 0; i < paths.length; i++){
        noSlash = paths.toString().split('/').join('')
        console.log(noSlash);
    }
}

patternMatch("right now");


//console.log(calls.join("\n"));