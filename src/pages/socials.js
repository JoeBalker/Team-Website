import Head from 'next/head'
import Marquee from 'react-fast-marquee'
import { Facebook } from '../components/Post';

export default function Home() {
  return (
    <>
      <Head>
        <title>Socials | 4788</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="page">
        <hero style={{ justifyContent: "flex-start" }}>
          <Marquee speed={28} gradient={false} direction='right'>
            <h3>Sponsors//Sponsors//Sponsors//Sponsors//Sponsors//Sponsors//</h3>
          </Marquee>
          <div className="column posts">
{/*             <Facebook url="https://www.facebook.com/andrewismusic/posts/451971596293956"/>
            <Instagram url="https://www.instagram.com/p/Cn6y2y8LWNu/"/>
            <Youtube url=""/> */}
          </div>
        </hero>
        <heros></heros>
      </div>
    </>
  )
}
