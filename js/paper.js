document.getElementById('brand').innerHTML = brand;

for (x in menu) {
  document.getElementById(x).innerHTML = menu[x];
  document.getElementById(x).href = "#"+menu[x];
  document.getElementById(x).classList.add('menuLink');
  var a = document.getElementById('a-'+x)
  if (a!=null){
    a.id = menu[x];
  };
  var b = document.getElementById('b-'+x)
  if (b!=null){
    b.innerHTML = menu[x];
  };
  document.getElementById('f'+x).innerHTML = menu[x];
  document.getElementById('f'+x).href = "#"+menu[x];
}
document.getElementById('caption1a').innerHTML = caption1a;
document.getElementById('captionH1').innerHTML = captionH1;
document.getElementById('welcomeImageS1').src = 'client/images/' + welcomeImageS1;
document.getElementById('welcomeImageR1').src = 'client/images/' + welcomeImageR1;
document.getElementById('captionH2a').innerHTML = captionH2a;
document.getElementById('caption1b').innerHTML = caption1b;
// document.getElementById('background1').style.backgroundImage = "url('client/images/" + background1 + "')";
// document.getElementById('background2').style.backgroundImage = "url('client/images/" + background2 + "')";

var y;
for (y in numbers){
  var divtest = document.createElement("div");
  divtest.classList.add('col-lg-6');
  divtest.innerHTML = '<div class="counter d-flex align-items-start mb-5" data-aos="fade-up" data-aos-delay=""><div class="counter-text"><strong>'+ numbers[y]["quantity"] + '</strong><span>' + numbers[y]["title"] + '</span></div></div>';
  document.getElementById('numbering').appendChild(divtest);
}

// section2
var i;
for (i in galleries){
  var divtest = document.createElement("a");
  divtest.setAttribute('class', 'work-thumb');
  divtest.setAttribute('href', "./client/images/"+galleries[i]['image'] );
  // divtest.classList.add('work-thumb');
  divtest.dataset.fancybox = "gallery";
  divtest.innerHTML = '<div class="work-text"><h3>'+ galleries[i]['title'] +'</h3><span class="category">Illustration</span></div><img src="client/images/'+ galleries[i]['image'] +'" alt="Image" class="img-fluid">';
  document.getElementById('galery-slide').appendChild(divtest);
}
document.getElementById('captionH2b').innerHTML = captionH2b;
document.getElementById('caption2a').innerHTML = caption2a;


document.getElementById('caption3a').innerHTML = caption3a;
for (x in galeryImages){
  var divtest = document.createElement("div");
  divtest.innerHTML = '<img src="client/images/' + galeryImages[x]+ '" alt="Image placeholder" class="img-fluid">';
  document.getElementById('carousel').appendChild(divtest);
}

document.getElementById('captionH2d').innerHTML = captionH2d;
document.getElementById('caption4a').innerHTML = caption4a;
for (y in attrations){
  var divtest = document.createElement("div");
  divtest.classList.add('col-lg-4', 'col-md-6', 'col-sm-6', 'col-12', 'post', 'aos-init');
  divtest.dataset.aos = "fade-up";
  divtest.dataset.aos.delay = attrations[y] + '00';
  divtest.innerHTML = '<div class="media media-custom d-block mb-4 h-100"><img src="client/images/' + attrations[y]['image'] + '" alt="Image placeholder" class="img-fluid"><div class="media-body"><h2 class="mt-0 mb-3">' + attrations[y]['title'] + '</h2><p>' + attrations[y]['desc'] + '</p></div></div>';
  document.getElementById('media').appendChild(divtest);
}

for (y in tours){
  var divtest = document.createElement("div");
  divtest.classList.add('owl-item');
  divtest.innerHTML = '<a href="'+ tours[y]["url"] +'"><div class="testimonial text-center slider-item"><img src="client/images/'+ tours[y]["image"]+'" alt="Image placeholder" class="mx-auto"></div><blockquote class="margin0"><h3>'+ tours[y]['title']+'</h3><p>' + tours[y]['desc'] + '</p></blockquote></a>';
  document.getElementById('tours').appendChild(divtest);
}


// section6
document.getElementById('list_custId').value = custId
document.getElementById('list_address').value = address1 + address2
document.getElementById('address').innerHTML = address1 + '<br>' + address2
document.getElementById('mobile').innerHTML = mobile
document.getElementById('whatsapp').href = "https://wa.me/6"+mobile
document.getElementById('url').value = window.location.href 


document.getElementById('fAddress').innerHTML = address1 + '<br>' + address2
document.getElementById('fMobile').innerHTML = mobile

document.getElementById('facebook').href = facebookUrl
