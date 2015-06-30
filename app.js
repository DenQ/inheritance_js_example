var Root = function() {};
var Child = function() {};
var Child1 = function() {};

var extended = function(Child, Base) {
    Child.prototype = Object.create(Base.prototype);
    Child.prototype.parentClass = Base.prototype;
    Child.prototype.super = function () {
        var __obj = Child.prototype.parentClass;
        var __key = null;
        for (__key in __obj) ;
        Child.prototype.parentClass[__key]();
    }
};


Root.prototype.run = function() {
    console.log('Root. Run...');
};


extended(Child, Root);
Child.prototype.run = function() {
    this.super();
    console.log('Child. Run...');
};

extended(Child1, Child);
Child1.prototype.run = function() {
    this.super();
    console.log('Child1. Run...');
};

var child = new Child1();
child.run();