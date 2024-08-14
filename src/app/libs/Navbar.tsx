import React from 'react';
import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <div className={'flex justify-between p-10'}>
            <div>
                <Image src={'/favicon.ico'} alt={'Logo'} priority={true} height={50} width={50} className={'h-[30px]'} />
            </div>

            <div className={'flex  space-x-3'}>
                <div><Link href={"/"} >Home</Link></div>
                <div><Link href={"/posts"} >Posts</Link></div>
                <div><Link href={"/create"} >Create</Link></div>

            </div>
        </div>
    );
}

export default Navbar;