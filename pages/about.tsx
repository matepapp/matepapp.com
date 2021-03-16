import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { SEO } from '../utils/seo'

const AboutPage: NextPage = () => {
  const title = SEO.titleTemplate('About')

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>About</h1>
      <div>
        <Image
          src="/assets/profile.jpeg"
          alt="Profile photo"
          className="rounded-xl"
          width={1024}
          height={1024}
        />
      </div>
      <p className="card p-6">{SEO.description}</p>
      <p className="card p-6">
        I've decided to become a Software Engineer after reading
        <a
          href="https://www.goodreads.com/book/show/11084145-steve-jobs"
          className="hover:text-green-300 mx-1 text-green-400"
        >
          Steve Jobs' biography
        </a>
        in high school. In my 2nd year at the university, I started to learn iOS development by
        myself and joined a Hungarian agency as an intern. When I successfully graduated from
        university, I've gained more than two years of real-life work experience and started to
        explore more opportunities. I've jumped into Web development, both in Frontend and Backend.
        When I discovered GraphQL, I completely fall in love with the concept, and I truly believe
        that this is the future of API communication.
      </p>
      {/* <h2 id="career">Career</h2>
      // TODO: Career section similar to Lee Rob's timeline */}

      <h2>Hobbies</h2>
      <ul className="sm:grid-cols-2 grid grid-cols-1 gap-4 list-none">
        <li className="card">listening to podcasts</li>
        <li className="card">reading</li>
        <li className="card">being with friends & family</li>
        <li className="card">meetups & conferences</li>
        <li className="card">travelling</li>
        <li className="card">functional training</li>
        <li className="card">cycling</li>
        <li className="card">playing boardgames</li>
        <li className="card">cooking</li>
        <li className="card">tasting craftbeer & coffee</li>
      </ul>
    </>
  )
}

export default AboutPage
