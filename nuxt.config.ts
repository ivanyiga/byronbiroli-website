// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'vercel'
  },
  routeRules: {
    '/': { prerender: true }
  },

  app: {
    head: {
      title: 'Byron Biroli — Founder, Sendu',
      meta: [
        { name: 'description', content: "Byron Biroli, Founder and Managing Director of Sendu, building embedded banking infrastructure for Uganda's mobile money ecosystem. Twenty years delivering technology infrastructure across UK telecoms, international creative technology, and public cultural programmes." },
        
        // Open Graph
        { property: 'og:type', content: 'profile' },
        { property: 'og:title', content: 'Byron Biroli — Founder, Sendu' },
        { property: 'og:description', content: "Founder and Managing Director of Sendu. Embedded banking infrastructure for Uganda's mobile money ecosystem." },
        { property: 'og:url', content: 'https://byronbiroli.com/' },
        { property: 'og:image', content: 'https://byronbiroli.com/og.png' },
        { property: 'profile:first_name', content: 'Byron' },
        { property: 'profile:last_name', content: 'Biroli' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Byron Biroli — Founder, Sendu' },
        { name: 'twitter:description', content: "Founder and Managing Director of Sendu. Embedded banking infrastructure for Uganda's mobile money ecosystem." },
        { name: 'twitter:image', content: 'https://byronbiroli.com/og.png' }
      ],
      link: [
        { rel: 'canonical', href: 'https://byronbiroli.com/' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Byron Biroli",
            "url": "https://byronbiroli.com",
            "jobTitle": "Founder and Managing Director",
            "worksFor": {
              "@type": "Organization",
              "name": "Sendu",
              "url": "https://sendu.ug"
            },
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Goldsmiths, University of London"
            },
            "nationality": [
              {"@type": "Country", "name": "United Kingdom"},
              {"@type": "Country", "name": "Uganda"}
            ],
            "sameAs": [
              "https://www.linkedin.com/in/byron-biroli",
              "https://sendu.ug"
            ]
          })
        }
      ]
    }
  },

  css: [
    '~/assets/css/tokens.css'
  ],

  compatibilityDate: '2024-04-03'
})
