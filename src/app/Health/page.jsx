import React from 'react';
import {HealthData} from "../PoliticsData";
import Image from "next/image";
import Link from "next/link";

function Page(props) {
    return (
        <div className={'grid grid-cols-3  justify-center'}>

            {HealthData.map((item, index) => (
                <div key={index} className={'rounded-md text-wrap w-90 m-5 p-4'}>
                    <h3 className={'p-4 text-2xl pb-10'}>{item.topic}</h3>

                    <div className={'pb-12'}>
                        <Image width={200} height={50} src={item.ImageUrl} alt={"Health"}/>
                    </div>

                    <code className={'text-wrap'}>{item.Description}
                        <span><Link href="/https://news.un.org/en/story/2024/07/1151981">
                            Read more</Link>
                        </span>
                    </code>

                </div>
            ))}


        </div>
    );
}

export default Page;