let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);

    inp.value = "";
    inp.focus();

});
ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON") {
        let par = event.target.parentElement;
        let itemText = par.childNodes[0].nodeValue.trim();
        par.remove();
        console.log(`${itemText} deleted`);
    }
});