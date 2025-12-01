import { Head } from "fresh/runtime";
import { define } from "~/utils.ts";

export default define.page(function Invoices(_ctx) {
  return (
    <div class="p-4">
      <Head>
        <title>Invoices - Deno demo project</title>
      </Head>
      <h1>Invoices</h1>
    </div>
  );
});
