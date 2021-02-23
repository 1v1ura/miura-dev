import { FunctionComponent } from 'react'
import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter: FunctionComponent<Props> = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

export default DateFormatter
