import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { cache } from 'react';
import { PostType } from '~/types';

const loadPosts = cache(async () => {
  const posts = await fs.readdir(path.join(process.cwd(), 'src/posts'));

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.md')
      .map(async (file) => {
        const filePath = path.join(process.cwd(), `src/posts/${file}`);
        const postContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        if (data.authors !== undefined && typeof data.authors === 'string') {
          data.authors = data.authors.split(',').map((author: string) => author.trim());
        }

        if (data.tags !== undefined && typeof data.tags === 'string') {
          data.tags = data.tags.split(',').map((tag: string) => tag.trim());
        }

        return { ...data, body: content } as PostType;
      })
  );
});

async function getPosts(includeHidden = false) {
  const posts = await loadPosts();
  return posts
    .filter((post): post is PostType => post !== null && post !== undefined)
    .filter((post) => includeHidden || !post.hidden)
    .sort((a, b) => ((a?.date || 0) < (b?.date || 0) ? 1 : -1));
}

async function getPost(slug: string, includeHidden = false) {
  const posts = await getPosts(includeHidden);
  return posts.find((post) => post?.slug === slug);
}

export { getPosts, getPost };
