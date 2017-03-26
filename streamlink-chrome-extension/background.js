chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.executeScript({
    code: 'window.location.href="streamlink://'+tab.url+'"'
  })
})
