


export interface carousselType {
    id: number,
    title: string,
    description: string,
    image: string,

}


export interface carousselData extends carousselType { };

     const data= [
    {
        id: 1,
        image: "/AmpVox.webp",
        title: "VoxAmplifier",
        description: "tuConnais",
    },
    {
        id:2,
        image: "/Test_1.jpg",
        title: "MarshallAmplifier",
        description: "tuConnais",
    
    },
    {
        id:3,
        image: "/Banner-Marshall-Studio.jpg",
        title: "MarshallAmplifier",
        description: "tuConnais",
    
    },
    {
        id:4,
        image: "/wp10891584.jpg",
        title: "JHS",
        description: "tuConnais",
    
    },
]

export default data;