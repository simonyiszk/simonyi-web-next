import Image from "next/image";
import { PostType } from "~/@types";
import { Typography } from "~/components";
import { Link } from "../../../navigation";

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
        <Typography as="p" variant="h3" className={`${data.date ? "pt-4" : "row-span-2 py-4"}`}>{data.title || data.slug}</Typography>
        {data.date && <Typography>{data.date.toLocaleDateString("hu")}</Typography>}
      </div>
    </Link>
  );
}

export { BlogPostPreview };
