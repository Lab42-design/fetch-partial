'use strict';

class View {
	constructor(partial, target) {
		this._partial = partial
		this._target = target
	}
	
	fetchPartial() {
        fetch(this._partial).then(function (response) {
            // The API call was successful!
            return response.text()
        }).then((html) => {
            let elem = document.querySelector( this._target )
            elem.innerHTML = html
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err)
        });
	}
}
// usage
// let content = new View('./_partials/_content.html', '#content')
// content.fetchPartial()