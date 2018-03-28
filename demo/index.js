(function() {

	var vm = new Vue({
		el: '#App',

		data: {
			canvas: null,

			clipDialog: false,
			clipInputX: undefined,
			clipInputY: undefined,
		},

		computed: {
			clipCanvas: function() {
				var dialog = this.clipDialog;
				var canvas = this.canvas;
				var x = Number.parseInt(this.clipInputX);
				var y = Number.parseInt(this.clipInputY);

				if (dialog && canvas) {
					return PaperDuck.from(canvas).clip(x, y).canvas;
				}
				return null;
			},
		},

		watch: {
			canvas: function(newCanvas, oldCanvas) {
				if (this.$refs.canvasContainer) {
					if (oldCanvas) {
						if (this.$refs.canvasContainer === oldCanvas.parentNode) {
							this.$refs.canvasContainer.removeChild(oldCanvas);
						}
					}
					if (newCanvas) {
						this.$refs.canvasContainer.appendChild(newCanvas);
					}
				}

			},

			clipDialog: {
				handler: function() {
					this.clipInputX = 0;
					this.clipInputY = 0;
				},
				immediate: true,
			},

			clipCanvas: function(newCanvas, oldCanvas) {
				if (this.$refs.clipCanvasContainer) {
					if (oldCanvas) {
						if (this.$refs.clipCanvasContainer === oldCanvas.parentNode) {
							this.$refs.clipCanvasContainer.removeChild(oldCanvas);
						}
					}
					if (newCanvas) {
						this.$refs.clipCanvasContainer.appendChild(newCanvas);
					}
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

			applyClip: function() {
				this.canvas = this.clipCanvas;
				this.clipDialog = false;
			},
		},
	});

	PaperDuck
		.load('https://i.imgur.com/JkNyq4P.jpg')
		.then(function(instance) {
			vm.canvas = instance.canvas;
		});

})();
