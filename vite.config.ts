import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    server: {
        allowedHosts: [
            'rnghz-2407-1400-aa0d-3738-b08d-17ff-fe19-c9ac.a.free.pinggy.link'
            // 'rnyvn-2407-1400-aa0d-3738-2038-5bff-fe22-aa5e.a.free.pinggy.link',
            // Add any additional hosts if needed
        ]
    }
})

