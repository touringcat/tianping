/**
 * 设置提示框样式
 * 
 * @param {}
 *            obj
 * @param {}
 *            inputField
 */
function setStyle(obj, inputField) {
  var left = inputField.offset().left + inputField.width() + 5;
  var top = inputField.offset().top + inputField.outerHeight() - 23;
  obj.css("left", left);
  obj.css("top", top);
  obj.addClass("tipsContent");
  var textWidth;
  try{
    textWidth=obj.text().length;
  }catch(e){
    textWidth = 7;
  }
  if(textWidth<=21){
    textWidth+="em";
    obj.css({'min-width':textWidth,'width':textWidth});
  }
  inputField.addClass("tips");
}
$(function() {
  $("input[type='text']").each(function() {
    var inputField = $(this);
    // 聚焦事件
    $(this).focus(function() {
      var obj = $(this).parent("td").find("p");
      var span = $(this).parent("td").find("label");
      if (obj != null && obj != undefined) {
        setStyle(obj, inputField);
        obj.show();
      }
      if (span != null && span != undefined) {
        span.hide();
      }
    });
  
    // 失去焦点事件
    $(this).blur(function() {
      var obj = $(this).parent("td").find("p");
      if (obj != null && obj != undefined) {
        inputField.removeClass("tips");
        obj.hide();
      }
      
      var span = $(this).parent("td").find("label");
      if (span != null && span != undefined) {
        span.show();
      }
      // 解决把行驶证清除掉的问题
      var value = $(this).val();
      if(value == '' || value == undefined)
        $(this).parent("td").find("img[alt='success']").remove();
    });
  });
    $(".emailInput").focus(function() {
        var obj = $("#emailSpan").parent("td").find("p");
        var span = $("#emailSpan").parent("td").find("label");
        if (obj != null && obj != undefined) {
          setStyle(obj, $(this));
          obj.show();
        }
        if (span != null && span != undefined) {
          span.hide();
        }
      });
    $(".emailInput").blur(function() {
        var obj = $("#emailSpan").parent("td").find("p");
        if (obj != null && obj != undefined) {
          $(this).removeClass("tips");
          obj.hide();
        }
        
        var span = $("#emailSpan").parent("td").find("label");
        if (span != null && span != undefined) {
          span.show();
        }
        // 解决把行驶证清除掉的问题
        var value = $(this).val();
        if(value == '' || value == undefined)
          $(this).parent("td").find("img[alt='success']").remove();
      });  
	
     // 解决改变窗口大小， 提示内容位置随变
	 window.onresize = function() {
	 	 $("input[type='text']").each(function() {
	 	 	 var obj = $(this).parent("td").find("p");
	 	 	 var inputField = $(this);
	 	 	 var status = obj.css("display");
	 	 	 if(status != undefined && status != 'none')
	 	 	   setStyle(obj, inputField);
	 	 });
	 	 var obj = $("#emailSpan").parent("td").find("p");
 	 	 var inputField = $(".emailInput");
 	 	 var status = obj.css("display");
 	 	 if(status != undefined && status != 'none')
 	 	   setStyle(obj, inputField);
	 };
});