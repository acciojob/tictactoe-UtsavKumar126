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
		message.textContent=p2+",you're up";
		turn=false;
		//event.removeEventListener("click",(event)=>{});
	}
	else{
		event.target.textContent="o";
		if(checkWin())message.textContent=p1+",congratulations you won!";
		message.textContent=p1+",you're up";
		turn=true;
		//event.removeEventListener("click",(event)=>{});
	}
}
function checkWin() {
	
}
