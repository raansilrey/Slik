// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require jquery.ui.autocomplete
function add_fields(link,hidden ,association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g");
  var valexp = new RegExp("#val","g");
  //alert($("#"+hidden).val())
  var datos = jQuery.parseJSON($("#"+hidden).val());
  content = content.replace(valexp,datos.value);
  
  $(".ui-autocomplete-input").val("")
  content = "<ul><li>"+ datos.label + "</li></ul>" + content
  $(link).parent().after(content.replace(regexp, new_id));
}

