import { Head } from "$fresh/runtime.ts";
import Card from "../islands/Card.tsx";

export default function Home() {
  const example = {
    title: "Hello World",
    published: new Date(),
    desription:
      "This blog has been rendered serverside using Fresh and Deno. Try using like button.",
  };
  const examples = [example, example, example, example, example];

  return (
    <>
      <Head>
        <title>Merge panic</title>
      </Head>
      <div class="lg:w-3/5 mx-auto px-2">
        <div class="top-0 my-5">
          <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-2">
            Merge panic
          </h1>
          <hr />
        </div>
        {examples.map((item) => <Card {...example} />)}
        <div class="mx-auto my-5 w-max">
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
