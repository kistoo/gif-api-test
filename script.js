const button = document.querySelector('button');
const img = document.querySelector('img');
const input = document.querySelector('input');
const errorMessage = document.querySelectorAll('h1')[1];

button.onclick = function () {
  errorMessage.style.display = 'none';
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=QhRNw4GcRcA8QmIQjZxlGWThYUKCg4tx&s=${input.value}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
      errorMessage.style.display = 'block';
      img.src = '';
      console.log("dsd")
    })
}
    