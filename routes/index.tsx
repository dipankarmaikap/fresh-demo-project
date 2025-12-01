import { useSignal } from "@preact/signals";
import { Head } from "fresh/runtime";
import Counter from "../islands/Counter.tsx";
import { define } from "../utils.ts";

export default define.page(function Home(ctx) {
  const count = useSignal(3);

  console.log("Shared value " + ctx.state.shared);

  return (
    <div class="p-4">
      <Head>
        <title>Fresh - Deno demo project</title>
      </Head>
      <Counter count={count} />
    </div>
  );
});
