var Root = function() {};
var Child = function() {};

var extended = function(Child, Base) {
    Child.prototype = Object.create(Base.prototype);
    Child.prototype.parentClass = Base.prototype;
}
var __super = function() {
    this.parentClass.run();
}

extended(Child, Root);

Root.prototype.run = function() {
    console.log('Root. Run...');
};
Child.prototype.run = function() {
    //Root.prototype.run(this, arguments);
    __super.call(this)
    console.log('Child. Run...');
};

var child = new Child();
child.run();

