let mySwiper = new Swiper ('.swiper-container', {
    //direction: 'vertical', // 垂直切换选项
  autoplay:true,  
  loop: true, // 循环模式选项  // 无缝轮播
  autoplay: {
  disableOnInteraction: false,
},

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  effect:"fade",
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})        




