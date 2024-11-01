import React from 'react';
import Image from "next/image";

function Health(props) {
    return (
        <div className={'flex md:w-auto  h-auto rounded-md '} >
            <Image width={500} height={100} src={'/Healthy.jpeg'} alt={"Health"} />
        </div>
    );
}

export default Health;