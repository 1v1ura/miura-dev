import { FunctionComponent } from 'react'
import Link from 'next/link'
import DateFormatter from '@/components/date-formatter'

type Props = {
  title: string
  date: string
  slug: string
}

const PostOverview: FunctionComponent<Props> = ({
  title,
  date,
  slug,
}: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className="block p-5 shadow-lg rounded relative transform scale-100 transition-all hover:scale-101">
        <div className="mb-2 text-sm md:text-base">
          <DateFormatter dateString={date} />
        </div>
        <div className="text-xl md:text-2xl">{title}</div>
      </a>
    </Link>
  )
}

export default PostOverview
