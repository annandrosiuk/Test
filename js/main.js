$(document).ready(function () {

  //--------------------CIRCLES--------------------
  let circles = document.getElementById("js-circles");
  let selectedCircle;

  circles.onclick = function (event) {
    var target = event.target;

    while (target != this) {
      if (target.classList.contains('circle')) {
        animation(target);
        return;
      }
      target = target.parentNode;
    }
  }

  function animation(node) {
    if (selectedCircle) {

      selectedCircle.classList.remove('z-index');
      selectedCircle.classList.add('green');

      $('.circle-group').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        $(this).removeClass("circle-group-animation");
      });
      $('.circle-block').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        $(this).removeClass("circle-block-animation");
      });
    }

    selectedCircle = node;
    selectedCircle.classList.remove('green');
    selectedCircle.classList.add('z-index');

    $('.circle-group').addClass('circle-group-animation');
    $('.circle-block').addClass('circle-block-animation');

  }
  //--------------------ENF OF CIRCLES--------------------

  //--------------------TUBE--------------------

  // Send bar to point of click
  $(".tube").on("click", function (e) {
    var offset = $(this).offset(),
      position = Math.floor((e.pageY - offset.top) / $(this).height() * 100) + 1;
    $(this).find('.tube__contents').css('transform', 'translateY(' + position + '%)');
    $(this).find('.tube__contents').css('-webkit-transform', 'translateY(' + position + '%)');
  });

  //Send bar to random point
  $(document).ready(function () {
    $('.tube__contents').each(function () {
      $(this).css('transform', 'translateY(' + Math.random() * 100 + '%)');
      $(this).css('-webkit-transform', 'translateY(' + Math.random() * 100 + '%)');
    });
  });

  //--------------------END OF TUBE--------------------

  //--------------------COUNTER--------------------

  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
        duration: 90000,
        easing: 'linear',
        step: function (now) {
          $(this).text((Math.ceil(now) / 4) + "%");
        }

      });
  });

  //--------------------END OF COUNTER--------------------
});



