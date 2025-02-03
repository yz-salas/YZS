import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': '/src/assets',
		},
	},
	base: '/YZS/', // Asegúrate de que coincide con el nombre del repo
	build: {
		outDir: 'dist',
	},
});
