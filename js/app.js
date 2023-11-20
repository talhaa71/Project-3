function initMap(){
  let mtPoint = { lat: 27.9881, lng: 86.9250 };
  let map = new google.maps.Map(
    document.getElementById('map'), {zoom: 12, center: mtPoint}
  );
  let marker = new google.maps.Marker({position: mtPoint, map: map})
}