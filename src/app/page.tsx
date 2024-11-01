
import Books from "@/app/components/Books";
import Health from "@/app/components/Health";
import Political from "@/app/components/Political";

import Content from "@/app/components/Content";
async function Home() {
  return (
      <div>
        <Content/>
          <div className={'grid grid-cols-3 gap-2 m-4 mt-10 content-center '}>
              <Books/>
              <Health/>
              <Political/>
          </div>
    </div>
  );
}

export default Home
