document.addEventListener('DOMContentLoaded', function () {
	var data = chrome.extension.getBackgroundPage().data;
	// alert(JSON.stringify(data));
	if (data!=null) {
		var api = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
		var encodedurl = encodeURI(data.url);
		$("#qrcode").attr("src",api+encodedurl);
		console.info($("#qrcode").attr('src'));
	}
	// $("qrcode").load(function () {
	//   //图片默认隐藏
	//   $(this).hide();
	//   //使用fadeIn特效
	//   $(this).fadeIn("1000");
	// });
	// $("qrcode").
});
