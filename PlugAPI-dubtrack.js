/* Mady by 3ijtKwijt */

var API = {
    main : {
  		init : function(){
  			if ( window.APIisRunning ){
				console.log("[PlugAPI-Dubtrack] already running...")
  				return;
  			}

  			window.APIisRunning = true;
			
            
			//OnSongUpdate Events
			$('.currentSong').bind("DOMSubtreeModified", API.on.ADVANCE);
			
			
  			// [...]
  		},
	},
	
	chatLog : function(txt){
		b.$el.text(txt).appendTo(Dubtrack.room.chat._messagesEl);
	},
	
	sendChat : function(txt){
		Dubtrack.room.chat._messageInputEl.val(txt);
        Dubtrack.room.chat.sendMessage();
	},
	
	on : {
		ADVANCE : function(){
			// UPDATE ON SONG UPDATE
			//Get Current song name
			var songName = $(".currentSong").text();
				
			//If "loading..." do nothing
			if (songName == "loading...") return;
		}
	}
};

if(!window.APIisRunning){
  API.main.init();
}else{
    setTimeout(API.main.init, 1000);
}