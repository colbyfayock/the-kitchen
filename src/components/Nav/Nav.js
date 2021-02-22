import { Container, Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Section from '@components/Section';

const Nav = () => {
  return (
    <Box as="nav">
      <Section m="0">
        <Container maxW="4xl">
          <Flex w="100%" justifyContent="space-between" alignItems="center">
            <Text color="primary.500" fontWeight="bold" fontSize="2xl">
              <Link href="/">
                <a>
                  The Kitchen
                </a>
              </Link>
            </Text>
            <Text fontSize="2xl">
              <a href="https://github.com/colbyfayock/the-kitchen">
                <FaGithub />
              </a>
            </Text>
          </Flex>
        </Container>
      </Section>
    </Box>
  )
}

export default Nav;