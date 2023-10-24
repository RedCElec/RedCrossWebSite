'use client'
import React from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Button } from "@mui/material";


type Props = {
    productId?:string
}

const AddCart = ({productId}: Props) => {

    const {data:session} = useSession()
    const id = session?.user.id
    const router = useRouter()

    const handleCart =  async() => {
        if(session?.user){
        try{
            const res = await axios.post('/api/cart/addCartDb',{
                productId:productId,
                userId:id
            })
            .then((res)=> {
                console.log(res);
                router.push('/authClient/basketPage');
                
                
            })
        }catch(error){
            console.log(error)
        }
    }else{
        router.push('/signin')
    }
    }
        return(
            
            
            <Button onClick={handleCart} variant="contained" className="text-white bg-red-600 h-14 text-xl p-2 font-bold rounded-md font-mono mr-4">
              Ajouter au Panier
            </Button> 
        
            
        )
}

export default AddCart