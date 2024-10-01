import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

type socialMediaLinksTypes = {
  name: string
  link: string
  icon: any
}

export const socialMediaLinks: socialMediaLinksTypes[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/htsull',
    icon: FaGithub
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/b-sully/',
    icon: FaLinkedin
  },
  {
    name: 'X',
    link: 'https://x.com/htsull_',
    icon: FaXTwitter
  }
]
