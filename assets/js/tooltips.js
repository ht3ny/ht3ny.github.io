$(document).ready(function (){
  var url = "/tooltips.json";
  $.get(url, function( data ) {
    $('.tooltiptext').each(function (i, el) {
      var $el = $(el);
      var key = $el.attr('id');
      var tooltip = data.entries[key]; // use id lookup for tooltip entries 
      if (tooltip)
        $el.text(tooltip).wrapInner("<strong />"); // put text in the tooltiptext el
      else 
        $el.removeClass('tooltiptext'); // remove empty tooltip
    });
  });
});