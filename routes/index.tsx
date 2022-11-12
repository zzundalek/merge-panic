import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PostCard from "../components/post_card.tsx";
import { loadPosts, Post } from "../utils/posts.ts";
import { tw } from "twind";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await loadPosts();

    return ctx.render(posts);
  },
};

export default function Home(props: PageProps<Post[]>) {
  const posts = props.data;

  return (
    <>
      <Head>
        <title>Merge panic</title>
      </Head>
      <div class={tw`lg:w-3/5 mx-auto px-2`}>
        <div class={tw`top-0 my-5`}>
          <h1
            class={tw`text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight mb-2`}
          >
            Merge panic
          </h1>
          <hr />
        </div>
        {posts.map((post) => (
          <PostCard
            {...{
              text: post.snipped,
              title: post.title,
              publishedAt: post.publishedAt,
              link: `/post/${post.id}`,
            }}
          />
        ))}
        <div class={tw`mx-auto my-5 w-max`}>
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
        </div>
      </div>
    </>
  );
}
