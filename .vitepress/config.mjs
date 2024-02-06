import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "ShadowHunter22's Mods",
    description: "Information about the mods created by ShadowHunter22.",
    base: "/mod-wiki/",

    head: [
        ['link', { rel: "icon", href: "./favicon.ico"}],
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Mods", link: "/mods/mods" },
            { text: "APIs", link: "/apis/apis" },
        ],

        logo: "/icon.png",

        sidebar: [
            {
                text: "Mods",
                link: "/mods/mods",
                items: [
                    { text: "Armor Indicator", link: "/mods/armor-indicator" },
                    {
                        text: "Simple Health Indicator",
                        link: "/mods/simple-health-indicator",
                    },
                    {
                        text: "Realistic Campfires",
                        link: "/mods/realistic-campfires",
                    },
                ],
            },
            {
                text: "APIs",
                link: "/apis/apis",
                items: [],
            },
        ],

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/shadowhunt22/mod-wiki",
            },
            { icon: "discord", link: "https://discord.com/invite/8SEGGMWmJb" },
        ],
    },
});
