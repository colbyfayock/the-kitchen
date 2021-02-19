import Section from '@components/Section';
import Container from '@components/Container';
import Applitools from '@components/Applitools';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Section className={styles.footerSection}>
        <Container className={styles.footerContainer}>
          <a href="https://www.applitools.com" target="_blank" rel="noopener noreferrer">
            Powered by <Applitools className={styles.footerLogo} />
          </a>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer;