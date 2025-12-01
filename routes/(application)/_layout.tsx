import { define } from "~/utils.ts";
export default define.layout(function AppLayout({ Component }) {
  return (
    <div class="flex bg-gray-50 h-full min-h-screen">
      <aside className="fixed h-full w-64 bg-white">
        Here is some sidebar content
      </aside>
      <main class="flex-1 ml-64 p-6">
        <Component />
      </main>
    </div>
  );
});
