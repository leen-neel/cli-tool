const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `generic`,
		tagLine: `by and249`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#34ebe8',
		color: '#000000',
		bold: true,
		clear
	});
};
