import request from 'request'

const API_BASE_DEFAULT = 'http://xn--3ur52o1bb7099d.xn--u9jb933vm9i.com';

class Kosaki {
  constructor(path, api_base) {
    this._api_base = api_base || API_BASE_DEFAULT;
    this._images = null;
    this._load(path);
  }

  _load(path) {
    let url = this._api_base + '/images.json';
    request.get(url, (err, res, body) => {
      if ( err ) { return console.error(err) }
      this._images = JSON.parse(body);
    });
  }

  random(opts) {
  }

  get(opts) {
  }
}

export default Kosaki
