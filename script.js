let btn = document.querySelectorAll('.btn');

let str = "";

let dis = document.querySelector('#display')

Array.from(btn).forEach((button) => {

    button.addEventListener('click', (e) => {

        if(e.target.innerHTML == '='){
            str = eval(str);
            dis.value = str;
        }
        else {
            console.log(e.target);
            str = str + e.target.innerText;
            dis.value = str;
        }
    })
})
