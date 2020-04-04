import Link from "next/link";
import { FC } from "react";
import { FiGithub, FiHeart, FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "use-dark-mode";
import { NavLink } from "./nav-link";

export const Layout: FC = ({ children }) => {
  const darkMode = useDarkMode(false, {
    onChange: () => {
      darkMode.value
        ? document.documentElement.classList.add("mode-dark")
        : document.documentElement.classList.remove("mode-dark");
    }
  });

  return (
    <div className="flex flex-col items-center min-h-screen antialiased text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-black">
      <nav className="fixed z-20 flex items-start w-full px-4 py-3 text-lg tracking-tight shadow-md dark:shadow-outline-gray bg-gray-50 dark:bg-black">
        <div className="flex flex-col justify-between flex-1 sm:items-center sm:flex-row">
          <Link href="/" passHref>
            <a className="text-xl sm:text-lg">
              matepapp<span className="text-green-400">.</span>com
            </a>
          </Link>

          <div className="flex items-center mt-3 overflow-auto sm:mr-6 sm:mt-0">
            <NavLink href="/about">about</NavLink>
            <NavLink href="/career">career</NavLink>
            <NavLink href="/thoughts">thoughts</NavLink>
            <NavLink href="/contact">contact</NavLink>
          </div>
        </div>

        <button className="fixed top-3 right-3" onClick={darkMode.toggle}>
          {darkMode.value ? (
            <FiSun className="transition duration-500 ease-in-out w-9 h-9 sm:h-7 sm:w-7 hover:text-yellow-300" />
          ) : (
            <FiMoon className="transition duration-500 ease-in-out w-9 h-9 sm:h-7 sm:w-7 hover:text-blue-900" />
          )}
        </button>
      </nav>
      <main className="flex flex-col flex-1 w-full px-4 mt-28 lg:max-w-3xl sm:max-w-lg sm:px-0 sm:mt-20">
        {children}
      </main>
      <footer className="flex flex-col items-center mt-8 mb-2 text-xs text-gray-500 dark:text-gray-400">
        <p>
          built with <FiHeart className="inline w-4 h-4 text-green-400" /> in
          Budapest, Hungary
        </p>
        <div>
          <a
            className="mr-4 default-transition hover:text-green-400"
            href="https://github.com/matepapp/matepapp.com"
          >
            source on <FiGithub className="inline w-5 h-5" />
          </a>
          <a
            className="mr-4 default-transition hover:text-green-400"
            href="https://nextjs.org"
          >
            powered by
            {darkMode.value ? (
              <svg className="inline h-6 ml-1" viewBox="0 0 207 124">
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="White-Next.js"
                    transform="translate(-247.000000, -138.000000)"
                    fillRule="nonzero"
                  >
                    <g
                      id="next-white-vector"
                      transform="translate(247.000000, 138.000000)"
                    >
                      <g id="EXT-+-Type-something" fill="#FFFFFF">
                        <path
                          d="M48.9421964,32.6320058 L87.9011585,32.6320058 L87.9011585,35.7136421 L52.5134345,35.7136421 L52.5134345,58.9070103 L85.7908813,58.9070103 L85.7908813,61.9886466 L52.5134345,61.9886466 L52.5134345,87.4526941 L88.306981,87.4526941 L88.306981,90.5343303 L48.9421964,90.5343303 L48.9421964,32.6320058 Z M91.3912326,32.6320058 L95.5306221,32.6320058 L113.8738,58.0960534 L132.622801,32.6320058 L158.124498,0.286809811 L116.22757,60.7722112 L137.817329,90.5343303 L133.51561,90.5343303 L113.8738,63.4483691 L94.1508254,90.5343303 L89.9302715,90.5343303 L111.682358,60.7722112 L91.3912326,32.6320058 Z M139.359455,35.713642 L139.359455,32.6320058 L183.756439,32.6320058 L183.756439,35.7136421 L163.302983,35.7136421 L163.302983,90.5343303 L159.731745,90.5343303 L159.731745,35.7136421 L139.359455,35.713642 Z"
                          id="EXT"
                        ></path>
                        <polygon
                          id="Type-something"
                          points="0.202923647 32.6320058 4.66697141 32.6320058 66.2235778 124.303087 40.785176 90.5343303 3.93649086 37.0111732 3.77416185 90.5343303 0.202923647 90.5343303"
                        ></polygon>
                      </g>
                      <path
                        d="M183.396622,86.5227221 C184.134938,86.5227221 184.673474,85.9601075 184.673474,85.233037 C184.673474,84.5059658 184.134938,83.9433513 183.396622,83.9433513 C182.666993,83.9433513 182.11977,84.5059658 182.11977,85.233037 C182.11977,85.9601075 182.666993,86.5227221 183.396622,86.5227221 Z M186.905793,83.1297235 C186.905793,85.2763149 188.460599,86.678523 190.727662,86.678523 C193.142388,86.678523 194.601647,85.233037 194.601647,82.7229099 L194.601647,73.8855335 L192.655968,73.8855335 L192.655968,82.7142542 C192.655968,84.1078073 191.952397,84.8521899 190.710289,84.8521899 C189.598473,84.8521899 188.842785,84.1597409 188.816727,83.1297235 L186.905793,83.1297235 Z M197.146664,83.0172011 C197.285642,85.2503478 199.153145,86.678523 201.932686,86.678523 C204.903321,86.678523 206.762139,85.1811034 206.762139,82.792155 C206.762139,80.9138876 205.702439,79.8752151 203.131364,79.2779777 L201.750279,78.9404092 C200.117298,78.5595622 199.457158,78.0488813 199.457158,77.1573541 C199.457158,76.0321243 200.482113,75.296398 202.019547,75.296398 C203.478806,75.296398 204.48639,76.0148135 204.668797,77.1660091 L206.562359,77.1660091 C206.44944,75.0626962 204.590622,73.5825873 202.045605,73.5825873 C199.309495,73.5825873 197.48542,75.0626962 197.48542,77.2871878 C197.48542,79.1221767 198.519063,80.2127835 200.786126,80.7407758 L202.401734,81.1302779 C204.060773,81.5197807 204.790402,82.091051 204.790402,83.0431676 C204.790402,84.1510859 203.643842,84.9560573 202.08035,84.9560573 C200.403939,84.9560573 199.240006,84.2030196 199.074971,83.0172011 L197.146664,83.0172011 Z"
                        id=".JS"
                        fill="#D4D4D4"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                className="inline h-6 ml-1"
                viewBox="0 0 207 124"
                version="1.1"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Black-Next.js"
                    transform="translate(-247.000000, -138.000000)"
                    fill="#000000"
                    fillRule="nonzero"
                  >
                    <g
                      id="next-black"
                      transform="translate(247.000000, 138.000000)"
                    >
                      <g id="EXT-+-Type-something">
                        <path
                          d="M48.9421964,32.6320058 L87.9011585,32.6320058 L87.9011585,35.7136421 L52.5134345,35.7136421 L52.5134345,58.9070103 L85.7908813,58.9070103 L85.7908813,61.9886466 L52.5134345,61.9886466 L52.5134345,87.4526941 L88.306981,87.4526941 L88.306981,90.5343303 L48.9421964,90.5343303 L48.9421964,32.6320058 Z M91.3912326,32.6320058 L95.5306221,32.6320058 L113.8738,58.0960534 L132.622801,32.6320058 L158.124498,0.286809811 L116.22757,60.7722112 L137.817329,90.5343303 L133.51561,90.5343303 L113.8738,63.4483691 L94.1508254,90.5343303 L89.9302715,90.5343303 L111.682358,60.7722112 L91.3912326,32.6320058 Z M139.359455,35.713642 L139.359455,32.6320058 L183.756439,32.6320058 L183.756439,35.7136421 L163.302983,35.7136421 L163.302983,90.5343303 L159.731745,90.5343303 L159.731745,35.7136421 L139.359455,35.713642 Z"
                          id="EXT"
                        ></path>
                        <polygon
                          id="Type-something"
                          points="0.202923647 32.6320058 4.66697141 32.6320058 66.2235778 124.303087 40.785176 90.5343303 3.93649086 37.0111732 3.77416185 90.5343303 0.202923647 90.5343303"
                        ></polygon>
                      </g>
                      <path
                        d="M183.396622,86.5227221 C184.134938,86.5227221 184.673474,85.9601075 184.673474,85.233037 C184.673474,84.5059658 184.134938,83.9433513 183.396622,83.9433513 C182.666993,83.9433513 182.11977,84.5059658 182.11977,85.233037 C182.11977,85.9601075 182.666993,86.5227221 183.396622,86.5227221 Z M186.905793,83.1297235 C186.905793,85.2763149 188.460599,86.678523 190.727662,86.678523 C193.142388,86.678523 194.601647,85.233037 194.601647,82.7229099 L194.601647,73.8855335 L192.655968,73.8855335 L192.655968,82.7142542 C192.655968,84.1078073 191.952397,84.8521899 190.710289,84.8521899 C189.598473,84.8521899 188.842785,84.1597409 188.816727,83.1297235 L186.905793,83.1297235 Z M197.146664,83.0172011 C197.285642,85.2503478 199.153145,86.678523 201.932686,86.678523 C204.903321,86.678523 206.762139,85.1811034 206.762139,82.792155 C206.762139,80.9138876 205.702439,79.8752151 203.131364,79.2779777 L201.750279,78.9404092 C200.117298,78.5595622 199.457158,78.0488813 199.457158,77.1573541 C199.457158,76.0321243 200.482113,75.296398 202.019547,75.296398 C203.478806,75.296398 204.48639,76.0148135 204.668797,77.1660091 L206.562359,77.1660091 C206.44944,75.0626962 204.590622,73.5825873 202.045605,73.5825873 C199.309495,73.5825873 197.48542,75.0626962 197.48542,77.2871878 C197.48542,79.1221767 198.519063,80.2127835 200.786126,80.7407758 L202.401734,81.1302779 C204.060773,81.5197807 204.790402,82.091051 204.790402,83.0431676 C204.790402,84.1510859 203.643842,84.9560573 202.08035,84.9560573 C200.403939,84.9560573 199.240006,84.2030196 199.074971,83.0172011 L197.146664,83.0172011 Z"
                        id=".JS"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            )}
          </a>
          <a
            className="default-transition hover:text-green-400"
            href="https://zeit.co/"
          >
            hosted on
            {darkMode.value ? (
              <svg className="inline h-4 ml-1" viewBox="0 0 113 100">
                <defs>
                  <linearGradient
                    x1="196.572434%"
                    y1="228.815483%"
                    x2="50%"
                    y2="50%"
                    id="linearGradient-1"
                  >
                    <stop stopColor="#000000" offset="0%"></stop>
                    <stop stopColor="#FFFFFF" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="White-Triangle"
                    transform="translate(-294.000000, -150.000000)"
                    fill="url(#linearGradient-1)"
                  >
                    <polygon
                      id="Logotype---White"
                      points="350.5 150 407 250 294 250"
                    ></polygon>
                  </g>
                </g>
              </svg>
            ) : (
              <svg className="inline h-4 ml-1" viewBox="0 0 114 100">
                <defs>
                  <linearGradient
                    x1="100.929941%"
                    y1="181.283245%"
                    x2="41.7687834%"
                    y2="100%"
                    id="linearGradient-1"
                  >
                    <stop stopColor="#FFFFFF" offset="0%"></stop>
                    <stop stopColor="#000000" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Black-Triangle"
                    transform="translate(-293.000000, -150.000000)"
                    fill="url(#linearGradient-1)"
                  >
                    <polygon
                      id="Logotype---Black"
                      points="350 150 407 250 293 250"
                    ></polygon>
                  </g>
                </g>
              </svg>
            )}
          </a>
        </div>
      </footer>
    </div>
  );
};
