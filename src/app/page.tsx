import CreateModForm from "@/app/mod/new/page";
import Modlist from "@/components/modlist";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl" >Welcome to Modfy</h1>
      <Modlist/>
      <a className="bg-indigo-700 p-4 rounded-md outline outline-indigo-700 outline-2 hover:bg-transparent hover:text-indigo-700" href="/mod/new">Add new mod</a>
    </div>
  );
}
