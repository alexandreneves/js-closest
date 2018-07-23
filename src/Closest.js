const Closest = function(el, selector) {
    if (
        el === undefined ||
        selector === undefined ||
        el.tagName.toLowerCase() === 'body'
    ) {
        return false;
    }

    let temp = selector.substr(1);
    let firstChar = selector.charAt(0);

    if (
        (firstChar === '#' && el.id === temp) ||
        (firstChar === '.' && el.classList.contains(temp)) ||
        el.tagName.toLowerCase() === selector
    ) {
        return el;
    }

    return Closest(el.parentNode, selector);
};

export default Closest;
