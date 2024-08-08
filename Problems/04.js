//Find the longest word in a sentence
//@input: "Russia is the largest countryh in the world"
//@OUTPUT: countryh
let sentence = "Russia is the largestznzmc countryh in the world"

function findLongestWord(sentence) {
    let words = sentence.split(' ');
    
    let longestWord = '';

    words.forEach(word => {
        if(word.length > longestWord.length){
            longestWord = word
        }
    });

    console.log(longestWord);
}



findLongestWord(sentence)