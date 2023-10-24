import { useEffect, useRef, useState } from "react";
import ArticleIcon from '@mui/icons-material/Article';
import ContactsIcon from '@mui/icons-material/Contacts';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AppsIcon from '@mui/icons-material/Apps';


export default function Test() {

    
    const [componentState, setComponentState] = useState(false);
    const array = [
        { id: 1, tag: <SettingsOutlinedIcon />, com: "Search" }, { id: 2, tag: <ContactsIcon />, com: "untruc" },
        { id: 3, tag: <ConfirmationNumberOutlinedIcon />, com: "untruc" }, { id: 4, tag: <ArticleIcon />, com: "untruc" },
    ]

    return (

        <div className={`flex xl:flex-col xl:h-full xl:w-16 h-16 w-3/6 ${componentState ? "w-36 justify-start" : ""} left-0 bg-black bg-clip-padding border-r px-4 transition-all m-8 p-4`}>

            <div className=" self-center p-4 text-white rounded-md hover:bg-red-600 hover:text-black"
                onClick={() => setComponentState(!componentState)}
            >
                <AppsIcon />

            </div>

        <div className="relative mt-6 hover:bg-red-600">
        <span className={`flex absolute inset-y-0 left-0 items-center ${componentState ? "text-black pl-3" : "text-white pl-2"}`}>
          <SearchOutlinedIcon />
        </span>

        <input
          type="text"
          className={`py-2 text-gray-700 bg-white border rounded-md focus:border-red-600 focus:ring-red-300 focus:ring-opacity-40 focus:outline-none focus:ring
          ${componentState ? "w-full pl-10" : "w-0 p-0 bg-transparent"}`}
          placeholder="Search"
        />
      </div>

            <hr className="my-4 border-gray-200 dark:border-gray-600" />

            {array.map((item: any) => {
                return (
                    <div className="flex self-center p-2 m-2 text-white rounded-md hover:bg-red-600 hover:text-black" key={item.id}>
                        {item.tag}
                        <span className={`px-4 ${componentState ? "block" : "hidden"}`}>{item.com}</span>
                    </div>
                )
            })}

            <hr className="my-4 border-gray-200 dark:border-gray-600" />

        

        </div>
    )
}
