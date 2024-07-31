import { blogData } from '../data/blogData';

export const getAdjacentPosts = (slug) => {
  const index = blogData.findIndex(post => post.slug === slug);
  const previousPost = index > 0 ? blogData[index - 1] : null;
  const nextPost = index < blogData.length - 1 ? blogData[index + 1] : null;

  return { previousPost, nextPost };
};
