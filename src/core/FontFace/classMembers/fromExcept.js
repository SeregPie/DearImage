export default function(value) {
	return this.is(value) ? value : this.from(value);
}
