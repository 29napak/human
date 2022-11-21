
  $(document).ready(function () {
    const navBtn = document.querySelector('.topPageHD__menu')
    const navBtn02 = document.querySelector('.p-header__menu')
    const btn = document.querySelector('.p-header__menu__btn')
    const collapse = document.querySelector('.menuCollap')
    $(navBtn).click(function () {
      if($(navBtn).attr('aria-expanded')== 'true'){
            $(collapse).addClass('active');
             $(btn).addClass('active')
             $(navBtn).attr('aria-expanded',false)
             $(collapse).attr('aria-hidden',false)
      }else {
        $(collapse).removeClass('active');
            $(btn).removeClass('active')
            $(navBtn).attr('aria-expanded',true)
            $(collapse).attr('aria-hidden',true)
      }
    })
    $(navBtn02).click(function () {
      if($(navBtn02).attr('aria-expanded')== 'true'){
            $(collapse).addClass('active');
             $(btn).addClass('active')
             $(navBtn02).attr('aria-expanded',false)
             $(collapse).attr('aria-hidden',false)
      }else {
          $(collapse).removeClass('active');
            $(btn).removeClass('active')
            $(navBtn02).attr('aria-expanded',true)
            $(collapse).attr('aria-hidden',true)
      }
    })
  })




$(document).ready(function(){
    const card01 = document.getElementById('card01')
    const card02 = document.getElementById('card02')
    const card03 = document.getElementById('card03')
    const card04 = document.getElementById('card04')
    const show01 = document.getElementById('show01')
    const show02 = document.getElementById('show02')
    const show03 = document.getElementById('show03')
    const show04 = document.getElementById('show04')
    const container = document.getElementById('container')
    const title = document.querySelector('.memberDetail__other')
    const dot = document.querySelector(".memberDetail__dot06__inner img")
    $(card01).click(function(){
        $(dot).css({'height':'379px','object-fit':'contain','margin-top':'-185px'})
        $("html,body").animate({scrollTop:320},800)
        $(title).css({'display':'flex','animation': 'appear .5s ease'})
        $(container).css({'gap':'53px'})
        $(card01).css('display','none')
        $(show01).css({'display':'flex','animation': 'appear .5s ease'})
        $(card02).css('display','block')
        $(show02).css('display','none')
        $(card03).css('display','block')
        $(show03).css('display','none')
        $(card04).css('display','block')
        $(show04).css('display','none')

    })
    $(card02).click(function(){
      $("html,body").animate({scrollTop:320},800)
      $(dot).css({'height':'379px','object-fit':'contain','margin-top':'-185px'})
      $(title).css('display','flex')
      $(container).css({'gap':'53px'})
        $(card01).css('display','block')
        $(show01).css('display','none')
        $(card02).css('display','none')
        $(show02).css({'display':'flex','animation': 'appear .5s ease'})
        $(card03).css('display','block')
        $(show03).css('display','none')
        $(card04).css('display','block')
        $(show04).css('display','none')

    })
    $(card03).click(function(){
      $("html,body").animate({scrollTop:320},800)
      $(dot).css({'height':'379px','object-fit':'contain','margin-top':'-185px'})
      $(title).css({'display':'flex','animation': 'appear .5s ease'})
      $(container).css({'gap':'53px'})
        $(card01).css('display','block')
        $(show01).css('display','none')
        $(card02).css('display','block')
        $(show02).css('display','none')
        $(card03).css('display','none')
        $(show03).css({'display':'flex','animation': 'appear .5s ease'})
        $(card04).css('display','block')
        $(show04).css('display','none')

    })
    $(card04).click(function(){
      $("html,body").animate({scrollTop:320},800)
      $(dot).css({'height':'379px','object-fit':'contain','margin-top':'-185px'})
      $(title).css({'display':'flex','animation': 'appear .5s ease'})
      $(container).css({'gap':'53px'})
        $(card01).css('display','block')
        $(show01).css('display','none')
        $(card02).css('display','block')
        $(show02).css('display','none')
        $(card03).css('display','block')
        $(show03).css('display','none')
        $(card04).css('display','none')
        $(show04).css({'display':'flex','animation': 'appear .5s ease'})

    })
})   