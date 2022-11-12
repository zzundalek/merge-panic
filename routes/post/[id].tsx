import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPost, Post } from "../../utils/posts.ts";
import { CSS, render } from "$gfm/mod.ts";
import { tw } from "twind";

export const handler: Handlers<Post> = {
  async GET(req, ctx) {
    const id = ctx.params.id;
    const post = await loadPost(id);
    if (post == null) {
      return new Response("Post not found", { status: 404 });
    }
    return ctx.render(post);
  },
};

export default function BlogPostPage(props: PageProps<Post>) {
  const { title, content, publishedAt } = props.data;
  const html = render(content);
  return (
    <div class={tw`mt-2 mx-3`}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <h1 class={tw`text-2xl leading-7 sm:text-3xl`}>{title}</h1>
      <h2 class={tw`text-gray-500`}>{publishedAt.toLocaleString()}</h2>
      <div
        class={"markdown-body " + tw`mt-5`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
