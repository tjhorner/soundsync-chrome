(function(){
	chrome.storage.sync.get({
		sessName: 'soundsync-chrome'
	}, function(i){
		$('#sessName').val(i.sessName);
	});

	function save(){
		chrome.storage.sync.set({
			sessName: $('#sessName').val()
		}, function(){
			$button = $('#save');
			$button.text('Saved');
			setTimeout(function(){$button.text('Save')}, 2000);
		});
	}

	$(document).ready(function(){
		$('#save').click(save);
	});
}())