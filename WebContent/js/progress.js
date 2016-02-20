/**
 * 
 * @author Anuradha Shikhare
 * 
 * Handles the behaviour and interaction of the progress bars
 * 
 */

function Progress(selectValue) {
	this._selectValue = selectValue;
}

Progress.prototype = {
	setSelectValue : function(selectValue) {
		this._selectValue = selectValue;
	},
	selectProgressBarToUpdate : function(progressChangeValue) {
		switch(this._selectValue){
		case '#progress1':
			this._updateProgressBar('progress1', 'value1', progressChangeValue);
			break;
		case '#progress2':
			this._updateProgressBar('progress2', 'value2', progressChangeValue);
			break;
		case '#progress1':
			this._updateProgressBar('progress3', 'value3', progressChangeValue);
			break;
		default:
		}
	},
	_updateProgressBar : function(progressBarId, hiddenId, progressChangeValue) {
		currentValue = $('#'+hiddenId).val();
		newValue = parseInt(currentValue) + parseInt(progressChangeValue);
		$('#'+progressBarId).css("width" , newValue+"%");
		$'#'+(hiddenId).val(newValue);
		$('#'+progressBarId).attr("aria-valuenow",newValue);
	}
}