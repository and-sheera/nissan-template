// vite.config.js
import path, { resolve } from "node:path";
import url from "node:url";
import { defineConfig } from "file:///C:/Users/shirn/github/nissan-template/node_modules/vite/dist/node/index.js";
import viteBabel from "file:///C:/Users/shirn/github/nissan-template/node_modules/vite-plugin-babel/dist/index.mjs";
import viteMultipage from "file:///C:/Users/shirn/github/nissan-template/node_modules/vite-plugin-multipage/index.js";
import vitePug from "file:///C:/Users/shirn/github/nissan-template/node_modules/vite-plugin-pug-transformer/src/index.js";
import viteEslint from "file:///C:/Users/shirn/github/nissan-template/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteStylelint from "file:///C:/Users/shirn/github/nissan-template/node_modules/vite-plugin-stylelint/dist/index.mjs";
import viteSassGlob from "file:///C:/Users/shirn/github/nissan-template/node_modules/vite-plugin-sass-glob-import/dist/index.mjs";
import viteImagemin from "file:///C:/Users/shirn/github/nissan-template/node_modules/vite-plugin-imagemin/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/shirn/github/nissan-template/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/shirn/github/nissan-template/vite.config.js";
var root = resolve(path.dirname(url.fileURLToPath(__vite_injected_original_import_meta_url)), "src");
var outDir = resolve(path.dirname(url.fileURLToPath(__vite_injected_original_import_meta_url)), "dist");
var vite_config_default = defineConfig({
  root,
  base: "./",
  clearScreen: false,
  build: {
    outDir,
    emptyOutDir: true,
    chunkSizeWarningLimit: "1024",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          } else if (extType === "css") {
            extType = "styles";
          }
          return `${extType}/[name][extname]`;
        },
        chunkFileNames: "scripts/scripts.js"
      }
    }
  },
  plugins: [
    viteBabel({
      presets: ["@babel/preset-env"]
    }),
    viteMultipage({
      mimeCheck: true,
      open: "/",
      pageDir: "pages",
      purgeDir: "pages",
      removePageDirs: true,
      rootPage: "index.html"
    }),
    vitePug({
      pugOptions: {
        pretty: true
      }
    }),
    viteEslint({
      failOnError: false
    }),
    viteStylelint(),
    viteSassGlob(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 75
      },
      pngquant: {
        quality: [0.7, 0.7],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/images")],
      symbolId: "[name]",
      inject: "body-last",
      customDomId: "__svg__icons__dom__"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzaGlyblxcXFxnaXRodWJcXFxcbmlzc2FuLXRlbXBsYXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzaGlyblxcXFxnaXRodWJcXFxcbmlzc2FuLXRlbXBsYXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9zaGlybi9naXRodWIvbmlzc2FuLXRlbXBsYXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGgsIHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB1cmwgZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZpdGVCYWJlbCBmcm9tICd2aXRlLXBsdWdpbi1iYWJlbCdcbmltcG9ydCB2aXRlTXVsdGlwYWdlIGZyb20gJ3ZpdGUtcGx1Z2luLW11bHRpcGFnZSdcbmltcG9ydCB2aXRlUHVnIGZyb20gJ3ZpdGUtcGx1Z2luLXB1Zy10cmFuc2Zvcm1lcidcbmltcG9ydCB2aXRlRXNsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCdcbmltcG9ydCB2aXRlU3R5bGVsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLXN0eWxlbGludCdcbmltcG9ydCB2aXRlU2Fzc0dsb2IgZnJvbSAndml0ZS1wbHVnaW4tc2Fzcy1nbG9iLWltcG9ydCdcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2VtaW4nXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcblxuY29uc3Qgcm9vdCA9IHJlc29sdmUocGF0aC5kaXJuYW1lKHVybC5maWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpLCAnc3JjJylcbmNvbnN0IG91dERpciA9IHJlc29sdmUocGF0aC5kaXJuYW1lKHVybC5maWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpLCAnZGlzdCcpXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJvb3QsXG4gIGJhc2U6ICcuLycsXG4gIGNsZWFyU2NyZWVuOiBmYWxzZSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXIsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAnMTAyNCcsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgbGV0IGV4dFR5cGUgPSBhc3NldEluZm8ubmFtZS5zcGxpdCgnLicpWzFdXG4gICAgICAgICAgaWYgKC9wbmd8anBlP2d8c3ZnfGdpZnx0aWZmfGJtcHxpY28vaS50ZXN0KGV4dFR5cGUpKSB7XG4gICAgICAgICAgICBleHRUeXBlID0gJ2ltYWdlcydcbiAgICAgICAgICB9IGVsc2UgaWYgKGV4dFR5cGUgPT09ICdjc3MnKSB7XG4gICAgICAgICAgICBleHRUeXBlID0gJ3N0eWxlcydcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGAke2V4dFR5cGV9L1tuYW1lXVtleHRuYW1lXWBcbiAgICAgICAgfSxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdzY3JpcHRzL3NjcmlwdHMuanMnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdml0ZUJhYmVsKHtcbiAgICAgIHByZXNldHM6IFsnQGJhYmVsL3ByZXNldC1lbnYnXVxuICAgIH0pLFxuICAgIHZpdGVNdWx0aXBhZ2Uoe1xuICAgICAgbWltZUNoZWNrOiB0cnVlLFxuICAgICAgb3BlbjogJy8nLFxuICAgICAgcGFnZURpcjogJ3BhZ2VzJyxcbiAgICAgIHB1cmdlRGlyOiAncGFnZXMnLFxuICAgICAgcmVtb3ZlUGFnZURpcnM6IHRydWUsXG4gICAgICByb290UGFnZTogJ2luZGV4Lmh0bWwnXG4gICAgfSksXG4gICAgdml0ZVB1Zyh7XG4gICAgICBwdWdPcHRpb25zOiB7XG4gICAgICAgIHByZXR0eTogdHJ1ZVxuICAgICAgfVxuICAgIH0pLFxuICAgIHZpdGVFc2xpbnQoe1xuICAgICAgZmFpbE9uRXJyb3I6IGZhbHNlXG4gICAgfSksXG4gICAgdml0ZVN0eWxlbGludCgpLFxuICAgIHZpdGVTYXNzR2xvYigpLFxuICAgIHZpdGVJbWFnZW1pbih7XG4gICAgICBnaWZzaWNsZToge1xuICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcbiAgICAgICAgaW50ZXJsYWNlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBvcHRpcG5nOiB7XG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3XG4gICAgICB9LFxuICAgICAgbW96anBlZzoge1xuICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgfSxcbiAgICAgIHBuZ3F1YW50OiB7XG4gICAgICAgIHF1YWxpdHk6IFswLjcsIDAuN10sXG4gICAgICAgIHNwZWVkOiA0XG4gICAgICB9LFxuICAgICAgc3Znbzoge1xuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVZpZXdCb3gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncmVtb3ZlRW1wdHlBdHRycycsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSksXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvaW1hZ2VzJyldLFxuICAgICAgc3ltYm9sSWQ6ICdbbmFtZV0nLFxuICAgICAgaW5qZWN0OiAnYm9keS1sYXN0JyxcbiAgICAgIGN1c3RvbURvbUlkOiAnX19zdmdfX2ljb25zX19kb21fXydcbiAgICB9KVxuICBdXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUyxPQUFPLFFBQVEsZUFBZTtBQUN6VSxPQUFPLFNBQVM7QUFDaEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLGtCQUFrQjtBQUN6QixTQUFTLDRCQUE0QjtBQVZzSixJQUFNLDJDQUEyQztBQVk1TyxJQUFNLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxjQUFjLHdDQUFlLENBQUMsR0FBRyxLQUFLO0FBQzVFLElBQU0sU0FBUyxRQUFRLEtBQUssUUFBUSxJQUFJLGNBQWMsd0NBQWUsQ0FBQyxHQUFHLE1BQU07QUFFL0UsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUI7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQSxFQUNiLE9BQU87QUFBQSxJQUNMO0FBQUEsSUFDQSxhQUFhO0FBQUEsSUFDYix1QkFBdUI7QUFBQSxJQUN2QixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksVUFBVSxVQUFVLEtBQUssTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN6QyxjQUFJLGtDQUFrQyxLQUFLLE9BQU8sR0FBRztBQUNuRCxzQkFBVTtBQUFBLFVBQ1osV0FBVyxZQUFZLE9BQU87QUFDNUIsc0JBQVU7QUFBQSxVQUNaO0FBQ0EsaUJBQU8sR0FBRztBQUFBLFFBQ1o7QUFBQSxRQUNBLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxNQUNSLFNBQVMsQ0FBQyxtQkFBbUI7QUFBQSxJQUMvQixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixnQkFBZ0I7QUFBQSxNQUNoQixVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsUUFDVixRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLE1BQ1gsVUFBVTtBQUFBLFFBQ1IsbUJBQW1CO0FBQUEsUUFDbkIsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsU0FBUyxDQUFDLEtBQUssR0FBRztBQUFBLFFBQ2xCLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxxQkFBcUI7QUFBQSxNQUNuQixVQUFVLENBQUMsUUFBUSxRQUFRLElBQUksR0FBRyxZQUFZLENBQUM7QUFBQSxNQUMvQyxVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
