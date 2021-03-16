import Link from 'next/link'
import { FC } from 'react'
import { NavLink } from './nav-link'

export const Layout: FC = ({ children }) => (
  <div className="flex flex-col items-center w-full max-w-2xl min-h-screen px-4 mx-auto">
    <nav className="dark:bg-gray-900 bg-gray-50 sticky top-0 z-20 flex items-start justify-between w-full py-4 tracking-tight">
      <Link href="/">
        <a>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM6.022 19.902C6.08733 19.9673 6.16667 20 6.26 20H7.436C7.52933 20 7.60867 19.9673 7.674 19.902C7.73933 19.8367 7.772 19.7573 7.772 19.664V15.758C7.772 15.1793 7.898 14.7547 8.15 14.484C8.41133 14.2133 8.72867 14.078 9.102 14.078C9.494 14.078 9.816 14.2133 10.068 14.484C10.3293 14.7453 10.46 15.17 10.46 15.758V19.664C10.46 19.7573 10.4927 19.8367 10.558 19.902C10.6233 19.9673 10.7027 20 10.796 20H11.944C12.0373 20 12.1167 19.9673 12.182 19.902C12.2473 19.8367 12.28 19.7573 12.28 19.664V15.758C12.28 15.1793 12.406 14.7547 12.658 14.484C12.9193 14.2133 13.232 14.078 13.596 14.078C14.0067 14.078 14.3333 14.2133 14.576 14.484C14.828 14.7453 14.954 15.17 14.954 15.758V19.664C14.954 19.7573 14.9867 19.8367 15.052 19.902C15.1173 19.9673 15.1967 20 15.29 20H16.438C16.5407 20 16.62 19.9673 16.676 19.902C16.7413 19.8367 16.774 19.7573 16.774 19.664V15.646C16.774 14.6473 16.5313 13.8867 16.046 13.364C15.5607 12.8413 14.9353 12.58 14.17 12.58C13.694 12.58 13.2507 12.6967 12.84 12.93C12.4293 13.154 12.112 13.4527 11.888 13.826C11.4773 12.9953 10.754 12.58 9.718 12.58C8.85 12.58 8.17333 12.8973 7.688 13.532V13.056C7.688 12.9627 7.65533 12.8833 7.59 12.818C7.52467 12.7527 7.44533 12.72 7.352 12.72H6.26C6.16667 12.72 6.08733 12.7527 6.022 12.818C5.95667 12.8833 5.924 12.9627 5.924 13.056V19.664C5.924 19.7573 5.95667 19.8367 6.022 19.902ZM18.1088 22.562C18.1741 22.6273 18.2535 22.66 18.3468 22.66H19.5368C19.6395 22.66 19.7188 22.6273 19.7748 22.562C19.8401 22.506 19.8728 22.4267 19.8728 22.324V19.146C20.3675 19.8087 21.0861 20.14 22.0288 20.14C22.9715 20.14 23.6948 19.8413 24.1988 19.244C24.7028 18.6373 24.9735 17.844 25.0108 16.864C25.0201 16.752 25.0248 16.584 25.0248 16.36C25.0248 16.1453 25.0201 15.982 25.0108 15.87C24.9735 14.862 24.7028 14.064 24.1988 13.476C23.6948 12.8787 22.9715 12.58 22.0288 12.58C21.0581 12.58 20.3115 12.9253 19.7888 13.616V13.056C19.7888 12.9533 19.7561 12.874 19.6908 12.818C19.6348 12.7527 19.5555 12.72 19.4528 12.72H18.3468C18.2535 12.72 18.1741 12.7527 18.1088 12.818C18.0435 12.874 18.0108 12.9533 18.0108 13.056V22.324C18.0108 22.4267 18.0435 22.506 18.1088 22.562ZM23.1208 16.78C23.0555 18.0213 22.5188 18.642 21.5108 18.642C20.9881 18.642 20.5868 18.4787 20.3068 18.152C20.0361 17.816 19.8915 17.4147 19.8728 16.948L19.8588 16.402L19.8728 15.87C19.9008 15.366 20.0455 14.9413 20.3068 14.596C20.5681 14.2507 20.9695 14.078 21.5108 14.078C22.5188 14.078 23.0555 14.6987 23.1208 15.94C23.1301 16.0333 23.1348 16.1733 23.1348 16.36C23.1348 16.5467 23.1301 16.6867 23.1208 16.78Z"
              fill="#34D399"
            />
          </svg>
        </a>
      </Link>

      <div className="flex items-center space-x-3">
        <NavLink href="/about">about</NavLink>
        <NavLink href="/thoughts">thoughts</NavLink>
      </div>
    </nav>
    <main className="flex flex-col flex-1 w-full mt-8 space-y-8">{children}</main>
    <footer className="dark:text-gray-400 mt-14 w-full mb-4 text-sm text-center text-gray-500">
      <div>
        <div>
          built with
          <div className="inline px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline w-5 h-5 text-red-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          in Budapest & Barcelona
        </div>
        <div>
          using <a href="https://nextjs.org">Next.js</a> &{' '}
          <a href="https://tailwindcss.com">TailwindCSS</a>, hosted on{' '}
          <a href="https://vercel.com">Vercel</a>, source available on{' '}
          <a href="https://github.com/matepapp/matepapp.com">Github</a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between mt-2 space-y-2">
        <div>© Mate Papp, 2021</div>
        <div className="flex flex-row space-x-3">
          <a
            href="mailto:matepapp@icloud.com"
            className="hover:text-green-400 default-transition text-gray-500"
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
              className="w-6 h-6"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>

          <a
            href="https://twitter.com/matepappp"
            className="hover:text-twitter default-transition text-gray-500"
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
              className="w-6 h-6"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>

          <a
            href="https://instagram.com/pappmate"
            className="hover:text-instagram default-transition text-gray-500"
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
              className="w-6 h-6"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a
            href="https://facebook.com/pappmatesz"
            className="hover:text-facebook default-transition text-gray-500"
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
              className="w-6 h-6"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>

          <a href="https://github.com/matepapp" className="default-transition text-gray-500">
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
              className="w-6 h-6"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/matepapp/"
            className="hover:text-linkedin default-transition text-gray-500"
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
              className="w-6 h-6"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
)
