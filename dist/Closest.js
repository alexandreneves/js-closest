'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Closest = function Closest(el, selector, counter) {
    counter = counter === undefined ? 0 : counter + 1;

    if (el === undefined || selector === undefined || el.tagName.toLowerCase() === 'body') {
        return false;
    }

    var temp = selector.substr(1);
    var firstChar = selector.charAt(0);

    if (firstChar === '#' && el.id === temp || firstChar === '.' && el.classList.contains(temp) || counter > 0 && el.tagName.toLowerCase() === selector) {
        return el;
    }

    return Closest(el.parentNode, selector, counter);
};

exports.default = Closest;