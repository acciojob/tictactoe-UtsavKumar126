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
		if(checkWin())message.textContent=p1+",congratulations you won!";
		message.textContent=p2+", you're up";
		turn=false;
		//event.removeEventListener("click",(event)=>{});
	}
	else{
		event.target.textContent="o";
		if(checkWin())message.textContent=p1+",congratulations you won!";
		message.textContent=p1+", you're up";
		turn=true;
		//event.removeEventListener("click",(event)=>{});
	}
}
function checkWin() {
	const div1=document.getElementById("1")
	const div2=document.getElementById("2")
	const div3=document.getElementById("3")
	const div4=document.getElementById("4")
	const div5=document.getElementById("5")
	const div6=document.getElementById("6")
	const div7=document.getElementById("7")
	const div8=document.getElementById("8")
	const div9=document.getElementById("9")	
}
