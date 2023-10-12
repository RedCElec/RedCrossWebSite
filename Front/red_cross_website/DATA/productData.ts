export interface productType {

  
    id: number;
    imageData:{
        image: string;
        height: number;
        width: number;
    }
    infoData:{
        title: string;
        description: string;
        categorie: string;
        star: number;
        price: number;
    }
}

export interface productData extends productType {}

const data = [
  {
    id: 0,
    imageData: {
      image: "/mxrtry.jpg",
      height: 300,
      width: 600,
    },
    infoData: {
      title: "MXR DynaComp Yellow edition",
      description: "Un comp MXR pas trop mauvais",
      star: 3,
      price: 200,
      categorie: "compressor"
    },
  },
  {
    id: 1,
    imageData: {
      image: "/mxrtry.jpg",
      height: 300,
      width: 600,
    },
    infoData: {
      title: "MXR DynaComp Yellow edition",
      description: "Un comp MXR pas trop mauvais",
      star: 3,
      price: 200,
      categorie: "compressor"
    },
  },
  {
    id: 2,
    imageData: {
      image: "/testPedal.jpg",
      height: 300,
      width: 600,
    },
    infoData: {
      title: "OverDrive type Vemuram",
      description: "On ne peut pas se tromper avec une Vemuram",
      star: 4,
      price: 400,
      categorie: "Drive"
    },
  },
  {
    id: 3,
    imageData: {
      image: "/ampVox.webp",
      height: 300,
      width: 600,
    },
    infoData: {
      title: "Ampli VOX AC30",
      description: "Un ampli British sacrément cool",
      star: 5,
      price: 3000,
      categorie: "ampli"
    },
  },
  {
  id: 4,
    imageData: {
    image: "/mxrtry.jpg",
      height: 300,
      width: 600,
    },
    infoData: {
      title: "MXR DynaComp Yellow edition",
      description: "Un comp MXR pas trop mauvais",
      star: 3,
      price: 200,
      categorie: "compressor"
    },
  },
  {
    id: 5,
    imageData: {
      image: "/testPedal.jpg",
      height: 300,
      width: 600,
    },
    infoData: {
      title: "OverDrive type Vemuram",
      description: "On ne peut pas se tromper avec une Vemuram",
      star: 4,
      price: 400,
      categorie: "Drive"
    },
  },
  {
    id: 7,
    imageData: {
      image: "/ampVox.webp",
      height: 300,
      width: 600,
    },
    infoData: {
      title: "Ampli VOX AC30",
      description: "Un ampli British sacrément cool",
      star: 5,
      price: 3000,
      categorie: "ampli"
    },
  },
];

export default data;
