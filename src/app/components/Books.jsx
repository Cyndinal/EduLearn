import React from 'react';
import Image from "next/image";

function Books(props) {
    return (
            <div className={'flex md:w-auto  h-auto rounded-md'}>
                <Image width={500} height={100} src={'/Books.jpeg'} alt={"Books"} />
            </div>


    );
}

export default Books;