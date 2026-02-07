import Image from "next/image";
import vercel from '../public/vercel.svg'

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen p-8 h-80 mt-20 bg-red-800">
      <div className=" bg-green-800 flex ">
        <Image alt="my picture" className=' max-h-96' src={vercel}></Image>
        <h1 className=" text-7xl">Subarna Adhikari</h1>
      </div>
    </section>
  );
}
