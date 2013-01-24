/**
 * IMJS
 * https://github.com/imjs/imjs
 * Copyright (c) 2013 JS-SIG of the Front-End Development Dept of IMJ Corporation.
 * Licensed under the MIT license.
 */
var IMJS = {
	
	_commands: [],
	
	addCommand: function (cmd) {
		this._commands.push(cmd);
	},
	
	ready: function () {
		// put code that execute below when ready-event fired
		for (var i = 0, i < this._commands.length; i++) _commands[i]();
	}
};


// put code that extend some utility methods here
alert('hoge');



IMJS.ready();
