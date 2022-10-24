import AppLayout from "../../components/Layout";
import { Image } from 'mui-image'

export default function Uncolor() {
    return (
        <AppLayout type="centered">
            <div className="flex flex-row w-full">
                <div className="h-full w-full" >text</div>
                <div className=" w-full grid justify-items-end">
                    <Image src="/uncolor.svg" alt="Picture of the author" width={500} height={907} className="shadow-xl hover:shadow-2xl"/>
                </div>
            </div>
        </AppLayout>
    )
}