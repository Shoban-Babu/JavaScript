/**********************************************************
Helper File for Reporter options
Framework : Protractor Automation Framework
Created By: CMT SAT Team
List of Reusuable Function:
Method Name: reportPass
Method Name: reportFail
Method Name:reportFailStep

**********************************************************/
var ReporterOptions = function () {

	this.reportPass = function (stepName) {

		if (browser.params.takeScreenshotsForPass) {

			browser.takeScreenshot().then(function (png) {
				allure.createStep(stepName, function () {

					allure.createAttachment('Screenshot_' + stepName.substr(0, stepName.length < 30 ? stepName.length : 30), function () { return new Buffer(png, 'base64'); }, 'image/png')();

				})();

			});
		} else {
			allure.createStep(stepName, function () { })();
		}

		if (allure._allure.getCurrentTest().status != 'failed') {
			allure._allure.endCase('passed', new Error(stepName), Date.now());
		}



	};
	this.reportFail = function (stepName, err) {

		var that = this;
		return browser.takeScreenshot().then(function (png) {
			that.createFailStep(stepName, function () {
				testStatus = false;
				allure.createAttachment(stepName.substr(0, stepName.length < 30 ? stepName.length : 30), function () { return new Buffer(png, 'base64'); }, 'image/png')();

			})();

		}).then(function () {
			var newErr = new Error(stepName);
			if (err != undefined) {
				newErr.stack = err.stack;
			}
			throw newErr;
		});
	};
	this.reportFailStep = function (stepName) {

		var that = this;

		return browser.takeScreenshot().then(function (png) {
			that.createFailStep(stepName, function () {
				testStatus = false;
				allure.createAttachment(stepName.substr(0, stepName.length < 30 ? stepName.length : 30), function () { return new Buffer(png, 'base64'); }, 'image/png')();

			})();
		});


	};
	this.getSeverity = function (severity) {
		if (severity.toUpperCase() === 'BLOCKER') {
			return allure.SEVERITY.BLOCKER;
		} else if (severity.toUpperCase() === 'CRITICAL') {
			return allure.SEVERITY.CRITICAL;
		} else if (severity.toUpperCase() === 'NORMAL') {
			return allure.SEVERITY.NORMAL;
		} else if (severity.toUpperCase() === 'MINOR') {
			return allure.SEVERITY.MINOR;
		} else if (severity.toUpperCase() === 'TRIVIAL') {
			return allure.SEVERITY.TRIVIAL;
		} else {
			return allure.SEVERITY.NORMAL;
		}
	};
	this.addSeverity = function (severity) {
		allure.severity(severity);
	};
	this.addEnvironment = function (name, value) {
		allure.addEnvironment(name, value);
	};
	this.addFeature = function (feature) {
		allure.feature(feature);
	};
	this.addStory = function (story) {
		allure.story(story);
	}; this.addLabel = function (name, value) {
		allure.addLabel(name, value);
	};

	this.getExecutionStatus = function () {
		return testStatus;
	};

	this.createFailStep = function (name, stepFunc) {

		var that = allure;

		return function () {
			var stepName = that._format(name, Array.prototype.slice.call(arguments, 0)),
				status = 'failed',
				result;
			that._allure.startStep(stepName);
			try {
				result = stepFunc.apply(this, arguments);
			}
			catch (error) {
				status = 'failed';
				throw error;
			}
			finally {
				if (that.isPromise(result)) {
					result.then(function () {
						that._allure.endStep('failed');
					}, function () {
						that._allure.endStep('failed');
					});
				} else {
					that._allure.endStep(status);
				}
			}
			that._allure.endCase(status, new Error(name), Date.now());
			return result;
		};

	};
};
module.exports = new ReporterOptions();
