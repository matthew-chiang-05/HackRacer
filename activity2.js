//Activity 2:
/*
Create an asynchronous function where someone gets to a typing speed of 80 wpm if they practice
*/


//defines function
//method header
const improveTyping = async (didPrac) => {
    //returns promise object
    return new Promise((resolve, reject) => {
        //waits 2000 ms or 2 seconds before resolving promise
        setTimeout(() => {
            //resolves: if didPrac is True, return 80 by value
            if (didPrac) {
                resolve(80);
        }
            //resolves: if didPrac is False, raises error
            else {
                reject(new Error("Too slow!"));
            }
        }, 2000);
    });
}

//calls function
improveTyping(true)
    .then((result) => {
        //prints result given by resolve
        console.log('I have a typing speed of ${result} wpm!');
    })
        //prints error given by reject
    .catch((error) => {
        console.log(error);
    })