'use strict';
/**
 * 
 * Siple templating
 * 
 * usage
 * let content = new View('./_partials/_content.html', '#content')
 * content.fetchPartial()
 * 
 */
class Payload {
    constructor(json, target) {
        this._json = json
        this._target = target
    }
    
    fetchJson() {
        fetch(this._json).then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then((data) => {
            var code = document.getElementById(this._target)
            code.innerHTML = data.payload.body
            //console.log(data.payload.title);
            //console.log(data.payload.body);
        }).catch(function (e) {
            // There was an error
            console.warn('Something went wrong.', e);
        })
    }
}
