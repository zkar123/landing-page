import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features
        highlight="TOKENOMICS"
        title="Token details"
        items={[
         
         
          {
            title: "tax",
            description:
              "6/6.",
          },
          {
            title: "supply",
            description:
              "1billion",
            icon: IconRocket,
          },
          {
            title: "liquidity",
            description:
              "locked.",
            icon: IconBulb
          },
        ]}
      />
      <Steps />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="How to buy "
        highlight="FAQs"
        items={[
          {
            title: "Step 1: Set up a Wallet",
            description:
              "To buy USDT Farm on PancakeSwap, you'll need a cryptocurrency wallet that supports Binance Smart Chain (BSC). Popular choices include Trust Wallet or MetaMask. Make sure to fund your wallet with BNB (Binance Coin) to cover transaction fees.",
          },
          {
            title: "Step 2: Access PancakeSwap",
            description:
              "Visit the PancakeSwap decentralized exchange platform using your web3-enabled wallet browser. Ensure that you are connected to the Binance Smart Chain network.",
          },
          {
            title: "Step 3: Connect Your Wallet",
            description:
              "Click the 'Connect Wallet' button on PancakeSwap's interface. Choose your wallet provider and connect your wallet to the platform.",
          },
          {
            title: "Step 4: Swap BNB for USDT Farm",
            description:
              "In the 'Trade' section, select 'BNB' as the 'From' currency and 'USDT Farm' as the 'To' currency. Enter the amount of USDT Farm you want to purchase. Review the transaction details and confirm the swap.",
          },
          {
            title: "Step 5: Confirm Transaction",
            description:
              "Your wallet will prompt you to confirm the transaction. Ensure that you review the gas fees and click 'Confirm' to complete the purchase.",
          },
          {
            title: "Step 6: Check Your Wallet",
            description:
              "Once the transaction is confirmed, you'll see USDT Farm in your wallet. You can now hold, stake, or farm with your USDT Farm tokens as per the project's features.",
          },
        ]}
      />
      <Stats />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
