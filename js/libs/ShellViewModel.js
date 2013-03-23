define(['knockout', 'Ajax', 'ManageUI', 'Helpers'], function(ko, ajax, ui, easy){


	var ShellViewModel = function () {
		var self = this;

		self.CommandRequest =  ko.observable();
		self.SelectedCommand =  ko.observable(null);
		self.CommandsList = ko.observableArray();
		self.SelectedCommandOutput = ko.computed(function () {
			var command = this.SelectedCommand ();
			return   command === null ? '' : command.output;
		}, self);

		self.RunCommandLine = function () {

			ajax('/admin/shell/execute', ['req',self.CommandRequest()], function(dataOutput) {

				var newcommand = {
					commandLine : self.CommandRequest (),
					output : dataOutput,
					selectThis : function() {
						self.SelectedCommand(newcommand);
					}
				};
				self.SelectedCommand(newcommand);
				self.CommandsList.unshift(self.SelectedCommand());
				self.CommandRequest('');

			}.bind(this));
		}
	}


	var viewmodel = new ShellViewModel ();

	ui.whenSubmitCommand(function() {
		viewmodel.RunCommandLine();
	});

	easy.forEach(ui.htmlShellElts(), function(elt) {
		ko.applyBindings(viewmodel, elt)
	});

})