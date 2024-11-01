import React from 'react';
import Image from "next/image";
import {PoliticsData} from "../PoliticsData";
import Link from "next/link";

function Page() {
    return (
        <div className="grid grid-cols-3">
            {PoliticsData.map((item, index) => (

                <div key={index} className={'rounded-md text-wrap w-90 m-5 p-4'}>
                    <h4 className={'p-4'}>{item.topic}</h4>
                    <div className={'pb-10'}>
                        <Image width={200} height={50} src={item.ImageUrl} alt={"Health"}/>
                    </div>

                    <code className={'text-wrap pt-10'}>
                        {item.Description}
                        <span>
                            <Link href="/https://news.un.org/en/story/2024/07/1151981">Read more</Link>
                        </span>

                    </code>
                </div>
            ))}


        </div>
    );
}

export default Page;