import { buttonVariants } from "@/components/ui/Button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return <>
  <h1 className="font-bold text-3xl md:text-4xl">Your Feed</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-6 py-6">
    {/* feed */}
  
  <div className="overflow-hidden h-fit rounded-lg border border-gray-700 order-first md:order-last">
    <div className="bg-emerald-100 px-6 py-4">
      <p className="font-semibold py-3  items-center gap-1.5">
        <HomeIcon className="w-4 h-4"/>
        Home
      </p>
    </div>
    <div className="-my-3 divide-y divide-gray-100 px-4 py-4 text-sm leading-6">
      <div className="flex justify-between gap-x-4 py-3">
        <p className="text-zinc-500">
          Your personal social stack homepage. Come here to check with your favourite comunnities.</p>
      </div>
      <Link className={buttonVariants({
        className:'w-full mt-4 mb-6'
      })} href='/r/create'>Create Community</Link>
    </div>
  </div>
  </div>
  </>
}
