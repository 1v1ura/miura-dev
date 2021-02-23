type props = {
  text: string
}

const PageTitle = ({ text }: props) => (
  <h1 className="mb-8 text-2xl md:text-4xl font-bold leading-tight">{text}</h1>
)

export default PageTitle
