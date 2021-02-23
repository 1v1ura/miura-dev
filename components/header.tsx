import Link from 'next/link'
import Container from '@/components/container'
import Logo from '@/components/svg/logo'
import { APP_NAME } from '@/constants/'

const Header = () => {
  return (
    <header className="row-start-1 row-end-2 py-4">
      <Container>
        <Link href="/">
          <a className="inline-flex items-center">
            <span className="mr-4"><Logo styleName="w-10 md:w-12" /></span>
            <span className="text-lg font-medium">{APP_NAME}</span>
          </a>
        </Link>
      </Container>
    </header>
  )
}

export default Header
