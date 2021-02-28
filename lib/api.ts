import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import PostType from '@/types/post'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string): PostType {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    title: data.title,
    date: data.date,
    content: content,
  }
}

export function getAllPosts(): PostType[] {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => getPostBySlug(slug))
  const sortedPosts = posts.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  )

  return sortedPosts
}
