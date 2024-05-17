numb = Math.floor(Math.random()*100)+1;
i = 0;
console.log(numb);   
while(i<5){
    guess = parseInt(prompt("Guess The Number (1 to 100) "));
    if(guess<numb){
        alert("The Number Is Higher Than You Guess!!");
    }  
    else if(guess>numb){
        alert("The Number Is Lower Than You Guess!!");
    }
    else{
        alert("Hurray You Guessed The Right Number!!");
        i = 6;
    }
    i++;
}
console.log(i);
if(i!=7){
    alert("Sorry Your 5 Chances Are Completed");
}