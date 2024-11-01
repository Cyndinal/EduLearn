import React from 'react';
import {BooksData} from "../PoliticsData";
import Image from "next/image";
import Link from "next/link";

function Page(props) {
    return (
        <div className={'grid grid-cols-3'}>
            {BooksData.map((book, index) => (
                <div key={index} className={'rounded-md text-wrap w-90 m-5 p-4'}>
                    <h4 className={'p-4 text-2xl'}>{book.topic}</h4>
                    <div className={'pb-10'}>
                        <Image width={200} height={50} src={book.ImageUrl} alt={"Health"}/>
                    </div>


                    <p className={'text-wrap'}>
                        {book.Description}
                        <span>
                            <Link href="/https://news.un.org/en/story/2024/07/1151981">Read more</Link>
                        </span>

                    </p>
                </div>
            ))}
        </div>
    );
}

export default Page;