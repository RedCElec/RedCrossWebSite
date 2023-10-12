import { useEffect, useRef, useState } from "react";
import ArticleIcon from '@mui/icons-material/Article';
import ContactsIcon from '@mui/icons-material/Contacts';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import { Button, dividerClasses } from "@mui/material";



export default function SideBar() {

    const sizeRef = useRef(null);
    const [componentState, setComponentState] = useState(false);
    const [dimensions, setDimensions] = useState({
        height: undefined,
        width: undefined
    })
    {/* useEffect(():any => {
        function handleResize() {
            setDimensions({
                height: sizeRef.current.offsetHeight,
                width: sizeRef.current.offsetWidth
            })

            console.log(dimensions);
            changeComponentState(dimensions)

        }

       } window.addEventListener('resize', handleResize);

        return _ => {
            window.removeEventListener('resize', handleResize);
        }
    })*/}


    function handleResize() {
      
      setTimeout(()=> {setDimensions({
          height: sizeRef.current.offsetHeight,
          width: sizeRef.current.offsetWidth
      })

      console.log(dimensions.width);
      //changeComponentState(dimensions)

      
        if(dimensions.width <= 64){
          //setComponentState(false);
          console.log("we get something");
        }
        else{
          //setComponentState(true);
        }
      }, 300);

  }

    {/*const changeComponentState = (dimensionsTable) => {
        
        if (dimensionsTable.width < 1200 ) {
            setComponentState(false);
        }
        else{
            setComponentState(true);
        }
    }*/}

        return (

    
              <aside ref={sizeRef} onClick={handleResize} className={`flex flex-col h-full m-4 py-4 overflow-hidden bg-black bg-clip-padding border-r sm:px-4 transition-all w-full sm:w-16 left-0 `}>
                
                <a    className={`flex self-center px-4 py-2 mt-5 text-white transition-colors duration-300 transform rounded-md hover:bg-red-600 hover:text-black`}
                      href="#" onClick={() => setComponentState(!componentState)}
                    >
                <AppsIcon />
                </a>
                
                <div className="relative mt-6">
                  <span className={`flex ${componentState ? "absolute inset-y-0 left-0 pl-3 text-black" : "justify-center "} flex items-center text-white`}>
                  <SearchOutlinedIcon/>
                  </span>
        
                  {componentState ? <input
                    type="text"
                    className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-red-600 focus:ring-red-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    placeholder="Search"
                  /> : ""}
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-600" />
        
                <div className="flex flex-col justify-between text-white font-mono flex-1">
                  <nav>
                    <a
                      className="flex items-start justify-center px-4 py-2 mt-1 text-white transition-colors duration-300 transform rounded-md hover:bg-red-600 hover:text-black"
                      href="#" 
                    >
                      <ArticleIcon />
        
                      {componentState ? <span className="mx-4 font-medium">DashBoard</span> : ""}
                    </a>
        
                    <a
                      className={`flex ${componentState ? "" : "justify-center"} items-start px-4 py-2 mt-5 text-white transition-colors duration-300 transform rounded-md hover:bg-red-600 hover:text-black`}
                      href="#"
                    >
                    <ContactsIcon/>

                      {componentState ? <span className="mx-4 font-medium">Accounts</span> : "" }
                    </a>
        
                    <a
                      className={`flex ${componentState ? "" : "justify-center"} items-start px-4 py-2 mt-5 text-white transition-colors duration-300 transform rounded-md hover:bg-red-600 hover:text-black`}
                      href="#"
                    >
                      <ConfirmationNumberOutlinedIcon/>
        
                      {componentState ? <span className="mx-4 font-medium">Tickets</span> : "" }
                    </a>
        
                    <a
                      className={`flex ${componentState ? "" : "justify-center"} items-start px-4 py-2 mt-5 text-white transition-colors duration-300 transform rounded-md hover:bg-red-600 hover:text-black`}
                      href="#"
                    >
                    <SettingsOutlinedIcon/>
        
                      {componentState ? <span className="mx-4 font-medium">Settings</span> : "" }
                    </a>
        
                    <hr className="my-6 border-gray-200 dark:border-gray-600" />
        
                  </nav>
                </div>
              </aside>
            
        )    
}
