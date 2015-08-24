const Promise = require('promise');

module.exports = class Loader {

  constructor() {
    this.prefix = this.prefix || '/pipeline/';
    this.responseType = this.responseType || 'arraybuffer';
  }

  load(path) {
    return new Promise((resolve, reject) => {
      const uri = `${this.prefix}${path}`;

      const xhr = new XMLHttpRequest();
      xhr.open('GET', encodeURI(uri), true);

      xhr.onload = function(e) {
        // TODO: Handle failure
        if (this.status >= 200 && this.status < 400) {
          resolve(this.response);
        }
      };

      xhr.responseType = this.responseType;
      xhr.send();
    });
  }

};