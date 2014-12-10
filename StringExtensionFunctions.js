/*
*    All the functions have been checked with JSLint and modified accordingly
*    
*    I have not documented much as the names of the prototype functions should 
*    speak for themselves.
*/

String.prototype.startsWith = function (value) {
    "use strict";
    var length = this.substring(0, value.length),
        startsWith = false;
    if (length === value && value !== "" && value !== 'undefined') {
        startsWith = true;
    }
    return startsWith;
};

String.prototype.contains = function (value) {
    "use strict";
    var containsValue = false;
    if (this.indexOf(value) >= 0) {
        containsValue = true;
    }
    return containsValue;
};

String.prototype.emptyString = function () {
    "use strict";
    var b = false;
    if (this.length === 0) {
        b = true;
    }
    return b;
};

String.prototype.reverse = function () {
    "use strict";
    var temp = "",
        i = 0;
    for (i; i < this.length; i = i + 1) {
        temp += this[this.length - 1 - i];
    }
    return temp;
};