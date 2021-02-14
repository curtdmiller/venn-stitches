import "./styles.css";
import { makeStyles } from "@material-ui/styles";
import Venn, { VennProps } from "./components/venn";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#333333",
    display: "flex",
    justifyContent: "center"
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 400px)",
    gridAutoRows: "267px",
    gridGap: "20px",
    margin: 20
  },
  "@media screen and (max-width: 880px)": {
    gridContainer: {
      gridTemplateColumns: "400px"
    }
  },
  gridCell: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

const diagrams: VennProps[] = [
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0],
    verticalPattern: [0],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0],
    verticalPattern: [0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 1],
    verticalPattern: [0],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 1],
    verticalPattern: [0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 1],
    verticalPattern: [1, 0],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 1],
    verticalPattern: [0, 0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 1],
    verticalPattern: [0, 0, 0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 0, 1],
    verticalPattern: [0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 0, 0, 1],
    verticalPattern: [0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 0, 1],
    verticalPattern: [0, 0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 0, 0, 1],
    verticalPattern: [0, 0, 0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 0, 0, 0, 1],
    verticalPattern: [0, 0, 0, 0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 0, 0, 0, 1],
    verticalPattern: [0, 0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0],
    verticalPattern: [0],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 1],
    verticalPattern: [0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0],
    verticalPattern: [0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0.5, 1],
    verticalPattern: [0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0.5, 1],
    verticalPattern: [0, 0.5, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0, 1],
    verticalPattern: [0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0, 1],
    verticalPattern: [0, 0, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0.5],
    verticalPattern: [0, 0.5],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0.5],
    verticalPattern: [0.5, 0],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0.5, 1, 0.5, 0],
    verticalPattern: [0, 0.5],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0.5, 1, 0.5],
    verticalPattern: [0, 0.5, 1, 0.5],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, null, 1, null],
    verticalPattern: [0, null, 1, null],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, null, 1],
    verticalPattern: [0, null, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 1],
    verticalPattern: [0, null, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0],
    verticalPattern: [0],
    horizontalDashArray: [2, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0],
    verticalPattern: [0],
    horizontalDashArray: [2, 1],
    verticalDashArray: [2, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 1],
    verticalPattern: [0],
    horizontalDashArray: [2, 1],
    verticalDashArray: [2, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 1],
    verticalPattern: [0, 1],
    horizontalDashArray: [2, 1],
    verticalDashArray: [2, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 1],
    verticalPattern: [0, 1],
    horizontalDashArray: [2, 1],
    verticalDashArray: [2, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 20,
    stitchSpacing: 20,
    horizontalPattern: [0, 0, 1],
    verticalPattern: [0, 0, 1],
    horizontalDashArray: [2, 1],
    verticalDashArray: [2, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0.5, 1],
    verticalPattern: [0, 0.5, 1],
    horizontalDashArray: [2, 1],
    verticalDashArray: [2, 1],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0.5, 1],
    verticalPattern: [0, 0.5, 1],
    horizontalDashArray: [1, 0.5],
    verticalDashArray: [1, 0.5],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0.5, 1],
    verticalPattern: [0, 0.5, 1],
    horizontalDashArray: [1, 0.5],
    verticalDashArray: [2, 0.5],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0.5, 1],
    verticalPattern: [0, 0.5, 1],
    horizontalDashArray: [2, 0.5],
    verticalDashArray: [2, 0.5],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  },
  {
    radius: 800,
    stitchLength: 40,
    stitchSpacing: 20,
    horizontalPattern: [0, 0.5, 1],
    verticalPattern: [0, 0.5, 1],
    horizontalDashArray: [2, 0.5, 1, 0.5],
    verticalDashArray: [2, 0.5, 1, 0.5],
    hStitchColor: "#eee",
    vStitchColor: "#eee"
  }
];

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.gridContainer}>
        {diagrams.map((diagram, i) => (
          <div className={classes.gridCell}>
            <Venn {...diagram} key={i} idSuffix={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
