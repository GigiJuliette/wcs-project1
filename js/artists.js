const artists = {
  thomas: {
    name: "THOMAS",
    track1: "YOUNG, WILD & FREE",
    album1: "Mac and Devin Go to High School",
    release1: "2011",
    track2: "BLACK AND YELLOW",
    album2: "ROLLING PAPERS",
    release2: "2011",
    track3: "STILL D.R.E",
    album3: "'2001'",
    release3: "1999",
    image: "assets/images/portrait-thomas.png",
  },
  juliette: {
    name: "JULIETTE",
    track1: "LE TEMPS",
    album1: "Liens du 100",
    release1: "2022",
    track2: "BOLIDE ALLEMAND",
    album2: "Liens du 100",
    release2: "2022",
    track3: "POUR ELLE",
    album3: "A la vie a la mort",
    release3: "2024",
    image: "assets/images/portrait-juliette.png",
  },
  maxime: {
    name: "MAXIME",
    track1: "",
    album1: "",
    release1: "",
    track2: "",
    album2: "",
    release2: "",
    track3: "",
    album3: "",
    release3: "",
    image: "assets/images/portrait-maxime.png",
  },
  romain: {
    name: "ROMAIN",
    track1: "",
    album1: "",
    release1: "",
    track2: "",
    album2: "",
    release2: "",
    track3: "",
    album3: "",
    release3: "",
    image: "assets/images/portrait-romain.png",
  },

  joel: {
    name: "JOEL",
    track1: "",
    album1: "",
    release1: "",
    track2: "",
    album2: "",
    release2: "",
    track3: "",
    album3: "",
    release3: "",
    image: "assets/images/portrait-joel.png",
  },

  teddy: {
    name: "TEDDY",
    track1: "",
    album1: "",
    release1: "",
    track2: "",
    album2: "",
    release2: "",
    track3: "",
    album3: "",
    release3: "",
    image: "assets/images/portrait-teddy.png",
  },
  cecile: {
    name: "CECILE",
    track1: "",
    album1: "",
    release1: "",
    track2: "",
    album2: "",
    release2: "",
    track3: "",
    album3: "",
    release3: "",
    image: "assets/images/portrait-cecile.png",
  },
};

function artistUpdate(firstname) {
  const artist = artists[firstname];
  const nameToUpdate = document.getElementById("artistName");
  nameToUpdate.innerHTML = artist.name;
  const track1ToUpdate = document.getElementById("track1");
  track1ToUpdate.innerHTML = artist.track1;
  const album1ToUpdate = document.getElementById("album1");
  album1ToUpdate.innerHTML = artist.album1;
  const release1ToUpdate = document.getElementById("release1");
  release1ToUpdate.innerHTML = artist.release1;

  const track2ToUpdate = document.getElementById("track2");
  track2ToUpdate.innerHTML = artist.track2;
  const album2ToUpdate = document.getElementById("album2");
  album2ToUpdate.innerHTML = artist.album2;
  const release2ToUpdate = document.getElementById("release2");
  release2ToUpdate.innerHTML = artist.release2;

  const track3ToUpdate = document.getElementById("track3");
  track3ToUpdate.innerHTML = artist.track3;
  const album3ToUpdate = document.getElementById("album3");
  album3ToUpdate.innerHTML = artist.album3;
  const release3ToUpdate = document.getElementById("release3");
  release3ToUpdate.innerHTML = artist.release3;

  const imgToUpdate = document.getElementById("profileimg");
  imgToUpdate.src = artist.image;
}

const cardJuliette = document.getElementById("card-juliette");
cardJuliette.addEventListener("click", () => {
  artistUpdate("juliette");
});

const cardThomas = document.getElementById("card-thomas");
cardThomas.addEventListener("click", () => {
  artistUpdate("thomas");
});

const cardTeddy = document.getElementById("card-teddy");
cardTeddy.addEventListener("click", () => {
  artistUpdate("teddy");
});

const cardCecile = document.getElementById("card-cecile");
cardCecile.addEventListener("click", () => {
  artistUpdate("cecile");
});

const cardRomain = document.getElementById("card-romain");
cardRomain.addEventListener("click", () => {
  artistUpdate("romain");
});

const cardMaxime = document.getElementById("card-maxime");
cardMaxime.addEventListener("click", () => {
  artistUpdate("maxime");
});

const cardJoel = document.getElementById("card-joel");
cardJoel.addEventListener("click", () => {
  artistUpdate("joel");
});
