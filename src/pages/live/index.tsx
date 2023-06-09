import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Iframe from 'react-iframe'
import { ImTwitch } from 'react-icons/im';

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Iframe url="https://player.twitch.tv/?channel=baiano&muted=true&parent=localhost"
              width="640px"
              height="320px"
              id=""
              className=""
              display="block"
              position="relative"/>
          </div>
        </div>
      </div>
    
      
    </>
  )
}
