/** @jsx h */
import { h } from 'preact';
import { Handlers, PageProps } from '$fresh/server.ts';
import { tw } from '@twind';
import { parse as parseQueryString } from 'https://deno.land/x/querystring@v1.0.2/mod.js';

type FormData = {
  whatever: string;
};

export const handler: Handlers<FormData> = {
  async POST(req, ctx) {
    const parsed = parseQueryString(await req.text()) as FormData;

    return ctx.render(parsed);
  },
};

export default function Page({ data }: PageProps) {
  console.log({ data });

  return (
    <main className={tw`h-screen flex items-center justify-center bg-gray-200`}>
      <form method="POST" className={tw`flex-col space-y-5 w-full md:w-1/2 max-w-lg shadow-lg rounded p-8 bg-white`}>
        <h1 className={tw`text-4xl`}>Simple form</h1>
        <div className={tw`flex-col space-y-5`}>
          <label for="whatever">
            <p className={tw`font-medium text-slate-700 pb-2`}>Whatever</p>
            <input
              name="whatever"
              className={tw`w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow`}
              placeholder="Enter whatever"
            />
          </label>
          <button className={tw`p-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg border-indigo-500`}>
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
