'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { MdDarkMode ,MdLightMode} from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";
import { CgSun } from "react-icons/cg";

export default function DarkMode() {

    const {theme,setTheme,systemTheme}=useTheme();
    const [mounted,setMounted]=useState(false);
    const currentTheme=theme === 'system'?systemTheme:theme;
    useEffect(()=>setMounted(true),[]);
    return (
    <div>
        {mounted && currentTheme === 'dark' ? 
        (<CgSun 
            onClick={()=> setTheme('light')}
            className='hover:text-orange-600 text-xl cursor-pointer h-4 w-4'
            />
        ):
        (<BsMoonFill 
            onClick={()=> setTheme('dark')}
            className='hover:text-orange-600 text-xl cursor-pointer h-4 w-4'
            />
        )
        }
        
    </div>
  )
}




{/* <MdDarkMode /> */}
{/* <MdLightMode /> */}