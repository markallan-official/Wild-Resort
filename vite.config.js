import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 8080,
        host: true,
    },
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                stay: 'stay.html',
                experience: 'experience.html',
                events: 'events.html',
            },
        },
    },
})
