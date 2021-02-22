import { Container, Heading } from '@chakra-ui/react';

import Layout from '@components/Layout';
import Section from '@components/Section';

export default function TemplateIngredient({ children, frontMatter }) {
  const ingredientFrontmatter = {
    ...frontMatter,
    path: createPathFromResource(frontMatter)
  }

  const { title } = ingredientFrontmatter;

  return (
    <Layout frontMatter={ingredientFrontmatter}>
      <Section>
        <Container maxW="4xl">
          <Heading as="h1" mb=".8em">{ title }</Heading>
          { children }
        </Container>
      </Section>
    </Layout>
  )
}

function createPathFromResource(frontMatter) {
  return `/${frontMatter.__resourcePath}/`.replace('.mdx', '');
}