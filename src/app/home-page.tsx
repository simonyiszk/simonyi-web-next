'use client';

import { ChevronIcon, HomeHeader, Profile, SimonyiFullLightIcon, StudentGroup } from '~/components';
import { images } from '~/utils';
import type { AboutType, ProfileType, StudentGroupType } from '~/types';
import Image from 'next/image';
import { useState } from 'react';
import { Box, Button, Link, Text } from '@chakra-ui/react';
import { default as Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

function Greeting() {
  return (
    <Box minHeight="100vh">
      <Box
        zIndex="-1"
        position="absolute"
        top="0"
        left="0"
        bgColor="black"
        width="100%"
        maxWidth="100%"
        height="100vh"
        maxHeight="100%"
        filter="blur(10px)"
        display="flex"
      >
        <Image src="/images/hero/default.png" alt="Hero image" fill priority />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        justifyContent="space-between"
        alignItems="center"
        pb="calc(80px + 2rem)"
      >
        <HomeHeader />
        <Box display="flex" gap={8} flexDirection="column">
          <Box maxWidth={353} maxHeight={75} m={8}>
            <SimonyiFullLightIcon width="100%" height="100%" filter="drop-shadow(0 4px 8px rgb(0, 0, 0, 0.6))" />
          </Box>
          <Box display="flex" gap={8} flexWrap="wrap" flexDirection="row" justifyContent="space-evenly">
            <Link href="https://tanfolyam.simonyi.bme.hu/" title="tanfolyam.simonyi.bme.hu" target="_blank">
              <Button
                borderWidth={2}
                borderColor="simonyi_zold"
                _hover={{ bgColor: 'simonyi_zold' }}
                bgColor="var(--chakra-colors-whiteAlpha-300)"
                width={32}
              >
                Tanfolyam
              </Button>
            </Link>
            <Link href="https://termek.sch.bme.hu/" title="termek.sch.bme.hu" target="_blank">
              <Button
                borderWidth={2}
                borderColor="simonyi_zold"
                _hover={{ bgColor: 'simonyi_zold' }}
                bgColor="var(--chakra-colors-whiteAlpha-300)"
                width={32}
              >
                Bérlés
              </Button>
            </Link>
          </Box>
        </Box>
        <Box>
          <ChevronIcon fill="light" />
        </Box>
      </Box>
    </Box>
  );
}

function ImageBrowser({ imagesData }: { imagesData: typeof images }) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index = 0) => {
    setIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <Box
      display="flex"
      flexWrap={{ md: 'wrap' }}
      gap="10px"
      overflowX={{ base: 'scroll', md: 'hidden' }}
      mx={{ base: -8, md: 0 }}
      justifyContent={{ base: 'flex-start', md: 'center', lg: 'flex-end' }}
    >
      {imagesData.slice(0, 9).map((image, index) => (
        <Box
          key={index}
          width="177.05px"
          height="100px"
          bgColor="#000000"
          flexShrink="0"
          onClick={() => openLightbox(index)}
          _hover={{ cursor: 'pointer' }}
          position={'relative'}
        >
          <Image src={image.url} alt={image.alt} fill sizes="100%" />
        </Box>
      ))}
      <Lightbox
        open={isOpen}
        slides={imagesData.map((image) => {
          return {
            src: image.url,
            alt: image.alt,
            title: image.title,
            description: image.description,
            width: image.width,
            height: image.height
          };
        })}
        index={index}
        close={() => closeLightbox()}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />
    </Box>
  );
}

function About({ aboutData, imagesData }: { aboutData: AboutType; imagesData: typeof images }) {
  return (
    <Box display="flex" flexDirection="column">
      <Text as="h1" mb="32px">
        {aboutData.title}
      </Text>
      <Box display="grid" gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap="4rem">
        <Text>
          {aboutData.text} <Link href={aboutData.wikiUrl}>(Wikipédia)</Link>
        </Text>
        <ImageBrowser imagesData={imagesData} />
      </Box>
    </Box>
  );
}

function StudentGroups({ studentGroupsData }: { studentGroupsData: Array<StudentGroupType> }) {
  return (
    <Box display="flex" flexDirection="column" gap="32px">
      <Box alignSelf={{ base: 'center', md: 'flex-start' }}>
        <Text as="h1">Köreink</Text>
      </Box>
      <Box
        alignSelf="center"
        display="flex"
        justifyContent="center"
        flexDirection={{ base: 'column', md: 'row' }}
        gap="32px"
        flexWrap="wrap"
        width="100%"
      >
        {studentGroupsData.map((group, index) => (
          <StudentGroup
            key={index}
            name={group.name}
            description={group.description}
            logo={group.logo}
            socials={group.socials}
            isDense={group.isDense}
          />
        ))}
      </Box>
    </Box>
  );
}

function Presidency({ presidencyData }: { presidencyData: Array<ProfileType> }) {
  return (
    <Box display="flex" flexDirection="column" gap="2rem">
      <Box alignSelf={{ base: 'center', md: 'flex-start' }}>
        <Text as="h1">Elnökség</Text>
      </Box>
      <Box alignSelf="center" display="flex" justifyContent="center" flexDirection="row" gap="2rem" flexWrap="wrap" width="100%">
        {presidencyData.map((profile, index) => (
          <Profile
            key={index}
            profilePicture={profile.profilePicture}
            name={profile.name}
            title={profile.title}
            socials={profile.socials}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function HomePage({
  aboutData,
  imagesData,
  studentGroupsData,
  presidencyData
}: {
  aboutData: AboutType;
  imagesData: typeof images;
  studentGroupsData: Array<StudentGroupType>;
  presidencyData: Array<ProfileType>;
}) {
  return (
    <>
      <Greeting />
      <Box maxWidth="1496px" mx="auto" p={8} display="flex" flexDirection="column" gap="calc(80px + 2rem)" pb="calc(80px + 2rem)">
        <Box />
        <About aboutData={aboutData} imagesData={imagesData} />
        <StudentGroups studentGroupsData={studentGroupsData} />
        <Presidency presidencyData={presidencyData} />
      </Box>
    </>
  );
}
