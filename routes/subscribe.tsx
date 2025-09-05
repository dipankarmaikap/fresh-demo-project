import { Head } from "fresh/runtime";
import { define } from "~/utils.ts";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const handler = define.handlers({
  GET(ctx) {
    return {
      data: {
        message: null,
      },
    };
  },
  async POST(ctx) {
    const form = await ctx.req.formData();
    const email = form.get("email")?.toString();
    if (!email?.length) {
      return { data: { message: `No valid email is provided` } };
    }
    if (!isValidEmail(email)) {
      return {
        data: {
          email,
          message: "Its not a valid email",
        },
        status: 404,
        statusText: "Not avalid",
      };
    }

    const headers = new Headers();
    headers.set("location", "/thanks-for-subscribing");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
});

export default define.page<typeof handler>(function Subscribe(ctx) {
  const { message } = ctx.data;
  console.log(ctx.data);
  console.log(ctx);

  return (
    <main>
      <Head>
        <title>Fresh Subscribe to newslastter</title>
      </Head>
      <h1>Subscribe to newslastter</h1>
      <form method="post">
        <input type="text" name="email" id="email" value="" />
        <p class="text-red-600">{message}</p>
        <button type="submit">Subscribe</button>
      </form>
    </main>
  );
});
