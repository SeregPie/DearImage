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
			clipDialog: {
				handler: function() {
					this.clipInputX = 0;
					this.clipInputY = 0;
				},
				immediate: true,
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
							//console.log(error);
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

		components: {
			MyCanvasWrapper: {
				props: {
					canvas: {},
				},

				computed: {
					backgroundImage: function() {
						var svg = '\
							<svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" fill-opacity="0.15">\
								<rect x="1" width="1" height="1"/>\
								<rect y="1" width="1" height="1"/>\
							</svg>\
						';
						return 'url(data:image/svg+xml;base64,'+btoa(svg)+')';
					},
				},

				watch: {
					canvas: {
						handler: function(canvas) {
							var canvasContainer = this.$refs.canvasContainer;
							if (canvasContainer) {
								while (canvasContainer.firstChild) {
									canvasContainer.removeChild(canvasContainer.firstChild);
								}
								if (canvas) {
									canvasContainer.appendChild(canvas);
								}
							}
						},
						immediate: true,
					}
				},

				render: function(createElement) {
					var backgroundImage = this.backgroundImage;

					return (
						createElement('div', {
							style: {
								position: 'relative',
								width: '100%',
								height: '100%',
							},
						}, [
							createElement('div', {
								style: {
									position: 'absolute',
									top: 0,
									right: 0,
									bottom: 0,
									left: 0,
									overflow: 'auto',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								},
							}, [
								createElement('div', {
									style: {
										background: backgroundImage,
										backgroundSize: '16px 16px',
										backgroundRepeat: 'repeat',
										lineHeight: 0,
									},
									ref: 'canvasContainer',
								})
							])
						])
					);
				},
			},
		},
	});

	PaperDuck
		.load('https://i.imgur.com/JkNyq4P.jpg')
		.then(function(instance) {
			vm.canvas = instance.canvas;
		});

})();
