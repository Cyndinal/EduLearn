import React from 'react';
import Image from "next/image";

function Books() {
    return (
            <div className={'flex rounded-xl'}>
                <Image width={350} height={200} src={'/Books.jpeg'} alt={"Books"} />
            </div>


    );
}

export default Books;