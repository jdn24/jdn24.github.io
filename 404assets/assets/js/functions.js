// @codekit-prepend "/vendor/hammer-2.0.8.js";

$( document ).ready(function() {

  // DOMMouseScroll included for firefox support
  var canScroll = true,
      scrollController = null;
  $(this).on('mousewheel DOMMouseScroll', function(e){

    if (!($('.outer-nav').hasClass('is-vis'))) {

      e.preventDefault();

      var delta = (e.originalEvent.wheelDelta) ? -e.originalEvent.wheelDelta : e.originalEvent.detail * 20;

      if (delta > 50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 800);
        updateHelper(1);
      }
      else if (delta < -50 && canScroll) {
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(function(){
          canScroll = true;
        }, 800);
        updateHelper(-1);
      }

    }

  });

  $('.side-nav li').click(function(){

    if (!($(this).hasClass('is-active'))) {

      var $this = $(this),
          curActive = $this.parent().find('.is-active'),
          curPos = $this.parent().children().index(curActive),
          nextPos = $this.parent().children().index($this),
          lastItem = $(this).parent().children().length - 1;

      updateNavs(nextPos);
      updateContent(curPos, nextPos, lastItem);

    }

  });

  $('.cta').click(function(){

    var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').children().index(curActive),
        lastItem = $('.side-nav').children().length - 1,
        nextPos = lastItem;

    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);

  });

  // swipe support for touch devices
  var targetElement = document.getElementById('viewport'),
      mc = new Hammer(targetElement);
  mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
  mc.on('swipeup swipedown', function(e) {

    updateHelper(e);

  });

  $(document).keyup(function(e){

    if (!($('.outer-nav').hasClass('is-vis'))) {
      e.preventDefault();
      updateHelper(e);
    }

  });

  // determine scroll, swipe, and arrow key direction
  function updateHelper(param) {

    var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').children().index(curActive),
        lastItem = $('.side-nav').children().length - 1,
        nextPos = 0;

    

  }

  // sync side and outer navigations
  function updateNavs(nextPos) {

    $('.side-nav').children().removeClass('is-active');
    $('.side-nav').children().eq(nextPos).addClass('is-active');
    

  }

  // update main content area
  function updateContent(curPos, nextPos, lastItem) {

    $('.main-content').children().removeClass('section--is-active');
    $('.main-content').children().eq(nextPos).addClass('section--is-active');
    $('.main-content .section').children().removeClass('section--next section--prev');

    if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
      $('.main-content .section').children().removeClass('section--next section--prev');
    }
    else if (curPos < nextPos) {
      $('.main-content').children().eq(curPos).children().addClass('section--next');
    }
    else {
      $('.main-content').children().eq(curPos).children().addClass('section--prev');
    }

    if (nextPos !== 0 && nextPos !== lastItem) {
      $('.header--cta').addClass('is-active');
    }
    else {
      $('.header--cta').removeClass('is-active');
    }

  }

  function outerNav() {

    $('.header--nav-toggle').click(function(){

      $('.perspective').addClass('perspective--modalview');
      setTimeout(function(){
        $('.perspective').addClass('effect-rotate-left--animate');
      }, 25);
      $('.outer-nav, .outer-nav li, .outer-nav--return').addClass('is-vis');

    });

    $('.outer-nav--return, .outer-nav li').click(function(){

      $('.perspective').removeClass('effect-rotate-left--animate');
      setTimeout(function(){
        $('.perspective').removeClass('perspective--modalview');
      }, 400);
      $('.outer-nav, .outer-nav li, .outer-nav--return').removeClass('is-vis');

    });

  }

  function workslider1() {

    $('.slider1--prev, .slider1--next').click(function() {

      var $this = $(this),
          curLeft = $('.slider1').find('.slider1--item-left'),
          curLeftPos = $('.slider1').children().index(curLeft),
          curCenter = $('.slider1').find('.slider1--item-center'),
          curCenterPos = $('.slider1').children().index(curCenter),
          curRight = $('.slider1').find('.slider1--item-right'),
          curRightPos = $('.slider1').children().index(curRight),
          totalWorks = $('.slider1').children().length,
          $left = $('.slider1--item-left'),
          $center = $('.slider1--item-center'),
          $right = $('.slider1--item-right'),
          $item = $('.slider1--item');

      $('.slider1').animate({ opacity : 0 }, 400);

      setTimeout(function(){

      if ($this.hasClass('slider1--next')) {
        if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
          $left.removeClass('slider1--item-left').next().addClass('slider1--item-left');
          $center.removeClass('slider1--item-center').next().addClass('slider1--item-center');
          $right.removeClass('slider1--item-right').next().addClass('slider1--item-right');
        }
        else {
          if (curLeftPos === totalWorks - 1) {
            $item.removeClass('slider1--item-left').first().addClass('slider1--item-left');
            $center.removeClass('slider1--item-center').next().addClass('slider1--item-center');
            $right.removeClass('slider1--item-right').next().addClass('slider1--item-right');
          }
          else if (curCenterPos === totalWorks - 1) {
            $left.removeClass('slider1--item-left').next().addClass('slider1--item-left');
            $item.removeClass('slider1--item-center').first().addClass('slider1--item-center');
            $right.removeClass('slider1--item-right').next().addClass('slider1--item-right');
          }
          else {
            $left.removeClass('slider1--item-left').next().addClass('slider1--item-left');
            $center.removeClass('slider1--item-center').next().addClass('slider1--item-center');
            $item.removeClass('slider1--item-right').first().addClass('slider1--item-right');
          }
        }
      }
      else {
        if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
          $left.removeClass('slider1--item-left').prev().addClass('slider1--item-left');
          $center.removeClass('slider1--item-center').prev().addClass('slider1--item-center');
          $right.removeClass('slider1--item-right').prev().addClass('slider1--item-right');
        }
        else {
          if (curLeftPos === 0) {
            $item.removeClass('slider1--item-left').last().addClass('slider1--item-left');
            $center.removeClass('slider1--item-center').prev().addClass('slider1--item-center');
            $right.removeClass('slider1--item-right').prev().addClass('slider1--item-right');
          }
          else if (curCenterPos === 0) {
            $left.removeClass('slider1--item-left').prev().addClass('slider1--item-left');
            $item.removeClass('slider1--item-center').last().addClass('slider1--item-center');
            $right.removeClass('slider1--item-right').prev().addClass('slider1--item-right');
          }
          else {
            $left.removeClass('slider1--item-left').prev().addClass('slider1--item-left');
            $center.removeClass('slider1--item-center').prev().addClass('slider1--item-center');
            $item.removeClass('slider1--item-right').last().addClass('slider1--item-right');
          }
        }
      }

    }, 400);

    $('.slider1').animate({ opacity : 1 }, 400);

    });

  }

  function workslider2() {

    $('.slider2--prev, .slider2--next').click(function() {

      var $this = $(this),
          curLeft = $('.slider2').find('.slider2--item-left'),
          curLeftPos = $('.slider2').children().index(curLeft),
          curCenter = $('.slider2').find('.slider2--item-center'),
          curCenterPos = $('.slider2').children().index(curCenter),
          curRight = $('.slider2').find('.slider2--item-right'),
          curRightPos = $('.slider2').children().index(curRight),
          totalWorks = $('.slider2').children().length,
          $left = $('.slider2--item-left'),
          $center = $('.slider2--item-center'),
          $right = $('.slider2--item-right'),
          $item = $('.slider2--item');

      $('.slider2').animate({ opacity : 0 }, 400);

      setTimeout(function(){

      if ($this.hasClass('slider2--next')) {
        if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
          $left.removeClass('slider2--item-left').next().addClass('slider2--item-left');
          $center.removeClass('slider2--item-center').next().addClass('slider2--item-center');
          $right.removeClass('slider2--item-right').next().addClass('slider2--item-right');
        }
        else {
          if (curLeftPos === totalWorks - 1) {
            $item.removeClass('slider2--item-left').first().addClass('slider2--item-left');
            $center.removeClass('slider2--item-center').next().addClass('slider2--item-center');
            $right.removeClass('slider2--item-right').next().addClass('slider2--item-right');
          }
          else if (curCenterPos === totalWorks - 1) {
            $left.removeClass('slider2--item-left').next().addClass('slider2--item-left');
            $item.removeClass('slider2--item-center').first().addClass('slider2--item-center');
            $right.removeClass('slider2--item-right').next().addClass('slider2--item-right');
          }
          else {
            $left.removeClass('slider2--item-left').next().addClass('slider2--item-left');
            $center.removeClass('slider2--item-center').next().addClass('slider2--item-center');
            $item.removeClass('slider2--item-right').first().addClass('slider2--item-right');
          }
        }
      }
      else {
        if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
          $left.removeClass('slider2--item-left').prev().addClass('slider2--item-left');
          $center.removeClass('slider2--item-center').prev().addClass('slider2--item-center');
          $right.removeClass('slider2--item-right').prev().addClass('slider2--item-right');
        }
        else {
          if (curLeftPos === 0) {
            $item.removeClass('slider2--item-left').last().addClass('slider2--item-left');
            $center.removeClass('slider2--item-center').prev().addClass('slider2--item-center');
            $right.removeClass('slider2--item-right').prev().addClass('slider2--item-right');
          }
          else if (curCenterPos === 0) {
            $left.removeClass('slider2--item-left').prev().addClass('slider2--item-left');
            $item.removeClass('slider2--item-center').last().addClass('slider2--item-center');
            $right.removeClass('slider2--item-right').prev().addClass('slider2--item-right');
          }
          else {
            $left.removeClass('slider2--item-left').prev().addClass('slider2--item-left');
            $center.removeClass('slider2--item-center').prev().addClass('slider2--item-center');
            $item.removeClass('slider2--item-right').last().addClass('slider2--item-right');
          }
        }
      }

    }, 400);

    $('.slider2').animate({ opacity : 1 }, 400);

    });

  }

  function transitionLabels() {

    $('.work-request--information input').focusout(function(){

      var textVal = $(this).val();

      if (textVal === "") {
        $(this).removeClass('has-value');
      }
      else {
        $(this).addClass('has-value');
      }

      // correct mobile device window position
      window.scrollTo(0, 0);

    });

  }

  outerNav();
  workslider1();
  workslider2();
  transitionLabels();

});


