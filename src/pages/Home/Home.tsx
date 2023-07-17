import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Box, Container } from "../../reusable/Container";

export default function Home() {
  const dispatch = useDispatch();
  const params = useParams();
  const { addressHash } = useSelector((state: any) => state.walletDetails);
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {}, []);

  return (
    <Container>
      <Box styles="w-full">
        <></>
      </Box>
    </Container>
  );
}
