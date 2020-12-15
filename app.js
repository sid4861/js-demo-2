var txtInput = document.querySelector('#text-input');
var txtOutput = document.querySelector('#text-output');
var button = document.querySelector('#button');

var url = 'https://api.funtranslations.com/translate/hodor.json?text=';

function getUrl(text) {
    return url + text;

}

button.addEventListener('click', function () {
    fetch(getUrl(txtInput.value))
        .then(response => response.json())
        .then(json => txtOutput.innerText = json.contents.translated)
        .catch(err => console.log(err));
});
