import { Head } from "$fresh/runtime.ts";
import Card from "../islands/Card.tsx";

export default function Home() {
  const example = {
    title: "Hello World",
    published: new Date(),
    desription:
      "This blog has been rendered serverside using Fresh and Deno. Try using like button.",
  };

  return (
    <>
      <Head>
        <title>Merge panic</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Merge panic blog
        </h1>
      </div>
      <div class="absolute top-3 right-2 ...">
        <a href="https://fresh.deno.dev">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </div>
      <Card {...example} />
    </>
  );
}
