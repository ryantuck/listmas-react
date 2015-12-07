
// main react rendering
var em = 'santa@listmas.io';

function doStuff(x) {
    console.log(x);
    return x;
};
// 
// var u = get_user(em, doStuff);
// 
// console.log('---------------testing');
// console.log('printing user at script.js level');
// console.log(u);
// 
// console.log('create user');
// create_user('dude@bro.com');
// console.log('create present');
// create_present({"title": "a test present here"});
// console.log('get present');
// var x = get_present('asdf');

React.render(
  React.createElement(Listmas, { user_email: em }),
  document.getElementById('app')
);
