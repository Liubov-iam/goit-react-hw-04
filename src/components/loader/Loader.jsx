import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <ThreeDots
      visible={true}
      height="40"
      width="40"
      color="black"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
    />
  );
}

export default Loader;