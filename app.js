var Root = function() {};
var Child = function() {};

Child.prototype = Object.create(Root.prototype);

Root.prototype.run = function() {
    console.log('Root. Run...');
};
Child.prototype.run = function() {
    Root.prototype.run(this, arguments);
    console.log('Child. Run...');
};

var child = new Child();
child.run();

