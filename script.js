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
img1.addEventListener("click", makeListner(1));
img2.addEventListener("click", makeListner(2));
img3.addEventListener("click", makeListner(3));
img4.addEventListener("click", makeListner(4));
img5.addEventListener("click", makeListner(5));
img6.addEventListener("click", makeListner(6));
img7.addEventListener("click", makeListner(7));
img8.addEventListener("click", makeListner(8));
img9.addEventListener("click", makeListner(9));
img10.addEventListener("click", makeListner(10));
img11.addEventListener("click", makeListner(11));
img12.addEventListener("click", makeListner(12));
img13.addEventListener("click", makeListner(13));
img14.addEventListener("click", makeListner(14));
img15.addEventListener("click", makeListner(15));
img16.addEventListener("click", makeListner(16));
var numCardClick=0;
let twoCards=[img1,img2];
var number=0;
var score=0;
var comparing= false;


cards= [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]
flippedCards= []

const cardGame = [[1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12],
                  [13, 14, 15, 16]];


function makeListner(num){
    return () => {
        if(flippedCards.indexOf(cards[num-1])==-1 && !comparing){
            score++;
            if (num>8){
                number=num-8;
            }else{
                number=num
            }
            if (cards[num-1].src== "http://127.0.0.1:5500/cards/img17.jpg"){
                cards[num-1].src= "cards/img"+number+".jpg";
                numCardClick++;
                if (numCardClick==1){
                    twoCards[0]=(num);
                }else if(numCardClick==2){
                    twoCards[1]=(num);
                    comparing=true;
                    setTimeout(compare, 378)
                }
                bool=false;
            }else{
                cards[num-1].src= "cards/img17.jpg";
                numCardClick--;
            }
        }
    }
}

function compare(){
    if (numCardClick==2){
        if (cards[twoCards[0]-1].src === cards[twoCards[1]-1].src){
            numCardClick=0; 
            flippedCards.push(cards[twoCards[0]-1])
            flippedCards.push(cards[twoCards[1]-1])
            console.log(flippedCards.length == 16)
            if (flippedCards.length==16){
                alert("You have won the game. Your score is "+ score);
            }
        }else{
            cards[twoCards[0]-1].src="cards/img17.jpg";
            cards[twoCards[1]-1].src="cards/img17.jpg";
            numCardClick=0; 
        }
    }
    comparing=false;
}







