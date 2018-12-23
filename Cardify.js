//Let's Begin
//Were going to have to initiate a master card object:

const Card = {};
const myBody = document.querySelector('body');

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

//Now its time to populate our card object.

//<div>
Card.div = (classNames="", id="", text="") => {
	return newElement('div', `${classNames}`, `${id}`, `${text}`);
}

//<button>
Card.button = (classNames="", id="", text="") => {
	return newElement('button', `${classNames}`, `${id}`, `${text}`);
}

//<p>
Card.p = (classNames="", id="", text="") => {
	return newElement('p', `${classNames}`, `${id}`, `${text}`);
}


//<small>
Card.small = (text="") => {
	return newElement('small', ``, ``, `${text}`);
}




//<h1-6>
Card.hNum = (headerNumber, classNames="", id="", text="") => {
	if (headerNumber == undefined || headerNumber > 6){
		console.log('Please choose a supported number for your header size.');
		throw Error;
	}
	if (classNames == undefined && id == undefined && text == undefined){
		return newElement(`h${headerNumber}`, "", "", "");
	}
	else{
		return newElement(`h${headerNumber}`, `${classNames}`, `${id}`, `${text}`);
	}
}

