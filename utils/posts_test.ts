import { loadPost, loadPosts } from "./posts.ts";
import { assert, assertEquals, assertExists } from "$std/testing/asserts.ts";

const helloWorldPostId = "hello_world";

Deno.test("Load hello world post", async () => {
  const post = await loadPost(helloWorldPostId);
  assertExists(post);
  assertEquals(post.id, helloWorldPostId);
});

Deno.test("Load all posts", async () => {
  const posts = await loadPosts();
  assert(posts.length >= 1);
  const oldestPost = posts.at(-1);
  assertExists(oldestPost);
  assertEquals(oldestPost.id, helloWorldPostId);
});
