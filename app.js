var Root = function() {};
var Child = function() {};

//Child.prototype.__proto__ = Root.prototype;
Child.prototype = Object.create(Root.prototype);

Root.prototype.run = function() {
    console.log('Run...');
};
var child = new Child();
child.run();

