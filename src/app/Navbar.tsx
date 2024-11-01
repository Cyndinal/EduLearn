'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";


function Navbar() {
    const path = usePathname();

    return (
        <div>

            <div className={'flex font-bold hover:text-gray-100'}>
                <p>Name: Portia Kissiwaa</p>&nbsp;
                <p>Index Number:10290169</p>
            </div>

            <div className={'hidden space-x-3 md:flex justify-center  '}>
                <div className={`${path === "/" ? "font-extrabold underline text-blue-400" : null}`}><Link
                    href={"/"}>Home</Link></div>
                <div className={`${path === "/Health" ? "font-extrabold underline text-blue-400" : null}  `}><Link
                    href={"/Health"}>Health</Link></div>
                <div className={`${path === "/Books" ? "font-extrabold underline text-blue-400" : null} `}><Link
                    href={"/Books"}>Books</Link></div>
                <div className={`${path === "/Politics" ? "font-extrabold underline text-blue-400" : null} `}><Link
                    href={"/Politics"}>Politics</Link></div>
            </div>
        </div>
    );
}

export default Navbar;