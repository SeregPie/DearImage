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

	$('[data-eval]')
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
		});

	$('[data-example]')
		.attr('data-example', null)
		.each(function() {
			PaperDuck.load(this, image => {
				$(this).click(function() {
					_run(image);
				});
				$(this).parent().find('.uk-overlay').text(`${image.getWidth()}x${image.getHeight()}`);
				if (!_runQueue.queue().length) {
					_run(image);
				}
			});
		});

	$('#loadFromURL').click(function() {
		UIkit.modal.prompt('URL').then(url => {
			PaperDuck.load(url, _run);
		});
	});

	$('#loadFromFile').change(function() {
		PaperDuck.load(this, _run);
	});

});