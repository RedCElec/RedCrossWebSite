
import Image from "next/image"
import Link from "next/link"
import DeleteFromBasket from "./DeleteFromBasket"

type Props = {
    props: any,
    userId: string
    refreshFct: any
}

export default function CardBasket(param: Props) {

    const objData = param.props
    
    //const handle = () => param.refreshFct();

    return (

        <div className="flex h-2/6 w-full font-mono shadow-md shadow-grey-700 items-center justify-between shadow-lg p-5 rounded-lg
        hover:shadow-[5px_5px_rgba(220,38,38,_0.4),_10px_10px_rgba(220,38,38,_0.3),_15px_15px_rgba(220,38,38,_0.2),_20px_20px_rgba(220,38,38,_0.1),_25px_25px_rgba(220,38,38,_0.05)]
        mt-2 hover:m-4 ease-in-out duration-300">

            <Link href={`/products/${objData.id}`}>
                <div>
                    <Image src={objData.image} width={200} height={200} className='w-[200px] h-[200px] object-cover object-top' alt="" />
                </div>
            </Link>

            <div>
                <h1 className='text-2xl mb-3'>{objData?.title}</h1>
                <h2 className='mb-2 text-neutral-800'>Price: {objData?.price}</h2>
                <h3 className='text-sm text-neutral-600 mb-2'>Category: {objData?.category}</h3>
                <button>click</button>


            </div>

            <DeleteFromBasket productId={objData?.id} refreshFct={param.refreshFct} />

        </div>

    )

}