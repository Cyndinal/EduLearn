import Navbar from "@/app/libs/Navbar";
import Books from "@/app/components/Books";
import Health from "@/app/components/Health";
import Political from "@/app/components/Political";

import Content from "@/app/components/Content";
async function Home() {
  return (
      <div>
        <Content/>

          <div className={'grid grid-cols-3 gap-4 ml-4 mt-12 w-full '}>
              <Books/>
              <Health/>
              <Political/>
          </div>


    </div>
  );
}

export default Home
