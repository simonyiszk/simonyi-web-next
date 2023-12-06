import { ReactNode } from "react";
import { LinkType } from "~/@types";
import { Link } from "..";

function FooterSection({ title, links, address }: { title: string; links: LinkType[]; address?: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="pb-4 font-heading text-h2">{title}</h2>
      {links.map((link, index) => (
        <Link key={index} className="font-body text-simonyi_zold" href={link.url} title={link.title} target="_blank" rel="noreferrer">
          {link.title}
        </Link>
      ))}
      {address && <div className="mt-4 whitespace-pre-wrap font-body">{address}</div>}
    </div>
  );
}
export { FooterSection };
