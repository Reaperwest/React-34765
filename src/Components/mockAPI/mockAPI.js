const data = [
    {
      id: 1,
      title: "Batman Arkham Knight",
      img: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg",
      price: 30,
      expired: true,
      detail: "Batman: Arkham Knight es un videojuego de acción-aventura",
      stock: 10,
      category: "PS4",
    },
    {
      id: 2,
      title: "God of War",
      img: "https://regionps.com/wp-content/uploads/2018/01/GOW-OG-image.jpg",
      price: 59,
      expired: false,
      detail: "Kratos y compañia",
      stock: 8,
      category: "PS4",
    },
    {
      id: 3,
      title: "Read Dead Redemption",
      img: "https://besteamdeck.com/wp-content/uploads/2022/09/Red-Dead-Redemption-2-Featured.png",
      price: 59,
      expired: true,
      detail: "Cowboyyy",
      stock: 7,
      category: "PS4",
    },
  ];
  
  export function getGames() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    });
  }