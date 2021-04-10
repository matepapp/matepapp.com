import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { ButtonLink } from '../components'
import { SEO } from '../utils/seo'

const IndexPage = () => {
  const { title } = SEO

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Hey, I'm Mate! 👋🏻</h1>

      <div className="card p-6">
        <p className="dark:text-gray-200 text-gray-800">
          I like to refer to myself as &frac12; Software Engineer, &frac14; Designer, and &frac14;
          Entrepreneur who is focusing on building products that people love to use. I'm passionate
          about exploring new things and staying up-to-date with the latest hot trends and topics by
          attending (and occasionally speaking at) meetups, conferences, and listening to podcasts.
        </p>
        <ButtonLink href="/about" className="mt-4">
          More About Me
        </ButtonLink>
      </div>

      <h2>Projects</h2>
      <div className="card gap-x-4 gap-y-2 grid grid-cols-7 grid-rows-2 p-6">
        <div className="sm:row-span-2 self-center col-span-1 row-span-1 overflow-hidden">
          <Image
            src="/assets/historico.png"
            alt="Historico app icon"
            className="sm:rounded-xl rounded-md shadow-sm"
            layout="responsive"
            width={512}
            height={512}
            objectFit="cover"
          />
        </div>
        <h3 className="sm:col-start-2 self-center col-span-6">Historico - This Day in History</h3>
        <p className="sm:col-span-6 sm:col-start-2 col-span-7 row-start-2">
          A minimal & clean iOS application to discover daily historical events, births, and deaths.
        </p>
      </div>
    </>
  )
}
export default IndexPage
