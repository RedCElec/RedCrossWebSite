'use client'
import React from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type Props = {
    productId?: string
    refreshFct: any
}

const DeleteCart = ( props : Props) => {

    const { data: session } = useSession()
    const id = session?.user.id

    const handleCart = async () => {
        if (session?.user) {
            try {
                await axios.delete('/api/cart/deleteCart', {
                    data: {
                        productId: props.productId,
                        userId: id
                    },
                })
                .then(() => props.refreshFct());

            } catch (error) {
                console.log(error)
            }
        }
        
    }
    return (

        <button className="hover:bg-gray-300/[.3] p-2 rounded-full" onClick={handleCart}><DeleteForeverIcon fontSize={'large'} /></button>
    )
}

export default DeleteCart
