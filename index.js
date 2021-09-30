function findMatching(array, variable){
    const matchName = array.filter(element => element.toLowerCase() === variable.toLowerCase());
    return matchName;
}

function fuzzyMatch(array, variable){
    const matchLetters = array.filter(letters => letters.substring(0,2) === variable);
    return matchLetters;
}

function matchName(array, variable){
    return array.filter(element => element.name === variable)
}