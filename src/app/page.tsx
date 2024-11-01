
import Books from "@/app/components/Books";
import Health from "@/app/components/Health";
import Political from "@/app/components/Political";
import Content from "@/app/components/Content";
import Image from "next/image";
import React from "react";
async function Home() {
  return (
      <div>
        <Content/>
          <div className={'flex-col md:grid grid-cols-2 gap-2 m-4 mt-10 items-center justify-center '}>
            <Image width={350} height={200} src={'/Books.jpeg'} alt={"Books"} />
            <Image width={350} height={200} src={'/Healthy.jpeg'} alt={"Books"} />
            <Image className={'md:hidden'} width={350} height={200} src={'/Politics.jpeg'} alt={"Books"} />
          </div>



    </div>
  );
}

export default Home
