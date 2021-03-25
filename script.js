

$(function(){
  $('#preloader').preloadinator(
    {
      scroll: false,
      minTime: 3000,
      animation: 'fadeOut',
      afterRemovePreloader: function(){
        $('main').fadeIn(1000);
      }
    }
  );
});