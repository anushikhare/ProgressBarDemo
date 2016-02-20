/**
 * 
 * @author Anuradha Shikhare
 * 
 * starts the progress bar demo
 * 
 */

$(document).ready(function(){
	//alert("done");
	var progress = new Progress('#progress1');
	$('#selectProgressBar').change(function() {
		progress.setSelectValue($('#selectProgressBar').val());
	});
	$('button').click(function (){
		//alert(this.value);
		progress.selectProgressBarToUpdate(this.value);
	});
});