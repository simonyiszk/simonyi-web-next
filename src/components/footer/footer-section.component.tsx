import { ReactNode } from "react";
import { LinkType } from "~/@types";
import { Link } from "..";
import { Typography } from "../typography";

function FooterSection({ title, links, address }: { title: string; links: LinkType[]; address?: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <Typography as="h2" variant="h2" className="mb-4">{title}</Typography>
      {links.map((link, index) => (
        <Link key={index} className="font-body text-primary" href={link.url} title={link.title} target="_blank" rel="noreferrer">
          {link.title}
        </Link>
      ))}
      {address && <Typography className="mt-4 whitespace-pre-wrap">{address}</Typography>}
    </div>
  );
}
export { FooterSection };
