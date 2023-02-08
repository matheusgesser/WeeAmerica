import card1 from "./src/assets/card1.jpg"
import card2 from "./src/assets/card2.jpg"
import card3 from "./src/assets/card3.jpg"

export default [
  {
    id: 1,
    img: `${card1}`,
    location: "Brazil",
    mapslink: `https://www.google.com.br/maps/place/Pousada+Nautikus/@-27.5829365+-48.4313191+18z/data=!3m1!4b1!4m8!3m7!1s0x95273fdba2ab6157:0xd4f5853789437f4c!5m2!4m1!1i2!8m2!3d-27.5829389!4d-48.4302248`,
    title: "Florianópolis, Santa Catarina",
    rate: "5.0",
    description: "Perfect for sports enthusiasts, has direct acess to the sea...",
    price: 132
  },
  {
    id: 2,
    img: `${card2}`,
    location: "Costa Rica",
    mapslink: "https://www.google.com.br/maps/place/Valhalla+Cabin/@10.3869063+-84.5071236+16z/data=!4m5!3m4!1s0x8fa06f315e2db875:0x872372e48376da8b!8m2!3d10.3855626!4d-84.5066054",
    title: "Florencia, Província de Alajuela",
    rate: "4.6",
    description: "Created for nature lovers, breath the most pure air next to the river...",
    price: 83
  },
  {
    id: 3,
    img: `${card3}`,
    location: "Brazil",
    mapslink: "https://www.google.com.br/maps/place/Atalaia+da+Pinguela/@-29.8191317+-50.1949405+17z/data=!4m5!3m4!1s0x9518655d58babe39:0x9ad76438512beb26!8m2!3d-29.8190573!4d-50.1931273",
    title: "Osório, Rio Grande do Sul",
    rate: "4.9",
    description: "A sheer and private cuddle on the edge of Pinguela's Lagoon...",
    price: 63
  }
]