let texts=['hidden paradise','vacation go-to','golden getaway'];
let count=0;
let index = 0;
let currentText='';
let letter='';

(function type(){


    if(count === texts.length){
        count=0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent=letter;
    if(letter.length===currentText.length){
        count++;
        index=0;
    }

    setTimeout(type,150);

}());

const faders=document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  const sliders = document.querySelectorAll(".slide-in");
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });