//设置图标激活
var data = {};
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
		// alert(JSON.stringify(tabId)+"\n"+JSON.stringify(changeInfo)+"\n"+JSON.stringify(tab));
		if (tab.url !='' && tab.url.indexOf("chrome://") < 0) {
			//只有浏览网页的时候出现
			data.url = tab.url;
			chrome.pageAction.show(tabId);
		}
});


// chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
// 	if(request.type!=="send_url"){
// 		return;
// 	}
// 	data = request;//popup.jsq取得这个数据
// 	// alert(JSON.stringify(data));
// });
