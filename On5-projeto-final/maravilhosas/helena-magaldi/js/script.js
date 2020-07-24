(function() {
  var menuResponsivo = document.getElementById("menuResponsivo");
  var btnResponsivo = document.getElementById("btnResponsivo");

  btnResponsivo.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.scrollTop += 0;
    if (menuResponsivo.className === "navegacao__itens") {
      menuResponsivo.className += " ativo";
    } else {
      menuResponsivo.className = "navegacao__itens";
    }
  });
})();

window.addEventListener("scroll", function() {
  if (pageYOffset >= 250) {
    document.querySelector(".navegacao").style.backgroundColor = "#674582";
    document.querySelector(".navegacao__itens").style.backgroundColor =
      "#674582";
  } else {
    document.querySelector(".navegacao").style.backgroundColor = "transparent";
    document.querySelector(".navegacao__itens").style.backgroundColor =
      "transparent";
  }
});





const button = document.getElementById('button')

button.addEventListener('click', function() {
    button.remove()

    const facts = ['- Our dark lady is leaving us next week (Maurice Wilkins)','- Our dark lady is leaving us next week (Maurice Wilkins)', ' - I think she (Rosalind Franklin) was a good experimentalist but certainly not of the first rank. She was simply not in the same class as Eigen or Bragg or Pauling, nor was she as good as Dorothy Hodgkin. She did not even select DNA to study. It was given to her. Her theoretical crystallography was very average. (Francis Crick)'];

    const result = document.getElementById('result')
    const resultList = document.getElementById('resultList')

    // result.innerHTML = `O array dogs tem ${facts.length} itens:`
    result.innerHTML = `${facts.length} Referências:`

    resultList.innerHTML = ''
    for (let i = 0; i < facts.length; i++) {
        resultList.innerHTML += `<li>${facts[i]}</li>`
    }
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


butao.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("myDIV");
});

