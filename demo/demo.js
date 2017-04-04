$(function() {

	let _runQueue = $({});
	let _runElements = $();
	let _runHandler = function(event, image) {
		let {run} = event.data;
		_runQueue.queue(next => {
			//console.log($(this).data('code'));
			image = run(image);
			let canvas = image.toCanvas();
			$(this).empty().append(canvas);
			setTimeout(next, 1);
		});
		return false;
	};
	let _run = function(image) {
		_runQueue.clearQueue();
		_runElements.trigger(':run', [image]);
	};

	$('body')
		.find('code')
			.replaceWith(function() {
				let code = $(this).text();
				let run = (new Function('image', `return image${code};`));
				let runElement = $('<div>')
					.addClass('o-transparency-grid-background uk-preserve-width')
					//.data({code})
					.on(':run', {run}, _runHandler);
				_runElements = $(_runElements.add(runElement));
				return $('<div>', {
					class: 'uk-padding-small uk-flex uk-flex-column uk-flex-middle',
					append: [$(this).clone(), runElement],
				});
			})
		.end()
		.find('img[src]')
			.click(function() {
				let image = PicMap(this);
				_run(image);
			})
			.one('load', function() {
				$(this)
					.parent()
					.find('.uk-overlay')
					.text(`${this.naturalWidth}x${this.naturalHeight}`);
			})
			.first()
				.one('load', function() {
					$(this).click();
				})
			.end()
			.each(function() {
				if (this.complete) {
					$(this).triggerHandler('load');
				}
			})
		.end();

});