var imgList = [
  {
    src: "https://i.cbc.ca/1.4473485.1515096470!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/637878118.jpg", 
    name: "Habana, Cuba",
    page: 1
  }, 
  {
    src: "https://local-store-res.cloudinary.com/image/upload/w_640,h_480,c_fill,q_80,f_auto/Miami_FL-00006_a8r7h3",
    name: "Miami, FL, USA",
    page: 2
  },  
  {
    src: "https://activerain-store.s3.amazonaws.com/image_store/uploads/6/9/7/4/8/ar129618772984796.JPG",
    name: "Norwalk, CT, USA",
    page: 3
  },  
  {
    src: "http://www.optimaproperties.com/wp-content/uploads/2015/01/lake-worth.jpg", 
    name: "Lake Worth, FL, USA",
    page: 4
  }, 
  {
    src: "https://ssl.c.photoshelter.com/img-get2/I0000FrHMVVg7n64/fit=1000x750/Jamal-area-Guantanamo-Cuba-004.jpg", 
    name: "Guantanamo, Cuba",
    page: 5
  },
  {
    src: "http://www.visitflorida.com/content/dam/visitflorida/en-us/images/cities/tallahassee/tallahassee%204.jpg.1280.500.rendition", 
    name: "Tallahassee, FL, USA",
    page: 6
  }, 
  {
    src: "http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1446655168/chicago-header-dg1115.jpg?itok=MqZFOaTi", 
    name: "Chicago, IL, USA",
    page: 7
  }, 
  {
    src: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/06/28/103750292-GettyImages-185111233.jpg?v=1491837696", 
    name: "San Francisco, CA, USA",
    page: 8
  }
];

function createGuides(imgList, $guideWrapper) {
  var $guide = $("<div>").html('<i class="fas fa-circle"></i>');
  for (var i = 0; i < imgList.length; i++) {
    $guide.attr("class", "guide page-" + (i + 1));
    $guideWrapper.append($guide.clone());
  }
}

function renderImages(imgList, $images, $captions) {
  var pageNum;
  var $guides = $(".guide");
  for (var i = 0; i < $images.length; i++) {
    $($images[i]).attr({
      src: imgList[i].src,
      alt: "Picture of " + imgList[i].name
    });
    $($captions[i]).text(imgList[i].name);
  }
  pageNum = imgList[0].page;
  $guides.removeClass("active");
  $activeGuide = $(".guide.page-" + pageNum);
  $activeGuide.addClass("active");
};

function scrollRight(imgList, $images, $captions) {
  imgList.push(imgList.shift());
  renderImages(imgList, $images, $captions);
}

function scrollLeft(imgList, $images, $captions) {
  imgList.unshift(imgList.pop());
  renderImages(imgList, $images, $captions);
}

$(document).ready(function() {
  var $images = $(".img-wrapper>img");
  var $captions = $(".img-wrapper>figcaption");
  var $leftButton = $(".left-button");
  var $rightButton = $(".right-button");
  var $guideWrapper = $(".guide-wrapper");

  createGuides(imgList, $guideWrapper);
  renderImages(imgList, $images, $captions);

  $rightButton.on("click", function() {
    scrollRight(imgList, $images, $captions);
  });

  $leftButton.on("click", function() {
    scrollLeft(imgList, $images, $captions);
  });
});