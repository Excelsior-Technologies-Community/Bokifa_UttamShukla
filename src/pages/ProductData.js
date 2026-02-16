const imagesData = [
  {
    id: 1,
    title: "Fantasy",
    image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_8.png?v=1729585074&width=80"
  },
  {
    id: 2,
    title: "Horror",
    image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_7.png?v=1729585074&width=80"
  },
  {
    id: 3,
    title: "Fiction",
    image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_5.png?v=1729585073&width=80"
  },
  {
    id: 4,
    title: "Romance",
    image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_4.png?v=1729585074&width=80"
  },
  {
    id: 5,
    title: "History",
    image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_2.png?v=1729585074&width=80"
  },
  {
    id: 6,
    title: "Biography",
    image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_1.png?v=1729585073&width=80"
  },
  {
    id: 7,
    title: "Kids",
    image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_3.png?v=1729585074&width=80"
  },
  {
    id: 8,
    title: "Family",
    image: "https://ap-bokifa.myshopify.com/cdn/shop/files/ap_bo_typecollection_6.png?v=1729585073&width=80"
  }
];

const productsData = [
  {
    id: "9713931944219",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_15.jpg?v=1728615410&",
    title: "A Short History of Nearly Everything",
    link: "/products/a-good-morning-america-book-club-pick-2",
    price: "$299.95"
  },
  {
    id: "9713924997403",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_7.jpg?v=1728615154&",
    title: "Complete Set of 7 Books: 30 Days to Change Yourself - Don't Be Perfect, Be Happy",
    link: "/products/don-t-forget-the-girl",
    price: "$299.95"
  },
  {
    id: "9713924997404",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_3.jpg?v=1728615010&",
    title: "Live in the Times of cholera",
    link: "/products/don-t-forget-the-girl",
    price: "$199.95"
  },
  {
    id: "9713924997405",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_10.jpg?v=1728615300&",
    title: "One hundred years of solitude",
    link: "/products/the-longest-ride",
    price: "$249.95"
  },
  {
    id: "9713924997406",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_12.jpg?v=1728615350&",
    title: "The Girl With the Dragon tattoo",
    link: "/products/the-return",
    price: "$279.95"
  },
  {
    id: "9713924997407",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_5.jpg?v=1728615100&",
    title: "30 Days to Change Yourself",
    link: "/products/30-days-to-change-yourself",
    price: "$149.95"
  },
  {
    id: "9713924997408",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615200&",
    title: "Be Happy, Not Perfect",
    link: "/products/be-happy-not-perfect",
    price: "$189.95"
  },
  {
    id: "9713924997409",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_9.jpg?v=1728615250&",
    title: "Morning America Book Club Pick",
    link: "/products/morning-america-book-club-pick",
    price: "$209.95"
  },
  {
    id: "9713924997410",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_11.jpg?v=1728615320&",
    title: "The Author’s Legacy",
    link: "/products/the-authors-legacy",
    price: "$259.95"
  },
  {
    id: "9713924997411",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615400&",
    title: "Enduring First Love",
    link: "/products/enduring-first-love",
    price: "$279.95"
  }
];

const productsData2 = [
  {
    id: "9713933517083",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_25.jpg?v=1728615733&",
    title: "The World According to Garp",
    link: "/products/the-city-and-its-uncertain-walls-a-novel-3",
    price: "$29.95"
  },
  {
    id: "9713931714843",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615379&",
    title: "The Wind-Up Bird Chronicle",
    link: "/products/scattershot-life-music-elton-and-me-2",
    price: "$39.95"
  },
  {
    id: "9713931944219",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_15.jpg?v=1728615410&",
    title: "A Short History of Nearly Everything",
    link: "/products/a-good-morning-america-book-club-pick-2",
    price: "$299.95"
  },
  {
    id: "9713924997403",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_7.jpg?v=1728615154&",
    title: "Complete Set of 7 Books: 30 Days to Change Yourself - Don't Be Perfect, Be Happy",
    link: "/products/don-t-forget-the-girl",
    price: "$299.95"
  },
  {
    id: "9713924997404",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_3.jpg?v=1728615010&",
    title: "Don't Forget the Girl",
    link: "/products/don-t-forget-the-girl",
    price: "$199.95"
  },
  {
    id: "9713924997405",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_10.jpg?v=1728615300&",
    title: "The Longest Ride",
    link: "/products/the-longest-ride",
    price: "$249.95"
  },
  {
    id: "9713924997406",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_12.jpg?v=1728615350&",
    title: "The Return",
    link: "/products/the-return",
    price: "$279.95"
  },
  {
    id: "9713924997407",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_5.jpg?v=1728615100&",
    title: "30 Days to Change Yourself",
    link: "/products/30-days-to-change-yourself",
    price: "$149.95"
  },
  {
    id: "9713924997408",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615200&",
    title: "Be Happy, Not Perfect",
    link: "/products/be-happy-not-perfect",
    price: "$189.95"
  },
  {
    id: "9713924997409",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_9.jpg?v=1728615250&",
    title: "Morning America Book Club Pick",
    link: "/products/morning-america-book-club-pick",
    price: "$209.95"
  }
];

const productsData3 = [
  {
    id: "101",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/preview_images/bo_pro_22_133cd00b-479c-41a8-98fe-939a4fa57dad.jpg?v=1731319293&width=800",
    title: "A prayer for owen meany",
    link: "/products/the-city-and-its-uncertain-walls-a-novel-3",
    price: "$29.95"
  },
  {
    id: "102",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_18.jpg?v=1728615507&",
    title: "All the light we cannot see",
    link: "/products/scattershot-life-music-elton-and-me-2",
    price: "$39.95"
  },
  {
    id: "103",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_30.jpg?v=1728615904&",
    title: "Extremely loud and incredibly close",
    link: "/products/a-good-morning-america-book-club-pick-2",
    price: "$299.95"
  },
  {
    id: "104",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615197&",
    title: "the Elegance of The Hedgehog",
    link: "/products/don-t-forget-the-girl",
    price: "$299.95"
  },
  {
    id: "105",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615197&",
    title: "The shadow of the wind  ",
    link: "/products/don-t-forget-the-girl",
    price: "$199.95"
  },
  {
    id: "106",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615379&",
    title: "The Wind up bird",
    link: "/products/the-longest-ride",
    price: "$249.95"
  },
  {
    id: "107",
    img: "",
    title: "The Return",
    link: "/products/the-return",
    price: "$279.95"
  },

];

const Gridproducts = [
  {
    id: "1011",
    title: "The Seven Husbands Of Evelyn Hugo",
    price: "269.95",
    link: "",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_11.jpg?v=1728615321&"
  },
  {
    id: "1012",
    title: "Memoirs of a Geisha",
    price: "289.95",
    link: "",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_17.jpg?v=1728615478&width"
  },
  {
    id: "1013",
    title: "Scattershot: Life, Music, Elton, and Me",
    price: "309.95",
    link: "",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_2.jpg?v=1728614778&"
  },
  {
    id: "1014",
    title: "The Catcher in the Rye",
    price: "29.95",
    link: "",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_7.jpg?v=1728615154&"
  },
  {
    id: "1015",
    title: "The City and Its Uncertain Walls: A Novel",
    price: "339.95",
    link: "",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_29.jpg?v=1728615878&"
  },
  {
    id: "1016",
    title: "The House of the Spirits",
    price: "29.95",
    link: "",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_21.jpg?v=1728615595&"
  }
];

const FeaturedAuthData = [
  {
    id: "201",
    title: "Camelia Doe",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_302.png?v=1729737036&width=120",
  },
  {
    id: "202",
    title: "Joe Knight",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_289.png?v=1729737036&width=120",
  },
  {
    id: "203",
    title: "Summer Chandler",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_291.png?v=1729737036&width=120",
  },
  {
    id: "204",
    title: "Dennis Daniels",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_292.png?v=1729737036&width=120",
  },
  {
    id: "205",
    title: "Aubrie Butler",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_293.png?v=1729737036&width=120",
  },
  {
    id: "206",
    title: "Matias Casey",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_282.png?v=1729737036&width=120",
  },
  {
    id: "207",
    title: "Melany Rodriguez",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_288.png?v=1729737036&width=120",
  },
  {
    id: "208",
    title: "Sophia Bennett",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_302.png?v=1729737036&width=120",
  },
  {
    id: "209",
    title: "Ethan Morales",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/Rectangle_302.png?v=1729737036&width=120",
  },
];

const proddata = [
  {
    id: "9713931944219",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_15.jpg?v=1728615410&",
    title: "A Short History of Nearly Everything",
    link: "/products/a-good-morning-america-book-club-pick-2",
    price: "$299.95"
  },
  {
    id: "9713924997403",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_7.jpg?v=1728615154&",
    title: "Complete Set of 7 Books: 30 Days to Change Yourself - Don't Be Perfect, Be Happy",
    link: "/products/don-t-forget-the-girl",
    price: "$299.95"
  },
  {
    id: "9713924997404",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_3.jpg?v=1728615010&",
    title: "Live in the Times of cholera",
    link: "/products/don-t-forget-the-girl",
    price: "$199.95"
  },
  {
    id: "9713924997405",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_10.jpg?v=1728615300&",
    title: "One hundred years of solitude",
    link: "/products/the-longest-ride",
    price: "$249.95"
  },
  {
    id: "9713924997406",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_12.jpg?v=1728615350&",
    title: "The Girl With the Dragon tattoo",
    link: "/products/the-return",
    price: "$279.95"
  },
  {
    id: "9713924997407",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_5.jpg?v=1728615100&",
    title: "30 Days to Change Yourself",
    link: "/products/30-days-to-change-yourself",
    price: "$149.95"
  },
  {
    id: "9713924997408",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615200&",
    title: "Be Happy, Not Perfect",
    link: "/products/be-happy-not-perfect",
    price: "$189.95"
  },
  {
    id: "9713924997409",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_9.jpg?v=1728615250&",
    title: "Morning America Book Club Pick",
    link: "/products/morning-america-book-club-pick",
    price: "$209.95"
  },
  {
    id: "9713924997410",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_11.jpg?v=1728615320&",
    title: "The Author’s Legacy",
    link: "/products/the-authors-legacy",
    price: "$259.95"
  },
  {
    id: "9713924997411",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615400&",
    title: "Enduring First Love",
    link: "/products/enduring-first-love",
    price: "$279.95"
  },

  {
    id: "9713933517083",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_25.jpg?v=1728615733&",
    title: "The World According to Garp",
    link: "/products/the-city-and-its-uncertain-walls-a-novel-3",
    price: "$29.95"
  },
  {
    id: "9713931714843",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615379&",
    title: "The Wind-Up Bird Chronicle",
    link: "/products/scattershot-life-music-elton-and-me-2",
    price: "$39.95"
  },

  {
    id: "101",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/preview_images/bo_pro_22_133cd00b-479c-41a8-98fe-939a4fa57dad.jpg?v=1731319293&width=800",
    title: "A prayer for owen meany",
    link: "/products/the-city-and-its-uncertain-walls-a-novel-3",
    price: "$29.95"
  },
  {
    id: "102",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_18.jpg?v=1728615507&",
    title: "All the light we cannot see",
    link: "/products/scattershot-life-music-elton-and-me-2",
    price: "$39.95"
  },
  {
    id: "103",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_30.jpg?v=1728615904&",
    title: "Extremely loud and incredibly close",
    link: "/products/a-good-morning-america-book-club-pick-2",
    price: "$299.95"
  },
  {
    id: "104",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615197&",
    title: "the Elegance of The Hedgehog",
    link: "/products/don-t-forget-the-girl",
    price: "$299.95"
  },
  {
    id: "105",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_8.jpg?v=1728615197&",
    title: "The shadow of the wind",
    link: "/products/don-t-forget-the-girl",
    price: "$199.95"
  },
  {
    id: "106",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_13.jpg?v=1728615379&",
    title: "The Wind up bird",
    link: "/products/the-longest-ride",
    price: "$249.95"
  },
  {
    id: "107",
    img: "",
    title: "The Return",
    link: "/products/the-return",
    price: "$279.95"
  },

  {
    id: "1011",
    title: "The Seven Husbands Of Evelyn Hugo",
    price: "269.95",
    link: "",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_11.jpg?v=1728615321&"
  },
  {
    id: "1012",
    title: "Memoirs of a Geisha",
    price: "289.95",
    link: "",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_17.jpg?v=1728615478&width"
  },
  {
    id: "1013",
    title: "Scattershot: Life, Music, Elton, and Me",
    price: "309.95",
    link: "",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_2.jpg?v=1728614778&"
  },
  {
    id: "1014",
    title: "The Catcher in the Rye",
    price: "29.95",
    link: "",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_7.jpg?v=1728615154&"
  },
  {
    id: "1015",
    title: "The City and Its Uncertain Walls: A Novel",
    price: "339.95",
    link: "",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_29.jpg?v=1728615878&"
  },
  {
    id: "1016",
    title: "The House of the Spirits",
    price: "29.95",
    link: "",
    img: "https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_21.jpg?v=1728615595&"
  }
];



export { proddata, imagesData, productsData, productsData2, productsData3, Gridproducts, FeaturedAuthData };