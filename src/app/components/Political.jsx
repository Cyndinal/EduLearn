import React from 'react';
import Image from "next/image";

function Political() {
    return (
        <div className={'flex md:w-auto  h-auto rounded-md'}>
            <Image width={500} height={100} src={'/Politics.jpeg'} alt={"Books"} />
        </div>
    );
}

export default Political;