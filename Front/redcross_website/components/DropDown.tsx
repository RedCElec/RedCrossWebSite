

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';


export default function Dropdown() {

    const router = useRouter();
    const [click, setClick] = useState(false);

    const handleClick = () => {

     setClick(!click);
    }

    return (
        <div> 
            <Button className="text-white hover:text-red-600" onClick={handleClick}>Login &#x2798;</Button>
            
            {click ? <div className=' bg-black text-white list-none divide-y divide-gray-100 shadow mt-5 text-center z-50 py-3 absolute'>
                <ul className="py-0">
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-5 py-2" onClick={() => router.push('/loginPage')}>Login</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-5 py-2">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block p-5 py-2">Sign out</a>
                    </li>
                </ul>
            </div> : null}
        </div>
    );
}

