import { FunctionComponent } from 'react'
import Head from 'next/head'
import Container from '@/components/container'
import PostBody from '@/components/post-body'
import PostHeader from '@/components/post-header'
import Layout from '@/components/layout'
import { getPostBySlug, getAllPosts } from '@/lib/api'
import { APP_NAME } from '@/constants'
import PostType from '@/types/post'
import markdownToHtml from '@/lib/markdownToHtml'

type Props = {
  post: PostType
  morePosts: PostType[]
}

const Post: FunctionComponent<Props> = ({ post }: Props) => {
  return (
    <Layout>
      <Container>
        <article className="mb-32">
          <Head>
            <title>
              {post.title} | {APP_NAME}
            </title>
          </Head>

          <PostHeader title={post.title} date={post.date} />

          <PostBody content={post.content} />
        </article>
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({
  params,
}: Params): Promise<{
  props: {
    post: PostType
  }
}> {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content'])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths(): Promise<{
  paths: {
    params: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      slug: any
    }
  }[]
  fallback: boolean
}> {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
