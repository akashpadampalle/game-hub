import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genre, isLoading, error } = useGenre();

  if(error){
    return null;
  }

  if(isLoading){
    return <Spinner /> 
  }

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
