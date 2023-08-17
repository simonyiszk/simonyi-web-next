import Image from 'next/image';
import { PostType } from '~/@types';
import { contentfulDocumentToReactComponents } from '~/utils';

function BlogPost({ data }: { data: PostType }) {
  const { title, date, previewImage, body } = data;

  return (
    <div className="m-4 whitespace-pre-wrap rounded-md bg-darkmode_regular p-4">
      {previewImage && (
        <div className="relative -mx-4 -mt-4 mb-8 h-80 rounded-t-md">
          <Image src={previewImage.url} alt={previewImage.alt} fill className="rounded-t-md object-cover" />
        </div>
      )}
      <div className="mb-8">
        {title && <h1 className="mb-4 font-heading text-5xl text-h1">{title}</h1>}
        {date && <div className="font-body">{date.toLocaleDateString('hu')}</div>}
      </div>
      {contentfulDocumentToReactComponents(body)}
    </div>
  );
}

export { BlogPost };
