//your JS code here. If required.
const btn=document.getElementById("submit");
let turn=true;
let p1="";
let p2="";
const message=document.getElementsByClassName("message")[0];
btn.addEventListener("click",()=>{
	const first=document.getElementById("first");
	first.style.display="none";
	const second=document.getElementById("second");
	second.style.display="grid";
	message.style.display="flex";
    p1=document.getElementById("player1").value;
    p2=document.getElementById("player2").value;
	message.textContent=p1+", you're up"
})
console.log(p1);
console.log(p2);
const box=document.getElementsByClassName("board");
for(let i=0;i<box.length;i++){
	box[i].addEventListener("click",(event)=>{
		event.preventDefault();
		mark(event);
	})
}
function mark(event) {
	if(turn==true){
		event.target.textContent="x";
		if(checkWin(true)){
			message.textContent=p1+" congratulations you won!";
			return;
		}
		message.textContent=p2+", you're up";
		turn=false;
		//event.removeEventListener("click",(event)=>{});
	}
	else{
		event.target.textContent="o";
		if(checkWin(false)){
			message.textContent=p2+" congratulations you won!";
			return;
		}
		message.textContent=p1+", you're up";
		turn=true;
		//event.removeEventListener("click",(event)=>{});
	}
}
    const div1=document.getElementById("1")
	const div2=document.getElementById("2")
	const div3=document.getElementById("3")
	const div4=document.getElementById("4")
	const div5=document.getElementById("5")
	const div6=document.getElementById("6")
	const div7=document.getElementById("7")
	const div8=document.getElementById("8")
	const div9=document.getElementById("9")
function checkWin(player) {
	if(player){
		if(div1.textContent==='x'&&div2.textContent==='x'&&div3.textContent==='x')return true;
		else if(div1.textContent=='x'&&div4.textContent=='x'&&div7.textContent=='x')return true;
		else if(div3.textContent=='x'&&div6.textContent=='x'&&div9.textContent=='x')return true;
		else if(div7.textContent=='x'&&div8.textContent=='x'&&div9.textContent=='x')return true;
		else if(div1.textContent=='x'&&div5.textContent=='x'&&div9.textContent=='x')return true;
		else if(div3.textContent=='x'&&div5.textContent=='x'&&div7.textContent=='x')return true;
		else if(div4.textContent=='x'&&div5.textContent=='x'&&div6.textContent=='x')return true;
		else if(div2.textContent=='x'&&div5.textContent=='x'&&div8.textContent=='x')return true;
	}
	else{
		if(div1.textContent=='o'&&div2.textContent=='o'&&div3.textContent=='o')return true;
		else if(div1.textContent=='o'&&div4.textContent=='o'&&div7.textContent=='o')return true;
		else if(div3.textContent=='o'&&div6.textContent=='o'&&div9.textContent=='o')return true;
		else if(div7.textContent=='o'&&div8.textContent=='o'&&div9.textContent=='o')return true;
		else if(div1.textContent=='o'&&div5.textContent=='o'&&div9.textContent=='o')return true;
		else if(div3.textContent=='o'&&div5.textContent=='o'&&div7.textContent=='o')return true;
		else if(div4.textContent=='o'&&div5.textContent=='o'&&div6.textContent=='o')return true;
		else if(div2.textContent=='o'&&div5.textContent=='o'&&div8.textContent=='o')return true;
	}
	return false;
}
