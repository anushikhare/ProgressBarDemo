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
	checkProgressBarToUpdate : function(progressChangeValue) {
		switch(this._selectValue){
		case '#progress1':
			this._updateProgressBar('progress1', 'value1', progressChangeValue); 
			break;
		case '#progress2':
			this._updateProgressBar('progress2', 'value2', progressChangeValue);
			break;
		case '#progress3':
			this._updateProgressBar('progress3', 'value3', progressChangeValue);
			break;
		default:
		}
	},
	_updateProgressBar : function(progressBarId, hiddenId, progressChangeValue) {
		currentValue = $('#'+hiddenId).val();
		newValue = parseInt(currentValue) + parseInt(progressChangeValue);
		progressBarIdInjQuery = '#'+progressBarId;
		if(newValue > 0 && newValue <= 100){
			$(progressBarIdInjQuery).css("width" , newValue+"%");
			$(progressBarIdInjQuery).css("background-color" , "#CCCCCC");
		}
			
		else if(newValue > 100){
			$(progressBarIdInjQuery).css("width" , "100%");
			$(progressBarIdInjQuery).css("background-color" , "#FF0000");
		}
		else{
			$(progressBarIdInjQuery).css("width" , "0%");
			newValue=0;
		}
		$('#'+hiddenId).val(newValue);
		$(progressBarIdInjQuery).attr("aria-valuenow",newValue);
		$(progressBarIdInjQuery + " span").text(newValue+"%");
	}
}