import Image from "next/image";
import Link from "next/link";
import { PostType } from "~/@types";

function BlogPostPreview({ data }: { data: PostType }) {
  return (
    <Link href={`/blog/${data.slug}`} className="hover:underline">
      <div className="grid grid-cols-[0_1fr] grid-rows-2 gap-4 rounded-md bg-darkmode_regular sm:grid-cols-[100px_1fr]">
        <div className="relative row-span-2">
          {data.previewImage ? (
            <Image src={data.previewImage.url} alt={data.previewImage.alt} fill className="rounded-l-md object-cover" />
          ) : (
            <div className="h-full w-full rounded-l-md bg-darkmode_regular" />
          )}
        </div>
        <p className={`${data.date ? "pt-4" : "row-span-2 py-4"} font-heading text-3xl`}>{data.title || data.slug}</p>
        {data.date && <p className="font-body">{data.date.toLocaleDateString("hu")}</p>}
      </div>
    </Link>
  );
}

export { BlogPostPreview };
