import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
      <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="globals.css"/>
      </Head>
    
      <main className='bg-black'>
        <div className='flex items-center justify-center h-screen'>
          <ul className='mb-40'>
            <li className='text-primary text-7xl font-pressStart text-center'>RBTechPro</li>
            <li className='text-white text-2xl font-pressStart text-center mt-5 py-3 w-screen hover:bg-primary'><Link href="/about">About</Link></li>
            <li className='text-white text-2xl font-pressStart text-center  py-3 w-screen hover:bg-primary'><Link href="/projects">Projects</Link></li>
            <li className='text-white text-2xl font-pressStart text-center  py-3 w-screen hover:bg-primary'><Link href="/experience">Experience</Link></li>
            <li className='text-white text-2xl font-pressStart text-center  py-3 hover:bg-primary'><Link href="/contact">Contact</Link></li>
            <li className='text-secondary font-pressStart text-center py-3'>Develop•Deliver•Dependable</li>
          </ul>
        </div>
      </main>

      
      </>
  )
}

export default Home