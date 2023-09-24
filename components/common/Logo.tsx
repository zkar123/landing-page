import { component$ } from "@builder.io/qwik";

// @ts-ignore
import logoSrc from "~/assets/images/usdtfarm2.png";

export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-centerrounded-[10px]  p-4">
    <img
      src={logoSrc}
      class="inline-block mr-1"
      width={42}
      height={42}
      alt="Usdtfarm Logo"
      loading="lazy"
    />
  USDT-FARM 
  </span>
));
