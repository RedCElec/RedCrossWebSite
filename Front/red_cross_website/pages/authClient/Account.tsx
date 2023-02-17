import AppLayout from "../../components/Layout";
import { signOut } from 'next-auth/react'

export default function Settings() {


    return (
        <AppLayout type="centered">
            <div className='grid grid-cols-1'>
                <div>SETTINGS</div>
                <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}>Sign Out</button>
            </div>
        </AppLayout>
    )
}



