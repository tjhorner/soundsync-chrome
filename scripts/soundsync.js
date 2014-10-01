Soundsync = (function(){
	var soundsync = {};

	var socket = io.connect('soundsync.herokuapp.com'); // needed for https, thank you heroku.

	$(document).ready(function(){
		$li = $('<li><a href="chrome-extension://mmkmhkdddjclmodamjjjgbnfbkjcpkip/pages/options.html" target="_blank">Soundsync Settings</a></li>');
		$('.header__navMenu').last().append($li);
	});

	socket.on('hello', function(){
		chrome.storage.sync.get({
			sessName: 'soundsync-chrome'
		}, function(i){
			socket.emit('session:name', i.sessName);
		});
	});

	socket.on('soundcloud:song:change', function(url){
		window.location = url;
	});

	soundsync.connection = socket;

	return soundsync;
}());