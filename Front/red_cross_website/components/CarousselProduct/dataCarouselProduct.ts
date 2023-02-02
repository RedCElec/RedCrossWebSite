


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
        title: "Titre3",
        description: "tuConnais oui",
    
    },
    {
        id:4,
        image: "/Test_1.jpg",
        title: "Titre4",
        description: "tuConnais pas trop",
    
    },
    {
        id:5,
        image: "/Banner-Marshall-Studio.jpg",
        title: "C different",
        description: "tuConnais super bien",
    
    },
    
]

export default data;