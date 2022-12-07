import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import {
  Select,
  Heading,
  Center,
  Stack,
  Badge,
  Box,
  SimpleGrid,
  Spinner,
  Button,
} from "@chakra-ui/react";
import {
  ConsolidatorReturnType,
  NFTConsolidated,
} from "rmrk-tools/dist/tools/consolidator/consolidator";
import SvgResourceComposer from "../components/rmrk-svg-composer";

export const fetchData = async (setNfts: (nfts: NFTConsolidated[]) => void) => {
  try {
    const payload = await fetch("/chunky-dump.json");
    const data: ConsolidatorReturnType = await payload.json();
    if (data?.nfts) {
      setNfts(Object.values(data.nfts));
    }
  } catch (error: any) {
    console.log(error);
  }
};

const Home: NextPage = () => {
  const [nfts, setNfts] = useState<NFTConsolidated[]>([]);
  useEffect(() => {
    fetchData(setNfts);
  }, []);

  if (!nfts) {
    return <Spinner size="xl" />;
  }

  const changeHead = () => {
    Array.prototype.slice
      .call(
        document
          .querySelector("#bird > svg:nth-child(4)")
          .getElementsByTagName("path")
      )
      .filter((elem) => elem.getAttribute("fill") === "#49507a")
      .forEach((elem) => elem.setAttribute("fill", "#0ff"));
  };
  const changeBody = () => {
    Array.prototype.slice
      .call(
        document
          .querySelector("#bird > svg:nth-child(1)")
          .getElementsByTagName("path")
      )
      .filter((elem) => elem.getAttribute("fill") === "#49507a")
      .forEach((elem) => elem.setAttribute("fill", "#0ff"));
  };
  const changeHand = () => {
    Array.prototype.slice
      .call(
        document
          .querySelector("#bird > svg:nth-child(3)")
          .getElementsByTagName("path")
      )
      .filter((elem) => elem.getAttribute("fill") === "#49507a")
      .forEach((elem) => elem.setAttribute("fill", "#0ff"));
  };

  const [chunkyNumber, setChunkyNumber] = useState(1);

  const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value === "1") {
      setChunkyNumber(1);
    }
    if (event.target.value === "2") {
      setChunkyNumber(2);
    }
    if (event.target.value === "3") {
      setChunkyNumber(3);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mb={6}>
        <SimpleGrid columns={[2, 2]} spacing={4}>
          {nfts
            .filter((nft) => nft.collection === "d43593c715a56da27d-CHNK")
            .filter((nft, index) => index === chunkyNumber)
            .map((nft, index) => (
              <Box
                key={nft.id}
                minW={400}
                borderWidth={1}
                borderColor={"white"}
                borderStyle={"solid"}
                borderRadius={10}
                backgroundColor={index % 2 ? "blue.500" : "yellow.500"}
                position={"relative"}
              >
                <Badge
                  position={"absolute"}
                  top={4}
                  right={4}
                  colorScheme={"gray.600"}
                >
                  {nft.sn.slice(nft.sn.length - 4)}
                </Badge>
                <SvgResourceComposer nft={nft} />
              </Box>
            ))}
          <Center>
            <Stack>
              <Heading color="cyan">Recomposer</Heading>
              <Button colorScheme="teal" size="lg" onClick={changeHead}>
                Head
              </Button>
              <Button colorScheme="teal" size="lg" onClick={changeHand}>
                Hand
              </Button>
              <Button colorScheme="teal" size="lg" onClick={changeBody}>
                Body
              </Button>
              <Select
                colorScheme="teal"
                color="#aaa"
                placeholder="Your Chunky"
                onChange={handleChange}
              >
                <option color="#aaa" value="1">
                  Chunky A
                </option>
                <option value="2">Chunky B</option>
                <option value="3">Chunky C</option>
              </Select>
            </Stack>
          </Center>
          <div></div>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Home;