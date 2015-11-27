Array.prototype.shuffle = function() { var i, j, temp; arr = this.slice(); i = arr.length; if (i === 0) { return arr; } while (--i) { j = Math.floor(Math.random() * (i + 1)); temp = arr[i]; arr[i] = arr[j]; arr[j] = temp; } return arr; };

var count;
function onLoadImg() {
  if ( --count === 0 ) {
    new Masonry(document.body, { itemSelector: '.item' });
    document.body.className = '';
  }
};

function fetchImages(images) {
  var div, img;
  count = images.length;
  images.shuffle().map(function(image) {
    img = document.createElement('img');
    img.src = './images/' + image.name;
    img.className = 'item';
    img.onload = onLoadImg;
    img.onerror = onLoadImg;
    document.body.appendChild( img );
  });
}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'images.json', true);
xhr.onreadystatechange = function() {
  if ( xhr.readyState === 4 && xhr.status === 200) {
    var images = JSON.parse(xhr.responseText);
    fetchImages(images.general);
  }
};
xhr.send();
