import Head from 'next/head'
import Hero from '../components/home/hero'
import Services from '../components/home/services'
import Work from '../components/home/work'
import { getWorks } from '../services'

export default function Home({worksData}:any) {
  const {works} = worksData
  return (
    <div className='m-3'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
      {works && <Work works={works}/>}
    </div>
  )
}

export async function getStaticProps() {
  const worksData = await getWorks() || []

  return { props: { worksData } };
}