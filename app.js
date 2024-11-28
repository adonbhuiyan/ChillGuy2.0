

const multiChillGuy = document.getElementById('multiChillGuy');



// CHANGING COPY AND CHECK ICON FOR COPY AND PASTE-------------------------------------------------------------------------------
document.querySelectorAll('.copyBtn').forEach(btn => {

  btn.addEventListener('click', function () {


    const icon = this.querySelector('i');

    if (icon.classList.contains('fa-copy')) {
      icon.classList.replace('fa-copy', 'fa-check');

      navigator.clipboard.writeText(document.querySelector('h1 span').innerHTML);
      setTimeout(() => {
        icon.classList.replace('fa-check', 'fa-copy')
      }, 1000);

    } else {
      icon.classList.replace('fa-check', 'fa-copy')
    }

  });


})




//  ---------------------------------------------------------------

function addSpanForInfiniteScroll(line, index) {
  let allSpans = Array.from(line.querySelectorAll('span'));

  if (index < allSpans.length && !(allSpans[index].nextElementSibling) && allSpans[index].offsetX > 0) {
    line.insertAdjacentHTML('beforeend', allSpans[index].outerHTML);
    console.log('Span added for infinite scroll');
  }
}



// ADDING SCROLL LEFT ON MULL CHILL GUY---------------------------------
const addScrollLeftOnLine = (element) => {
  element.scrollLeft += 2; // Adjust the scroll speed by changing the value
  if (element.scrollLeft >= element.scrollWidth - element.clientWidth) {


    element.scrollLeft = 0; // Reset to create a seamless loop
  }
};

// SET INTERSECTION OBSERVER ------------------------
function setinterSectionObserver(line) {
  let intervalId;
  const intersectionCallback = entries => {
    const isIntersecting = entries[0].isIntersecting;

    if (isIntersecting && !intervalId) {

      intervalId = setInterval(() => {
        addScrollLeftOnLine(line);
      }, 16);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    }
  }




  const options = {
    threshold: 0.5
  }
  const intersectionObserver = new IntersectionObserver(intersectionCallback, options);
  intersectionObserver.observe(line)
}


setinterSectionObserver(multiChillGuy);