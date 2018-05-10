export default class Shoes{
	constructor(_price, _image,_name){
		this.price = _price; 
		this.image = _image; 
		this.name = _name ; 
	}

	getPrice(){
		return this.price; 
	}

	getImage(){
		return this.image; 
	}

	getName(){
		return this.name ;
	}
}