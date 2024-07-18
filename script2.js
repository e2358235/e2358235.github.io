let message = "帰れ";

console.log(message);


let a=prompt("あなたの名前を教えてね");
const p = document.querySelector("p");
p.textContent = "ようこそ、"+a+"さん";
let PCnum=0;

function start(){
    PCnum=Math.round(Math.random()*10)
    let win = document.querySelector("win");
    win.textContent = "答えの数字が変更されました";
}

function numchange(Pnum){
    console.log(Pnum);
    let num = document.querySelector("num");
    let win = document.querySelector("win");

    num.textContent = Pnum;


    if(Pnum<PCnum){
        win.textContent = "これより大きい値が答え";
    }
    else if(Pnum>PCnum){
        win.textContent = "これより小さい値が答え";
    }
    else{
        win.textContent = "正解！！！";
    }

}

