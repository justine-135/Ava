window.addEventListener("load", () => {
  const outfits = [
    {
      imgSrc: "../img/Gallery/Outfits/1.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/2.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/3.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/4.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/5.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/6.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/7.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/8.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/9.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/10.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/11.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/12.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/13.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/14.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/15.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/16.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/17.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/18.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/19.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/20.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/21.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/22.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/23.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/24.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/25.jpg",
    },
    {
      imgSrc: "../img/Gallery/Outfits/26.jpg",
    },
  ];

  const makeups = [
    { imgSrc: "../img/Gallery/Makeups/1.jpg" },
    { imgSrc: "../img/Gallery/Makeups/2.jpg" },
    { imgSrc: "../img/Gallery/Makeups/3.jpg" },
    { imgSrc: "../img/Gallery/Makeups/4.jpg" },
    { imgSrc: "../img/Gallery/Makeups/5.jpg" },
    { imgSrc: "../img/Gallery/Makeups/6.jpg" },
    { imgSrc: "../img/Gallery/Makeups/7.jpg" },
    { imgSrc: "../img/Gallery/Makeups/8.jpg" },
    { imgSrc: "../img/Gallery/Makeups/9.jpg" },
    { imgSrc: "../img/Gallery/Makeups/10.jpg" },
    { imgSrc: "../img/Gallery/Makeups/11.jpg" },
    { imgSrc: "../img/Gallery/Makeups/12.jpg" },
    { imgSrc: "../img/Gallery/Makeups/13.jpg" },
    { imgSrc: "../img/Gallery/Makeups/14.jpg" },
    { imgSrc: "../img/Gallery/Makeups/15.jpg" },
    { imgSrc: "../img/Gallery/Makeups/16.jpg" },
    { imgSrc: "../img/Gallery/Makeups/17.jpg" },
    { imgSrc: "../img/Gallery/Makeups/18.jpg" },
    { imgSrc: "../img/Gallery/Makeups/19.jpg" },

    { imgSrc: "../img/Gallery/Makeups/31.jpg" },
  ];

  const photography = [
    { imgSrc: "../img/Gallery/Photography/1.jpg" },
    { imgSrc: "../img/Gallery/Photography/2.jpg" },
    { imgSrc: "../img/Gallery/Photography/3.jpg" },
    { imgSrc: "../img/Gallery/Photography/4.jpg" },
    { imgSrc: "../img/Gallery/Photography/5.jpg" },
    { imgSrc: "../img/Gallery/Photography/6.jpg" },
    { imgSrc: "../img/Gallery/Photography/7.jpg" },
    { imgSrc: "../img/Gallery/Photography/8.jpg" },
    { imgSrc: "../img/Gallery/Photography/9.jpg" },
    { imgSrc: "../img/Gallery/Photography/10.jpg" },
    { imgSrc: "../img/Gallery/Photography/11.jpg" },
    { imgSrc: "../img/Gallery/Photography/12.jpg" },
    { imgSrc: "../img/Gallery/Photography/13.jpg" },
    { imgSrc: "../img/Gallery/Photography/14.jpg" },
    { imgSrc: "../img/Gallery/Photography/15.jpg" },
  ];

  const models = [
    { imgSrc: "../img/Gallery/Models/1.jpg" },
    { imgSrc: "../img/Gallery/Models/2.jpg" },
    { imgSrc: "../img/Gallery/Models/3.jpg" },
    { imgSrc: "../img/Gallery/Models/4.jpg" },
    { imgSrc: "../img/Gallery/Models/5.jpg" },
    { imgSrc: "../img/Gallery/Models/6.jpg" },
    { imgSrc: "../img/Gallery/Models/7.jpg" },
    { imgSrc: "../img/Gallery/Models/8.jpg" },
    { imgSrc: "../img/Gallery/Models/9.jpg" },
    { imgSrc: "../img/Gallery/Models/10.jpg" },
    { imgSrc: "../img/Gallery/Models/11.jpg" },
    { imgSrc: "../img/Gallery/Models/12.jpg" },
    { imgSrc: "../img/Gallery/Models/13.jpg" },
    { imgSrc: "../img/Gallery/Models/14.jpg" },
    { imgSrc: "../img/Gallery/Models/15.jpg" },
    { imgSrc: "../img/Gallery/Models/16.jpg" },
    { imgSrc: "../img/Gallery/Models/17.jpg" },
    { imgSrc: "../img/Gallery/Models/18.jpg" },
    { imgSrc: "../img/Gallery/Models/19.jpg" },
    { imgSrc: "../img/Gallery/Models/20.jpg" },
    { imgSrc: "../img/Gallery/Models/21.jpg" },
    { imgSrc: "../img/Gallery/Models/22.jpg" },
    { imgSrc: "../img/Gallery/Models/23.jpg" },
    { imgSrc: "../img/Gallery/Models/24.jpg" },
    { imgSrc: "../img/Gallery/Models/25.jpg" },
    { imgSrc: "../img/Gallery/Models/26.jpg" },
    { imgSrc: "../img/Gallery/Models/27.jpg" },
    { imgSrc: "../img/Gallery/Models/28.jpg" },
    { imgSrc: "../img/Gallery/Models/29.jpg" },
    { imgSrc: "../img/Gallery/Models/30.jpg" },
    { imgSrc: "../img/Gallery/Models/31.jpg" },
    { imgSrc: "../img/Gallery/Models/32.jpg" },
    { imgSrc: "../img/Gallery/Models/33.jpg" },
    { imgSrc: "../img/Gallery/Models/34.jpg" },
    { imgSrc: "../img/Gallery/Models/35.jpg" },
    { imgSrc: "../img/Gallery/Models/36.jpg" },
    { imgSrc: "../img/Gallery/Models/37.jpg" },
    { imgSrc: "../img/Gallery/Models/38.jpg" },
    { imgSrc: "../img/Gallery/Models/39.jpg" },
    { imgSrc: "../img/Gallery/Models/40.jpg" },
  ];
  const outfitContainer = document.querySelector(".outfit-cards-container");
  const makeupContainer = document.querySelector(".makeup-cards-container");
  const photographyContainer = document.querySelector(
    ".photography-cards-container"
  );
  const modelContainer = document.querySelector(".models-cards-container");

  const createModelsCards = () => {
    models.forEach((item) => {
      console.log(item);
      const card = document.createElement("img");
      card.setAttribute("class", "outfit-card");
      card.src = item.imgSrc;
      modelContainer.appendChild(card);
    });
  };

  const createOutfitCards = () => {
    outfits.forEach((item) => {
      console.log(item);
      const card = document.createElement("img");
      card.setAttribute("class", "outfit-card");
      card.src = item.imgSrc;
      outfitContainer.appendChild(card);
    });
  };

  const createMakeupCards = () => {
    makeups.forEach((item) => {
      console.log(item);
      const card = document.createElement("img");
      card.setAttribute("class", "outfit-card");
      card.src = item.imgSrc;
      makeupContainer.appendChild(card);
    });
  };

  const createPotographyCards = () => {
    photography.forEach((item) => {
      console.log(item);
      const card = document.createElement("img");
      card.setAttribute("class", "outfit-card");
      card.src = item.imgSrc;
      photographyContainer.appendChild(card);
    });
  };

  createOutfitCards();
  createMakeupCards();
  createPotographyCards();
  createModelsCards();
});
