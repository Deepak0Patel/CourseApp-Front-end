import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlayListHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src="" boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold '}
          textTransform={'uppercase'}
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`lecture - ${lectureCount}`}
      />
      <Heading
        size={'xs'}
        children={`views - ${views}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>watch Now</Button>
          <Button
            variant={'ghost'}
            colorScheme={'yellow'}
            onClick={() => addToPlayListHandler(id)}
          >
            Add to Playlist
          </Button>
        </Link>
      </Stack>
    </VStack>
  );
};

const addToPlayListHandler = () => {
  console.log('added to playlist');
};
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'Data Science',
    'Game Development',
  ];

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack
        overflow={'auto'}
        paddingY={'8'}
        // To hide a scroll bar  css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        my={'8'}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'sample22'}
          description={'sample22'}
          views={22}
          imageSrc={'sample22'}
          creator={'sample22'}
          lectureCount={2}
          addToPlayListHandler={addToPlayListHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
