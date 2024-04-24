import toast, { Toaster } from "react-hot-toast";

function ErrorMessage({ error }) {
  toast.error(error, { position: "top-right" });
  return <Toaster />;
}
export default ErrorMessage;