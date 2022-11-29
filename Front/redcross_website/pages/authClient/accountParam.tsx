

import {signOut} from 'next-auth/react'

export default function AccountParam() {


    return (
        <div>
        <button onClick={() => signOut({callbackUrl: 'http://localhost:3000'})}>Sign Out</button>
        </div>
    )
}

