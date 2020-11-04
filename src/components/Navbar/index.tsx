import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <>
      <Link href="/main">
        <a>Home</a>
      </Link>
      <Link href="/main">
        <a>About Us</a>
      </Link>
      <Link href="/main">
        <a>Our Specialty</a>
      </Link>
      <Link href="/main">
        <a>Contact Us</a>
      </Link>
    </>
  )
}

export default Navbar
