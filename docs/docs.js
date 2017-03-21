$(function() {
	
	let _queue = $({});
	let _cccs = [];
	let _xxx = function(ggg, image) {
		let canvas = ggg(image);
		$(this).empty().append(canvas);
	};
	let _aaa = function(element, ggg) {
		_cccs.push(_xxx.bind(element, ggg));
	};
	let _fff = function(image) {
		_queue.clearQueue();
		_cccs.forEach(ccc => {
			_queue.queue(next => {
				ccc(image);
				setTimeout(next, 1);
			});
		});
	};
	
	$('body')
		.find('code')
			.replaceWith(function() {
				let code = $(this).text();
				return $('<div>', {
					class: 'uk-padding-small uk-flex uk-flex-column uk-flex-middle',
					append: [
						$(this).clone(),
						$('<div>', {
							css: {
								'background-image': 'url(docs/media/transparency-grid.png)',
							},
						}).each(function() {
							let ggg = (new Function('image', `return image${code}.toCanvas();`));
							_aaa(this, ggg);
						}),
					],
				});
			})
		.end()
		.find('img[src]')
			.each(function() {
				$(this).parent().find('.uk-overlay').text(`${this.naturalWidth}x${this.naturalHeight}`);
			})
			.click(function() {
				_fff(PicMap(this));
			})
			.first()
				.click()
			.end()
		.end();

});