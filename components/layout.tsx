import { FunctionComponent, ReactNode } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Meta from '@/components/meta'

type Props = {
  children: ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen grid  grid-rows-layout-default grid-cols-1">
        <Header />
        <main className="row-start-3 row-end-4">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
