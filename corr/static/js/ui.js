var current_city_sel;
function setCity(o){
	current_city_sel = o;
	$("#main-page").hide();
	$("#select-city").show();
}

$(document).ready(function(){
	// $("ul.selector li a:not([name])").click(function(){
		// //alert("ok");
		// current_city_sel.val($(this).html());
		// $("#main-page").show();
		// $("#select-city").hide();
	// });
	$("#hot-city li").click(function(){
		current_city_sel.val($(this).text());
		$("#main-page").show();
		$("#select-city").hide();
	});
	
	$("#more-city li:not([id])").click(function(){
		current_city_sel.val($(this).text());
		$("#main-page").show();
		$("#select-city").hide();
	});
});

function submitForm(){
	$("form").submit();
	
	setTimeout(function(){
		// $("input.valid").bind("keydown",function(){
			// console.warn($(this));
		// });
		$("input.error").bind("keydown",function(){
			var error_stat = $(this).next().css("display");
			if(error_stat == "block"){
				$("body").scrollTop($(":focus").offset().top-53);
			}
		});
	}, 500);
	
}

function validateCardNum(obj,group){
	var value = obj.value;
	if(!group)group = 4;
	value = value.replace(/[\s|-]*/g, "");
	var result = [];
	for (var i = 0; i < value.length; i++) {
		if (i % group == 0 && i != 0) {
			result.push("  -  " + value.charAt(i));
		} else {
			result.push(value.charAt(i));
		}
	}
	obj.value = result.join(""); 
}

function tab_switch(o){
	$('.tab-switch li').removeClass('active');
	o.addClass('active');
	$("div.content").hide();
	$("#"+o.attr('name')).show();
}

function payManeraTabSwitch(o){
	$(".tab-switch .active").removeClass("active");
	$(o).addClass("active");
	$("#form1 .tab-card").hide();
	$('.'+$(o).attr('name')).show();
}
/*0504 wzg start****************************************/
//label's name is select id then title is label's content.
//select node must give an id and not null.










function hookAllSelect(){
	$("select").each(function(){
//		smoothSelectInit($(this));
	});
	//return;
}

$(document).ready(function(){
    //_core_smoothSelectInit($('#test_select'));
    hookAllSelect();
	//alert("ready");
	// setInterval(function(){
		// $(".selector").scrollTop(parseInt($(".selector").scrollTop())+10);
	// },1000);
	//renderSmoothDate("2014,6,4","2014,8,12");
	//renderSmoothDateYear(2014);
	
	//renderSmoothDateByYearEx(2016);
	
	//scroll to top when validate failed
	$("a[onclick='submitForm()']").click(function(){
		setTimeout(function(){
			if($(":focus").length != 0){
				//invalid
				$("body").scrollTop($(":focus").offset().top-53);
				$("body").unmask();
			}else{
				//valid page jump
				
			}
		},500);
	});
	
	
	
});

function touchDummy(e){
	// alert();
	e.preventDefault();
}
/*0504 wzg end****************************************/
/*0507 wzg start****************************************/
/*0507 wzg end****************************************/
/*0511 wzg start****************************************/
Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};

function _getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

function getDates(s_date,e_date){
	return _getDates(new Date(s_date),new Date(e_date));
}

function getThisYearDates(year){
	var _y_s = new Date(year+",01,01");
	var _y_e = new Date(year+",12,31");
	return getDates(_y_s,_y_e);
}

function getPassedDates(t_date){
	var _t_date = new Date(t_date);
	var _y_start = new Date(_t_date.getFullYear()+'-1-1');
	//var _y_end =_t_date.year()+'-12-31';
	return getDates(_y_start, _t_date);
}

function getUnpassedDates(t_date){
	var _t_date = new Date(t_date);
	var _y_end = new Date(_t_date.getFullYear()+'-12-31');
	return getDates(_t_date,_y_end);
}

//renderSmoothDate('2014,05,2','2014,8,2')

function renderSmoothDateWeekLine(){
	return '<div class="smooth-date-week-line smooth-date-date"></div>';
}

function renderSmoothDateMonthBody(month,year){
	//return '<div id="'+(month)+year+'" class="smooth-date-month-content"></div>';
	//hide when rendering month block
	return '<div id="'+(month)+year+'" class="smooth-date-month-content"></div>';
}

function renderSmoothDateMonthTitle(month,year){
	var cero = '';
	if(month+1<10){
		cero = '0';
	}
	var _html_dom = '<div class="smooth-date-month-title"><h3 onselectstart="return false;" unselectable="on">'+cero+(month+1)+' '+year+'<span onclick="smoothDateSel()" class="smooth-date-sel-bnt fa-angle-down"></span>'+'</h3><div class="smooth-date-week-line"><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div><div>日</div></div></div>';
	return _html_dom;
}

function renderWeekBody(){
	var _html_dom = '<div class="smooth-date-week-content"></div>';
	return _html_dom;
}

function correspondDateMonthId(date){
	return (date.getMonth())+''+date.getFullYear();
}

function correspondDateDateId(date){
	return date.getFullYear()+'-'+(date.getMonth())+'-'+date.getDate();
}

function fullWeekHead(date){
	var _day = date.getDay();
	var _month = date.getMonth();
	var _year = date.getFullYear();
	var _month_head = new Date(_year,_month,1);
	var _full_day = _month_head.getDay() - 1;
	if(_full_day < 0){
		return 6;
	}else{
		return _full_day;
	}
}

function renderUnvisibilityDay(html){
	var inner = (html == undefined ? "na" : html);
	return '<div class="smooth-date-noday"><span>'+inner+'</span></div>';
}

function renderActiveDay(html){
	var inner = (html == undefined ? "na" : html);
	return '<div class="smooth-date-active"><span>'+inner+'</span></div>';
}

function renderCommonDay(date){
	var inner = (date == undefined ? "na" : date.getDate());
	var _id = date.getFullYear()+"-"+(date.getMonth())+"-"+date.getDate();
	return '<div class="smooth-date-disabled" onclick="smoothDateClick(this)" id="'+_id+'"><span>'+inner+'</span></div>';
}

function renderDisabledDay(html){
	var inner = (html == undefined ? "na" : html);
	return '<div class="smooth-date-disabled"><span>'+inner+'</span></div>';
}

function renderYearBlock(year){
	return '<div class="smooth-date-year" id="'+year+'"></div>';
}

function getYearAllDate(year){
	var _date_s = new Date(year+",1,1");
	var _date_e = new Date(year+",12,31");
	return _getDates(_date_s,_date_e);
}

function renderSmoothDate(s_date, e_date){
	
	var prev_out_date = getPassedDates(s_date);
	var dates = getDates(s_date, e_date);
	var next_out_date = getUnpassedDates(e_date);
	
	var cur_month = -1;
	if(prev_out_date.length > 0)
		var cur_day = prev_out_date[0].getDay();
	
	var new_month = true;
	for(i=0; i<prev_out_date.length; i++){
		
		if(prev_out_date[i].getMonth() != cur_month){
			new_month = true;
		}else{
			new_month = false;
		}
		
		cur_month = prev_out_date[i].getMonth();
		
		if(new_month){
			//new month add
			var _month = prev_out_date[i].getMonth();
			var _year = prev_out_date[i].getFullYear();
			var month_body = jQuery(renderSmoothDateMonthBody(_month, _year)).html(renderSmoothDateMonthTitle(_month, _year));
			month_body.append(renderWeekBody());
			$(".smooth-date-selector").append(month_body);
			
			
			var full_day = fullWeekHead(prev_out_date[i]);

			//full month head with unvisilibile
			var _full_day = fullWeekHead(prev_out_date[i]);
			var _month_content_body = $("#"+correspondDateMonthId(prev_out_date[i])+" .smooth-date-week-content");
			_month_content_body.append(jQuery(renderSmoothDateWeekLine()));
			
			//full of dummy day
			var _month_content_body_line = $("#"+correspondDateMonthId(prev_out_date[i])+" .smooth-date-week-content .smooth-date-week-line");
			for(_loop=0;_loop<_full_day;_loop++){
				_month_content_body_line.append(jQuery(renderUnvisibilityDay(full_day)));
			}
			
			var _last_week_line = $("#"+correspondDateMonthId(prev_out_date[i])+" .smooth-date-week-content .smooth-date-week-line:last-child");
			_last_week_line.append(jQuery(renderDisabledDay(prev_out_date[i].getDate())));
			
		}else{
			//old month prcessing
			var full_day = fullWeekHead(prev_out_date[i]);
			
			var _last_week_line = $("#"+correspondDateMonthId(prev_out_date[i])+" .smooth-date-week-content .smooth-date-week-line:last-child");
			_last_week_line.append(jQuery(renderDisabledDay(prev_out_date[i].getDate())));
			
			if(prev_out_date[i].getDay() == 1){
				//full month head with unvisilibile
				var _full_day = fullWeekHead(prev_out_date[i]);
				var _month_content_body = $("#"+correspondDateMonthId(prev_out_date[i])+" .smooth-date-week-content");
				_month_content_body.append(jQuery(renderSmoothDateWeekLine()));
			}else{
			}
		}
	}
}


function renderSmoothDateByYear(year){
	var cur_month = -1;
	var _date_array = getYearAllDate(year);
	var new_month = true;
	for(i=0; i<_date_array.length; i++){
		
		if(_date_array[i].getMonth() != cur_month){
			new_month = true;
		}else{
			new_month = false;
		}
		
		cur_month = _date_array[i].getMonth();
		
		if(new_month){
			//new month add
			var _month = _date_array[i].getMonth();
			var _year = _date_array[i].getFullYear();
			var month_body = jQuery(renderSmoothDateMonthBody(_month, _year)).html(renderSmoothDateMonthTitle(_month, _year));
			month_body.append(renderWeekBody());
			$(".smooth-date-selector").append(month_body);
			
			
			var full_day = fullWeekHead(_date_array[i]);

			//append new week line
			//full month head with unvisilibile
			var _full_day = fullWeekHead(_date_array[i]);
			var _month_content_body = $("#"+correspondDateMonthId(_date_array[i])+" .smooth-date-week-content");
			_month_content_body.append(jQuery(renderSmoothDateWeekLine()));
			
			var _month_content_body_line = $("#"+correspondDateMonthId(_date_array[i])+" .smooth-date-week-content .smooth-date-week-line");
			for(_loop=0;_loop<_full_day;_loop++){
				_month_content_body_line.append(jQuery(renderUnvisibilityDay(full_day)));
			}
			
			//var _last_week_line = $("#"+correspondDateMonthId(_date_array[i])+" .smooth-date-week-content .smooth-date-week-line:last-child");
			//_last_week_line.append(jQuery(renderCommonDay(_date_array[i])));
			
		}else{
			//old month prcessing
			//var full_day = fullWeekHead(_date_array[i]);
			
			var _last_week_line = $("#"+correspondDateMonthId(_date_array[i])+" .smooth-date-week-content .smooth-date-week-line:last-child");
			_last_week_line.append(jQuery(renderCommonDay(_date_array[i])));
			
			if(_date_array[i].getDay() == 1){
				//full month head with unvisilibile
				//append a new line to month content
				var _full_day = fullWeekHead(_date_array[i]);
				var _month_content_body = $("#"+correspondDateMonthId(_date_array[i])+" .smooth-date-week-content");
				_month_content_body.append(jQuery(renderSmoothDateWeekLine()));
			}else{
				
			}
		}
	}
}

function setActiveDay(day){
	if($("#"+day).length == 0){
		return false;
	}
	$("#"+day).removeClass();
	$(".smooth-date-active").removeClass("smooth-date-active");
	$("#"+day).addClass("smooth-date-active");
	return true;
}

function setDisabledDay(day){
	if($("#"+day).length == 0){
		return false;
	}
	$("#"+day).removeClass();
	$("#"+day).addClass("smooth-date-disabled");
	return true;
}

function setCommonDay(day){
	$("#"+day).removeClass();
}

function daysRange(year, s_date, e_date){
	var _d_s_date = new Date(s_date);
	var _d_e_date = new Date(e_date);
	
	if(year < _d_s_date.getFullYear() || _d_e_date.getFullYear() < year){
		$("#"+year+" div.smooth-date-week-line.smooth-date-date div[class!='smooth-date-noday']").addClass("smooth-date-disabled");
	}
	
	// _d_s_date = _d_s_date.addDays(-1);
	// _d_e_date = _d_e_date.addDays(1);
	
	if(year == _d_s_date.getFullYear()){
		var passed_dates = getPassedDates(s_date);
		for(i=0; i<passed_dates.length; i++){
			var _d_id = year+'-'+(passed_dates[i].getMonth())+'-'+passed_dates[i].getDate();
			setDisabledDay(_d_id);
		}
	}
	
	if(year == _d_e_date.getFullYear()){
		var unpassed_dates = getUnpassedDates(e_date);
		for(i=0; i<unpassed_dates.length; i++){
			var _d_id = year+'-'+(unpassed_dates[i].getMonth())+'-'+unpassed_dates[i].getDate();
			setDisabledDay(_d_id);
		}
	}
	
	setCommonDay(correspondDateDateId(_d_s_date));
	setCommonDay(correspondDateDateId(_d_e_date));
	
	
}

function renderSmoothDateByYearEx(year,month){
	

	$(".smooth-date-month-content").hide();

	
	$(".smooth-date-year").hide();
	
	if($("#"+year).length != 0){
		$("#"+year).show();
		return;
	}
	$(".smooth-date-selector").append(jQuery(renderYearBlock(year)));
	
	
	var _date_array = getYearAllDate(year);
	
	var new_month = true;
	var cur_month = -1;
	for(i=0; i<_date_array.length; i++){
		if(cur_month == _date_array[i].getMonth()){
			new_month = false;
		}else{
			new_month = true;
		}
		cur_month = _date_array[i].getMonth();
		if(new_month){
			//prepare a month, title & body
			var _month = _date_array[i].getMonth();
			var _year = _date_array[i].getFullYear();
			var month_body = jQuery(renderSmoothDateMonthBody(_month, _year)).html(renderSmoothDateMonthTitle(_month, _year));
			month_body.append(renderWeekBody());
			//append a month to month body
			$(".smooth-date-selector #"+year).append(month_body);
// 			
			// //dummy day
			var dummy_day = fullWeekHead(_date_array[i]);
// 			
			// //append a week line
			var cur_week_content = $("#"+correspondDateMonthId(_date_array[i])+" .smooth-date-week-content:last-child");
			cur_week_content.append(jQuery(renderSmoothDateWeekLine()));
			
			var cur_week_line = $("#"+correspondDateMonthId(_date_array[i])+" .smooth-date-week-line.smooth-date-date").last();
			
			//append dummy day
			for(j=0; j< dummy_day; j++){
				cur_week_line.append(jQuery(renderUnvisibilityDay(dummy_day)));
			}
			//full days to first week line
			for(k=dummy_day;k<7;k++){
				cur_week_line.append(jQuery(renderCommonDay(_date_array[i])));
				i++;
			}
			//back to 1 step
			i--;
			// var cur_week_line = $("#"+correspondDateMonthId(_date_array[i])+"div.smooth-date-week-line.smooth-date-date:last-child");
		}else{
			if(_date_array[i].getDay() == 1){
				var _cur_week_content = $("#"+correspondDateMonthId(_date_array[i])+" .smooth-date-week-content:last-child");
				_cur_week_content.append(jQuery(renderSmoothDateWeekLine()));
			}
			var _cur_week_line = $("#"+correspondDateMonthId(_date_array[i])+" .smooth-date-week-line.smooth-date-date").last();
			_cur_week_line.append(jQuery(renderCommonDay(_date_array[i])));
		}
	}
	//daysRange(year, '2014', '2015');
}

//show a single month
function renderSmoothDateExWrap(year,month){
	renderSmoothDateByYearEx(year);
	$("#"+month+''+year).show();
	$("#"+year).show();
}

$(document).ready(function(){
	$(".smooth-date-selector-action-bar h2").click(function(){
		//$('#test_default').trigger("click");
		$('#test_default').click();
	});
});


(function($){
	$.fn.smoothdate = function(options){
		
	};
	//var option = $.extend(defaults, options);
	// this.each(function(){
// 		
	// });
})(jQuery);

function string2Date(str){
	var ymd = str.split('-');
	var y = ymd[0];
	var m = ymd[1]-1;
	var d = ymd[2];
	return new Date(y,m,d);
}

//alert(getDates('1999-1-1','2010-3-7').length);
//var a=getDates(new Date('2014,1,1'),new Date('2014,12,31'));
//alert(a[0]);

/*0511 wzg end****************************************/
/*0514 wzg start****************************************/

function smoothDateShow(){
	$("body").children().addClass("smooth-date-selector-hide");
	$(".smooth-date-selector").removeClass("smooth-date-selector-hide");
}
function smoothDateHide(){
	$("body").children().removeClass("smooth-date-selector-hide");
	$(".smooth-date-selector").addClass("smooth-date-selector-hide");
}

function smoothHookClick(o, start_date, end_date, date_format){
	
	if(date_format == undefined){
		date_format = "";
	}
	
	if($(".smooth-date-selector").length == 0){
		var main_block = '<div style="" class="smooth-date-selector smooth-date-selector-hide"><div style="display:none" id="select-title">日期选择</div><div id="smooth-current-output-format">'+date_format+'</div><div id="smooth-current-input-id"></div><div class="smooth-date-selector-action-bar"><a onclick="smoothDateCancel()"  class="btn btn-link btn-left">取消</a><h2>选择日期</h2><a onclick="smoothDateCommit()"  class="btn btn-link btn-right">确定</a></div></div>';
		$("body").append(jQuery(main_block));
	}
	$("#smooth-current-input-id").html($(o).attr("id"));
	$("#smooth-current-output-format").html(date_format);
	
	smoothDateShow();
	//test_rangeDate();
	if(start_date == undefined || end_date == undefined)
		test_rangeDate();
	else
		rangeDate(start_date, end_date);
}
function smoothDateSel(){
	$('#test_default').click();
}
function smoothDateClick(o){
	if($(o).hasClass("smooth-date-disabled")){
		return;
	}
	$(".smooth-date-active").removeClass("smooth-date-active");
	$(o).addClass("smooth-date-active");
}
function smoothDateCancel(){
	smoothDateHide();
	$("#random-month").remove();
}
function smoothDateCommit(){
	if($(".smooth-date-active").length){
		var raw_str_date = $(".smooth-date-active").attr("id");
		var ymd_array = raw_str_date.split('-');
		ymd_array[1]++;
		var str_date = ymd_array[0]+'-'+ymd_array[1]+'-'+ymd_array[2];
		
		var format_templ = $("#smooth-current-output-format").html();
		if(format_templ == ""){
			
		}else{
			var date_format = new Date(ymd_array[0], ymd_array[1]-1, ymd_array[2]);
			str_date = date_format.t_format(format_templ);
		}
		
		$("#"+$("#smooth-current-input-id").html()).val(str_date).change();
	}
	smoothDateHide();
	$("#random-month").remove();
}

function getThisMonthAllDates(year, month){
	var _month_start = new Date(year, month, 1);
	var _month_end = 0;
	if(month == 11){
		_month_end = new Date(year, month, 31);
	}else{
		_month_end = new Date(year, month+1, 1);
		_month_end = _month_end.addDays(-1);
	}
	return _getDates(_month_start, _month_end);
}

function compareDateBaseMonth(_date_1, _date_2){
	
	var _y_1 = _date_1.getFullYear();
	var _m_1 = _date_1.getMonth();
	
	var _y_2 = _date_2.getFullYear();
	var _m_2 = _date_2.getMonth();
	
	var _c_1 = _y_1 * 100 + _m_1;
	var _c_2 = _y_2 * 100 + _m_2;
	
	return (_c_1 - _c_2);
	
}

function compareDateBaseDate(_date_1, _date_2){
	
	var _y_1 = _date_1.getFullYear();
	var _m_1 = _date_1.getMonth();
	var _d_1 = _date_1.getDate();
	
	var _y_2 = _date_2.getFullYear();
	var _m_2 = _date_2.getMonth();
	var _d_2 = _date_2.getDate();
	
	var _c_1 = _y_1*10000 + (_m_1+1)*100 + _d_1;
	var _c_2 = _y_2*10000 + (_m_2+1)*100 + _d_2;
	
	return (_c_1 - _c_2);
	
}

function rangeDate(s_date, e_date){
	if(s_date >= e_date){
		//error
		return;
	}
	//month recursive
	var _i_date = new Date(s_date);
	_i_date.setDate(1);
	do{
		renderThisMonthBlock(_i_date.getFullYear(), _i_date.getMonth(), 'random-month');
		_i_date.setMonth(_i_date.getMonth()+1);
	}
	while(compareDateBaseMonth(_i_date, e_date) <= 0);
	
	//enable days
	//setTimeout(function(){
		var _j_date = new Date(s_date);
		//console.warn(compareDateBaseDate(_j_date, e_date));
		while(compareDateBaseDate(_j_date, e_date) <= 0){
			var _id = _j_date.getFullYear()+"-"+(_j_date.getMonth())+"-"+_j_date.getDate();
			//console.log(_id);
			$("#"+_id).removeClass("smooth-date-disabled");
			_j_date.setDate(_j_date.getDate()+1);
		}
	//},3000);
	
	
}

function renderThisMonthBlock(year, month, scope, month_date_range){
	if(!$("#"+scope).length){
		$(".smooth-date-selector").append(jQuery(renderYearBlock(scope)));
	}
	
	var month_body = jQuery(renderSmoothDateMonthBody(month, year)).html(renderSmoothDateMonthTitle(month, year));
	month_body.append(renderWeekBody());
	
	$(".smooth-date-selector #"+scope).append(month_body);
	
	var first_day = new Date(year, month, 1);
	
	var cur_week_content = $("#"+correspondDateMonthId(first_day)+" .smooth-date-week-content:last-child");
	
	//output a new week line
	cur_week_content.append(jQuery(renderSmoothDateWeekLine()));
	
	//full dummy days
	var cur_week_line = $("#"+correspondDateMonthId(first_day)+" .smooth-date-week-line.smooth-date-date").last();
	
	var dummy_day_count = fullWeekHead(first_day);
	var month_all_days = getThisMonthAllDates(year, month);
	for(j=0; j< dummy_day_count; j++){
		cur_week_line.append(jQuery(renderUnvisibilityDay(dummy_day_count)));
	}
	
	var index = 0;
	for(k=dummy_day_count;k<7;k++){
		cur_week_line.append(jQuery(renderCommonDay(month_all_days[index])));
		index++;
	}
	
	
	
	for(;index<month_all_days.length;index++){
		if(month_all_days[index].getDay() == 1){
			//new week line
			cur_week_content.append(jQuery(renderSmoothDateWeekLine()));
		}
		_cur_week_line = $("#"+correspondDateMonthId(first_day)+" .smooth-date-week-line.smooth-date-date").last();
		_cur_week_line.append(jQuery(renderCommonDay(month_all_days[index])));
	}
}


function test_renderThisMonthBlock(){
	for(i=0;i<3;i++){
		renderThisMonthBlock(2014, i, 'aaa');
	}
}

function test_rangeDate(){
	rangeDate(new Date(2014,2,5),new Date(2015,0,4));
}


/*0514 wzg end****************************************/

/*0515 wzg start****************************************/
function validateDate(obj,group){
	var value = obj.value;
	value = value.replace(/[\s|-]*/g, "");
		var result = [];
		for (var i = 0; i < value.length; i++){
			if(i==4){
				result.push("-" + value.charAt(i));
			}else if(i==6){
				result.push("-" + value.charAt(i));
			}else{
				result.push(value.charAt(i));
			}
			
		}
		obj.value = result.join(""); 
}
function validateDateUp(o){}

function disabledWeekend(date_array){
	for(i=0;i<date_array.length;i++){
		if(date_array[i].getDay() == 6 || date_array[i].getDay() == 0){
			var id = correspondDateDateId(date_array[i]);
			setDisabledDay(id);
		}
		
	}
}

function hookSmoothDate(o, s_d, e_d, date_format, callback){
	$(o).attr("readonly",true);
	$(o).click(function(){
		smoothHookClick(o, s_d, e_d, date_format);
		
		//set default active day
		
		//for old browser
		var _default_date_str_a = ($(o).val()+"").split('-');
		var _year = _default_date_str_a[0];
		var _month = _default_date_str_a[1]-1;
		var _date = _default_date_str_a[2];
		var _default_date = new Date(_year, _month, _date);
		//for moderno browser
		//var _default_date = new Date($(o).val());
		
		var set_default_success = false;
		if(_default_date){
			set_default_success = setActiveDay(correspondDateDateId(_default_date));
		}
		
		if(!set_default_success){
			//set by today
			var today_id = correspondDateDateId(new Date());
			var today_jo = $("#"+today_id);
			if(today_jo.length == 0 || today_jo.hasClass("smooth-date-disabled")){
				// var active_target_id = correspondDateDateId(s_d);
				// setActiveDay(active_target_id);
				setActiveDay($(".smooth-date-week-content div[class='']:first").attr("id"));
			}else{
				setActiveDay(today_id);
			}
		}
		
		if(callback == undefined){
			
		}else if(callback == "weekend_disabled"){
			disabledWeekend(_getDates(s_d, e_d));
		}else if(callback){
			callback();
		}
		
		//scroll active date to the center of body
		var _top = $(".smooth-date-active").offset().top;
		var _height = $(".smooth-date-active").height();
		$("body").scrollTop(_top - $(window).height()/2 + _height / 2);
	});
}
/*0515 wzg end****************************************/

/*0517 wzg start****************************************/
// 对Date的扩展，将 Date 转化为指定格式的String 
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.t_format = function(fmt) 
{ //author: meizz 
  var o = { 
    "M+" : this.getMonth()+1,                 //月份 
    "d+" : this.getDate(),                    //日 
    "h+" : this.getHours(),                   //小时 
    "m+" : this.getMinutes(),                 //分 
    "s+" : this.getSeconds(),                 //秒 
    "q+" : Math.floor((this.getMonth()+3)/3), //季度 
    "S"  : this.getMilliseconds()             //毫秒 
  }; 
  if(/(y+)/.test(fmt)) 
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  for(var k in o) 
    if(new RegExp("("+ k +")").test(fmt)) 
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
  return fmt; 
};
/*0522 wzg head***************************/
(function($){
	$.fn.modalCenter = function(){
		
		// $("#myModal").show();
		// var content_height = $(".modal-dialog-center").height();
		// $(".modal-dialog-center").css("top",($(window).height()-content_height)/2);
		// $("#myModal").hide();
		// $("#myModal").modal();
		
		$(this).show();
		var content_height = $(this).find(".modal-dialog-center").height();
		$(this).find(".modal-dialog-center").css("top",($(window).height()-content_height)/2);
		$(this).hide();
		$(this).modal();
	};
})(jQuery);
/*0522 wzg tail***************************/