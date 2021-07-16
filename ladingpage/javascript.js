class validator{

    constructor(){
        this.validations = [

        ]
    }
    validate(form){
        let inputs = form.getElementByTagName('input');

        let inputs_array = [...inputs];

        inputs_array.forEach(function(input){
            
        }, this);
    }
}


function storageData(){
    var name = document.getElementById('dataName').value;
    var email = document.getElementById('dataEmail').value;
    var game = document.getElementById('dataGame').value;
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Game', game);
}


let submit = document.getElementById('button');
let form = document.getElementById('box');
let validator = new validator;
submit.addEventListener('click', function(e){

    e.preventDefault();

});