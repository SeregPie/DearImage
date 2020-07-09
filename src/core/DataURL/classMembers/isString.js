export default function(string) {
	try {
		this.parse(string);
		return true;
	} catch {
		return false;
	}
}
