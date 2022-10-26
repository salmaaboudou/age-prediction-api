let form = document.querySelector('.form');
let body = document.querySelector('.body')
let searchBar = document.querySelector('.search-input');
let submitButton = document.querySelector('.button');
let ageDiv = document.querySelector('.age');
let titleDiv = document.querySelector('.div-title');

//Function that checks if a value has been entered.
function getData() {
    if (searchBar.value != "") {
        predictAge();
    }
    else {
        alert("Please enter a name !")
    }
};


function predictAge(){
    let name = searchBar.value;
    fetch("https://api.agify.io?name=" + name)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const age = data.age;
            ageDiv.style.display = "block";
            body.classList.add('active');
            form.classList.add('active');
            titleDiv.style.display = "none";
            ageDiv.innerHTML = age + " years old";
        })
};

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    getData();
});


