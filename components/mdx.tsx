import { getMDXComponent, MDXContentProps } from 'mdx-bundler/client'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps, FC, useMemo } from 'react'

const Anchor: FC<ComponentProps<'a'>> = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link legacyBehavior href={href} passHref>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

type Props = MDXContentProps & {
  code: string
}

export const MDX: FC<Props> = ({ code, components }) => {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return <Component components={{ a: Anchor, Image, ...components }} />
}
