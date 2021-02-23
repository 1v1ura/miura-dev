import { FunctionComponent } from 'react'
import cn from 'classnames'

type Props = {
  styleName?: string
}

const Logo: FunctionComponent<Props> = ({ styleName }: Props) => (
  <svg
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styleName ? cn(styleName) : 'w-8'}
  >
    <rect width="300" height="300" fill="#E5E5E5" />
    <rect x="5" y="5" width="290" height="290" fill="white" />
    <path d="M0 0H300V300H0V0Z" fill="white" />
    <path
      d="M74.6875 187V179.734H93.4844V127.141L75.9531 129.016L75.1094 121.562L95.2188 119.219H102.906V179.734H119.5V187H74.6875Z"
      fill="black"
    />
    <path
      d="M145.891 187L126.625 137.312H135.484L150.438 177.625L163.75 137.312H172.375L154.797 187H145.891Z"
      fill="black"
    />
    <path
      d="M185.031 187V179.734H203.828V127.141L186.297 129.016L185.453 121.562L205.562 119.219H213.25V179.734H229.844V187H185.031Z"
      fill="black"
    />
    <rect
      x="5"
      y="5"
      width="290"
      height="290"
      stroke="black"
      strokeWidth="10"
    />
  </svg>
)

export default Logo
