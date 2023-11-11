import { Socials } from "@/config/socials";
import CommandMenu from "@/components/CommandMenu";
import MainNav from "@/components/Header/MainNav";
import MobileNav from "@/components/Header/MobileNav";
import SocialLink from "@/components/Header/SocialLink";
import ModeToggle from "@/components/ModeToggle";

const SocialLinks = Socials.map((social) => <SocialLink key={social.label} {...social} />);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            {SocialLinks}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
