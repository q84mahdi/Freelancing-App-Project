import { ThreeDots } from "react-loader-spinner";

function Loader({ width = 50, height = 40 }) {
  return (
    <ThreeDots
      width={width}
      height={height}
      radius={9}
      color="rgb(var(--color-primary-900))"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}
export default Loader;
