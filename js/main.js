(() => {

  // VARIABLES
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const mainBox = document.querySelector("#main-box");
  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");

  const errorMessageBox = `<img src="images/error-vector.png">`

  let spinner = `
  <?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="translate(80,50)">
<g transform="rotate(0)">
<circle cx="0" cy="0" r="6" fill="#fbbc42" fill-opacity="1">
  <animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s"></animate>
</circle>
</g>
</g><g transform="translate(71.21320343559643,71.21320343559643)">
<g transform="rotate(45)">
<circle cx="0" cy="0" r="6" fill="#fbbc42" fill-opacity="0.875">
  <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s"></animate>
</circle>
</g>
</g><g transform="translate(50,80)">
<g transform="rotate(90)">
<circle cx="0" cy="0" r="6" fill="#fbbc42" fill-opacity="0.75">
  <animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s"></animate>
</circle>
</g>
</g><g transform="translate(28.786796564403577,71.21320343559643)">
<g transform="rotate(135)">
<circle cx="0" cy="0" r="6" fill="#fbbc42" fill-opacity="0.625">
  <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
</circle>
</g>
</g><g transform="translate(20,50.00000000000001)">
<g transform="rotate(180)">
<circle cx="0" cy="0" r="6" fill="#fbbc42" fill-opacity="0.5">
  <animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s"></animate>
</circle>
</g>
</g><g transform="translate(28.78679656440357,28.786796564403577)">
<g transform="rotate(225)">
<circle cx="0" cy="0" r="6" fill="#fbbc42" fill-opacity="0.375">
  <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s"></animate>
</circle>
</g>
</g><g transform="translate(49.99999999999999,20)">
<g transform="rotate(270)">
<circle cx="0" cy="0" r="6" fill="#fbbc42" fill-opacity="0.25">
  <animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s"></animate>
</circle>
</g>
</g><g transform="translate(71.21320343559643,28.78679656440357)">
<g transform="rotate(315)">
<circle cx="0" cy="0" r="6" fill="#fbbc42" fill-opacity="0.125">
  <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
</circle>
</g>
</g>
<!-- [ldio] generated by https://loading.io/ --></svg>
  `;

  
  // FUNCTIONS

  function modelLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    
    });
  }

  function loadInfoBoxes() { 
    spinnerSection.innerHTML = spinner;
    // spinner before the information displays

    fetch("https://swiftpixel.com/earbud/api/infoboxes")
    .then(response => response.json())
    .then(boxes=> {
      console.log(boxes); 
      
        boxes.forEach((box, index) => {
        let selected = document.querySelector(`#hotspot-${index+1}`);
        
        const titleElement = document.createElement("h3");
        titleElement.textContent = box.heading;

        const textElement = document.createElement("p");
        textElement.textContent = box.description;

        // get an img
        const thumbnail = document.createElement("img");
        thumbnail.src = `images/${box.thumbnail}`;

        
        selected.appendChild(thumbnail);
        selected.appendChild(titleElement);
        selected.appendChild(textElement);
        spinnerSection.innerHTML = "";
  });     
    
      })

      // This error is display in the page in case the API Breaks
      .catch(error => {
        mainBox.innerHTML = errorMessageBox;
        console.error('Oops, there is an error. Please check the API connection and try again ', error);
    });
    }

    loadInfoBoxes();

    function loadMaterialInfo() { 
      fetch("https://swiftpixel.com/earbud/api/materials")
      .then(response => response.json())
      .then(material_list => {
        console.log(materialList);
      
        
        material_list.forEach(material => {
          
        const clone = materialTemplate.content.cloneNode(true);
  
          const materialHeading = clone.querySelector(".material-heading");
          materialHeading.textContent = material.heading;
  
          const materialDescription = clone.querySelector(".material-description");
          materialDescription.textContent = material.description;
  
          materialList.appendChild(clone);
      }); 
      
      })
      // This error is display in the page in case the API Breaks
      .catch(error => {
        model.innerHTML = errorMessageBox;
        console.error('Oops, there is an error. Please check the API connection and try again ', error); 
      });

    }
  
    loadMaterialInfo()


 

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  // EVENT LISTENERS
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });



})();

