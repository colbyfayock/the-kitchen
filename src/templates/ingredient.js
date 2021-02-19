import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';

import styles from '@styles/templates/Ingredient.module.scss';

export default function TemplateIngredient({ children, frontMatter }) {
  const ingredientFrontmatter = {
    ...frontMatter,
    path: createPathFromResource(frontMatter)
  }

  const { title } = ingredientFrontmatter;

  console.log('ingredientFrontmatter', ingredientFrontmatter)

  return (
    <Layout frontMatter={ingredientFrontmatter}>
      <Section>
        <Container>
          <h1>{ title }</h1>
          { children }
        </Container>
      </Section>
    </Layout>
  )
}

function createPathFromResource(frontMatter) {
  return `/${frontMatter.__resourcePath}/`.replace('.mdx', '');
}