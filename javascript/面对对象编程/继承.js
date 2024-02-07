// 原型链继承

// function parent() {
// 	this.name = "parent";
// 	this.paly = [1, 2, 3];
// }

// function Child() {
// 	this.type = "child";
// }

// Child.prototype = new parent();

// 构造函数继承

// function parent() {
// 	this.play = [1, 2, 3];
// }

// parent.prototype.getValue = function () {};

// function Child() {
// 	parent.call(this);
// }

// let child = new Child();

// console.log(child.getValue()); // TypeError: child.getValue is not a function

// 组合继承

// function parent(name) {
// 	this.name = name;
// 	this.play = [1, 2, 3];
// }

// parent.prototype.getValue = function () {};

// function Child(name, age) {
// 	parent.call(this, name);
// 	this.age = age;
// }

// Child.prototype = new parent();

// let child = new Child("kii", 20);

// console.log(child.getValue);

// 原型式继承

let ParentTen = {
	name: "A",
	friends: ["B", "C", "D"],
};

let ChildTen1 = Object.create(ParentTen);

let ChildTen2 = Object.create(ParentTen);

ChildTen1.name = "C1";
ChildTen2.friends.push("E");

console.log(ChildTen1.name);
console.log(ChildTen1.friends);

// 寄生式继承

const ParentEleven = {
	name: "A",
	friends: ["B", "C", "D"],
};

function createAnother(origin) {
	let clone = Object(origin);
	clone.getValue = function () {
		console.log(this.name);
	};
	return clone;
}

const ChildEleven1 = createAnother(ParentEleven);

const ChildEleven2 = createAnother(ParentEleven);

ChildEleven2.friends.push("E");

ChildEleven1.getValue();

console.log(ChildEleven1.friends);

/**
 *
 * 寄生式组合继承
 *
 */

function inheritPrototype(SubType, Super) {
	let prototype = Object(Super.prototype);
	prototype.constructor = SubType;
	SubType.prototype = prototype;
}

function A(name) {
	this.name = name;
	this.colors = ["A", "B", "C"];
}

A.prototype.getValue = function () {
	console.log(this.name);
};

function B(name, age) {
	A.call(this, name);
	this.age = age;
}

inheritPrototype(B, A);

const B1 = new B("kkk");
const B2 = new B("lll");
B2.colors.push("D");
console.log(B1.colors);
