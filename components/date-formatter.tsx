// referred: https://github.com/vercel/next.js/blob/canary/examples/blog-starter-typescript/components/date-formatter.tsx

import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd')}</time>
}

export default DateFormatter
