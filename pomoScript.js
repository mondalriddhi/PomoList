var wmin=document.getElementsByClassName('w_min')[0];
var wsec=document.getElementsByClassName('w_sec')[0];
var bmin=document.getElementsByClassName('b_min')[0];
var bsec=document.getElementsByClassName('b_sec')[0];
var start=document.getElementById('start');
var pause=document.getElementById('pause');
var reset=document.getElementById('reset');

var startTimer;
start.addEventListener('click', function() {
    if(startTimer===undefined) {
        startTimer=setInterval(Timer, 1000);
    }
    else{
        alert("timer is already running!");
    }
})

pause.addEventListener('click', function() {
    clearInterval(startTimer);
    startTimer=undefined;
})

reset.addEventListener('click', function() {
    clearInterval(startTimer);
    wsec.innerText='00';
    wmin.innerText=25;
    bsec.innerText='00';
    bmin.innerText=5;
    startTimer=undefined;
    document.getElementsByClassName('counter')[0]=0;
})

function Timer() {
    if(wsec.innerText!=0) {
        wsec.innerText--;
    }
    else if(wmin.innerText!=0 && wsec.innerText==0) {
        wsec.innerText=59;
        wmin.innerText--;   
    }
    if(wmin.innerText==0 && wsec.innerText==0) {
        if(bsec.innerText!=0 ) {
            bsec.innerText--;
        }
        else if (bsec.innerText==0 && bmin.innerText!=0) {
            bsec.innerText=59;
            bmin.innerText--;
        }
    }
    if(bsec.innerText==0 && bmin.innerText==0 && wmin.innerText==0 && bsec.innerText==0) {
        document.getElementsByClassName('counter')[0].innerText++;
        bsec.innerText='00';
        bmin.innerText=5;
        wmin.innerText=25;
        wsec.innerText='00';
    }
}

// todo logic

let inputs=document.getElementById('inp')
let text=document.querySelector('.text');
function Add() {
    if(inputs.value=="") {
        alert('Enter task to add');
    }
    else {
        let newElement=document.createElement('ul');
        newElement.innerHTML=`${inputs.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newElement);
        inputs.value='';
        newElement.querySelector('i').addEventListener('click', remove);
        function remove() {
            newElement.remove();
        }
    }
}
