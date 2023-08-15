import { ReactNode } from 'react';
import { LinkType } from '~/@types';
import { Link } from '..';

function FooterSection({ title, links, address }: { title: string; links: LinkType[]; address?: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="pb-4 text-h2 font-heading">{title}</h2>
      {links.map((link, index) => (
        <Link key={index} className="text-simonyi_zold font-body" href={link.url} title={link.title} target="_blank" rel="noreferrer">
          {link.title}
        </Link>
      ))}
      {address && <div className="mt-4 font-body whitespace-pre-wrap">{address}</div>}
    </div>
  );
}
export { FooterSection };
