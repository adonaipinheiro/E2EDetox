export type Post = {
  id: number;
  author: string;
  postDate: string;
  tags: Array<string>;
  title: string;
  content: string;
  color: string;
};

export type Posts = {
  posts: Array<Post>;
};
