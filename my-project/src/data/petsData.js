const pets = [
  // ⭐⭐⭐⭐⭐ DOGS (10)
  {
    name: "Golden Retriever",
    type: "Dog",
    price: "₹18,000",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
  },
  {
    name: "German Shepherd",
    type: "Dog",
    price: "₹20,000",
    image: "https://m.media-amazon.com/images/I/61N4Vb291QL.jpg",
  },
  {
    name: "Labrador Retriever",
    type: "Dog",
    price: "₹22,000",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
  },
  {
    name: "Pug",
    type: "Dog",
    price: "₹16,000",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  },
  {
    name: "Beagle",
    type: "Dog",
    price: "₹17,000",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
  },
  {
    name: "Rottweiler",
    type: "Dog",
    price: "₹28,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCynJjjhS9VQvLpb47bKaBcvRovMBVJypCA&s",
  },
  {
    name: "Shih Tzu",
    type: "Dog",
    price: "₹25,000",
    image:
      "https://st.depositphotos.com/1004592/4160/i/450/depositphotos_41605001-stock-photo-shih-tzu.jpg",
  },
  {
    name: "Doberman",
    type: "Dog",
    price: "₹24,000",
    image: "https://premiumpetpalace.com/listing_images/doberman-goa-02.jpeg",
  },
  {
    name: "Husky",
    type: "Dog",
    price: "₹30,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48r80RfBzB0_4uYA-02CGCI78gs-FRxru8g&s",
  },
  {
    name: "Dachshund",
    type: "Dog",
    price: "₹15,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEXLlFXHhgHzxR8sP21DXQOpjNbFuhZpVtQ&s",
  },

  // ⭐⭐⭐⭐⭐ CATS (10)
  {
    name: "Persian Cat",
    type: "Cat",
    price: "₹12,000",
    image:
      "https://www.puppiezo.com/wp-content/uploads/2025/03/PERSIAN-CAT-1.jpg",
  },
  {
    name: "Siamese Cat",
    type: "Cat",
    price: "₹14,000",
    image:
      "https://cdn.shopify.com/s/files/1/1185/0798/files/two-white-blue-eyed-siamese-kittens.jpg",
  },
  {
    name: "British Shorthair",
    type: "Cat",
    price: "₹18,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdO3LmpXIwj0aUqEGmVCgx9E4zRkMI7GLeTQ&s",
  },
  {
    name: "Maine Coon",
    type: "Cat",
    price: "₹25,000",
    image:
      "https://streunerherzen.com/wp-content/uploads/2024/07/Maine-Coon_reinrassig_6.jpg",
  },
  {
    name: "Bengal Cat",
    type: "Cat",
    price: "₹20,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfGbv95Y1yhp9-GkoRkBpfMytoQf5o2yLfA&s",
  },
  {
    name: "Ragdoll",
    type: "Cat",
    price: "₹22,000",
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8",
  },
  {
    name: "Scottish Fold",
    type: "Cat",
    price: "₹21,000",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e",
  },
  {
    name: "Russian Blue",
    type: "Cat",
    price: "₹19,000",
    image:
      "https://ca-times.brightspotcdn.com/dims4/default/931f524/2147483647/strip/true/crop/1366x717+0+45/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4c%2Ff5%2Faa2832da4de0a78550c9d2c5773b%2Fkevin-cat-breed-templates-1200x8003.jpg",
  },
  {
    name: "Abyssinian",
    type: "Cat",
    price: "₹18,500",
    image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0",
  },
  {
    name: "Oriental Cat",
    type: "Cat",
    price: "₹17,000",
    image:
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Oriental_shorthair_cat.jpg?v=1722406738",
  },

  // ⭐⭐⭐⭐⭐ BIRDS (10)
  {
    name: "Parrot",
    type: "Bird",
    price: "₹2,500",
    image:
      "https://myrightbird.com/assets/uploads/mybird_yellow_crowned_mischief-900x675.jpg",
  },
  {
    name: "Love Birds",
    type: "Bird",
    price: "₹3,200",
    image:
      "https://external-preview.redd.it/lovebird-is-a-social-and-affectionate-species-of-parrot-and-v0-8wDeJIpxxBTUbvsPqcVn8-3zqHwMrSO5ARqlVKP6okw.jpg?auto=webp&s=3c5a4d3e66a94a1f58f22fa4451ae69954425fbd",
  },
  {
    name: "Cockatiel",
    type: "Bird",
    price: "₹4,000",
    image:
      "https://www.foodforbirds.co.uk/wp-content/uploads/2024/11/cockatiel-scaled.webp",
  },
  {
    name: "Budgerigar",
    type: "Bird",
    price: "₹1,500",
    image:
      "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/123378071/900",
  },
  {
    name: "Canary",
    type: "Bird",
    price: "₹3,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfGBUGZEfCLGG67jDc9iIYJTRl8GSlX8VRhw&s",
  },
  {
    name: "Macaw",
    type: "Bird",
    price: "₹50,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_GC8_w8Wxw17xtbfxM0ijdjYUDn8PcC4Pw&s",
  },
  {
    name: "Finch",
    type: "Bird",
    price: "₹1,200",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVO5cHQAogNRrSOHTSxS387tsx9OYVfQBfw&s",
  },
  {
    name: "African Grey",
    type: "Bird",
    price: "₹35,000",
    image:
      "https://lafeber.com/pet-birds/wp-content/uploads/2013/06/African-Grey-300x300.jpg",
  },
  {
    name: "Cockatoo",
    type: "Bird",
    price: "₹40,000",
    image:
      "https://m.media-amazon.com/images/I/61Rs0UFyRlL._AC_UF350,350_QL50_.jpg",
  },
  {
    name: "Love Bird Yellow",
    type: "Bird",
    price: "₹3,500",
    image:
      "https://birdlifedata.blob.core.windows.net/species-images/22685352.jpg",
  },

  // ⭐⭐⭐⭐⭐ FISH (10)
  {
    name: "Gold Fish",
    type: "Fish",
    price: "₹500",
    image:
      "https://freshwateraquatica.org/cdn/shop/products/lg_39507_Fantail_Goldfish_Red.jpg?v=1693570381",
  },
  {
    name: "Betta Fish",
    type: "Fish",
    price: "₹800",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2023/2/HL/GW/QX/29367984/product-jpeg-500x500.jpg",
  },
  {
    name: "Guppy",
    type: "Fish",
    price: "₹300",
    image:
      "https://i0.wp.com/aquariumtidings.com/wp-content/uploads/2014/06/Depositphotos_45215265_original.jpg?fit=2736%2C2180&ssl=1",
  },
  {
    name: "Angelfish",
    type: "Fish",
    price: "₹700",
    image:
      "https://intanaquariumfeeds.com/cdn/shop/articles/3d-colorful-fish-with-dark-background_23-2150721042.jpg?v=1715687210",
  },
  {
    name: "Molly Fish",
    type: "Fish",
    price: "₹400",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvYMUiGvFhcfPihG666XKdlWwEGFdxLuFQQ&s",
  },
  {
    name: "Koi Fish",
    type: "Fish",
    price: "₹2,500",
    image:
      "https://image.petmd.com/files/styles/978x550/public/2022-09/koi.fish_.jpg",
  },
  {
    name: "Oscar Fish",
    type: "Fish",
    price: "₹900",
    image: "https://a-z-animals.com/media/2023/04/Oscar-Fish-1024x710.jpg",
  },
  {
    name: "Tetra Fish",
    type: "Fish",
    price: "₹350",
    image:
      "https://aquastore.in/image/cache/catalog///aquastore.in/1.Storeimages/1.Aquarium/1.Aquastore/10.tetra/Assorted-Widow-Tetra-Fish-800x800.jpg",
  },
  {
    name: "Zebra Fish",
    type: "Fish",
    price: "₹250",
    image:
      "https://a-z-animals.com/media/2023/03/shutterstock_680522524-1024x576.jpg",
  },
  {
    name: "Discus Fish",
    type: "Fish",
    price: "₹1,500",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIcm7TWeKXFv-QJQQTCkCOEVEcbEt5Pwxtg&s",
  },

  // ⭐⭐⭐⭐⭐ RABBITS (10)
  {
    name: "White Rabbit",
    type: "Rabbit",
    price: "₹3,500",
    image:
      "https://img.freepik.com/premium-photo/portrait-little-white-rabbit-ground_281691-2464.jpg",
  },
  {
    name: "Dutch Rabbit",
    type: "Rabbit",
    price: "₹4,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/American_Grand_Champion_Dutch_Rabbit.jpg",
  },
  {
    name: "Lionhead Rabbit",
    type: "Rabbit",
    price: "₹5,000",
    image:
      "https://5.imimg.com/data5/QY/JH/OV/SELLER-35996958/lion-head-rabbit-farm.jpg",
  },
  {
    name: "Flemish Giant",
    type: "Rabbit",
    price: "₹6,000",
    image: "https://a-z-animals.com/media/2022/03/shutterstock_1354238711.jpg",
  },
  {
    name: "Mini Lop",
    type: "Rabbit",
    price: "₹4,500",
    image:
      "https://image.petmd.com/files/styles/978x550/public/2023-09/minilop.jpg",
  },
  {
    name: "Holland Lop",
    type: "Rabbit",
    price: "₹4,200",
    image:
      "https://www.wideopenspaces.com/wp-content/uploads/sites/3/2020/11/Holland-Lop.png?fit=1200%2C800",
  },
  {
    name: "English Angora",
    type: "Rabbit",
    price: "₹5,500",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzH0F1CuzkRvyaJM4qX_eIEhwVr844WrzzrA&s",
  },
  {
    name: "Californian Rabbit",
    type: "Rabbit",
    price: "₹3,800",
    image:
      "https://i.pinimg.com/564x/36/ae/1b/36ae1bfd1aa416072e5232f1e2fde191.jpg",
  },
  {
    name: "Grey Rabbit",
    type: "Rabbit",
    price: "₹3,000",
    image: "https://thumbs.dreamstime.com/b/gray-bunny-rabbit-12964748.jpg",
  },
  {
    name: "Brown Rabbit",
    type: "Rabbit",
    price: "₹3,200",
    image:
      "https://tiimg.tistatic.com/fp/1/008/196/brown-rabbit-with-weight-3-kg-058.jpg",
  },
];

export default pets;
