import tailwindIntegration from '@astrojs/tailwind';
import { defineConfig, sharpImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    experimental: {
        assets: true
    },
    image: {
        service: sharpImageService()
    },
    srcDir: "example",
    integrations: [tailwindIntegration()]
});
