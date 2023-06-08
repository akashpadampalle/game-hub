import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";


interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <List>
      {data.map((gen) => (
        <ListItem key={gen.id} paddingY='5px'>
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={gen.image_background} />
            <Button
              fontWeight={(gen.id == selectedGenre?.id) ? 'bold' : 'normal'}
              fontSize='lg'
              variant='link'
              onClick={() => onSelectGenre(gen)} >
              {gen.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
