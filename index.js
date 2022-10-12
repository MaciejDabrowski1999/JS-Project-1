document.addEventListener('DOMContentLoaded', () => {
    const inp = document.querySelector('.input-income')
    console.log(inp.value);
})
;


function rmaddbnt() {
    function createEL(){
        let textarea = document.createElement('ul');
        // textarea.innerHTML = intext;
        let bntadd=document.createElement('button');
        bntadd.innerHTML = 'Edytuj';
        let bntrm = document.createElement('button');
        bntrm.innerHTML = 'Usuń';
        let bodyadd = document.querySelector('#income .elements');
        let list = document.createElement('li');
        let box = document.createElement('div');
        box.style.display = 'flex';
        bodyadd.appendChild(box);
        box.appendChild(textarea)
        box.appendChild(bntadd);
        box.appendChild(bntrm);
        textarea.appendChild(list);
    }
    createEL()
}

function rmaddbnt2() {
    function createEL(){
        let textarea = document.createElement('ul');
        // textarea.innerHTML = intext;
        let bntadd=document.createElement('button');
        bntadd.innerHTML = 'Edytuj';
        let bntrm = document.createElement('button');
        bntrm.innerHTML = 'Usuń';
        let bodyadd = document.querySelector('#costs .elements');
        let list = document.createElement('li');
        let box = document.createElement('div');
        box.style.display = 'flex';
        bodyadd.appendChild(box);
        box.appendChild(textarea)
        box.appendChild(bntadd);
        box.appendChild(bntrm);
        textarea.appendChild(list);
    }

    createEL()
}

let action = document.querySelector('#income .add');
action.addEventListener('click', rmaddbnt);

let action2 = document.querySelector('#costs .add');
action2.addEventListener('click', rmaddbnt2);