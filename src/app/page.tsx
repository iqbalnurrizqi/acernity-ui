import Nav from "@/components/Navbar/nav";

export default function Home() {
  return (
    <main className="h-screen">
      <Nav />
      <div className=" font-bold text-center ">
        <h1 className="text-blue-500 text-[32px] mt-[200px] mb-2">
          Ini adalah home page
        </h1>
        <p className="m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          pariatur?
        </p>
        <p className="text-red-700 font-bold text-[23px]">WARNING</p>
      </div>
    </main>
  );
}
