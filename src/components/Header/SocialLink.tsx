import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "../ui/button";

type Props = {
  link: string;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function SocialLink({ link, label, Icon }: Props) {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <div
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "w-9 px-0",
        )}
      >
        <Icon className="h-4 w-4" />
        <span className="sr-only">{label}</span>
      </div>
    </Link>
  );
}
