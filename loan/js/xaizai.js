var url = "";
$(function(){
    if(isWeixin()){
        $('.layer-box').show();
    }
    $.get(urlcore + "/api/h5/version",function(data){
        var type = getMobileType();
        var array = [];
        for (var i = 0; i < data.data.length; i++) {
            if (type === "iOS") {
                if (data.data[i].os === 1) {
                    array.push(data.data[i]);
                }
            } else if (type === "And") {

                if (data.data[i].os === 2) {
                    array.push(data.data[i]);
                }
            }
        }
        var edition = getQueryString("edition");
        var max =  "";
        if (edition === "used") {
            max = array[0].version > array[1].version ? array[1] : array[0]
        } else {
            max = array[0].version < array[1].version ? array[1] : array[0]
        }
        url = decodeURIComponent(max.url)
    },"json");
});
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function isWeixin(){
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    if (isWeixin) {
        return true;
    }else{
        return false;
    }
}
function getMobileType(){
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
        return 'And';
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        return 'iOS';
    }
    return type
}
function upload(){
    location.href = url
	// var type=getvl("type");
    // var type = getMobileType();
    // var edition = getQueryString("edition");
	// if(type=="iOS"){
	//     if (edition === "used") {
	//         location.href="itms-services:///?action=download-manifest&url=https://hndb123.oss-cn-beijing.aliyuncs.com/rongke/app/huabuwan.plist";
     //    } else {
     //        location.href="itms-services:///?action=download-manifest&url=https://hndb123.oss-cn-beijing.aliyuncs.com/rongke/app/huabuwan4.plist";
     //    }
	// }else{
	// 	location.href="http://hndb123.oss-cn-beijing.aliyuncs.com/rongke/app/huabuwan4.apk";
	// }
}
