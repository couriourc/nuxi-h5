// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: false},
    css: ["./assets/global.css"],
    modules: [
        '@unocss/nuxt',
        '@nuxtjs/emotion',
        '@nuxtjs/robots',
        '@nuxtjs/device',
        '@nuxtjs/i18n',
        'nuxt-appwrite',
        "@nuxt/content",
        "@nuxt/image"
    ],
    robots: [
        {
            UserAgent: '*',
        }
    ],

    appwrite: {
        endpoint: 'http://localhost',
        project: 'apps'
    }
});
