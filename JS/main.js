
let BtnP= document.getElementById('fontBtnplus');

var pow=20;
BtnP.onclick=function(){
    let sizeP = document.getElementsByTagName('p');
    for(let i=0;i<sizeP.length;i++)
    {
        sizeP[i].style.fontSize= (pow+2)+"px";
        pow++;
    }
}

let BtnM= document.getElementById('fontBtnminus');

BtnM.onclick=function(){
    let sizeP = document.getElementsByTagName('p');
    for(let i=0;i<sizeP.length;i++)
    {
        sizeP[i].style.fontSize= (pow-2)+"px";
        pow--;
    }
}
