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
import { getBase64 } from '@plaiceholder/base64'
import { getImage } from '@plaiceholder/next'
import clsx from 'clsx'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, HTMLAttributes } from 'react'
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

const AboutPage: NextPage<AboutPageProps> = ({ img, placeholderImg }) => {
  const title = SEO.titleTemplate('About')

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>About</h1>
      <div className="rounded-xl relative overflow-hidden">
        <img
          aria-hidden="true"
          alt=""
          src={placeholderImg}
          className="filter blur-xl absolute inset-0 object-cover object-center w-full h-full"
        />
        <Image
          src={img.src}
          alt={img.alt}
          layout="responsive"
          className="rounded-xl"
          width={1024}
          height={1024}
        />
      </div>
      <div className="card dark:prose-dark p-5 prose">
        <p>{SEO.description}</p>
        <p>
          During weekdays, I work as a Senior Frontend Engineer at Glovo.{' '}
          <Link href="#career">
            <a>Previously</a>
          </Link>
          , I was also an iOS Developer and I've co-founded a startup. On weekends, I like to build
          & iterate on{' '}
          <Link href="/#projects">
            <a>my ideas</a>
          </Link>
          .
        </p>

        <p>
          In my free time, I enjoy spending time with my friends & family by traveling together,
          playing board games, or meeting to drink a great coffee or craft beer. Apart from that, a
          couple of my{' '}
          <Link href="#hobbies">
            <a>hobbies</a>
          </Link>{' '}
          are visiting conferences and meetups (sometimes speak), listen to podcasts, and playing
          team sports.
        </p>

        <p>
          Over the years, I’ve become passionate about coffee. Nowadays, I experiment with different
          brewing methods at home (mostly{' '}
          <a href="https://www.rok.coffee/eu/home" target="_blank" rel="noopener noreferrer">
            manual espresso
          </a>
          ,{' '}
          <a
            href="https://global.hario.com/sp_v60series.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            V60
          </a>
          , and{' '}
          <a href="https://aeropress.com" target="_blank" rel="noopener noreferrer">
            AeroPress
          </a>
          ).
        </p>
      </div>

      <h2 id="career">Career</h2>
      <div className="pb-4">
        <StickyHeader zIndex={1}>2021</StickyHeader>
        <ul>
          <CareerTimelineItem icon={<DeviceMobileIcon className="w-10 h-10" />} month="May">
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
          <CareerTimelineItem icon={<HomeIcon className="w-10 h-10" />} month="September">
            Moved to Barcelona.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<BriefcaseIcon className="w-10 h-10" />} month="June">
            Joined the Content & Partners cluster within{' '}
            <a href="https://glovoapp.com" className="text-link">
              Glovo
            </a>{' '}
            as a Senior Frontend Engineer.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<XCircleIcon className="w-10 h-10" />} month="March">
            Partly, because of the pandemic we decided to shut down Cogito and look for other
            opportunities.
          </CareerTimelineItem>
        </ul>

        <StickyHeader zIndex={3} className="mt-8">
          2019
        </StickyHeader>
        <ul>
          <CareerTimelineItem icon={<MicrophoneIcon className="w-10 h-10" />} month="September">
            Mentored a half-day{' '}
            <a
              href="https://2019.jsconfbp.com/workshops/supercharge-jamstack"
              className="text-link"
            >
              workshop at JSConf BP '19
            </a>{' '}
            about the beauty and possible opportunities of JAMStack.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<BriefcaseIcon className="w-10 h-10" />} month="July">
            Left Supercharge in order to focus on Cogito full-time. I've lead the development team
            and helped building the foundations and product of Cogito.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<MicrophoneIcon className="w-10 h-10" />} month="February">
            Had my first & second Meetup talks, plus a workshop within the company about GraphQL in
            general, and for iOS Developers.
          </CareerTimelineItem>
        </ul>

        <StickyHeader zIndex={4} className="mt-8">
          2018
        </StickyHeader>
        <ul>
          <CareerTimelineItem icon={<BriefcaseIcon className="w-10 h-10" />} month="August">
            Moved to the Web team within Supercharge.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<AcademicCapIcon className="w-10 h-10" />} month="June">
            Graduated as a Computer Engineer BSc at Budapest University of Technology and Economics.
            My final these was the very early version of Cogito.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<CakeIcon className="w-10 h-10" />} month="March">
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
          <CareerTimelineItem icon={<BriefcaseIcon className="w-10 h-10" />} month="November">
            Joined one of the biggest digital agency in Hungary,{' '}
            <a href="https://supercharge.io" className="text-link">
              Supercharge
            </a>{' '}
            as an iOS Developer. I worked on several client projects, from huge mobile- & internet
            banking systems to small, early stage startup products.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<MicrophoneIcon className="w-10 h-10" />} month="April">
            Hold a Design Principles workshop for newjoiners at{' '}
            <a href="https://simonyi.bme.hu" className="text-link">
              Simonyi Károly College for Advanced Studies
            </a>
            .
          </CareerTimelineItem>
          <CareerTimelineItem icon={<BriefcaseIcon className="w-10 h-10" />} month="March">
            Started a new job at Fornax ICT as an iOS Developer. Part of a cross-functional team, we
            were building enterprise level project- and resource management applications.
          </CareerTimelineItem>
        </ul>

        <StickyHeader zIndex={6} className="mt-8">
          2016
        </StickyHeader>
        <ul>
          <CareerTimelineItem icon={<SpeakerphoneIcon className="w-10 h-10" />} month="December">
            Joined the organizer team of the{' '}
            <a
              href="https://www.facebook.com/events/bme-i-épület/xiv-simonyi-konferencia/1113033802140234/"
              className="text-link"
            >
              XIV. Simonyi Conference
            </a>
            .
          </CareerTimelineItem>
          <CareerTimelineItem icon={<BriefcaseIcon className="w-10 h-10" />} month="July">
            Started my professional career as an iOS Developer Intern (later Junior) part of
            POSSIBLE CEE.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<AcademicCapIcon className="w-10 h-10" />} month="April">
            Participated in UXStudio's Practice oriented UX & UI training program.
          </CareerTimelineItem>
        </ul>

        <StickyHeader zIndex={7} className="mt-8">
          2015
        </StickyHeader>
        <ul>
          <CareerTimelineItem icon={<DeviceMobileIcon className="w-10 h-10" />} month="November">
            Started learning iOS application development in my free time.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<BriefcaseIcon className="w-10 h-10" />} month="October">
            Joined{' '}
            <a href="https://schdesign.hu" className="text-link">
              Schönherz Design Studio
            </a>
            , the design focused volunteer team within Simonyi Károly College for Advanced Studies.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<GlobeIcon className="w-10 h-10" />} month="June - September">
            Worked 3 months in the US as part of a staff member of a Summer Camp. I had a chance to
            visit New York, Philadelphia, Washington DC, Niagara Falls, and Los Angeles.
          </CareerTimelineItem>
        </ul>

        <StickyHeader zIndex={8} className="mt-8">
          2014
        </StickyHeader>
        <ul>
          <CareerTimelineItem icon={<HomeIcon className="w-10 h-10" />} month="August">
            Moved to Budapest and started university at Budapest University of Technology and
            Economics as a Computer Engineer.
          </CareerTimelineItem>
          <CareerTimelineItem icon={<AcademicCapIcon className="w-10 h-10" />} month="June">
            Finished High School at Nagy Lajos Gimnázium Szombathely.
          </CareerTimelineItem>
        </ul>
      </div>

      <h2 id="hobbies">Hobbies</h2>
      <ul className="sm:grid-cols-2 grid grid-cols-1 gap-4 list-none">
        <li className="card">spending time with friends & family</li>
        <li className="card">brewing coffee</li>
        <li className="card">listening to podcasts</li>
        <li className="card">reading books & articles</li>
        <li className="card">playing team sports</li>
        <li className="card">attending meetups & conferences</li>
        <li className="card">traveling</li>
        <li className="card">functional training</li>
        <li className="card">cycling</li>
        <li className="card">playing boardgames</li>
        <li className="card">cooking</li>
        <li className="card">learning new things</li>
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const img = {
    src: '/assets/profile.jpeg',
    alt: 'Mate Papp is drinking espresso.',
  }

  const imgFile = await getImage(img.src)
  const placeholderImg = await getBase64(imgFile)

  return {
    props: {
      img,
      placeholderImg,
    },
  }
}

export default AboutPage
