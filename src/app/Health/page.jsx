import React from 'react';
import {HealthData} from "../PoliticsData";
import Image from "next/image";
import Link from "next/link";

function Page(props) {
    return (
        <div className={'md:gap-4 p-5 md:items-center md:justify-center flex-col md:grid grid-cols-3 w-full lg:w-auto'}>

            {HealthData.map((item, index) => (
                <div key={index} className={'flex-col'}>
                    <h3 className={''}>{item.topic}</h3>
                    <div>
                        <Image width={140} height={140} src={item.ImageUrl} alt={'Health'}/>
                        {item.Description}

                    </div>

                </div>
            ))}


        </div>
    );
}

export default Page;