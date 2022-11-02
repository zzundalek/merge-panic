/** @jsxImportSource https://esm.sh/preact@10.11.2 */
export function Greet(name: string) {
    return (
      <div>
        <h1>Hello {name} from Deno with Oak!</h1>
        <p>This part was server side rendered using preact.</p>
      </div>
    );
}