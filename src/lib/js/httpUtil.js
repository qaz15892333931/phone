
  let host = "http://192.168.1.63:8088";
function post(url, data, callback){
    console.log('post:',url);
    $.ajax({
        url: host+url,
        data: data,
        type: "post",
        contentType: "application/x-www-form-urlencoded",
        headers:{'Authorization':localStorage.getItem("token")},
        resultType: "JSON",
        success: function (res) {
            callback(res);
        },
        fail: function (res) {
            console.log('get:', res);
            callback(res);
        },
        complete: function (res) {
            checkToken(res);
        }
    })
}

function postAsync(url, data, callback){
    console.log('post:',url);
    $.ajax({
        url: host+url,
        data: data,
        async:false,
        type: "post",
        contentType: "application/x-www-form-urlencoded",
        headers:{'Authorization':localStorage.getItem("token")},
        resultType: "JSON",
        success: function (res) {
            callback(res);
        },
        fail: function (res) {
            console.log('get:', res);
            callback(res);
        },
        complete: function (res) {
            checkToken(res);
        }
    })
}


function get(url, data, callback){
    $.ajax({
        url: host+url,
        data: data,
        type: "get",
        contentType: "application/x-www-form-urlencoded",
        headers:{'Authorization':localStorage.getItem("token")},
        resultType: "JSON",
        success: function (res) {
            console.log('get:',window.location.href);
            callback(res);
         },
        fail: function (res) {
            console.log('get:', res);
            callback(res);
        },
        complete: function (res) {
            checkToken(res);
        }
    })
}
function getDicByGroupId (groupId, callback) {
    let data = {groupId: groupId};
    post("/sys/dic/listByGroupId", data, callback);
};
function checkToken(res){
    if (res.status === 401) {
        layer.alert("登录过期,或没有权限,请重新登录", () => {
            sessionStorage.setItem('login', 'false');
            window.location.href = '/login'
        });
    }
};
export default {
    post,get,getDicByGroupId
}