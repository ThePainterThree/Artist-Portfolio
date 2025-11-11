import { Box, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="bg" py={2} px={6} mt={3}>
      <Flex
      
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        color="fg"
      >
        <Text fontSize="sm">© {new Date().getFullYear()} Yard Aard Studio</Text>
        <Text fontSize="sm" mt={2}>Made by Patricia 💜 </Text>
      </Flex>
    </Box>
  );
}
