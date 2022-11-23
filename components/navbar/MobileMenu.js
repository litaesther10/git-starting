import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg uppercase text-zinc-800 bg-neutral-100">
      <Link href="/about" className="hover:text-pink-500 ">
        About
      </Link>
      <Link href="/community" className="hover:text-pink-500">
        Community
      </Link>
      <Link href="/blog" className="hover:text-pink-500">
        Blog
      </Link>
    </div>
  );
}
