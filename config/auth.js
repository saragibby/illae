// expose config directly to app using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' : '1652042841743776',
		'clientSecret' : '69973333042b4dfceef808b1bfd0888f',
		'callbackURL' : 'http://localhost:8080/auth/facebook/callback'
	}, 

	'twitterAuth' : {
		'consumerKey' : 'yivHnSeryuXpbfFBViIlLXOTv',
		'consumerSecret' : 'yuYCGPeVAAINkLqDszWdVSrcgYpLyHcZ6R48oKZvDv9WiUagIo',
		'callbackURL' : 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' : '928954228678-264ev85p8o5n7cor73b08acela7952t5.apps.googleusercontent.com',
		'clientSecret' : 'tKaVWUbQKtTQMprtvDTmnwex',
		'callbackURL' : 'http://localhost:8080/auth/google/callback'
	}
};