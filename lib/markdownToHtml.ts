// referred: https://github.com/vercel/next.js/blob/canary/examples/blog-starter-typescript/lib/markdownToHtml.ts

import { remark } from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
