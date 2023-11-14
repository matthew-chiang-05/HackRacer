//Activity 1:
/*
Create an array of random sentences. 
Then use a function to loop through the array to modify it by either adding or removing sentences.
Keep a count of how many sentences were modified and return that value.
*/

let sent = ["Hi!", "My name is Matthew.", "What's up!", "How was your day?"];
let sentA = ['keep', 'remove', 'add', 'keep'];
let sentAdd = ['YOOOOO'];
function modify(sentences, sentenceActions, sentenceAdditions) {
    let count = 0;
    let x = 0
    for (let i = 0; i < sentenceActions.length; i++) {
        if (sentenceActions[i] == 'keep') {
            continue;
        }
        else if (sentenceActions[i] == 'remove') {
            sentences.splice(i + x, 1)
            count++
            i--
        } 
        else {
            sentences.splice(i, 0, sentenceAdditions[x])
            count++
            i++
            x++
        }
    }
    return sentences
}

