import Link from "next/link"

export function Navbar() {
  return (
    <nav>
      <Link href='/'>Home - </Link>
      <Link href='/product'>Products - </Link>
      <Link href='/product/1'>Product - </Link>
      <Link href='/success'>Succes</Link>
    </nav>
  )
}
