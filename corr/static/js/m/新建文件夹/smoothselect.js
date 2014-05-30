function _core_smoothSelectInit(obj){
        	var label_for = $(obj).attr("id")+"_dummy";
        	var title_str = $('label[for="'+label_for+'"]').html();
        	//TODO maybe
        	title_str = "";
        	
        	$.mobiscroll.i18n.zh.title = '<span class="dwbw dwb-c" style="float: right;width: 100%;padding-left: 110px;margin-left: -110px;"><span class="dwb dwb-e" role="button" tabindex="0">'+title_str+'</span></span>';
        	$.mobiscroll.i18n.zh.set_callback = function(c){};
        	
        	var ext = {preset: "select", theme: "ios7", mode: "scroller", display: "bottom", lang: "zh"};
        	
        	$(obj).val('').scroller('destroy').scroller(ext);
        }
        
        function _wrap_smoothSelectInit(obj){
        	var id_suffix = "-wrapper";
        	var id = $(obj).attr("id") + id_suffix;
        	var wrap_div = '<div data-role="fieldcontain" class="smooth-select-contain-div" id="'+id+'" style="display: block;"></div>';
        	$(obj).wrap(jQuery(wrap_div));
        }
        
        function _title_smoothSelectInit(obj, title){
        	var id_suffix = "-wrapper";
        	if(title == undefined){
        		title = "";
        	}
        	var wrap_id = $(obj).attr("id") + id_suffix;
        	//if($("#"+wrap_id).length > 0){//wrapped}
        	var label_for = $(obj).attr("id")+"_dummy";
        	var title_label = '<label for="'+label_for+'" class="ui-input-text">'+title+'</label>';
        	$("#"+wrap_id).prepend(jQuery(title_label));
        }
        
        function smoothSelectInit(obj, title){
        	_wrap_smoothSelectInit(obj);
        	_title_smoothSelectInit(obj, title);
        	_core_smoothSelectInit(obj);
        }