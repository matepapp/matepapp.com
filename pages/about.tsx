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
      <h2 id="contact">Contact</h2>
      <div>
        Feel free to get in touch with me anywhere! Preferably on twitter or email, but you can find
        me on almost every major social media platform (except TikTok).
      </div>
      <div className="sm:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-3 list-none">
        <a
          href="mailto:matepapp@icloud.com"
          className="card hover:text-gray-100 default-transition hover:bg-green-400 text-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline w-6 h-6 mr-3"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          email
        </a>

        <a
          href="https://twitter.com/matepappp"
          className="card hover:text-gray-100 default-transition twitter text-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline w-6 h-6 mr-3"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
          twitter
        </a>

        <a
          href="https://instagram.com/pappmate"
          className="card hover:text-gray-100 default-transition instagram text-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline w-6 h-6 mr-3"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          instagram
        </a>

        <a
          href="https://facebook.com/pappmatesz"
          className="card hover:text-gray-100 default-transition facebook text-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline w-6 h-6 mr-3"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
          facebook
        </a>

        <a
          href="https://github.com/matepapp"
          className="card hover:text-gray-100 default-transition hover:bg-gray-500 text-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline w-6 h-6 mr-3"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          github
        </a>

        <a
          href="https://www.linkedin.com/in/matepapp/"
          className="card hover:text-gray-100 default-transition linkedin text-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline w-6 h-6 mr-3"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          linkedin
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
