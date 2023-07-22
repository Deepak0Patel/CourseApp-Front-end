import React, { useState } from 'react';
import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import introvideo from '../../assets/videos/intro.mp4';

const CouresePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'dm,dmkdk',
      title: 'sampel1',
      discription: 'idhar description hogi yaad rakhna',
      video: {
        url: 'sample url',
      },
    },
    {
      _id: 'kmsdskk',
      title: 'sampel2',
      discription: 'idhar description hogi yaad rakhna',
      video: {
        url: 'sample url',
      },
    },
    {
      _id: 'kmdsk',
      title: 'sampel3',
      discription: 'idhar description hogi yaad rakhna',
      video: {
        url: 'sample url',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          controlsList="nodownload  noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introvideo}
        ></video>

        <Heading
          m={'4'}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m={'4'} children="Description" />
        <Text m={'4'} children={lectures[lectureNumber].discription} />
      </Box>

      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: '0',
              borderBottom: '1px solid black',
            }}
          >
            <Text noOfLines={'1'}>
              #{index + 1}
              {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CouresePage;
