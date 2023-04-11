import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import LoadingScreen from "../../shared/LoadingScreen";
import ProfileIcon from "../../shared/ProfileIcon";

interface Props {
  firstName: string;
  lastName: string;
}

interface NewPostBody {
  userId: string;
  caption: string;
}

const TEST_USER_ID = "16cf9d5c-e96a-4a5b-a503-c332d87f14f0";

const CreateFeedContent = (props: Props) => {
  const [openCreateFeed, setOpenCreateFeed] = useState(false);
  const [textAreaFontSize, setTextAreaFontSize] = useState("24px");
  const [textAreaContent, setTextAreaContent] = useState("");

  const onPostMutation = useMutation({
    mutationFn: (newPostBody: NewPostBody) => {
      return axios.post(
        process.env.NEXT_PUBLIC_FEED_SERVICE as string,
        newPostBody
      );
    },
  });

  useEffect(() => {
    setOpenCreateFeed(false);
  }, [onPostMutation.isSuccess]);

  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const textarea = event.currentTarget;
    setTextAreaContent(textarea.value);

    textarea.style.fontSize = "24px";
    if (textarea.scrollHeight > textarea.offsetHeight) {
      textarea.style.fontSize = "14px";
      setTextAreaFontSize("14px");
    }
  };

  const handleOnPost = () => {
    onPostMutation.mutate({
      userId: TEST_USER_ID,
      caption: textAreaContent,
    });
  };

  return (
    <div id="create-feed-content">
      <div className="flex">
        <div
          id="content-profile-btn"
          className="flex items-center justify-center w-10 h-10 rounded-full ml-2 bg-red-500 text-white"
        >
          P
        </div>
        <input
          placeholder={`What's on your mind, ${props.firstName}?`}
          className="flex flex-1 bg-[#353535] rounded-3xl ml-2 px-3 placeholder:text-gray-400 placeholder:font-light cursor-pointer"
          onClick={() => setOpenCreateFeed(true)}
        ></input>
      </div>
      {openCreateFeed ? (
        <div
          id="create-feed-content-modal"
          className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative flex flex-col left-0 top-1/4 w-full h-1/2 bg-dark-section-color">
            <div
              id="create-feed-content-modal__header"
              className="relative text-center p-4 border-b border-gray-700"
            >
              <p className="text-xl text-gray-200 font-semibold">Create post</p>
              <button
                type="button"
                onClick={() => setOpenCreateFeed(false)}
                className="absolute right-1 top-2 text-3xl text-gray-400 m-1 p-1 bg-dark-icon-color rounded-full"
              >
                <MdOutlineClose />
              </button>
            </div>
            <div
              id="create-feed-content-modal__body"
              className="p-2 py-3 flex-1"
            >
              <div className="flex items-center">
                <ProfileIcon />
                <div className="mx-2">
                  <p className="text-gray-200">{`${props.firstName} ${props.lastName}`}</p>
                  <div className="text-gray-200 text-sm">Friends</div>
                </div>
              </div>
              <textarea
                onInput={(e) => handleInput(e)}
                placeholder={`What's on your mind, ${props.firstName}?`}
                className="p-2 w-full bg-inherit text-gray-200 placeholder:text-2xl placeholder:font-light h-full focus:outline-none"
                style={{ maxHeight: "200px", fontSize: textAreaFontSize }}
              ></textarea>
            </div>
            <div id="create-feed-content-modal__footer" className="flex p-4">
              <button
                type="button"
                disabled={!textAreaContent || onPostMutation.isLoading}
                onClick={handleOnPost}
                className="bt btn-primary flex-1 p-2 rounded-md bg-blue-500 font-semibold hover:bg-blue-400 disabled:btn-disabled disabled:bg-dark-disable-btn-color disabled:text-gray-500 disabled:cursor-not-allowed"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {onPostMutation.isLoading ? <LoadingScreen title="Posting" /> : null}
      <div className="flex mt-3 border-t border-t-gray-700 text-gray-400 px-4">
        <div
          id="create-feed-live-video"
          className="flex flex-1 items-center p-2"
        >
          <div
            id="create-feed-live-video-icon"
            className="flex items-center justify-center w-10 h-10 rounded-full mx-2 bg-red-500 text-white"
          >
            L
          </div>
          <p className="font-medium">Live video</p>
        </div>
        <div
          id="create-feed-photo-video"
          className="flex flex-1 items-center p-2"
        >
          <div
            id="create-feed-photo-video-icon"
            className="flex items-center justify-center w-10 h-10 rounded-full mx-2 bg-green-500 text-white"
          >
            P
          </div>
          <p className="font-medium">Photo/video</p>
        </div>
      </div>
    </div>
  );
};

export default CreateFeedContent;
