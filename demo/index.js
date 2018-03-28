(function() {

	var vm = new Vue({
		el: '#App',

		data: {
			canvas: null,
		},

		watch: {
			canvas: function(newCanvas, oldCanvas) {
				if (oldCanvas) {
					this.$refs.canvasContainer.removeChild(oldCanvas);
				}
				if (newCanvas) {
					this.$refs.canvasContainer.appendChild(newCanvas);
				}
			},
		},

		methods: {
			loadFromFileInput: function() {
				var input = document.createElement('input');
				input.type = 'file';
				input.addEventListener('change', function() {
					PaperDuck
						.load(input)
						.then(function(instance) {
							this.canvas = instance.canvas;
						}.bind(this))
						.catch(function(error) {
							console.log(error);
							// pass
						}.bind(this));
				}.bind(this));
				input.click();
			},

			flop: function() {
				this.canvas = PaperDuck.from(this.canvas).flop().canvas;
			},

			flip: function() {
				this.canvas = PaperDuck.from(this.canvas).flip().canvas;
			},

			rotate90: function() {
				this.canvas = PaperDuck.from(this.canvas).rotate90().canvas;
			},

			rotate180: function() {
				this.canvas = PaperDuck.from(this.canvas).rotate180().canvas;
			},

			rotate270: function() {
				this.canvas = PaperDuck.from(this.canvas).rotate270().canvas;
			},
		},
	});

	PaperDuck
		.load('https://i.imgur.com/JkNyq4P.jpg')
		.then(function(instance) {
			vm.canvas = instance.canvas;
		});

})();
