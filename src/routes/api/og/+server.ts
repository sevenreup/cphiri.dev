import type { PostMeta } from '$lib/types/post';
import { rawMetaToMeta } from '$lib/utils/posts';
import { ImageResponse } from '@ethercorps/sveltekit-og';
import type { RequestHandler } from '@sveltejs/kit';

const blogTemplate = (meta: PostMeta) => `
<div tw="bg-gray-50 flex w-full h-full items-center justify-center">
    <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
      <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
        <span>${meta.title}</span>
        <span tw="pt-4 text-sm text-gray-600">${meta.description}</span>
      </h2>
    </div>
  </div>
`;

const normalTemplate = `
<div tw="bg-gray-50 flex w-full h-full items-center justify-center">
    <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
      <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
        <span>cphiri.dev</span>
        <span tw="pt-4 text-sm text-indigo-600">[Insert cool text here]</span>
      </h2>
    </div>
  </div>
  `;

const fontFile = await fetch('https://og-playground.vercel.app/inter-latin-ext-400-normal.woff');
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

export const GET: RequestHandler = async ({ request }) => {
	const url = new URL(request.url);
	if (url.searchParams.has('blog')) {
		const post = await import(`../blog/pages/${url.searchParams.get('blog')}.md`);
		const meta = rawMetaToMeta(post.metadata);

		return await new ImageResponse(blogTemplate(meta), {
			height: 630,
			width: 1200,
			fonts: [
				{
					name: 'Inter Latin',
					data: fontData,
					weight: 400
				}
			]
		});
	}

	return await new ImageResponse(normalTemplate, {
		height: 630,
		width: 1200,
		fonts: [
			{
				name: 'Inter Latin',
				data: fontData,
				weight: 400
			}
		]
	});
};
