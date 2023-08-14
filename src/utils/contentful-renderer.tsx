import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { cloneElement, Children, ReactNode, ReactElement } from 'react';
import { Link } from '~/components';

function RemoveParagraph({ children }: { children: ReactNode }) {
  const processChild = (child: ReactNode): ReactNode => {
    if (typeof child === 'string') {
      return child;
    }

    const elementChild = child as ReactElement;

    if (elementChild.type === 'p') {
      return <>{elementChild.props.children}</>;
    }

    if (elementChild.props && elementChild.props.children) {
      return cloneElement(elementChild, {
        children: Children.map(elementChild.props.children, processChild)
      });
    }

    return child;
  };

  return <>{Children.map(children, processChild)}</>;
}

export function contentfulDocumentToReactComponents(document: Document) {
  return documentToReactComponents(document, {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-h1 font-heading mb-4">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-h2 font-heading mb-3">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-h3 font-heading mb-2">{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-h4 font-heading mb-1">{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5 className="font-heading mb-1">{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6 className="font-heading mb-1">{children}</h6>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="font-body mb-4">{children}</p>,
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal font-body ml-4 mb-4">
          <RemoveParagraph>{children}</RemoveParagraph>
        </ol>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc font-body ml-4 mb-4">
          <RemoveParagraph>{children}</RemoveParagraph>
        </ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="font-body ml-2">{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => (
        <>
          <blockquote className="font-body border-l-4 border-simonyi_zold pl-4 mb-4 italic">
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-simonyi_zold"
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
        <p className="font-body mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-auto"
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
        <div className="overflow-x-auto my-4">
          <table className="text-left min-w-full">
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
        <Link className="font-body text-simonyi_zold" href={`${node.data.uri}`}>
          {children}
        </Link>
      ),
      [MARKS.BOLD]: (node, children) => <b>{children}</b>,
      [MARKS.ITALIC]: (node, children) => <i>{children}</i>
    }
  });
}
