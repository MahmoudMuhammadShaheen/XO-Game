let turn = "X";
let title = document.querySelector(".name");

let squers = [];


function end(num1,num2,num3) {
    title.innerHTML = `${squers[num1]} winner`
    setInterval(function(){title.innerHTML+=".";},1000);
    setTimeout(function(){location.reload()},4000)
}

function winner() {
    for(let i = 1 ; i < 10; i++)
    {
        squers[i] = document.getElementById("item-"+i).innerHTML;
    }

    if(squers[1] === squers[2] && squers[2] === squers[3] && squers[1] !="")  {
        end(1,2,3);

    }
    else if (squers[4] === squers[5] && squers[5] === squers[6] && squers[4] !=""){
        end(4,5,6);
    }

    else if (squers[7] === squers[8] && squers[8] === squers[9] && squers[8] !=""){
        end(7,8,9);
    }

    else if (squers[1] === squers[4] && squers[4] === squers[7] && squers[4] !=""){
        end(1,4,7);
    }   

    else if (squers[2] === squers[5] && squers[5] === squers[8] && squers[5] !=""){
        end(2,5,8);
    }

    else if (squers[3] === squers[6] && squers[6] === squers[9] && squers[6] !=""){
        end(3,6,9)
    }

    else if (squers[1] === squers[5] && squers[5] === squers[9] && squers[5] !=""){
        end(1,5,9);
    }

    else if (squers[3] === squers[5] && squers[5] === squers[7] && squers[5] !=""){
        end(3,5,7);
    }
}


function game(id){ 
    
    let elment = document.getElementById(id);

    if (turn === "X" && elment.innerHTML ==="") {
        elment.innerHTML ="X";

        elment.classList.add("cliked-one")

        title.innerHTML = "O";

        turn = "O";

    }else if(turn === "O" && elment.innerHTML === "") {
        elment.innerHTML ="O";

        elment.classList.add("cliked-two");

        turn = "X";
        title.innerHTML="X";
    }
    winner();
}