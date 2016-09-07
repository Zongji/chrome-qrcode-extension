function toUtf8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for(i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
        }
    }
    return out;
}


document.addEventListener('DOMContentLoaded', function () {
	var data = chrome.extension.getBackgroundPage().data;
	// alert(JSON.stringify(data));
	// if (data!=null) {
	// 	var api = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
	// 	var encodedurl = encodeURI(data.url);
	// 	$("#qrcode").attr("src",api+encodedurl);
	// 	console.info($("#qrcode").attr('src'));
	// }

	var encodedurl = toUtf8(data.url);
	//  alert(encodedurl);
	$("#qrCanvas").qrcode({
    render: "canvas", //table方式
    width: 200, //宽度
    height:200, //高度
    text: encodedurl //任意内容
	});
});
