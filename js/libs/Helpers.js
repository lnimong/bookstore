define({
	forEach :  function (array, action) {
		for(var i = 0; i <  array.length; ++i) {
			action(array[i],i);
		}
	}
})