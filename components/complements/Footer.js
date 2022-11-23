import Link from "next/link";
import * as Icon from "react-feather";

import { CodeBracketIcon, InboxStackIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bottom-0 bg-zinc-800">
      <div className="container max-w-6xl py-10 mx-auto">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/*Menu and logo container */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* logo*/}
            <div className="">
              <span className="relative m-1 top-2">
                <CodeBracketIcon className="absolute w-4 h-4 bg-gray-200 rounded-full text-zinc-800" />
              </span>

              <span className="ml-3 text-3xl text-gray-200 text-bold">
                Git Starting
              </span>
            </div>
            {/*Menu */}
            <div className="flex flex-col items-center space-y-4 font-bold text-gray-200 md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              <div className="h-10 group ">
                <Link href="#">About</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-gray-100"></div>
              </div>
              <div className="h-10 group ">
                <Link href="#">Community</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-gray-100"></div>
              </div>
              <div className="h-10 group ">
                <Link href="#">Blog</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-gray-100"></div>
              </div>
            </div>
          </div>

          {/*social media container */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-400">
            {/* icons container*/}
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              <div className="h-8 group">
                <a href="#">
                  <Icon.Instagram className="h-6" />{" "}
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  {" "}
                  <Icon.Facebook />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  {" "}
                  <Icon.Twitter />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  {" "}
                  <Icon.GitHub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
