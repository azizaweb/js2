// let message = 5+8; // 1)number
// alert(message)

// alert(778888889998899n) 2)begint

// let user = 'Hello';
// let user1 = "bye";
// let user2 = `Обратные кавычки ${user1}` 3)string

// let message = 4 > 1;
// alert(message)  4)Boolean

// null ошибка

// let age;
// alert(age) undefined ошибка если не прис значение 
//  let num = 2+2;
//  alert(typeof num);

//  let admin = 68586587678676976998789n;
//  alert(typeof admin);

//  let message =  4 > 1;
//  alert(typeof message)
let user = prompt('String typedagi malumot kiriting')
let message = prompt('Number typedagi malumot kiritin')
let admin = prompt('boolean typedagi malumot kiriting');
let item = confirm('hamma malumotlami togri kiritganizga ishonchingiz komilmi?');
let info=
`Siz kiritgan Aziza ${user} sozi string typega tegishli
Siz kiritgan 123${message} sozi number typega tegishli
Siz kiritgan true${admin} sozi boolean typega tegishli ${admin}`
alert(info);