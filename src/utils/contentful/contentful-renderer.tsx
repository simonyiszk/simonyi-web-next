import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";
import { cloneElement, Children, ReactNode, ReactElement } from "react";
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyH6, TypographyBody } from "~/components/typography";

function RemoveParagraph({ children }: { children: ReactNode }) {
  const processChild = (child: ReactNode): ReactNode => {
    if (typeof child === "string") {
      return child;
    }

    const elementChild = child as ReactElement;

    if (elementChild.type === "p") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return <>{(elementChild.props as any).children}</>;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (elementChild.props && (elementChild.props as any).children) {
      return cloneElement(elementChild, {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        children: Children.map((elementChild.props as any).children, processChild),
      });
    }

    return child;
  };

  return <>{Children.map(children, processChild)}</>;
}

export function contentfulDocumentToReactComponents(document: Document) {
  return documentToReactComponents(document, {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <TypographyH1 className="mb-4">{children}</TypographyH1>,
      [BLOCKS.HEADING_2]: (node, children) => <TypographyH2 className="mb-3">{children}</TypographyH2>,
      [BLOCKS.HEADING_3]: (node, children) => <TypographyH3 className="mb-2">{children}</TypographyH3>,
      [BLOCKS.HEADING_4]: (node, children) => <TypographyH4 className="mb-1">{children}</TypographyH4>,
      [BLOCKS.HEADING_5]: (node, children) => <TypographyH5 className="mb-1">{children}</TypographyH5>,
      [BLOCKS.HEADING_6]: (node, children) => <TypographyH6 className="mb-1">{children}</TypographyH6>,
      [BLOCKS.PARAGRAPH]: (node, children) => <TypographyBody className="mb-4 last:mb-0">{children}</TypographyBody>,
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="mb-4 ml-4 list-decimal font-body">
          <RemoveParagraph>{children}</RemoveParagraph>
        </ol>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="mb-4 ml-4 list-disc font-body">
          <RemoveParagraph>{children}</RemoveParagraph>
        </ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="ml-2 font-body">{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => (
        <>
          <blockquote className="mb-4 border-l-4 border-primary pl-4 font-body italic">
            <svg
              aria-hidden="true"
              className="h-10 w-10 text-primary"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            {children}
          </blockquote>
        </>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <p className="mb-4 font-body">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-auto w-full"
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          ></img>
        </p>
      ),
      [BLOCKS.HR]: () => <hr className="my-4" />,
      /* TABLE */
      // TODO: Fix table not being responsive
      [BLOCKS.TABLE]: (node, children) => (
        <div className="my-4 overflow-x-auto">
          <table className="min-w-full text-left">
            <tbody>{children}</tbody>
          </table>
        </div>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => (
        <tr className="transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
          {children}
        </tr>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
        <th className="border border-slate-600 px-6 py-4">
          <RemoveParagraph>{children}</RemoveParagraph>
        </th>
      ),
      [BLOCKS.TABLE_CELL]: (node, children) => (
        <td className="border border-slate-600 px-6 py-4">
          <RemoveParagraph>{children}</RemoveParagraph>
        </td>
      ),
      /* TABLE */
      [MARKS.CODE]: (node, children) => <code className="p-2">{children}</code>,
      [INLINES.HYPERLINK]: (node, children) => (
        <Link className="font-body text-primary" href={`${node.data.uri}`}>
          {children}
        </Link>
      ),
      [MARKS.BOLD]: (node, children) => <b>{children}</b>,
      [MARKS.ITALIC]: (node, children) => <i>{children}</i>,
    },
  });
}
