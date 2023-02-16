import Head from 'next/head'
import Image from 'next/image'
import { Arrows, Logo } from '@/components/Icons'
import Marquee from 'react-fast-marquee'
import Sponsor from '@/components/Sponsor'

export default function Home() {
  return (
    <>
      <Head>
        <title>Team 4788</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page">
        <hero>
          <Marquee speed={28} gradient={false} direction='right'>
            <h3>Sponsors//Sponsors//Sponsors//Sponsors//Sponsors//Sponsors//</h3>
          </Marquee>
          <div className="column">
            <Sponsor
              title="Curtin University"
              body="TMP"
              img="/tmp/Curtin.png"
            />
            <Sponsor
              title="Altronics"
              body="TMP"
              img="/tmp/Altronics.png"
              flipped={true}
            />
          </div>
        </hero>
        <heros></heros>
      </div>
    </>
  )
}
