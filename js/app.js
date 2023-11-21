function initMap(){
  let mtPoint = { lat: 27.9881, lng: 86.9250 };
  let map = new google.maps.Map(
    document.getElementById('map'), {zoom: 12, center: mtPoint}
  );
  let marker = new google.maps.Marker({position: mtPoint, map: map});
}


window.onload = function () {
  const swiper = new Swiper('.swiper', {
    // Other parameters

    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
/*
const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  
});*/