
import * as React from "react";
import { Button } from '@mui/material';

export default function Sidebar() {

    return (
        <div className='absolute left-0 w-48 h-screen bg-black z-50'>
            
            <div className="grid grid-cols-1 space-y-10 ">
                <div className="text-white text-4xl font-bold ml-0 mr-0">Menu</div>
                <Button className="text-white hover:text-red-600">Home</Button>
                <Button className="text-white hover:text-red-600">Account</Button>
                <Button className="text-white hover:text-red-600">Performance</Button>
            </div>

        </div>
    )
}