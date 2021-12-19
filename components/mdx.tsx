import { getMDXComponent } from 'mdx-bundler/client'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps, FC, useMemo } from 'react'

const Anchor: FC<ComponentProps<'a'>> = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export const MDX: FC<{ code: string }> = ({ code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return <Component components={{ a: Anchor, Image }} />
}
