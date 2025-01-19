import Modlist from "@/components/modlist";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl mt-20" >Welcome to Modfy</h1>
      <Modlist/>
    </div>
  );
}
