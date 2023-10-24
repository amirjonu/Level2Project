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



const cardGame = [[img1, img2, img3, img4],
                  [img5, img6, img7, img8],
                  [img9, img10, img11, img12],
                  [img13, img14, img15, img16]];
 
function makeListner(element, number, bool){
    return () => {
        if (bool=true){
            element.src= "images/img"+number;
            numCardClick++;
            if (numCardClick==1){
                FirstCard=element;
            }else if(numCardClick==2){
                SecondCard==element;
            }
            bool=false;
        }else{
            element.src= "images/face";
            numCardClick--;
            bool=true; 
        }
        if (numCardClick==2){
            
        }
    }
}





