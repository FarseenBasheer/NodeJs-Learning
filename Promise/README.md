Nested Call back
Lot of nested call back - call back hell

npm install promise

return as Promise object
It has 2 states - resolve(fulfil) - success state,reject - error case return reject. next state is pending state.

.then ->resolve value
.catch ->reject value

.then->resolve->.then - chain

.then->resolve->.then->reject->.catch

Task with 3 sec delay and 2s delay total takes 5 sec. Using async method it will take place together.