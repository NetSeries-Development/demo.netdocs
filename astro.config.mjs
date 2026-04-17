// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "NetDocs by NetSeries",
      defaultLocale: "en",
      locales: {
        en: { label: "English" },
        nl: { label: "Nederlands", lang: "nl" },
      },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/..." }],
      sidebar: [
        {
          label: "NetSeries",
          // Vertaling voor de label in het menu
          translations: { nl: "NetSeries" },
          // Laat 'en/' weg! Starlight zoekt automatisch in de huidige taalmap
          autogenerate: { directory: "NetSeries" },
        },
        {
          label: "NetForce",
          translations: { nl: "NetForce" },
          autogenerate: { directory: "NetForce" },
        },
        {
          label: "NetMap",
          translations: { nl: "NetMap" },
          autogenerate: { directory: "NetMap" },
        },
        {
          label: "NetScope",
          translations: { nl: "NetScope" },
          autogenerate: { directory: "NetScope" },
        },
      ],
    }),
  ],
});
