import { createPortal } from "react-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  title: string | undefined;
}

const LoadingScreen = (props: Props) => {
  const title = props.title || "Loading";

  return createPortal(
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center text-gray-200">
      <div className="text-3xl animate-spin">
        <AiOutlineLoading3Quarters />
      </div>
      <p className="font-light mt-1 text-xl">{title}</p>
    </div>,
    document.getElementById("main") as Element
  );
};

export default LoadingScreen;
