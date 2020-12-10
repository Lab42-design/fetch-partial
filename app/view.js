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
class View {
    constructor(partial, target) {
        this._partial = partial
        this._target = target
    }
    
    static fetchPartial(partial, target) {
        fetch(partial).then(function (response) {
            return response.text()
        }).then((html) => {
            let elem = document.querySelector(target)
            elem.innerHTML = html
        }).catch(function (e) {
            console.warn('Something went wrong.', e)
        })
    }
}
