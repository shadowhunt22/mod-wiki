import { defineConfig } from "vitepress";

const allModsCategoriesSection = [
    {
        text: "Fabric Mods",
        items: [
            { text: "Getting Started", link: "/mods/" },
            { text: "Armor Indicator", link: "/mods/armor-indicator/" },
            {
                text: "Simple Health Indicator",
                link: "/mods/simple-health-indicator/",
            },
            { text: "Realistic Campfires", link: "/mods/realistic-campfires/" },
        ],
    },
];

const allApisCategoriesSection = [
    {
        text: "APIs",
        items: [
            { text: "Getting Started", link: "/apis/" },
            { text: "Alternate HudRendererCallback", link: "/apis/alternate-hudrenderercallback/" },
        ],
    },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "ShadowHunter22's Mods",
    description: "Information about the mods created by ShadowHunter22.",
    base: "/mod-wiki/",

    head: [["link", { rel: "icon", href: "./favicon.ico" }]],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Mods", link: "/mods/" },
            { text: "APIs", link: "/apis/" },
        ],

        logo: "/icon.png",

        sidebar: {
            /* * * * * * * * * * * * *
            *          Mods          *
            * * * * * * * * * * * * */
            
            "/mods/": [
                ...allModsCategoriesSection,
                {
                    text: "Getting Started",
                    items: [
                        // links to each header
                    ],
                },
            ],

            "/mods/armor-indicator/": [
                ...allModsCategoriesSection,
                {
                    text: "Armor Indicator",
                    items: [
                        // links to each header
                    ],
                },
            ],

            "/mods/simple-health-indicator/": [
                ...allModsCategoriesSection,
                {
                    text: "Simple Health Indicator",
                    items: [
                        // links to each header
                    ],
                },
            ],

            "/mods/realistic-campfires/": [
                ...allModsCategoriesSection,
                {
                    text: "Realistic Campfires",
                    items: [
                        // links to each header
                    ],
                },
            ],

            /* * * * * * * * * * * * *
            *          APIs          *
            * * * * * * * * * * * * */

            "/apis/": [
                ...allApisCategoriesSection,
                {
                    text: "Getting Started",
                    items: [
                        // links to each header
                    ],
                },
            ],

            "/apis/alternate-hudrenderercallback/": [
                ...allApisCategoriesSection,
                {
                    text: "Alternate HudRendererCallback",
                    items: [
                        // links to each header
                    ],
                },
            ],
        },

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/shadowhunt22/mod-wiki",
            },
            { icon: "discord", link: "https://discord.com/invite/8SEGGMWmJb" },
        ],
    },
});
