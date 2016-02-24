/**
 *
 * @author Anuradha Shikhare
 *
 * starts the progress bar demo
 *
 */
$(document).ready(function () {
    var progress = new Progress('#progress1');
    $('#selectProgressBar').change(function () {
        progress.setSelectValue($('#selectProgressBar').val());
    });
    $('button').click(function () {
        progress.checkProgressBarToUpdate(this.value);
    });
});