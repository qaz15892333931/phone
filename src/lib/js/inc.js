/*共有js,用来校验是否已经登录*/
let href = document.location.href;
console.log('href:',href);
if (localStorage.getItem('token') === null){
    console.log('登陆拦截');
    // window.location.href = '/#/login';
}

