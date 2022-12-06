let solution = (s) => {    
    let highestChar = null;
    let highestCount = 0;

    const hashTable = {};

    for (let i  = 0; i < s.length; i++) {
        const char = s[i];
        if(!(/[a-zA-Z]/.test(char))) continue;


        hashTable[char] = (hashTable[char] || 0) + 1;


        if (hashTable[char] > highestCount) {
            highestCount = hashTable[char];
            highestChar = char;
        }

    }

   

    return hashTable;
};





const string = "ADQDWFGET#@RESadfasdqwee@#3564642DDasdfBBbbbbb";
const output = solution(string);


console.log(output);