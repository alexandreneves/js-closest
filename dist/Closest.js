'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Closest = function Closest(el, target, value) {
    if (!el) return false;
    if (el.tagName.toLowerCase() === 'body') return null;

    var v = void 0;

    switch (target) {
        case 'tag':
            v = el.tagName.toLowerCase();
            break;
        case 'id':
            v = el.id;
            break;
        case 'class':
            v = el.className;
            break;
        default:
            console.error('Closest - target unknown');
    }

    if (value === v) return el; // found
    return Closest(el.parentNode, target, value); // not found, recurse
};

exports.default = Closest;