module.exports = {
	preprocess: require('../../src/index.js').preprocess({
		// config: 'tailwind.config.js',
		compile: false,
		prefix: 'windi-',
		globalPreflight: true,
		globalUtility: true, 
	}),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: '@sveltejs/adapter-node',

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
