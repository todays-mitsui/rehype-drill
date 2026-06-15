import { useState } from "react";
import { HtmlBlock } from "./HtmlBlock";

const SAMPLE = `<section class="card">
  <h2>rehype demo</h2>
  <p>左の <code>textarea</code> を編集すると、右に React 要素として描画されます。</p>
  <p>許可タグ: <span className="tag">section</span> / <span className="tag">div</span> / <span className="tag">span</span></p>
  <p>サニタイズの確認 → <a href="https://example.com">安全なリンク</a></p>
  <p>除去される例 → <script>alert('xss')</script><img src="x" onerror="alert(1)"></p>
</section>`;

export function App() {
  const [html, setHtml] = useState(SAMPLE);

  return (
    <div className="app">
      <textarea
        className="editor"
        value={html}
        onChange={(e) => setHtml(e.target.value)}
        spellCheck={false}
        autoFocus
      />
      <div className="preview">
        <HtmlBlock html={html} />
      </div>
    </div>
  );
}
