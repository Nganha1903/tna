let currentSlide = 0;
const slides = document.querySelectorAll('.slider-track img');
const totalSlides = slides.length;

function showSlide(index) {
  const track = document.querySelector('.slider-track');
  track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Auto slide mỗi 3 giây
setInterval(nextSlide, 3000);

fetch('featured-product.json')
  .then(response => response.json())
  .then(data => {
    const box = document.getElementById('featured-box');
    box.innerHTML = `
      <center><h1>Sản phẩm nổi bật</h1></center>
      <div class="box-container">
        <div class="underbox">
          <img src="${data.image}" alt="${data.title}">
        </div>
        <div class="underbox">
          <h2 style="font-family: Noto Serif Display, serif; font-size: 40px; text-align: center;">${data.title}</h2>
          <p>${data.description}</p>
          <center><a href="${data.link}"><input type="button" class="button" value="${data.button}" style="color: white; background-color: #c7372a;"></a></center>
        </div>
      </div>
    `;
  });

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
