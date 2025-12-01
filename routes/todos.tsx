import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import TodoItem from "../components/TodoItem.tsx";

const todos = [
  { id: 1, text: "Design the new landing page", completed: false },
  { id: 2, text: "Fix bugs in the user dashboard", completed: true },
  { id: 3, text: "Implement authentication flow", completed: false },
  { id: 4, text: "Set up database backups", completed: true },
  { id: 5, text: "Optimize images for faster loading", completed: false },
];
const getId = () => new Date().getTime() + Math.floor(Math.random() * 1000);
export const handler = define.handlers({
  GET() {
    console.log("Server get function running!");

    return { data: { todos } };
  },
  async POST(ctx) {
    const form = await ctx.req.formData();
    const task = form.get("task")?.toString();
    todos.push({ id: getId(), text: task || "Unknown Task", completed: false });
    return {
      data: {
        todos,
      },
    };
  },
});

export default define.page<typeof handler>(function Home(ctx) {
  const todos = ctx.data.todos;
  return (
    <main class="min-h-screen bg-gray-100">
      <Head>
        <title>Todos - Deno demo project</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 class="text-4xl text-gray-900 font-black">My Tasks</h1>
        <p class="text-lg text-gray-600 mt-2">
          A clean and simple way to manage your todos
        </p>
        <div className="input-box my-6">
          <form method="post">
            <input
              class="w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-200 border-gray-300 rounded-lg"
              type="text"
              placeholder="What needs to be done?"
              name="task"
              id="task"
              required
            />
          </form>
        </div>
        <div className="todo-list bg-white rounded-lg">
          <div class="divide-y divide-gray-200">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
});
