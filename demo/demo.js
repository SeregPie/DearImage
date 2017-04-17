$(function() {

	const demo = {
		_queue: $({}),
		_elements: new Map(),

		addElement(element, code) {
			let run = (new Function('image', `return image${code};`));
			this._elements.set(element, run);
		},

		run(image) {
			PaperDuck.load(image).then(image => {
				this._queue.clearQueue();
				this._elements.forEach((run, element) => {
					this._queue.queue(next => {
						let canvas = run(image).toCanvas();
						$(element).empty().append(canvas);
						setTimeout(next, 1);
					});
				});
			});
		},

		isRunning(image) {
			return this._queue.queue().length > 0;
		},
	};

	$('.run')
		.replaceWith(function() {
			let text = $(this).text();
			let html = $(this).html();
			return $('<div>', {
				class: 'uk-padding-small uk-flex uk-flex-column uk-flex-middle',
				append: [
					$('<code>', {html}),
					$('<div>', {
						class: 'o-transparency-grid uk-preserve-width',
					}).each(function() {
						demo.addElement(this, text);
					})
				],
			});
		});

	$('.runFromImage')
		.removeClass('runFromImage')
		.click(function() {
			demo.run(this);
		})
		.one('load', function() {
			$(this)
				.parent()
				.find('.uk-overlay')
				.text(`${this.naturalWidth}x${this.naturalHeight}`);
			return false;
		})
		.each(function() {
			if (this.complete) {
				$(this).trigger('load');
			}
		})
		.first()
			.click()
		.end();

	$('.runFromURL')
		.removeClass('runFromURL')
		.click(function() {
			UIkit.modal.prompt('URL').then(url => {
				if (url) {
					demo.run(url);
				}
			});
		});

	$('.runFromFile')
		.removeClass('runFromFile')
		.click(function() {
			$('<input>', {
				type: 'file',
				change: function() {
					if (this.value) {
						demo.run(this);
					}
				},
			}).click();
		});

});