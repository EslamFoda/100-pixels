interface Props {
text:string
}
function Header({text}:Props) {
  return (
    <h1 className="lg:text-7xl md:text-5xl  text-4xl text-white">{text}</h1>
  )
}

export default Header