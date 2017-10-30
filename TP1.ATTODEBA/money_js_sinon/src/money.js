var money = (function () {
    function money(v, curr) {
        if (arguments.length === 0) return;
        this.value = v;
        this.currency = curr;
    }

    money.prototype.__defineSetter__('value',
        function (value) {
            if (value < 0) throw new ValueException(value);
            this.v = value;
        });

    money.prototype.__defineSetter__('currency',
        function (curr) {
            if (curr.length > 3) throw new CurrencyLengthException(curr);
            this.curr = curr.toUpperCase();
        });
    money.prototype.getCurrency = function () {
        return this.curr.toUpperCase();
    }
    money.prototype.getValue = function () {
        return this.v;
    }
    money.prototype.equals = function (otherM) {
        return (otherM.getValue() === this.getValue()) && (otherM.getCurrency() === this.getCurrency());
    }
    money.prototype.toString = function toString() {
        return this.getValue() + " (" + this.getCurrency() + ")";
    }


    return money;
})();
