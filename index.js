
function rmaddbnt() {
    function handleValueChange() {
        var y = document.querySelector('.input-name').value;
        var x = document.querySelector('.input-value').value;
        let z = y + " " + x;
        return z;
    }
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
    handleValueChange()
    list.innerHTML = z;
}



let action = document.querySelector('#income .add');
action.addEventListener('click', rmaddbnt);


// function changeTextarea() {
//   var a = document.getElementById('text-area').value;
//   var b = document.getElementById('text-area-result');
//   b.innerHTML = a;
// }