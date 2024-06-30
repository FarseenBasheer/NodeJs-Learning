Nested Call back
Lot of nested call back - call back hell

npm install promise

return as Promise object
It has 2 states - resolve - success state,reject - error case return reject

.then ->resolve value
.catch ->reject value

.then->resolve->.then - chain

.then->resolve->.then->reject->.catch

