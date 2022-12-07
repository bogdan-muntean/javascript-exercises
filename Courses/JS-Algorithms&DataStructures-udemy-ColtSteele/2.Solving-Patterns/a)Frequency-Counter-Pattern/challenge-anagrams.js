function checkTheAnagram(string, test){
    //input: string; output: boolean; Putem folosi 2 obiecte care la final ne asteptam sa fie egale
    let stringObject = {};
    if(string.length !== test.length){
        return false;
    }
    
    Array.from(string).forEach(element => {
        stringObject[element] = (stringObject[element] || 0)  + 1;
    });   
    Array.from(test).forEach(letter => {
        if(!stringObject[letter]){
            return false
        } else {
            stringObject[letter]--;
        }
    });
    return true;
}

console.log(checkTheAnagram("cinema","iceman"))
console.log(checkTheAnagram("wrong","test"))
console.log(checkTheAnagram("wrong","fs"))
        // for(let i = 0; i < string.length; i++){
        //     stringObject[string[i]] = (stringObject[string[i]] || 0)  + 1;
        // }
        // for(let i = 0; i < test.length; i++){
        //     testObject[test[i]] = (testObject[test[i]] || 0)  + 1;
        // }
        // for(let i = 0; i < string.length; i++){
        //     stringObject[string[i]] ? ++stringObject[string[i]] : stringObject[string[i]] = 1;
        // }
        // for(let i = 0; i < test.length; i++){
        //     testObject[test[i]] ? ++testObject[test[i]] : testObject[test[i]] = 1;
        // }