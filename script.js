//Module 
var Car = (function(){
	var text = 'Can drive';

	var canDrive = function(){
		console.log(text)
	}

	return{
		run: function(){
			canDrive()
		}
	}
})();

Car.run()

//Relevanting Module 
var Car = (function(){
	var data = [];

	function add (item){
		data.push(item)
		console.log('Item added')
	}

	function get (){
		data.map(item =>{
		console.log(item)
		})
	}

	return{
		add: add,
		get: get
	}
})();

Car.add('Ford')
Car.add('BMW')
Car.get()

//Singelton
var mySingleton = (function () {
    var instance;
   
    function init() {
      function privateMethod(){
          console.log( "Private method" );
      }
   
      return {
        publicMethod: function () {
          console.log( "Public method" );
        }
      }
    };
   
    return {
      getInstance: function () {
        if ( !instance ) {
          instance = init();
        }
        return instance;
      }
    };
  })();
  
  mySingleton.getInstance()


  //Observer
function Click() {
    this.handlers = [];  // observers
}

Click.prototype = {
    subscribe: function(fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },

    fire: function(o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}
    var log = (function() {
        var log = "";
        return {
            add: function(msg) { log += msg; },
            show: function() { alert(log); }
        }
    })();
    
    function run() {
        var clickHandler = function(item) { 
            log.add("fired: " + item); 
        };
        var click = new Click();
    
        click.subscribe(clickHandler);
        click.fire('event #1, ');
        click.unsubscribe(clickHandler);
        click.fire('event #2');
        click.subscribe(clickHandler);
        click.fire('event #3');
    
        log.show();
    }
    run()


    //Mediator 
    var User = function (mediator, name) {
        this.mediator = mediator;
        this.name = name;
       
        this.send = function (msg) {
            console.log(this.name + ": sending message: " + msg);
            this.mediator.sendMessage(msg, this);
        };
       
        this.receive = function (msg) {
            console.log(this.name + ": received message: " + msg);
        };
       };
       
       //Mediator 
       var chatMediator = {
        users: [],
        addUser: function (user) {
         this.users.push(user);
        },
        sendMessage: function (msg, user) {
         for (var i = 0; i < this.users.length; i++) {
          if (this.users[i] !== user) {
           this.users[i].receive(msg);
          }
         }
        }
    };

    var Adam = new User(chatMediator, "Adam");
    var Poll = new User(chatMediator, "Poll");
    var Jon = new User(chatMediator, "Jon");
    
    chatMediator.addUser(Adam);
    chatMediator.addUser(Poll);
    chatMediator.addUser(Jon);
    
    Adam.send("Hi All");


    //Command
    var Command = function () {
        this.execute = function () {};
    };
    
    var Car = function () {
        this.go = function () {
            console.log("Car drive");
        };
        this.stop = function () {
            console.log("Car stop drive");
        };
    };
    
    var GoCar = function() {
        this.execute = function () {
            car.go();
        };
    };
    GoCar.prototype = new Command();
    
    var StopCar = function(){
        this.execute = function () {
            car.stop();
        };
    };
    StopCar.prototype = new Command();
    var Run = function () {
        var onGo, onStop;
        this.setCar = function (go, stop) {
            onGo = go;
            onStop = stop;
        };
        this.goCar = function () {
            onGo.execute();
        };
        this.stopCar = function () {
            onStop.execute();
        };
    };
    
    var runTest = function () {
        var run = new Run();
        var car = new Car();
           
        var goCar = new GoCar ;
        var stopCar = new StopCar ;
        run.setCar(goCar, stopCar);
        run.goCar();
        run.stopCar();
    };
    
    runTest();
    
    
    //Façade 
    var Car = function(name) {
        this.name = name;
     }
     
     Car.prototype = {
         canDrive: function(speed){
             if (!new Service().verify(this.name, speed)) {
                result = " can not ";
            }else{
                result = " can ";
            }
             return 'This '+ this.name + ''+  result + 'drive'
         }
     }
     
     var Service = function() {
        this.verify = function(name, speed) {
            if(speed > 0){
                 return true;
            }else {
                return false;
            }
        }
     }

     function run() {
        var car = new Car("BMW");
        var result1 = car.canDrive(99);
        var result2 = car.canDrive(0);
        console.log(result1);
        console.log(result2);
     }
     
     run();    
     
     
     //Factory 
     var Car = {
        canDrive: function (val) {
           console.log(val.name + ' can drive ' + 'and has color ' + val.color );
       },
       canFly: function (val) {
           console.log(val.name + ' can\'t fly ' + 'and has color ' + val.color );
       },
   }
   
   var CarFactory = function ( name, color ) {
       this.name = name 
       this.color = color 
   };
   
   CarFactory.prototype ={
       makeDrive: function(){
           return new Car.canDrive({name: this.name, color: this.color})
       },
       makeFly: function(){
           return new Car.canFly({name: this.name, color: this.color})
       },
   }
   
   var factory = new CarFactory('Ford', "red")
   factory.makeDrive()
   factory.makeFly()


   //Mixins
   var Car = function ( settings ) {
    this.name = settings.name || "no model provided";
};

var Mixin = function () {};
 
Mixin.prototype = {
    canDrive: function () {
        console.log( "Yes" );
    },
    canFly: function () {
        console.log( "No" );
    }
};
 
function copy( receivingClass, givingClass ) {
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    else {
        for ( var methodName in givingClass.prototype ) {
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}
 
copy( Car, Mixin, "canDrive");
 
var myCar = new Car({
    model: "BMW"
});
 
myCar.canDrive();
myCar.canFly();


//Decorator
function Car(){
	this.name = 'Ford'
}
var newCar = new Car ()

newCar.setName= function(carName){
	this.name = carName
}

newCar.setName('BMW')
console.log(newCar)


