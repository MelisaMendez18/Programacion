//Currying*

const transacion = (fee, balance, amonunt) =>{
    return balance + amonunt - fee; 
};

const curry = (fn, ...args) =>{
    return (..._arg) => {
        return fn(...args, ..._arg)
    }
}

const frerTransaction = curry(transacion, 0);
const regularTransacton = curry(transacion, 15);

freeTransantion (10, 90);
regularTransacton (10, 90);


// Composition* 

const compose = (...fns) => x => fns.reduce ((y, f) => f(y),x );

const addFe = (amonunt) => amonunt +2; 
const addDiscount = (amonunt) => amount - 5;

Composition


//Clousures*

function counter(){
   let count = 0;

   function increment (){
    return count +=1;
   }

   return increment;
}

const generateId = counter();

generateId();

//Coalescing*

//falsy values 1

const value1 = 0 ?? 100;
value1
const value2 = false ?? true;
value2

//Default value

const value3 = null ?? 100;
value3
const value4 = undefined ?? 100;
value4


//Reflec API*

const person = {
    name: 'John',
    email: 'John@email.com'
};

Reflect.get (person, 'name');
Reflect.has (person, 'email');
Reflect.has (person, 'phone');
Reflect.getPrototypeOf (person);

Reflect.getOwnPropertyDescriptor (person, 'name');
Reflect.ownKeys (person);

Reflect.defineProperty (person, 'phone', {writable: true});
Reflect.has (person, 'phone');
Reflect.set (person, 'phone', '65656565');
Reflect.deleteProperty (person, 'phone'); 