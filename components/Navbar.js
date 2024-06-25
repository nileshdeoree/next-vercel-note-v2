import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-red-400'>
        <div>Navbar</div>
        <div className='flex'>
            <ul className='mx-3'><Link href={'/login'}>Login</Link></ul>
            <ul className='mx-3'><Link href={'/register'}>Register</Link></ul>
        </div>
    </div>
  )
}

export default Navbar