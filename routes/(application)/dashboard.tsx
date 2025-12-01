import { Head } from "fresh/runtime";
import { define } from "~/utils.ts";

export default define.page(function Dashboard(_ctx) {
  return (
    <div class="p-4">
      <Head>
        <title>Dashboard - Deno demo project</title>
      </Head>
      <h1>Dashboard</h1>
    </div>
  );
});
