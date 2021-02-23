/* eslint-disable @typescript-eslint/no-var-requires */
import markdown from 'markdown-it'
// TODO ESMに置き換える事ができるかもしれない？ https://github.com/shikijs/shiki/issues/91
const shiki = require('shiki')

export default async function markdownToHtml(
  markdownText: string
): Promise<string> {
  const highlighter = await shiki.getHighlighter({
    theme: 'nord',
  })

  const md = markdown({
    html: true,
    highlight: (code, lang) => {
      return highlighter.codeToHtml(code, lang)
    },
  })

  return md.render(markdownText)
}
