import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack bg={'#fff'} borderRadius={'10px'} color='#000'>
      <VStack>
        <Image src={imageSrc} alt='project-image' borderRadius={'10px'} />
        <Box p={3}>
          <Heading as={'h3'} size={'sm'} mb={2}>{title}</Heading>
          <Text mb={2} color={'#888'}>{description}</Text>
          <a href="#">See more <FontAwesomeIcon icon={faArrowRight} size='1x' /></a>
        </Box>
      </VStack>
    </HStack>
  );
};

export default Card;
