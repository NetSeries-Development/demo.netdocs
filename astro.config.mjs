import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeBlack from "starlight-theme-black";

export default defineConfig({
  site: "https://demo.netdocs.netseries.dev/",
  integrations: [
    starlight({
      title: "NetDocs by NetSeries",
      plugins: [
        starlightThemeBlack({
          footerText: "NetDocs by NetSeries",
        }),
      ],
      defaultLocale: "root",
      lastUpdated: true,
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        nl: {
          label: "Nederlands",
          lang: "nl",
        },
      },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/netseries" }],
      sidebar: [
        {
          label: "NetDocs",
          autogenerate: { directory: "NetDocs" },
        },
        {
          label: "NetSeries",
          autogenerate: { directory: "NetSeries" },
        },
        {
          label: "NetForce",
          autogenerate: { directory: "NetForce" },
        },
        {
          label: "NetMap",
          autogenerate: { directory: "NetMap" },
        },
        {
          label: "NetScope",
          autogenerate: { directory: "NetScope" },
        },
      ],
    }),
  ],
});
