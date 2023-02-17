


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
        image: "/TestCardSIze-100.jpg",
        title: "MarshallAmplifier",
        description: "tuConnais",
    
    },
    {
        id:3,
        image: "/Banner-Marshall-Studio.jpg",
        title: "Titre3",
        description: "tuConnais oui",
    
    },
    {
        id:4,
        image: "/Test_1.jpg",
        title: "Titre4",
        description: "tuConnais pas trop",
    
    },
    
]

export default data;