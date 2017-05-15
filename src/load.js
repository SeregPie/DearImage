(function(PaperDuck) {
	
	//var URL = this.URL || this.webkitURL;

	PaperDuck.load = function(source) {
		return Promise.resolve().then(function() {
			if (source) {
				switch (typeof source) {
					case 'string': {
						var image = new Image();
						image.crossOrigin = 'anonymous';
						image.src = source;
						return this.load(image);
					}
					case 'object': {
						if (source instanceof HTMLImageElement) {
							if (source.complete) {
								return this(source);
							}
							return new Promise(function(resolve, reject) {
								source.addEventListener('load', function() {
									resolve(this(source));
								}.bind(this));
								source.addEventListener('error', function() {
									reject(source);
								});
							}.bind(this));
						}
						if (source instanceof HTMLInputElement) {
							if (source.type === 'file') {
								return this.load(source.files);
							}
							return this.load(source.value);
						}
						/*
						if (source instanceof Uint8Array) {
							//var blob = new Blob([file], { type: "image/png" });
							return this.load(new Blob([source]));
						} else
						if (source instanceof ArrayBuffer) {
							this.load(new Uint8Array(source));
						}
						*/
						if (source instanceof File) {
							var reader  = new FileReader();
							reader.readAsDataURL(source);
							return this.load(reader);
						}
						/*
						if (source instanceof Blob) {
							var urlObject = URL.createObjectURL(source);
							var image = new Image();
							image.src = urlObject;
							callback(this(image));
							URL.revokeObjectURL(urlObject);
						}
						*/
						if (source instanceof FileReader) {
							if (source.readyState > 1) {
								return this.load(source.result);
							}
							return new Promise(function(resolve, reject) {
								source.addEventListener('load', function() {
									this.load(source.result).then(resolve, reject);
								}.bind(this));
								source.addEventListener('error', function() {
									reject(source);
								});
							}.bind(this));
						}
						if (typeof source.length === 'number' && (source.length - 1) in source) {
							return this.load(source[0]);
						}
						break;
					}
				}
			}
			return this(source);
		}.bind(this));
	};

}).call(this, PaperDuck);