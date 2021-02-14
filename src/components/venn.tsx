import * as React from "react";
import StitchPattern from "./stitch-pattern";
import Circles from "./circles";

export interface VennProps {
  radius: number;
  stitchLength: number;
  stitchSpacing: number;
  horizontalPattern: Array<number | null>;
  verticalPattern: Array<number | null>;
  horizontalDashArray?: number[];
  verticalDashArray?: number[];
  hStitchColor: string;
  vStitchColor: string;
  idSuffix?: string | number;
}

export default function Venn({
  radius,
  stitchLength,
  stitchSpacing,
  horizontalPattern,
  verticalPattern,
  horizontalDashArray,
  verticalDashArray,
  hStitchColor,
  vStitchColor,
  idSuffix
}: VennProps) {
  const width = (radius * 3) / 2;
  const height = (width / 3) * 2;
  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <StitchPattern
          width={width}
          height={height}
          direction="horizontal"
          stitchLength={stitchLength}
          stitchSpacing={stitchSpacing}
          offsetPattern={horizontalPattern}
          stitchDashPattern={horizontalDashArray}
          stitchColor={hStitchColor}
          idSuffix={idSuffix}
        />
        <StitchPattern
          width={width}
          height={height}
          direction="vertical"
          stitchLength={stitchLength}
          stitchSpacing={stitchSpacing}
          offsetPattern={verticalPattern}
          stitchDashPattern={verticalDashArray}
          stitchColor={vStitchColor}
          idSuffix={idSuffix}
        />
      </defs>
      <Circles width={width} height={height} idSuffix={idSuffix} />
    </svg>
  );
}
