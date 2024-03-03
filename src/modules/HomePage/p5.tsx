import React from "react";
import { Sketch } from "react-p5";

const Sketch = () => {
  // p5.jsの描画ロジックを記述する関数
  const sketch = (p) => {
    // setup関数: 初期化処理
    p.setup = () => {
      p.createCanvas(400, 400);
    };

    // draw関数: フレームごとの描画処理
    p.draw = () => {
      p.background(220);
      p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
  };

  // useP5フックを使用してp5.jsスケッチをレンダリング
  const options = {
    global: true, // trueの場合、グローバルモードで描画されます
  };
  const p5Ref = useP5(sketch, options);

  return (
    <div>
      {/* p5.jsスケッチが描画されるコンテナ */}
      <div ref={p5Ref} />
    </div>
  );
};

export default Sketch;
