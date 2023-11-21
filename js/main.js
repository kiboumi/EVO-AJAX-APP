(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  // const materialTemplate = document.querySelector("#material-template");
  // const materialList = document.querySelector("#material-list");
  // we're gonna make a copy of this and then mostrarla con js

 
  //this is the api url https://swiftpixel.com/earbud/api/infoboxes"

    //This information needs to be removed then pulled with an AJAX Call using the Fetch API
    //this is the api url https://swiftpixel.com/earbud/api/materials"

  // const materialListData = [
  //   {
  //     heading: "Precision-Crafted Polymers",
  //     description: "Our earbuds are meticulously molded from high-quality plastics, ensuring a blend of elegance, comfort, and resilience that's second to none."
  //   },
  //   {
  //     heading: "Luxurious Silicone Harmony",
  //     description: "Our uniquely engineered ear tips are cocooned in plush silicone, delivering an opulent embrace for your ears, ensuring an unrivaled fit and exquisite audio experience."
  //   },
  //   {
  //     heading: "Rubberized Cables",
  //     description: "Experience the unparalleled freedom of movement with our flexible rubber cables that promise durability without compromise."
  //   },
  //   {
  //     heading: "Enhanced Comfort Sensors",
  //     description: "A touch of magic in the form of built-in microphones and sensors empowers your earbuds to obey your every command, making your audio journey seamless and enchanting."
  //   },
  //   {
  //     heading: "Artistic Mesh Guard",
  //     description: "Shielded by artful mesh screens, our speakers remain untarnished, keeping your listening experience pristine."
  //   }
  // ];

  //functions
  function modelLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function InfoBoxesLoaded() { 
    // spinner before the information displays
    // hotspots.innerHTML = spinner;
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
    });

    // spot spinner
    // peopleCon.innerHTML = "";
    // peopleCon.appendChild(ul);   

    })
    .catch((error) => console.error("error message", error)
    ); //catch and report any errors
  }

  InfoBoxesLoaded();


    //make AJAX call here:
    // https://swiftpixel.com/earbud/api/infoboxes"

    // the forEach loop will go inside a then()/promise


  //   infoBoxes.forEach((infoBox, index) => {
  //     let selected = document.querySelector(`#hotspot-${index+1}`);
      
  //     const titleElement = document.createElement('h2');
  //     titleElement.textContent = infoBox.title;

  //     const textElement = document.createElement('p');
  //     textElement.textContent = infoBox.text;

  //     selected.appendChild(titleElement);
  //     selected.appendChild(textElement);
  //   });
  // }
  // loadInfoBoxes();

  
  // accessing to the array
  // function loadMaterialInfo(){

  //   // AJAX CALL
  //   // https://swiftpixel.com/earbud/api/materials"


  //   // take every entry in the materialListData then put it in the material li
  //   materialListData.forEach(material => {
  //     // clone the template - copy of the template
  //     const clone = materialTemplate.content.cloneNode(true);

  //     // populating the template - HEADING
  //     const materialHeading = clone.querySelector(".material-heading");
  //     materialHeading.textContent = material.heading;

  //     //  Populating DESCRIPTION
  //     const materialDescription = clone.querySelector(".material-description");
  //     materialDescription.textContent = material.description;

  //     // now adding back to the list 
  //     // append the populated template to the list
  //     materialList.appendChild(clone);
  //   })

  // }
  // loadMaterialInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  // //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

