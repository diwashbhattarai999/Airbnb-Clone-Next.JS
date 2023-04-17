// import axios from "axios";

export default function getListings() {
  //   const data = await axios
  //     .get("https://www.jsonkeeper.com/b/4G1G")
  //     .then((res) => res.data)
  //     .catch((err) => err);

  //   return data;

  return [
    {
      id: 1,
      imageSrc: "/assets/houses/1.jpg",
      locationValue: "US",
      category: "Beach",
      price: "165",
    },
    {
      id: 2,
      imageSrc: "/assets/houses/2.jpg",
      locationValue: "JP",
      category: "Windmills",
      price: 21,
    },
    {
      id: 3,
      imageSrc: "/assets/houses/3.jpg",
      locationValue: "DE",
      category: "Modern",
      price: 999,
    },
    {
      id: 4,
      imageSrc: "/assets/houses/4.jpg",
      locationValue: "IN",
      category: "Countryside",
      price: 362,
    },
    {
      id: 5,
      imageSrc: "/assets/houses/5.jpg",
      locationValue: "BR",
      category: "Pools",
      price: 248,
    },
    {
      id: 6,
      imageSrc: "/assets/houses/6.jpg",
      locationValue: "TH",
      category: "Islands",
      price: 683,
    },
    {
      id: 7,
      imageSrc: "/assets/houses/7.jpg",
      locationValue: "NP",
      category: "Lake",
      price: 249,
    },
    {
      id: 8,
      imageSrc: "/assets/houses/8.jpg",
      locationValue: "PK",
      category: "Caves",
      price: 815,
    },
    {
      id: 9,
      imageSrc: "/assets/houses/9.jpg",
      locationValue: "SR",
      category: "Camping",
      price: 801,
    },
    {
      id: 10,
      imageSrc: "/assets/houses/2.jpg",
      locationValue: "CN",
      category: "Skiing",
      price: 369,
    },
  ];
}
