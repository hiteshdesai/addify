/*
Author : Hitesh Desai
Updated : 28th Jan, 2014
Licence : MIT
*/
$.fn.addify = function() {
    this.click(function() {

            //generate random number.
            var intId = Math.floor(Math.random() * 9000) + 1000;

            var fieldWrapper = $("<div class=\"fieldwrapper file_inputwrapper\" id=\"field" + intId + "\"/>");
            //var fLabel = $("<label class=\"file_label\" id=\"label" + intId + "\">&nbsp;</label>");
            var fInput = $("<input type=\"file\" id=\"CounselingNoticeFiles" + intId + "\" class=\"counseling_file_input\" name=\"data[CounselingNotice][files][" + intId + "]\" />");
            var removeButton = $("<input type=\"button\" class=\"remove_file\" id=\"coun_btn\" value=\"X\" />");
            /*removeButton.click(function() {
             $(this).parent().remove();
             });*/
            //fieldWrapper.append(fLabel);
            fieldWrapper.append(fInput);
            fieldWrapper.append(removeButton);
            $("#input_file_tag").append(fieldWrapper);

            $('.multiple_file .fieldwrapper:first .counseling_file_input').addClass('first_input');
            $('.multiple_file .fieldwrapper:first .remove_file').addClass('first_remove_file');

        });
	 $(".remove_file").live("click", function() {
            $(this).parent().remove();
            $('.multiple_file .fieldwrapper:first .counseling_file_input').addClass('first_input');
            $('.multiple_file .fieldwrapper:first .remove_file').addClass('first_remove_file');
        });	
};
