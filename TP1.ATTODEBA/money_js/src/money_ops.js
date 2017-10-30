var MoneyOps=function (){
}

MoneyOps.add = function(m1,m2){
	 if(m1.equalCurrency(m2)) return new money(m1.getValue()+m2.getValue(),m1.getCurrency());
	 else throw new DevisesIncompatibleExc();
}
