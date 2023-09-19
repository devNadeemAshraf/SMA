import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-14 flex items-center justify-between bg-background px-6 py-2 z-[1]">
      <h1 className="font-bold">SMA Logo</h1>
      <ModeToggle />
    </nav>
  );
}
