'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";


function Navbar() {
    const path = usePathname();

    return (
        <div className={'flex justify-between p-10'}>
            <div className={'flex font-bold hover:text-gray-100 animate-bounce'}>
                PortiaBLOG
            </div>

            <div className={'flex  space-x-3'}>
                <div className={`${path === "/"} `}><Link href={"/"} >Home</Link></div>
                <div className={`${path === "/Health"} text-blue-700`}><Link href={"/Health"} >Health</Link></div>
                <div className={`${path === "/Books"} text-blue-700`}><Link href={"/Books"} >Books</Link></div>
                <div className={`${path === "/Politics"} text-blue-700`}><Link href={"/Politics"} >Politics</Link></div>


            </div>
        </div>
    );
}

export default Navbar;