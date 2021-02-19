import Head from 'next/head';

import { getIngredients } from '@lib/ingredients';

import Section from '@components/Section';
import Container from '@components/Container';
import Layout from '@components/Layout';
import Grid from '@components/Grid';
import Card from '@components/Card';

import styles from '../styles/Home.module.scss'

import recipesBanner from '@images/applitools-recipes-banner.jpg';

export default function Home({ ingredients }) {
  return (
    <Layout displayNav={false}>
      <Head>
        <title>The Kitchen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section className={styles.heroSection}>
        <Container className={styles.heroContainer}>
          <img src={recipesBanner} width={632} height={324} alt="Chefs with code ingredients" />
          <h1 className={styles.title}>The Kitchen</h1>
          <p className={styles.description}>
            A pantry full of web components that can be used for testing.
          </p>
        </Container>
      </Section>

      <Container>

        <Grid className={styles.homeGrid}>
          {ingredients.map(({ id, title, path }) => {
            return (
              <Card href={path} key={id}>
                <h3>{ title }</h3>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const ingredients = await getIngredients();
  return {
    props: {
      ingredients
    },
  }
}