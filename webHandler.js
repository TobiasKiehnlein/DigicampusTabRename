setTimeout(() => {
	if (window.location.href.includes('sendfile'))
		document.title = decodeURIComponent(window.location.href.replace(/.*file_name=/, ''));
}, 1000);
