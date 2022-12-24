const button = document.querySelector('button');
const img = document.querySelector('img');

button.onclick = function () {
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=QhRNw4GcRcA8QmIQjZxlGWThYUKCg4tx&s=cats', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
}
    