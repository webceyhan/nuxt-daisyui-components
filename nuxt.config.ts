// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    components: [
        { path: '~/components', pathPrefix: false },
        { path: '~/components/ui', pathPrefix: false, prefix: 'ui' },
    ],
});
