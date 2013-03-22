var finder = exports;

var fnac = {
	Name: 'La Fnac',
	Skin: 'fnac'
}

var amazon = {
	Name: 'Amazon',
	Skin: 'amazon'
}

var teamalexandriz = {
	Name: 'Teamalexandriz',
	Skin: 'teamalexandriz'
}


var books = [
	{
		Title:'The Titre qui est quand meme super long que c\'est genre super chiant', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:320.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:320.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:320.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:320.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:amazon, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre', 
		Shop:fnac, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:32.50,
		Cover:'http://fakeimg.pl/100x200/'
	},
	{
		Title:'The Titre 2', 
		Shop:teamalexandriz, 
		Format:'epub',
		Description:'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricpes vehicula ut id elitNullam id dolor id nibh ultricpes vehicula ut id elit',
		Price:0,
		Cover:'http://fakeimg.pl/100x200/'
	}
];

finder.findbooks = function (callback) {
	callback(books);
}



