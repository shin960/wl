"use strict";

const unsei = ["大吉","吉","中吉","小吉","凶"];

document.querySelector("#btn").onclick = () => {
    const num = Math.ceil(Math.random()*10);
    // document.writeln(num);
    if(num === 1){
        document.querySelector("#msg").innerHTML = unsei[0];
    }else if(num === 2 || num === 3){
        document.querySelector("#msg").innerHTML = unsei[1];    
    }else if(num === 4 || num === 5 || num === 6 || num ===7){
        document.querySelector("#msg").innerHTML = unsei[2];   
    }else if(num === 8 || num === 9){
        document.querySelector("#msg").innerHTML = unsei[3];   
    }else{
        document.querySelector("#msg").innerHTML = unsei[4];   
    }
}
