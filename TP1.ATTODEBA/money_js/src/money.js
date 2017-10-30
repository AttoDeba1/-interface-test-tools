var money= (function(){
	function money(v,curr) {
		this.v=v;
		this.curr=curr.toUpperCase();
	}

	money.prototype.getCurrency=function () {
		return this.curr;
	}
    money.prototype.getValue=function () {
        return this.v;
    }

    money.prototype.equalCurrency=function ( otherM) {
        if(this.getCurrency()==="EUR" || this.getCurrency()==="EURO" || this.getCurrency()==="€")
        	 return this._equalEuroCurrency(otherM);
        else
        	 return this.getCurrency()=== otherM.getCurrency();
    }

    money.prototype._equalEuroCurrency=function (otherM) {
		return ( otherM.getCurrency()==="EUR" )||( otherM.getCurrency()==="EURO") ||( otherM.getCurrency()==="€");
    }

	money.prototype.equals=function (otherM) {
		return (otherM.getValue()===this.getValue()) && (this.equalCurrency(otherM) ) ;
	}

	money.prototype.toString=function toString() {
		return this.getValue()+" ("+this.getCurrency()+")" ;
	}
	
return money;
})();
