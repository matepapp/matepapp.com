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

      <h2>Stuff I</h2>

      <h3 className="">Programming</h3>
      <div className="sm:grid-cols-3 grid grid-cols-2 gap-3">
        <a
          href="https://www.typescriptlang.org"
          className="card card-transition"
          style={{ backgroundColor: '#294E80', color: '#e7e7e7' }}
        >
          TypeScript
        </a>
        <a
          href="https://swift.org"
          className="card card-transition"
          style={{ backgroundColor: '#f05138', color: '#111' }}
        >
          Swift
        </a>
        <a
          href="https://graphql.org"
          className="card card-transition text-white"
          style={{ backgroundColor: '#E10098' }}
        >
          GraphQL
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Functional_reactive_programming"
          className="card card-transition text-white"
          style={{ backgroundColor: '#c2185b' }}
        >
          Rx
        </a>
        <a
          href="https://www.javascript.com/"
          className="card card-transition text-black"
          style={{ backgroundColor: 'rgb(247, 223, 30)' }}
        >
          JavaScript
        </a>
      </div>

      <h3 className="">Frameworks</h3>
      <div className="sm:grid-cols-3 grid grid-cols-2 gap-3 pt-2">
        <a
          href="https://reactjs.org"
          className="card card-transition"
          style={{ color: '#61dafb', backgroundColor: '#20232a' }}
        >
          React
        </a>
        <a
          href="https://developer.apple.com/xcode/swiftui/"
          className="card card-transition text-black"
          style={{ backgroundColor: 'rgb(1, 216, 251)' }}
        >
          SwiftUI
        </a>
        <a
          href="https://nextjs.org/"
          className="card card-transition text-white"
          style={{ backgroundColor: '#111' }}
        >
          Next.js
        </a>
        <a
          href="https://nodejs.org/en/"
          className="card card-transition text-white"
          style={{ backgroundColor: '#026e00' }}
        >
          Node.js
        </a>
        <a
          href="https://prisma.io/"
          className="card card-transition text-white"
          style={{ backgroundColor: 'rgb(12, 52, 75)' }}
        >
          Prisma
        </a>
        <a
          href="https://www.gatsbyjs.org/"
          className="card card-transition text-white"
          style={{ backgroundColor: '#663399' }}
        >
          Gatsby
        </a>
        <a
          href="https://serverless.com/"
          className="card card-transition text-white"
          style={{ backgroundColor: '#fd5750' }}
        >
          Serverless
        </a>
        <a
          href="https://jamstack.org/"
          className="card card-transition text-white"
          style={{ backgroundColor: '#00c7b7' }}
        >
          JAMStack
        </a>
        <a
          href="https://www.apollographql.com/"
          className="card card-transition text-white"
          style={{ backgroundColor: '#3f20ba' }}
        >
          Apollo
        </a>
        <a href="https://tailwindcss.com/" className="card card-transition text-white bg-teal-500">
          TailwindCSS
        </a>
        <a
          href="https://hasura.io/"
          className="card card-transition text-white"
          style={{ backgroundColor: '#001934' }}
        >
          Hasura
        </a>
        <a
          href="https://storybook.js.org/"
          className="card card-transition text-white"
          style={{ backgroundColor: 'rgb(255, 71, 133)' }}
        >
          Storybook JS
        </a>
        <a
          href="https://reactnative.dev/"
          className="card card-transition"
          style={{ color: '#61dafb', backgroundColor: '#20232a' }}
        >
          React Native
        </a>
        <a
          href="https://firebase.google.com/"
          className="card card-transition"
          style={{ backgroundColor: 'rgb(251, 192, 45)', color: '#424242' }}
        >
          Firebase
        </a>
      </div>

      <h3 className="">Tools</h3>
      <div className="sm:grid-cols-3 grid grid-cols-2 gap-3 pt-2">
        <a href="https://www.figma.com/" className="card card-transition text-white bg-black">
          Figma
        </a>
        <a
          href="https://www.notion.so/"
          className="card card-transition"
          style={{ backgroundColor: '#fffefc', color: '#111' }}
        >
          Notion
        </a>
        <a
          href="https://slack.com/"
          className="card card-transition text-white"
          style={{ backgroundColor: '#611f69' }}
        >
          Slack
        </a>
        <a
          href="https://code.visualstudio.com/"
          className="card card-transition text-white"
          style={{ backgroundColor: '#444' }}
        >
          VSCode
        </a>
        <a
          href="https://www.iterm2.com/"
          className="card card-transition text-white"
          style={{
            backgroundColor: 'rgb(33, 42, 47)',
            color: 'rgb(14, 232, 40)',
          }}
        >
          iTerm
        </a>
        <a
          href="https://www.netlify.com/"
          className="card card-transition text-white"
          style={{ backgroundColor: '#00ad9f' }}
        >
          Netlify
        </a>
        <a
          href="https://vercel.com/"
          className="card card-transition text-white"
          style={{ backgroundColor: '#111' }}
        >
          Vercel
        </a>
      </div>

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
