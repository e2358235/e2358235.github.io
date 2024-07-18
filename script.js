let message = "帰れ";

console.log(message);

console.log(add(3,100));

let a=prompt("あなたの名前を教えてね");
const p = document.querySelector("p");
p.textContent = "ようこそ、"+a+"さん";

function buttonClick(player){
    console.log(player);
    let plh = document.querySelector("pl");
    let pch = document.querySelector("pc");
    let win = document.querySelector("win");

    pc=Math.round(Math.random()*3-0.5)

    if(player==3){
        plh.textContent = "あなたが出した手　→　ぐー";
    }
    else if(player==4){
        plh.textContent = "あなたが出した手　→　ちょき";
    }
    else if(player==5){
        plh.textContent = "あなたが出した手　→　ぱー";
    }

    if(pc==0){
        pch.textContent = "PCが出した手　→　ぐー";
    }
    else if(pc==1){
        pch.textContent = "PCが出した手　→　ちょき";
    }
    else if(pc==2){
        pch.textContent = "PCが出した手　→　ぱー";
    }

    if((player-pc)%3==0){
        win.textContent = "勝敗　→　あいこ";
    }
    else if((player-pc)%3==2){
        win.textContent = "勝敗　→　あなたの勝ち";
    }
    else{
        win.textContent = "勝敗　→　あなたの負け";
    }

}

