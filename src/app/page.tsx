import GetUser from "@/app/libs/GetUser";
async function Home() {


  return (
    <main className=" flex flex-col items-center m-auto">
      <div className={'text-purple-900 text-center flex font-bold text-4xl'}>
          Welcome to Maxwell Blog Post <GetUser/>
      </div>
      <div className={'container mt-5 items-center'}>
          <div className={'m-4'}>  “Write what you know. That should leave you with a lot of free time.”&nbsp; <span className={'text-green-500 font-bold'}>--{">"}Gloria Naylor</span></div>
          <div className={'m-4'}> “Your blog is a reflection of who you are, make sure it’s a good one.”&nbsp;<span>Darren Rowse</span></div>
          <div className={"m-4"}> “Your blog is your canvas, your words are your paint, and the world is your audience.”&nbsp;<span className={"text-green-500 font-bold"}>--{">"}Jeff Bullas</span></div>
          <div className={"m-4"}> “Success is the sum of small efforts, repeated.”&nbsp;<span className={"text-green-500 font-bold"}>--{">"} R Collier</span></div>
          <div className={"m-4"}> “I don’t need it to be easy. I need it to be worth it.”&nbsp;<span className={"text-green-500 font-bold"}>--{">"}Lil Wayne</span></div>
          <div className={"m-4"}> “If you can dream it, then you can achieve it”&nbsp;<span className={"text-green-500 font-bold "}>--{">"}Zig Ziglar</span></div>

      </div>
    </main>
  );
}

export default Home
