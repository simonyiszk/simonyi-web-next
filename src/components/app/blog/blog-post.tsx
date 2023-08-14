import Image from 'next/image';
import { PostType } from '~/@types';
import { contentfulDocumentToReactComponents } from '~/utils';

function BlogPost({ data }: { data: PostType }) {
  const { title, date, previewImage, body } = data;

  return (
    <div className="flex-grow self-center m-4 rounded-md bg-darkmode_regular p-4 max-w-3xl whitespace-pre-wrap">
      {previewImage && (
        <div className="rounded-t-md relative h-80 -mx-4 -mt-4 mb-8">
          <Image src={previewImage.url} alt={previewImage.alt} fill className="rounded-t-md object-cover" />
        </div>
      )}
      <div className="mb-8">
        {title && <h1 className="text-h1 text-5xl font-heading mb-4">{title}</h1>}
        {date && <div className="font-body">{date.toLocaleDateString('hu')}</div>}
      </div>
      {contentfulDocumentToReactComponents(body)}
    </div>
  );
}

export { BlogPost };
