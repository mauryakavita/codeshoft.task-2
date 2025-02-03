

function dis(value) {
    document.getElementById("answer").value += value

}

function solve() {
    let a = document.getElementById("answer").value
    let c = eval(a)
    document.getElementById("answer").value = c
}


//let mode = prompt("Enter mode 'dark' or 'light':");
let body = document.querySelector("body")

let btn = document.querySelector(".buttons");
let md = document.querySelector("#mode");

// md.ondblclick = () => {

//     body.style.backgroundColor = "rgb(248, 76, 133)";
//     btn.style.boxShadow = " 0 0 1rem black";
// } or
// // let md=document.getElementById("mode");

// md.addEventListener('click',
//     function () {
//         body.style.backgroundColor = "black";
//         btn.style.boxShadow = " 0 0 1rem silver";
//     }
// );

md.addEventListener('click', () => {

    //situation in dark mode allready
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode')

        btn.style.boxShadow = " 0 0 1rem black";

    }
    else { // make dark mode

        body.classList.add('dark-mode')
        btn.style.boxShadow = " 0 0 1rem silver";
    }

    //       document.body.classList.toggle('dark-mode');

    //  md.textContent=document.body.classList.contains('dark-mode')?'light-mode' :'dark-mode'
});


