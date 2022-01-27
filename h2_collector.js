function h2Collector (htmlCode){
	var h2Collection = htmlContent.match(/(\s+\w+)*<\/h2>/g);
	h2Collection = h2Collection.join(',');
	h2Collection = h2Collection.replace(/<\/h2>/g, '');
	h2Collection = h2Collection.match(/(\s+\w+)*/g);

	for (var i = 0; i < h2Collection.length; i++) {
		if(i%2==1){continue}
		h2Collection[i] = '\t<li>' + h2Collection[i] + '</li>\n';
	}

	h2Collection = h2Collection.join('');
	h2Collection = '<ul>\n' + h2Collection + '</ul>\n';
	return h2Collection;
}

