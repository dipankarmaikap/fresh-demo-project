import clsx from "clsx";

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
}
export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <div class="group flex items-center justify-between p-4 hover:bg-gray-50 ">
      <label class="flex gap-x-4 items-center cursor-pointer">
        <button
          type="button"
          class={clsx(
            "size-6 rounded-md border flex items-center justify-center text-white",
            {
              "bg-blue-600 border-blue-600": todo.completed,
              "border-gray-300": !todo.completed,
            },
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </button>
        <p class={`text-gray-900 ${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </p>
      </label>
      <button
        type="button"
        class="opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 hover:text-red-500"
      >
        <span class="material-symbols-outlined text-xl">delete</span>
      </button>
    </div>
  );
}
