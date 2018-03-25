(function() {

	var vm = new Vue({
		el: '#App',

		data: {
			canvas: null,

			drawer: true,
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
