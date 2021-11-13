function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    string = string.toUpperCase();
    console.log(string);
}

function logWhisper(string){
    string = string.toLowerCase();
    console.log(string);
}

function sayHiToGrandma(string){
   const isLowerCase = string.toLowerCase();
   const isUpperCase = string.toUpperCase();
   if(string === isLowerCase){
       return "I can't hear you!";
   } else if(string === isUpperCase){
       return "YES INDEED!";
   } else if (string === "I love you, Grandma."){
       return "I love you, too.";
   }
}
