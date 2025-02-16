import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: "/AI-Code-Reviewer/",
	publicDir: "public",
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
			},
		},
		outDir: "dist", 
		emptyOutDir: true, 
	},
});
