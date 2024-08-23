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
            { text: "Cloud Dash", link: "/mods/cloud-dash/" },
            { text: "Ore Extraction", link: "/mods/ore-extraction/" },
            { text: "Ender Eyes", link: "/mods/ender-eyes/" },
        ],
    },
];

const allHiddenCategoriesSection = [
    {
        text: "Fabric Mods",
        items: [
            { text: "Compound Bow", link: "/hidden/mods/compound-bow/" },
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

    head: [['link', { rel: 'icon', href: '/mod-wiki/favicon.ico' }]],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Mods", link: "/mods/" },
            { text: "APIs", link: "/apis/" },
        ],

        footer: {
            copyright: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International 2024 © ShadowHunter22"
        },

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
                        { text: "Mod Information", link: "/mods/armor-indicator/" },
                        { text: "Configuration", link: "/mods/armor-indicator/configuration" },
                    ],
                },
            ],

            "/mods/simple-health-indicator/": [
                ...allModsCategoriesSection,
                {
                    text: "Simple Health Indicator",
                    items: [
                        { text: "Mod Information", link: "/mods/simple-health-indicator/" },
                        { text: "Configuration", link: "/mods/simple-health-indicator/configuration" },
                    ],
                },
            ],

            "/mods/realistic-campfires/": [
                ...allModsCategoriesSection,
                {
                    text: "Realistic Campfires",
                    items: [
                        { text: "Mod Information", link: "/mods/realistic-campfires/" },
                    ],
                },
            ],

            "/mods/cloud-dash/": [
                ...allModsCategoriesSection,
                {
                    text: "Cloud Dash",
                    items: [
                        { text: "Mod Information", link: "/mods/cloud-dash/" },
                        { text: "Configuration", link: "/mods/cloud-dash/configuration" },
                    ],
                },
            ],

            "/mods/ore-extraction/": [
                ...allModsCategoriesSection,
                {
                    text: "Ore Extraction",
                    items: [
                        { text: "Mod Information", link: "/mods/ore-extraction/" },
                    ],
                },
            ],

            "/mods/ender-eyes/": [
                ...allModsCategoriesSection,
                {
                    text: "Ender Eyes",
                    items: [
                        { text: "Mod Information", link: "/mods/ender-eyes/" },
                        { text: "Configuration", link: "/mods/ender-eyes/configuration" },
                    ],
                },
            ],

            "/hidden/mods/": [
                ...allHiddenCategoriesSection,
                {
                    text: "Getting Started",
                    items: [
                        // links to each header
                    ],
                },
            ],

            "/hidden/mods/compound-bow/": [
                ...allHiddenCategoriesSection,
                {
                    text: "Compound Bow",
                    items: [
                        { text: "Mod Information", link: "/hidden/mods/compound-bow/" },
                        { text: "Recipes", link: "/hidden/mods/compound-bow/recipes" },
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
                        { text: "API Information", link: "/apis/alternate-hudrenderercallback/"}
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
