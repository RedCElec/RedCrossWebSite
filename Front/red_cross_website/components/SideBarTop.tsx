import { useEffect, useRef, useState } from "react";
import ArticleIcon from '@mui/icons-material/Article';
import ContactsIcon from '@mui/icons-material/Contacts';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AppsIcon from '@mui/icons-material/Apps';


export default function SideBarTop() {


    const [componentState, setComponentState] = useState(false);
    const array = [
        { id: 1, tag: <SettingsOutlinedIcon />, com: "Search" }, { id: 2, tag: <ContactsIcon />, com: "untruc" },
        { id: 3, tag: <ConfirmationNumberOutlinedIcon />, com: "untruc" }, { id: 4, tag: <ArticleIcon />, com: "untruc" },
    ]

    return (
        <div className="w-full h-16 mb-8">
            <div className={`flex h-full w-1/2 justify-between ml-auto mr-auto bg-black bg-clip-padding border-r px-4 transition-all m-8 p-4`}>

                <div className=" self-center p-4 text-white rounded-md hover:bg-red-600 hover:text-black"
                    onClick={() => setComponentState(!componentState)}
                >
                    <AppsIcon />

                </div>

                <div className="flex self-center p-2 m-2 text-white rounded-md hover:bg-red-600 hover:text-black">
                    <SearchOutlinedIcon />
                </div>

                {/*<div className=" hover:bg-red-600">
        <div className={`flex items-center text-white `}>
                        <SearchOutlinedIcon />
                    </div>

            <input
          type="text"
          className={`py-2 text-gray-700 bg-white border rounded-md focus:border-red-600 focus:ring-red-300 focus:ring-opacity-40 focus:outline-none focus:ring
          ${componentState ? "w-full pl-10" : "w-0 p-0 bg-transparent"}`}
          placeholder="Search"
        />
                </div>*/}

                <div className="my h-5/6 w-[1px] bg-white self-center" />

                {array.map((item: any) => {
                    return (
                        <div className="flex self-center p-2 m-2 text-white rounded-md hover:bg-red-600 hover:text-black" key={item.id}>
                            {item.tag}
                            <span className={`px-4 ${componentState ? "block" : "hidden"}`}>{item.com}</span>
                        </div>
                    )
                })}


                <div className="my h-5/6 w-[1px] bg-white self-center" />

            </div>
        </div>
    )
}
