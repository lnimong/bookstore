requirejs.config({

	baseUrl : 'js/libs',

	paths : {

		jquery : 'jquery-1.9.0',
		knockout : 'knockout-2.2.1'

	},

	shim : {

		'jquery' : {
			exports : 'jQuery'
		},

		'knockout' : {
			exports : 'ko'
		}
	}


})

//require(['lib1']);