var Root = function() {};
var Child = function() {};
var Child1 = function() {};

var extended = function(Child, Base) {
    Child.prototype = Object.create(Base.prototype);
    Child.prototype.parentClass = Base.prototype;

    var __obj = Child.prototype;
    console.log('*****');
    for (var __key in __obj) {
            //__obj[__key]['__name__'] = __key;
            //console.log( __key, ' === ', __obj[__key] );
            //console.log( __key );
            //__obj[__key].__name__ = __key;
            //__obj[__key].__name__ = 1111;
            //Child.prototype[__key]['__name__'] = __key;
    }


    Child.prototype.super = function() {
        //console.log(this);
        //console.dir( arguments.toString() );
        //var __obj = Child.prototype;
        //console.log(__obj);
        //var __key = null;
        //for (__key in __obj) ;
        //Child.prototype.parentClass[__key]();
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
    console.log(this.__name__);
    this.super();
    console.log('Child1. Run...');
};
//Child1.prototype.run1 = function() {
//    console.log(this.__name__);
//    //this.super(this);
//    //console.dir( this.__p );
//    console.log('Child1. Run1...');
//};

var child = new Child1();
child.run();