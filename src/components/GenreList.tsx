import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genre } = useGenre();

  return (
    <List>
      {genre.map((gen) => (
        <ListItem key={gen.id} paddingY='5px'>
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={gen.image_background}/>
            <Text fontSize='lg'>{gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
