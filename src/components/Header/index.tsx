import Link from "next/link"

export function Header() {
  return (
    <nav>
      <Link href='/product'>Products - </Link>
      <Link
        href="/product/1"
      >
        Product -{" "}
      </Link>
      <Link href='/success'>Succes</Link>
    </nav>
  )
}
