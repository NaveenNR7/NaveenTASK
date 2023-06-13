let text=""
let tex=""
let text1=""
let i=0;
let j=0;
let k=0;
for(i=0;i<10;i++)
{
    text+= "the number is" +i+ "<br>"
}
document.getElementById("a").innerHTML=text;

console.log(tex)
while(j < 10)
{
    tex += " "   + j;"<br>"+"<br>" +j++; 
}
document.getElementById("b").innerHTML=tex;
 
do  {
    text1 += ""+"<br>"+ +k;+"<br>"+ +k++
}
    while(k < 10)
document.getElementById("c").innerHTML= text1;

