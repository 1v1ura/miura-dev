const markdown = require('markdown-it')
const shiki = require('shiki')

export default async function markdownToHtml(markdownText: string): Promise<string> {
  const highlighter = await shiki.getHighlighter({
    theme: 'nord'
  })

  const md = markdown({
    html: true,
    highlight: (code: any, lang: any) => {
      return highlighter.codeToHtml(code, lang)
    }
  })

  return md.render(markdownText)
}
