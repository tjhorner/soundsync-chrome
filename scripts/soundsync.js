Soundsync = (function(){
	var soundsync = {};

	var socket = io.connect('soundsync.herokuapp.com'); // needed for https, thank you heroku.

	$(document).ready(function(){
		$li = $('<li><a href="'+chrome.extension.getURL("pages/options.html")+'" target="_blank">Soundsync Settings</a></li>');
		$('.header__navMenu').last().append($li);
		$controls = $('.playControls__playPauseSkip');
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

	socket.on('soundcloud:control:toggle', function(){
		$controls.find('.playControl').click();
	});

	socket.on('soundcloud:control:next', function(){
		$controls.find('.skipControl__next').click();
	});

	socket.on('soundcloud:control:previous', function(){
		$controls.find('.skipControl__previous').click();
	});

	soundsync.connection = socket;

	return soundsync;
}());