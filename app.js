var Root = function() {};
var Child = function() {};

var extended = function(Child, Base) {
    Child.prototype = Object.create(Base.prototype);
    Child.prototype.parentClass = Base.prototype;
}

var __super = function(name) {
    this.parentClass[name]();
}

extended(Child, Root);

Root.prototype.run = function() {
    console.log('Root. Run...');
};
Child.prototype.run = function() {
    __super.call(this, 'run');
    console.log('Child. Run...');
};

var child = new Child();
child.run();

