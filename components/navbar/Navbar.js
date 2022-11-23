import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/solid";

import HamburguerBtn from "../buttons/HamburguerBtn.js";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-2 pt-6 font-bold text-black md:pr-12 backdrop-blur-xl">
      <Link href="/">
        <div className="group">
          <div className="mx-2 hover:cursor-pointer">
            <span className="relative m-1 top-2">
              <CodeBracketIcon className="absolute w-4 h-4 bg-black rounded-full text-neutral-100" />
            </span>

            <span className="ml-3 text-3xl text-bold ">Git Starting</span>
          </div>
        </div>
      </Link>

      <div className="hidden h-10 text-lg md:space-x-8 md:flex">
        <div className="group">
          <Link href="/about"> About</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-zinc-300">
            {" "}
          </div>
        </div>
        <div className="group">
          <Link href="/community"> Experts</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-zinc-300">
            {" "}
          </div>
        </div>
        <div className="group">
          <Link href="/blog">Blog </Link>
          <div className="mx-2 group-hover:border-b group-hover:border-zinc-300">
            {" "}
          </div>
        </div>
      </div>
      {/*HAmburguer button */}
      <HamburguerBtn />
    </nav>
  );
}
