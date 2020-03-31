function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}


while (browser.tabs.query({*://*.google.com/*}))
let query = browser.tabs.query({url: "https://classroom.google.com/u/3"});
