
//shout recieves one argument and returns it in all caps
function shout (string){
    return string.toUpperCase();
}

//whisper recieves one argument and returns it in all lowercase
function whisper (string){
    return string.toLowerCase();
}

//logShout takes a string argument and logs it in all caps using console.log()
function logShout(string){
    console.log(shout(string));
}

//logWhisper takes a string argument and logs it in all lowercase using console.log()
function logWhisper(string){
    console.log(whisper(string));
}

//returns different answers depending on string
/* 5) returns "I can't hear you!" if `string` is lowercase
    6) returns "YES INDEED!" if `string` is uppercase
    7) returns "I would love to!" if `string` is "Let's have dinner together!"
    */

function sayHiToHeadphonedRoommate(string){
    if (string == shout(string)){
        return ("YES INDEED!");
    }if(string == whisper(string)){
        return ("I can't hear you!");
    }if(string == "Let's have dinner together!"){
        return ("I would love to!");
    }
}