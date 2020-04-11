$(document).ready(function (){
  var url = "/tooltips.json";
  $.get(url, function( data ) {
    $('.tooltip').each(function (i, el) {
      var $el = $(el);
      var key = $el.attr('data-key');
      var tooltip = data.entries[key]; // use id lookup for tooltip entries 
      if (tooltip)
        $el.append('<span class="tooltiptext">' + tooltip +'</span>');
    });
  });
});