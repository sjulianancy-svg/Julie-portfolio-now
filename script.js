document.getElementById("learnMore").addEventListener("click", function() {

  window.scrollTo({

    top: document.getElementById("about").offsetTop,

    behavior: "smooth"

  });

});

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thanks for contacting me, I'll reply soon!");

  form.reset();

});