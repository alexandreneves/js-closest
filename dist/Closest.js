'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (el, target, value) {
    if (!el || el.tagName.toLowerCase() === 'body') return null;

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

    return value === v ? el : Closest(el.parentNode, target, value); // found? no? recurse
};

;