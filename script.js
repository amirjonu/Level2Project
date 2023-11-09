const img1= document.getElementById("image1");
const img2= document.getElementById("image2");
const img3= document.getElementById("image3");
const img4= document.getElementById("image4");
const img5= document.getElementById("image5");
const img6= document.getElementById("image6");
const img7= document.getElementById("image7");
const img8= document.getElementById("image8");
const img9= document.getElementById("image9");
const img10= document.getElementById("image10");
const img11= document.getElementById("image11");
const img12= document.getElementById("image12");
const img13= document.getElementById("image13");
const img14= document.getElementById("image14");
const img15= document.getElementById("image15");
const img16= document.getElementById("image16");
const resetButton= document.getElementById("reset");
const scoreUpdate= document.getElementById("score");
ran=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
var randomNumber=0
for (let i = ran.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ran[i], ran[j]] = [ran[j], ran[i]];
}
cards= [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]
for (let i =0; i<ran.length; i++){
    if (ran[i]==1){
        cards[i]=img1;
    }else if(ran[i]==2){
        cards[i]=img2;
    }else if(ran[i]==3){
        cards[i]=img3;
    }else if(ran[i]==4){
        cards[i]=img4;
    }else if(ran[i]==5){
        cards[i]=img5;
    }else if(ran[i]==6){
        cards[i]=img6;  
    }else if(ran[i]==7){
        cards[i]=img7;
    }else if(ran[i]==8){
        cards[i]=img8;
    }else if(ran[i]==9){
        cards[i]=img9;
    }else if(ran[i]==10){
        cards[i]=img10;
    }else if(ran[i]==11){
        cards[i]=img11;
    }else if(ran[i]==12){
        cards[i]=img12;
    }else if(ran[i]==13){
        cards[i]=img13;
    }else if(ran[i]==14){
        cards[i]=img14;
    }else if(ran[i]==15){
        cards[i]=img15;
    }else{
        cards[i]=img16;
    }
}

cards2= [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]

img1.addEventListener("click", makeListner(ran[0]));
img2.addEventListener("click", makeListner(ran[1]));
img3.addEventListener("click", makeListner(ran[2]));
img4.addEventListener("click", makeListner(ran[3]));
img5.addEventListener("click", makeListner(ran[4]));
img6.addEventListener("click", makeListner(ran[5]));
img7.addEventListener("click", makeListner(ran[6]));
img8.addEventListener("click", makeListner(ran[7]));
img9.addEventListener("click", makeListner(ran[8]));
img10.addEventListener("click", makeListner(ran[9]));
img11.addEventListener("click", makeListner(ran[10]));
img12.addEventListener("click", makeListner(ran[11]));
img13.addEventListener("click", makeListner(ran[12]));
img14.addEventListener("click", makeListner(ran[13]));
img15.addEventListener("click", makeListner(ran[14]));
img16.addEventListener("click", makeListner(ran[15]));
var numCardClick=0;
let twoCards=[-1,-1];
var number=0;
var score=0;
var comparing= false;
flippedCards= []


resetButton.addEventListener("click", ()=>{
    location.reload();
})




function makeListner(num){
    return () => {
        if(flippedCards.indexOf(cards2[ran.indexOf(num)])==-1 && !comparing && ran[ran.indexOf(num)] != ran[twoCards[0]]){
            score++;
            scoreUpdate.innerHTML= "Score: "+ score;
            if (num>8){
                number=num-8;
            }else{
                number=num
            }
                cards2[ran.indexOf(num)].src= "cards/img"+number+".jpg";
                numCardClick++;
                if (numCardClick==1){
                    twoCards[0]=ran.indexOf(num);
                }else if(numCardClick==2){
                    twoCards[1]=ran.indexOf(num);
                    comparing=true;
                    setTimeout(compare, 378)
                }
                bool=false;
        
        }
    }
}

function compare(){
    if (numCardClick==2){
        if (cards2[twoCards[0]].src === cards2[twoCards[1]].src){
            numCardClick=0; 
            flippedCards.push(cards2[twoCards[0]])
            flippedCards.push(cards2[twoCards[1]])
            if (flippedCards.length==16){
                alert("You have won the game. Your score is "+ score);
            }
            twoCards=[-1,-1];
        }else{
            cards2[twoCards[0]].src="cards/img17.jpg";
            cards2[twoCards[1]].src="cards/img17.jpg";
            twoCards=[-1,-1];
            numCardClick=0; 
        }
    }
    comparing=false;
}