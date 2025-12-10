import { PlusIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-primary font-bold tracking-tight font-mono text-3xl">
            Note App
          </h1>
          <div className="flex items-center gap-4">
            <Link href="/create" className="btn btn-primary rounded-full">
              <PlusIcon className="size-5" />
              <span>New note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
