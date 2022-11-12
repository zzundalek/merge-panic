import { extract } from "$std/encoding/front_matter.ts";

const postFolderPath = "./data/posts";

export interface Post {
  id: string;
  title: string;
  publishedAt: Date;
  snipped: string;
  content: string;
}

export async function loadPost(id: string): Promise<Post | null> {
  let file;
  try {
    file = await Deno.readTextFile(`${postFolderPath}/${id}.md`);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return null;
    }
    throw err;
  }
  // TODO add type check
  const { attrs, body } = extract(file);
  const params = attrs as Record<string, string>;
  const publishedAt = new Date(params.published_at);
  return {
    id,
    title: params.title,
    publishedAt,
    snipped: params.snipped,
    content: body,
  };
}

export async function loadPosts(): Promise<Post[]> {
  const promises = [];

  for await (const file of Deno.readDir(postFolderPath)) {
    const id = file.name.slice(0, -3);
    promises.push(loadPost(id));
  }

  const posts = await Promise.all(promises) as Post[];

  return posts.sort((a, b) =>
    b.publishedAt.valueOf() - a.publishedAt.valueOf()
  );
}
