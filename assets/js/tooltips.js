var entries = {};

$(document).ready(function (){
  var url = "/tooltips.json";
  $.get(url, function( data ) {
    entries = Object.create(data.entries);
    $('.tooltip').each(function (i, el) {
      var $el = $(el);
      var key = $el.attr('data-key');
      var tooltip = entries[key]; // use id lookup for tooltip entries 
      if (tooltip)
        $el.append('<span class="tooltiptext">' + tooltip +'</span>');
    });
  });
});