## Usage

### Install
```
npm install hoto17296/kosaki
```

### Get Image URL
``` js
var Kosaki = require('kosaki');
var kosaki = new Kosaki();

kosaki.onReady(function() {
  var image_url = kosaki.random();
  var all_images = kosaki.get();
});
```

## Use at Hubot script
``` coffee
require 'kosaki'
```
