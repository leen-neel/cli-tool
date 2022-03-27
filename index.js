#!/usr/bin/env node

/**
 * generic-cli
 * This is a test
 *
 * @author leen-neel <https://and249.codes/>
 */

const axios = require('axios');

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	if (input.includes(`joke`)) {
		const joke = await axios.get(
			'https://api.chucknorris.io/jokes/random/'
		);

		console.log(joke.data.value);
	}

	debug && log(flags);
})();
