//Let's Begin
//Were going to have to initiate a master card object:

const Card = {};

//First things first, we need a function to create HTML elements

const newElement = (tag, attr, id,text) => {
	const element = document.createElement(tag);
	const textNode = document.createTextNode(text);
	element.appendChild(textNode);
	//Ternary statements to prevent 'undefined' attributes
	(attr) ? element.className = attr : null;
	(id) ? element.id = id : null;
	return element;
}

//Let's also simplify the append process
Node.prototype.append = (elem) => {
		return this.appendChild(elem);
};

const appendTarget =  (target, child) =>{
	const Target = document.querySelector(target);
	return Target.appendChild(child);
}

const basics = ['div','p','button','section','article','ul','li'];
//Now its time to populate our card object.

basics.map(elem => {
Card[elem] = (classNames="", id="", text="") => {
	return newElement(elem, classNames, id, text);
	}
	return Card[elem];
});


//<small>
Card.small = (text="") => {
	return newElement('small', ``, ``, `${text}`);
}

//<img>
Card.img =(src, alt="image", width, height) => {
	const img = document.createElement('img');
	if (typeof (width || height) == "string" ){
		console.log('width/height must be integers, "px" not necessary');
		throw Error;
	}
	img.src = src;
	img.alt = alt;
	(width) ? img.width = width : null;
	(height) ? img.height = height: null;
	return img;
}

//<h1-6>
Card.h = (headerNumber, classNames="", id="", text="") => {
	if (headerNumber == undefined || headerNumber > 6){
		console.log('Please choose a supported number for your header size.');
		throw Error;
	}
	else{
		return newElement(`h${headerNumber}`, `${classNames}`, `${id}`, `${text}`);
	}
}

