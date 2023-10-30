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
// true means the card is not flipped (back side). False means its flipped
var1=true;
var2=true;
var3=true;
var4=true;
var5=true;
var6=true;
var7=true;
var8=true;
var9=true;
var10=true;
var11=true;
var12=true;
var13=true;
var14=true;
var15=true;
var16=true;
img1.addEventListener("click", makeListner(img1, 1, var1));
img2.addEventListener("click", makeListner(img2, 2, var2));
img3.addEventListener("click", makeListner(img3, 3, var3));
img4.addEventListener("click", makeListner(img4, 4, var4));
img5.addEventListener("click", makeListner(img5, 5, var5));
img6.addEventListener("click", makeListner(img6, 6, var6));
img7.addEventListener("click", makeListner(img7, 7, var7));
img8.addEventListener("click", makeListner(img8, 8, var8));
img9.addEventListener("click", makeListner(img9, 9, var9));
img10.addEventListener("click", makeListner(img10, 10, var10));
img11.addEventListener("click", makeListner(img11, 11, var11));
img12.addEventListener("click", makeListner(img12, 12, var12));
img13.addEventListener("click", makeListner(img13, 13, var13));
img14.addEventListener("click", makeListner(img14, 14, var14));
img15.addEventListener("click", makeListner(img15, 15, var15));
img16.addEventListener("click", makeListner(img16, 16, var16));
var numCardClick=0;
var FirstCard="";
var SecondCard= ""; 
var number;


const cardGame = [[1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12],
                  [13, 14, 15, 16]];
 
function makeListner(element, num, bool){
    return () => {
        if (num>8){
            number= (num-8);
        }else{
            number=num; 
        }
        console.log("clicked");
        if (bool==true){
            element.src= "cards/img"+number+".svg";
            numCardClick++;
            if (numCardClick==1){
                console.log("1) "+number);
                FirstCard=element;
            }else if(numCardClick==2){
                console.log("2) "+number)
                SecondCard=element;
                if(compare()){
                    bool=true;
                    
                }
            }
            bool=false;
        }else{
            element.src= "cards/img17.svg";
            numCardClick--;
            bool=true; 
        }
    }
}

function compare(){
    if (numCardClick==2){
        sleep(2000); 
        console.log("stuff happened");
        if (FirstCard.src == SecondCard.src){
            console.log("it matches");
            numCardClick=0; 
        }else{
            FirstCard.src="cards/img17.svg";
            SecondCard.src="cards/img17.svg";
            numCardClick=0; 
            return true;
        }
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }





