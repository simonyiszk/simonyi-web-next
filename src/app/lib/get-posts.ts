import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { cache } from 'react';
import { PostType } from '~/types';

const getPosts = cache(async () => {
  const posts = await fs.readdir(path.join(process.cwd(), 'src/app/(subpages)/blog/posts'));

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = path.join(process.cwd(), `src/app/(subpages)/blog/posts/${file}`);
        const postContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as PostType;
      })
      .filter(async (post) => post !== null && post !== undefined)
  );
});

async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post?.slug === slug);
}

export { getPosts, getPost };
