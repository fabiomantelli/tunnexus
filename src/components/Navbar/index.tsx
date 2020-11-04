import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>About Us</a>
      </Link>
      <Link href="/">
        <a>Our Specialty</a>
      </Link>
      <Link href="/">
        <a>Contact Us</a>
      </Link>
    </>
  )
}

export default Navbar
