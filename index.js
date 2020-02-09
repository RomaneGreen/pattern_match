
const patternMatch = file = () => {
    const args = process.argv.slice([2]);
    console.log(`Lets pattern match ${args}`);
}

patternMatch("right now");