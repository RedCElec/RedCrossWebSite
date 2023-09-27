


export interface carousselType {
    id: string,
    title: string,
    description: string,
    image: string,

}


export interface carousselData extends carousselType { };

     const data= [
    {
        id: "first",
        image: "/AmpVox.webp",
        title: "VoxAmplifier",
        description: "tuConnais",
    },
    {
        id: "second",
        image: "/Test_1.jpg",
        title: "MarshallAmplifier",
        description: "tuConnais",
    
    },
]

export default data;