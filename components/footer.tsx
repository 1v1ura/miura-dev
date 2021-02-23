import { FunctionComponent } from 'react'
import Container from '@/components/container'

const Footer: FunctionComponent = () => {
  return (
    <footer className="row-start-5 row-end-6">
      <Container>
        <div className="py-6">
          <p className="text-center">
            <small>© 2021 Miura.dev</small>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
