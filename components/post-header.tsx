import DateFormatter from '@/components/date-formatter'
import PageTitle from '@/components/headings/page-title'

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <PageTitle text={title} />
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
