import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Section from '@components/Section';
import Container from '@components/Container';

import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Section className={styles.navSection}>
        <Container className={styles.navContainer}>
          <Link href="/">
            <a className={styles.navLogo}>
              The Kitchen
            </a>
          </Link>
          <a className={styles.navGithub} href="https://github.com/colbyfayock/the-kitchen">
            <FaGithub />
          </a>
        </Container>
      </Section>
    </nav>
  )
}

export default Nav;