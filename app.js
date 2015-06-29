var Root = function() {};
var Child = function() {};

var extended = function(Child, Base) {
    Child.prototype = Object.create(Base.prototype);
    Child.parentClass = Base.prototype;
}

extended(Child, Root);

Root.prototype.run = function() {
    console.log('Root. Run...');
};
Child.prototype.run = function() {
    Root.prototype.run(this, arguments);
    console.log('Child. Run...');
};

var child = new Child();
child.run();

