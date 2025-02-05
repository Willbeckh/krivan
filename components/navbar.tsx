import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { JSX, SVGProps } from "react";
import Image from "next/image";

type NavProps = {
  name: string;
  path: string;
};

const navLinks: NavProps[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "#services" },
  // { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-foreground/10 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link, index) => (
            <Link href={link.path} key={index} prefetch={false}>
              <span className="">{link.name}</span>
            </Link>
          ))}
        </nav>

        <Link href={"/"} className="flex items-center" prefetch={false}>
          {/* <span className="text-3xl lg:text-4xl">KRIVAN</span> */}
          <Image
            src="/images/logo.png"
            alt="logo image"
            width={300}
            height={180}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />

          <span className="lg:hidden block">
            <ThemeSwitcher />
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Button variant={"link"} asChild>
            <Link href="/contact">Let's Talk</Link>
          </Button>
          <span className="hidden lg:block">
            <ThemeSwitcher />
          </span>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4">
                {navLinks.map((link, index) => (
                  <Link href={link.path} key={index} prefetch={false}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
