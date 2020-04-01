function redirect(Gnum){

	while (browser.tabs.query({*.google.*/*})){

		if (browser.tab.getCurrent() == "*://classroom.google.*/u/*"){
			var a = browser.tab.getCurrent();
			var b = a.slice(33, 47);
			var c = a.slice(32, 33);
			c = Gnum;
			browser.tabs.update({url: "https://classroom.google.com/u/" + c + b});			
		}
			
	}
}
//32-46