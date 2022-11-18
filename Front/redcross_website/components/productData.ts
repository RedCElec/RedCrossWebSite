


export interface productType {
    id: Number,
    title: String,
    description: String,
    Image: String,

}


export interface productData extends productType { };

     const dataArray= [
    {
        id:1,
        title: "tu connais",
        description: "qsdfg",
        Image: "/images.jpg",
    
    },
    {
        id:2,
        title: "tu connais",
        description: "qsdfg",
        Image: "/Test_1.jpg",
    
    },
]

export default dataArray;