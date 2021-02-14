/* eslint-disable eqeqeq */
import * as React from "react";

interface StitchPatternProps {
  /** svg width */
  width: number;
  /** svg height */
  height: number;
  /** direction of stitch */
  direction: "vertical" | "horizontal";
  /** length of each stitch */
  stitchLength: number;
  /** spacing between each row of stitches */
  stitchSpacing: number;
  /** offset of the dash array per row, in multiples of the stitchLength */
  offsetPattern: Array<number | null>;
  /** pattern applied to stroke-dasharray, specify in multiples of stitchLength */
  stitchDashPattern?: number[];
  /** 'thread' color */
  stitchColor: string;
  idSuffix?: string | number;
}

function StitchPattern({
  width,
  height,
  direction,
  stitchLength,
  stitchSpacing,
  offsetPattern,
  stitchDashPattern,
  stitchColor,
  idSuffix
}: StitchPatternProps) {
  const dashArray = stitchDashPattern
    ? stitchDashPattern.map((dash) => dash * stitchLength).join(" ")
    : `${stitchLength} ${stitchLength}`;

  return (
    <React.Fragment>
      {direction == "horizontal" ? (
        <line
          id={`h-stitch-${idSuffix}`}
          x1="0"
          x2="100%"
          y1="1"
          y2="1"
          stroke={stitchColor}
          stroke-width="2"
          stroke-dasharray={dashArray}
          stroke-linecap="round"
        />
      ) : (
        <line
          id={`v-stitch-${idSuffix}`}
          x1="1"
          x2="1"
          y1="0"
          y2="100%"
          stroke={stitchColor}
          stroke-width="2"
          stroke-dasharray={dashArray}
          stroke-linecap="round"
        />
      )}
      <pattern
        x={direction == "horizontal" ? 1 : 0}
        y={direction == "vertical" ? 1 : 0}
        id={`${direction}-${idSuffix}`}
        width={
          direction == "horizontal"
            ? (width / 3) * 2
            : stitchSpacing * offsetPattern.length
        }
        height={
          direction == "horizontal"
            ? stitchSpacing * offsetPattern.length
            : height
        }
        patternUnits="userSpaceOnUse"
      >
        {offsetPattern.map((pValue, i) => {
          if (pValue == null) {
            return null;
          } else {
            if (direction == "horizontal") {
              return (
                <use
                  href={`#h-stitch-${idSuffix}`}
                  x={pValue * stitchLength}
                  y={i * stitchSpacing}
                />
              );
            } else {
              return (
                <use
                  href={`#v-stitch-${idSuffix}`}
                  x={i * stitchSpacing}
                  y={pValue * stitchLength}
                />
              );
            }
          }
        })}
      </pattern>
    </React.Fragment>
  );
}

export default StitchPattern;
