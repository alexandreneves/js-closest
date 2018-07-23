'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Closest = function Closest(el, selector) {
    if (el === undefined || selector === undefined || el.tagName.toLowerCase() === 'body') {
        return false;
    }

    var temp = selector.substr(1);
    var firstChar = selector.charAt(0);

    if (firstChar === '#' && el.id === temp || firstChar === '.' && el.classList.contains(temp) || el.tagName.toLowerCase() === selector) {
        return el;
    }

    return Closest(el.parentNode, selector);
};

exports.default = Closest;