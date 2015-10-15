Array.prototype.shuffle = function() { var i, j, temp; arr = this.slice(); i = arr.length; if (i === 0) { return arr; } while (--i) { j = Math.floor(Math.random() * (i + 1)); temp = arr[i]; arr[i] = arr[j]; arr[j] = temp; } return arr; };

var n = 43; // 画像の枚数

var count = 0;
var onLoadImg = function() {
  if ( ++count === n ) {
    new Masonry(document.body, { itemSelector: '.item' });
    document.body.className = '';
  }
};

var arr = [];
for (var i=1; i <= n; i++) { arr.push( ('00'+i).slice(-3) ); }

var div, img;
arr.shuffle().map(function(name) {
  img = document.createElement('img');
  img.src = './images/' + name + '.jpg';
  img.className = 'item';
  img.onload = onLoadImg;
  img.onerror = onLoadImg;
  document.body.appendChild( img );
});
