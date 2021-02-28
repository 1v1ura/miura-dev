import { FunctionComponent } from 'react'
import cn from 'classnames'
import Layout from '@/components/layout'
import Container from '@/components/container'
import PageTitle from '@/components/headings/page-title'
import PostOverview from '@/components/post-overview'
import { getAllPosts } from '@/lib/api'
import PostType from '@/types/post'

type Props = {
  allPosts: PostType[]
}

const Index: FunctionComponent<Props> = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Container>
          <main>
            <PageTitle text="Posts" />

            <ul>
              {allPosts.map((post, index) => (
                <li
                  className={cn({
                    'mb-4': index !== allPosts.length - 1,
                  })}
                  key={post.slug}
                >
                  <PostOverview
                    title={post.title}
                    date={post.date}
                    slug={post.slug}
                  />
                </li>
              ))}
            </ul>
          </main>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async (): Promise<{
  props: {
    allPosts: PostType[]
  }
}> => {
  const allPosts = getAllPosts()

  return {
    props: { allPosts },
  }
}
