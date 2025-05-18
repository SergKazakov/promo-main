import react from "@vitejs/plugin-react"
import postcssCustomMedia from "postcss-custom-media"
import postcssNested from "postcss-nested"
import { defineConfig } from "vite"
import { patchCssModules } from "vite-css-modules"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssCustomMedia({
          importFrom: [
            {
              customMedia: {
                "--desktop": "(width >= 1025px)",
                "--noDesktop": "(width <= 1024px)",
                "--tablet": "(1024px >= width >= 768px)",
                "--noMobile": "(width >= 768px)",
                "--mobile": "(width <= 767px)",
              },
            },
          ],
        }),
        postcssNested(),
      ],
    },
  },
  define: { global: {} },
  plugins: [patchCssModules(), react(), svgr()],
})
