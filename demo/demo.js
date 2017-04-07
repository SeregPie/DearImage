$(function() {

	let _runQueue = $({});
	let _runElements = $();
	let _runHandler = function(event, image) {
		let {run} = event.data;
		_runQueue.queue(next => {
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
		.find('[data-eval]')
			.replaceWith(function() {
				let code = $(this).text();
				let run = (new Function('image', `return image${code};`));
				return $('<div>', {
					class: 'uk-padding-small uk-flex uk-flex-column uk-flex-middle',
					append: [
						$('<code>')
							.html($(this).html()),
						$('<div>')
							.addClass('o-transparency-grid uk-preserve-width')
							.on(':run', {run}, _runHandler)
							.each(function() {
								_runElements = $(_runElements.add(this));
							}),
					],
				});
			})
		.end()
		.find('[data-example]')
			.attr('data-example', null)
			.click(function() {
				let image = PaperDuck(this);
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