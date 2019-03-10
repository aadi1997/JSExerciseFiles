var ul = document.getElementById('list')
var li
var section = document.querySelector('.controls');

var addButton = document.getElementById('add')
var removeButton = document.getElementById('remove')

addButton.addEventListener('click', addItem)
removeButton.addEventListener('click', removeItem)

function addItem() {
    var input = document.getElementById('input')
    var item = input.value
    var textNode = document.createTextNode(item)

    if(item === '') {
        //console.log('enter');
        var para = document.createElement('p');
        para.setAttribute('id', 'new');
        para.textContent = 'Please insert an item';
        section.appendChild(para);
        setTimeout(() => section.removeChild(para), 2000);
        

    } else {
        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check')

        //create label
        var label = document.createElement('label');
        label.append(textNode);
        //label.setAttribute('for', 'item');

        //add these elements on web page
        ul.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual';
        }, 2)

        input.value = '';
    }
}

function removeItem() {
    li = ul.children
    //console.log(li[0])
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            //console.log(li[index])
            ul.removeChild(li[index])
        }  
    }
}