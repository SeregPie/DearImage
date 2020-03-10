import URL_parse from './parse';

export default function(string) {
	return !!URL_parse(string);
}
