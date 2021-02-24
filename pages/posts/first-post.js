import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from "../../components/layout"
import Alert from "../../components/alert";



export default function FirstPost() {
  return <>
    <Head>
      <title>First Post</title>
    </Head>
    <Alert children={<h1>First Post</h1>} type={'success'}/>


    <h2 className="title">
      Read{' '}
      <Link href="/">
        <a>go to index ... </a>
      </Link>

      <Image
      src="/images/me.png"
      height={150}
      width={150}
      alt="Sumwhell"/>
    </h2>

  </>
}


