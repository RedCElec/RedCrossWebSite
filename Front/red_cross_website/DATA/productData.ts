

export interface productType {
    id: number,
    title: string,
    description: string,
    image: string,
    star: number

}

export interface productData extends productType { };

const data = [
    {
        id: 1,
        image: "/images.jpeg",
        title: "tu connais",
        description: "qsdfg",
        star: 4,

    },
    {
        id: 2,
        image: "/ampVox.webp",
        title: "tu connais",
        description: "qsdfg",
        star: 5,

    },
    {
        id: 3,
        image: "/images.jpeg",
        title: "tu connais",
        description: "qsdfg",
        star: 3,

    },
    {
        id: 4,
        image: "/images.jpeg",
        title: "tu connais",
        description: "qsdfg",
        star: 4,
    },
    {
        id: 5,
        image: "/testPedal.jpg",
        title: "tu connais",
        description: "qsdfg",
        star: 1,

    },
    {
        id: 6,
        image: "/images.jpeg",
        title: "tu connais",
        description: "qsdfg",
        star: 5,

    },

]

export default data;