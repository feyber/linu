import {
  WifiIcon,
  ShareIcon,
  VideoCameraIcon,
  DeviceMobileIcon,
  ArrowCircleRightIcon,
  CalculatorIcon,
  MoonIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-onea.png";
import benefitTwoImg from "../public/img/webdeva.png";

const benefitOne = {
  title: "Little Inu, coolest memecoinin the Inu Family!",
  image: benefitOneImg,
  bullets: [
    {
      title: "Airdrop token to our users",
      icon: <ArrowCircleRightIcon />,
    },
    {
      title: "Trading on Dexlab",
      icon: <ArrowCircleRightIcon />,
    },
    {
      title: "Upcoming collab with more dex and other projects",
      icon: <ArrowCircleRightIcon />,
    },
    {
      title:
        "Collab with upcomming NFT projects and airdrop them to our holders",
      icon: <ArrowCircleRightIcon />,
    },
    {
      title: "apply listing to ( Bitrue and Huobi)",
      icon: <ArrowCircleRightIcon />,
    },
    {
      title: "Cross Chain support and bridge (Bsc/polygon)",
      icon: <ArrowCircleRightIcon />,
    },
  ],
};

const benefitTwo = {
  title: "How To BUY ?",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Create Solana Wallet",
      desc: "Create a Phantom, Solflare or Sollet Wallet using a desktop computer. That will allow you to buy, sell, send, and receive $Sol and mint tokens like our project $LINU.",
      icon: <ArrowCircleRightIcon />,
    },
    {
      title: "Send $SOL/USDC To Your Wallet",
      desc: "You can buy Solana (SOL) on Coinbase, Binance, FTX or any major Exchange. Transfer your $SOL/USDC to your Solana Wallet.  Make sure you are using the Solana Network when transfering $SOL or $USDC.",
      icon: <ArrowCircleRightIcon />,
    },
    {
      title: "MInt $LINU",
      desc: "In your Solana wallet, click add custom tokens. Add LittleInu Mint Address, Name and Symbol",
      icon: <ArrowCircleRightIcon />,
    },
    {
      title: "Connect Your Wallet To Dexlab",
      desc: "Click “Connect wallet” on Dexlab or Raydium and connect to be able to trade.",
      icon: <ArrowCircleRightIcon />,
    },
    {
      title: "Swap or Trade SOL/USDC For $LINU",
      desc: "Click “Connect wallet” on Dexlab or Raydium and connect to be able to trade.",
      icon: <ArrowCircleRightIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
