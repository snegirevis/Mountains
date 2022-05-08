const add_button = document.getElementById("add");
const new_form = document.getElementById("form")
const old_button = document.getElementById("button");
const new_button = document.getElementById("new_button");
const list1 = document.getElementById("list_1");
const list2 = document.getElementById("list_2");
const list3 = document.getElementById("list_3");

window.onload = start;

function start(){
old_button.addEventListener('click', changing);
new_button.addEventListener('click',adding);}

function changing(){
	new_form.style.display = "block";
	add_button.replaceWith(new_form);
	
}

function adding(){
	
	let new_list_element = document.createElement('li');
	new_list_element.innerHTML = document.getElementById("name").value;
	
    let level = document.getElementById("select").value;
    
    switch(level){
    	case "Легкий":
    	list1.append(new_list_element);
    	break;

    	case "Средний":
    	list2.append(new_list_element);
    	break;

    	case "Сложный":
    	list3.append(new_list_element);
    	break;
    }

    start();

	
	
	
}