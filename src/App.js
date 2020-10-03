import React, { useEffect, useState } from 'react';
import { calcUnits, calcSize } from './utils/sizeCalcs';
import GameWindow from './components/GameWindow';
function App() {
  const [config, setConfig] = useState({
    w: 100,
    h: 100,
    snakeSize: 10,
    wUnit: 10,
    hUnit: 10,
  });

  useEffect(() => {
    // calculate new grid width and height based on snake size.
    // this will ensure that the grid borders are in the right place.
    const widthRest = config.w % config.snakeSize;
    const heightRest = config.h % config.snakeSize;
    let w = config.w;
    let h = config.h;
    if (!widthRest == 0) {
      w = calcSize({
        snakeSize: config.snakeSize,
        sizeRest: widthRest,
        value: w,
      });
      console.log(w);
    }

    if (!heightRest == 0) {
      h = calcSize({
        snakeSize: config.snakeSize,
        sizeRest: heightRest,
        value: h,
      });
      console.log(h);
    }
    const { wUnit, hUnit } = calcUnits({ w, h, snakeSize: config.snakeSize });
    setConfig((prev) => ({ ...prev, h, w, wUnit, hUnit }));
  }, [config.snakeSize]);
  const handleConfig = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => {
      return { ...prev, [name]: parseInt(value) };
    });
  };
  return (
    <div className="App">
      <p>
        wUnit {config.wUnit} - hUnit {config.hUnit}
      </p>
      <label htmlFor="">
        Grid width
        <input
          type="number"
          name="w"
          value={config.w}
          onChange={handleConfig}
        />
      </label>
      <label htmlFor="">
        Grid Height
        <input
          type="number"
          name="h"
          value={config.h}
          onChange={handleConfig}
        />
      </label>
      <label htmlFor="">
        snakeSize
        <input
          type="number"
          name="snakeSize"
          value={config.snakeSize}
          onChange={handleConfig}
        />
      </label>

      <GameWindow w={config.w} h={config.h} snakeSize={config.snakeSize} />
    </div>
  );
}

export default App;
