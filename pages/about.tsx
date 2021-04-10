// import { getBase64 } from '@plaiceholder/base64'
// import { getImage } from '@plaiceholder/next'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CakeIcon,
  DeviceMobileIcon,
  GlobeIcon,
  HomeIcon,
  MicrophoneIcon,
  SpeakerphoneIcon,
  XCircleIcon,
} from '@heroicons/react/outline'
import clsx from 'clsx'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'
import { CareerTimelineItem } from '../components/career-timeline-item'
import { SEO } from '../utils/seo'

const StickyHeader: FC<{ zIndex: number } & HTMLAttributes<HTMLHeadingElement>> = ({
  zIndex,
  children,
  className,
}) => (
  <h3
    className={clsx('top-14 dark:bg-gray-900 sticky z-10 w-full py-1 bg-gray-100', className)}
    style={{ zIndex }}
  >
    {children}
  </h3>
)

type AboutPageProps = {
  img: { src: string; alt: string }
  placeholderImg: string
}

const AboutPage: NextPage<AboutPageProps> = ({ img }) => {
  const title = SEO.titleTemplate('About')

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>About</h1>
      <div className="rounded-xl relative overflow-hidden">
        {/* <img
          aria-hidden="true"
          alt=""
          src={placeholderImg}
          className="absolute inset-0 object-cover object-center w-full h-full"
          style={{ filter: 'blur(24px)' }}
        /> */}
        <Image src={img.src} alt={img.alt} className="rounded-xl" width={1024} height={1024} />
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

      <h2 id="career">Career</h2>
      <div className="pb-4">
        <StickyHeader zIndex={1}>2021</StickyHeader>
        <ul>
          <CareerTimelineItem icon={<DeviceMobileIcon />} month="April">
            Released my first, indie iOS application,{' '}
            <a href="https://historico.app" className="text-link">
              Historico
            </a>{' '}
            to the App Store.
          </CareerTimelineItem>
        </ul>

        <StickyHeader zIndex={2} className="mt-8">
          2020
        </StickyHeader>
        <ul>
          <CareerTimelineItem icon={<HomeIcon />} month="September">
            Moved to Barcelona.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<BriefcaseIcon />} month="June">
            Joined the Content & Partners cluster within{' '}
            <a href="https://glovoapp.com" className="text-link">
              Glovo
            </a>{' '}
            as a Senior Frontend Engineer.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<XCircleIcon />} month="March">
            Partly, because of the pandemic we decided to shut down Cogito and look for other
            opportunities.
          </CareerTimelineItem>
        </ul>

        <StickyHeader zIndex={3} className="mt-8">
          2019
        </StickyHeader>
        <ul>
          <CareerTimelineItem icon={<MicrophoneIcon />} month="September">
            Mentored a half-day{' '}
            <a
              href="https://2019.jsconfbp.com/workshops/supercharge-jamstack"
              className="text-link"
            >
              workshop at JSConf BP '19
            </a>{' '}
            about the beauty and possible opportunities of JAMStack.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<BriefcaseIcon />} month="July">
            Left Supercharge in order to focus on Cogito full-time. I've lead the development team
            and helped building the foundations and product of Cogito.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<MicrophoneIcon />} month="February">
            Had my first & second Meetup talks, plus a workshop within the company about GraphQL in
            general, and for iOS Developers.
          </CareerTimelineItem>
        </ul>

        <StickyHeader zIndex={4} className="mt-8">
          2018
        </StickyHeader>
        <ul>
          <CareerTimelineItem icon={<BriefcaseIcon />} month="August">
            Moved to the Web team within Supercharge.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<AcademicCapIcon />} month="June">
            Graduated as a Computer Engineer BSc at Budapest University of Technology and Economics.
            My final these was the very early version of Cogito.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<CakeIcon />} month="March">
            Officially founded our startup,{' '}
            <a href="https://cogito.study" className="text-link">
              Cogito
            </a>{' '}
            with 5 friends of mine. Cogito is a community based, collaborative learning management
            platform mainly for universities. Initially, we participated in an incubator program,
            StartIT@K&H.
          </CareerTimelineItem>
        </ul>

        <StickyHeader zIndex={5} className="mt-8">
          2017
        </StickyHeader>
        <ul>
          <CareerTimelineItem icon={<BriefcaseIcon />} month="November">
            Joined one of the biggest digital agency in Hungary,{' '}
            <a href="https://supercharge.io" className="text-link">
              Supercharge
            </a>{' '}
            as an iOS Developer. I worked on several client projects, from huge mobile- & internet
            banking systems to small, early stage startup products.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<MicrophoneIcon />} month="April">
            Hold a Design Principles workshop for newjoiners at{' '}
            <a href="https://simonyi.bme.hu" className="text-link">
              Simonyi Károly College for Advanced Studies
            </a>
            .
          </CareerTimelineItem>
          <CareerTimelineItem icon={<BriefcaseIcon />} month="March">
            Started a new job at Fornax ICT as an iOS Developer. Part of a cross-functional team, we
            were building enterprise level project- and resource management applications.
          </CareerTimelineItem>
        </ul>

        <StickyHeader zIndex={6} className="mt-8">
          2016
        </StickyHeader>
        <ul>
          <CareerTimelineItem icon={<SpeakerphoneIcon />} month="December">
            Joined the organizer team of the{' '}
            <a
              href="https://www.facebook.com/events/bme-i-épület/xiv-simonyi-konferencia/1113033802140234/"
              className="text-link"
            >
              XIV. Simonyi Conference
            </a>
            .
          </CareerTimelineItem>
          <CareerTimelineItem icon={<BriefcaseIcon />} month="July">
            Started my professional career as an iOS Developer Intern (later Junior) part of
            POSSIBLE CEE.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<AcademicCapIcon />} month="April">
            Participated in UXStudio's Practice oriented UX & UI training program.
          </CareerTimelineItem>
        </ul>

        <StickyHeader zIndex={7} className="mt-8">
          2015
        </StickyHeader>
        <ul>
          <CareerTimelineItem icon={<DeviceMobileIcon />} month="November">
            Started learning iOS application development in my free time.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<BriefcaseIcon />} month="October">
            Joined{' '}
            <a href="https://schdesign.hu" className="text-link">
              Schönherz Design Studio
            </a>
            , the design focused volunteer team within Simonyi Károly College for Advanced Studies.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<GlobeIcon />} month="June - September">
            Worked 3 months in the US as part of a staff member of a Summer Camp. I had a chance to
            visit New York, Philadelphia, Washington DC, Niagara Falls, and Los Angeles.
          </CareerTimelineItem>
        </ul>

        <StickyHeader zIndex={8} className="mt-8">
          2014
        </StickyHeader>
        <ul>
          <CareerTimelineItem icon={<HomeIcon />} month="August">
            Moved to Budapest and started university at Budapest University of Technology and
            Economics as a Computer Engineer.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<AcademicCapIcon />} month="June">
            Finished High School at Nagy Lajos Gimnázium Szombathely.
          </CareerTimelineItem>
        </ul>
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

export async function getStaticProps() {
  const img = {
    src: '/assets/profile.jpeg',
    alt: 'Mate Papp is drinking espresso.',
  }

  // const imgFile = await getImage(img.src)
  // const placeholderImg = await getBase64(imgFile)

  return {
    props: {
      img,
      // placeholderImg,
    },
  }
}

export default AboutPage
