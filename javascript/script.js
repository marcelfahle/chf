$(document).ready( function() {


	// mobile menu
  $(".nav-mobile__toggle select").val($(".nav-mobile__toggle select option:first").val());
	$(".nav-mobile__toggle select").change(function() {
		if ($(this).find("option:selected").val()) {
			window.location = $(this).find("option:selected").val();
		}
	});

  // determine X position of primary nav.
  // needed because dropdown menus tend 
  // tend to be wider than it's natural parent,
  // .nav__primary--item and to get a flexible
  // width based on content it can't be placed 
  // in there (using relative/absolute relationship)
  // But that way we don't know where the menu has 
  // to be placed on the X-axis as it looses it's 
  // positional relationship to .nav__primary--item
  // that's why we need this little JS hack to read
  // the positions of the menu. It'll work without JS,
  // but then it always positions the dropdown at the
  // far left, which is not a problem IMHO with those big things. :-)

  $('.nav__primary--item').each(function(i, el) {
    $(el).find('.dropdown-menu').css( 'left', (el.offsetLeft-20) + 'px');
  });
  $('.nav__primary--item > a').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('data-target');
    var ref = $(this).attr('href');
    if (target && ref) { window.location.href = ref; }
  });
    

  $('*[data-toggle="dropdown"]').parent().hover(function() {
    $(this).children('.dropdown-menu').stop(true, true).fadeIn(500);
  }, function() {
      $(this).children('.dropdown-menu').stop(true, true).fadeOut(500);
  });

});
