import URL_parse from './parse';

export default function(string) {
	try {
		URL_parse(string);
		return true;
	} catch {
		return false;
	}
}
