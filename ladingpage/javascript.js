function storageData(){
    var name = document.getElementById('dataName').value;
    var email = document.getElementById('dataEmail').value;
    var game = document.getElementById('dataGame').value;
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Game', game);
}

button.onclick = storageData();