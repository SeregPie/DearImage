(function() {

	var parseInt = function(n) {
		n = Number.parseInt(n);
		if (Number.isFinite(n)) {
			return n;
		}
	};

	var parseFloat = function(n) {
		n = Number.parseFloat(n);
		if (Number.isFinite(n)) {
			return n;
		}
	};

	var CanvasData = {
		data: function() {
			return {
				frozenCanvas: Object.freeze([null]),
			};
		},

		computed: {
			canvas: {
				get: function() {
					return this.frozenCanvas[0];
				},

				set: function(value) {
					this.frozenCanvas = Object.freeze([value]);
				},
			},
		},
	};

	var BaseCanvasWrapper = {
		props: {
			canvas: {},
		},

		computed: {
			backgroundImage: (function() {
				var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" fill-opacity="0.15"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>';
				var image = 'url(data:image/svg+xml;base64,'+btoa(svg)+')';
				return function() {
					return image;
				};
			})(),
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
	};

	var BaseCanvasDialogListTile = {
		template: '#BaseCanvasDialogListTile',

		props: {
			title: {},
			canvas: {},
		},

		data: function() {
			return {
				dialog: false,
			};
		},

		watch: {
			dialog: {
				handler: function(value) {
					this.$emit('update:dialog', value);
				},
				immediate: true,
			},
		},

		methods: {
			apply: function() {
				this.dialog = false;
				this.$emit('apply');
			},
		},

		components: {
			BaseCanvasWrapper: BaseCanvasWrapper,
		},
	};

	var MyClipCanvasDialogListTile = {
		props: {
			value: {},
		},

		data: function() {
			return {
				dialog: false,

				inputX: 0,
				inputY: 0,
				inputW: undefined,
				inputH: undefined,
			};
		},

		computed: {
			getCanvas: function() {
				var x = parseInt(this.inputX);
				var y = parseInt(this.inputY);
				var w = parseInt(this.inputW);
				var h = parseInt(this.inputH);

				return function(canvas) {
					return PaperDuck.from(canvas).clip(x, y, w, h).canvas;
				};
			},
		},

		created: function() {
			var id;
			this.$watch(function() {
				clearTimeout(id);

				var dialog = this.dialog;
				var canvas = this.value;

				if (dialog && canvas) {
					var getCanvas = this.getCanvas;

					id = setTimeout(function() {
						this.canvas = getCanvas(canvas);
					}.bind(this), 1000);
				}
			});
		},

		methods: {
			apply: function() {
				this.$input('input', this.canvas);
				Object.assign(this, this.$options.data());
			},
		},

		components: {
			BaseCanvasDialogListTile: BaseCanvasDialogListTile,
		},
	};

	var app = new Vue({
		el: '#App',

		mixins: [CanvasData],

		methods: {
			loadFromFile: function() {
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
		},

		components: {
			BaseCanvasWrapper: BaseCanvasWrapper,

			MyClipCanvasDialogListTile: {
				template: '#App-MyClipCanvasDialogListTile',

				props: {
					value: {},
				},

				data: function() {
					return {
						dialog: false,

						inputX: 0,
						inputY: 0,
						inputW: undefined,
						inputH: undefined,
					};
				},

				computed: {
					getCanvas: function() {
						var x = parseInt(this.inputX);
						var y = parseInt(this.inputY);
						var w = parseInt(this.inputW);
						var h = parseInt(this.inputH);

						return function(canvas) {
							return PaperDuck.from(canvas).clip(x, y, w, h).canvas;
						};
					},
				},

				created: function() {
					var id;
					this.$watch(function() {
						clearTimeout(id);

						var dialog = this.dialog;
						var canvas = this.value;

						if (dialog && canvas) {
							var getCanvas = this.getCanvas;

							id = setTimeout(function() {
								this.canvas = getCanvas(canvas);
							}.bind(this), 1000);
						}
					});
				},

				methods: {
					apply: function() {
						this.$input('input', this.canvas);
						Object.assign(this, this.$options.data());
					},
				},

				components: {
					BaseCanvasDialogListTile: BaseCanvasDialogListTile,
				},
			}
		},
	});

	PaperDuck
		.load('https://i.imgur.com/JkNyq4P.jpg')
		.then(function(instance) {
			app.canvas = instance.canvas;
		});

})();
