import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages のプロジェクトページは /<repo>/ 配下で配信されるため base を合わせる。
// リポジトリ名が変わる場合はここを変更する。
export default defineConfig({
  base: "/rehype-drill/",
  plugins: [react()],
});
