import * as React from "react";

interface CircleProps {
  width: number;
  height: number;
  idSuffix?: string | number;
}

export default function Circles({ width, height, idSuffix }: CircleProps) {
  return (
    <React.Fragment>
      <g className="horizontal">
        <circle
          cx={height / 2}
          cy={height / 2}
          r={height / 2}
          fill={`url(#horizontal-${idSuffix})`}
          transform-origin={`${height / 2} ${height / 2}`}
        />
      </g>
      <g className="vertical" transform={`translate(${width / 3}, 0)`}>
        <circle
          cx={height / 2}
          cy={height / 2}
          r={height / 2}
          fill={`url(#vertical-${idSuffix})`}
          transform-origin={`${height / 2} ${height / 2}`}
        />
      </g>
    </React.Fragment>
  );
}
