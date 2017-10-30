function DevisesIncompatibleExc(_d1,_d2) {
    this.d1=_d1; this.d2=_d2;
}

DevisesIncompatibleExc.prototype.toString=function (){
    return "Devises incompatibles : "+this.d1+" vs "+this.d2;
}

function CurrencyLengthException( curr) {
    this.currency=curr;
}
CurrencyLengthException.prototype.toString = function () {
    return "Taill de devise est superieur  à 3 : "+this.currency;
}

function ValueException( value) {
    this.value=value;
}

ValueException.prototype.toString= function () {
    return "Value inferieur à 0 :"+this.value;
}