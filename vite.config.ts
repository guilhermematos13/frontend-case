import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@api": path.resolve(__dirname, "./src/api"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@routes": path.resolve(__dirname, "./src/routes"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@styles": path.resolve(__dirname, "./src/styles"),
		},
	},
	plugins: [react()],
	server: {
		port: 3000,
	},
})
