const fs = require("fs-extra");

fs.copy("./node_modules/bulma", "./assets/styles/_dependencies", err => {
	if (err) {
		throw err;
	}
	return console.log("imported bulma styles");
});
