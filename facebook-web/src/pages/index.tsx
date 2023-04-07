import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import {
  MdAdd,
  MdNotifications,
  MdOutlineClose,
  MdOutlineMoreHoriz,
  MdSearch,
} from "react-icons/md";

export default function Home() {
  const [user, _setUser] = useState({
    firstName: "Jod",
    lastName: "Oreta",
  });

  const [feed, _setFeed] = useState({
    user: "Maya",
    time: "10h",
    caption: "It's everything, and a bank!",
    interactions: {
      reactions: "12K",
      comments: 408,
      shares: 772,
    },
  });

  return (
    <>
      <Head>
        <title>Facebook</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/facebook-icon.png" />
      </Head>
      <main className="bg-black overflow-y-scroll">
        <section
          id="header"
          className="flex flex-row justify-between py-2 bg-dark-section-color border-b border-b-gray-700"
        >
          <div id="left-header" className="flex flex-row">
            <div className="flex flex-row">
              <div
                id="facebook-icon"
                className="flex items-center justify-center rounded-full ml-4 mr-1"
              >
                <Image
                  src="/facebook-icon.png"
                  width="40"
                  height="40"
                  alt="facebook-icon"
                />
              </div>
              <div
                id="search-icon"
                className="flex items-center justify-center w-10 h-10 rounded-full mr-2 ml-1 bg-[#393A3B] text-gray-400 text-2xl"
              >
                <MdSearch />
              </div>
            </div>
            <div
              id="menu-icon"
              className="flex items-center justify-center w-10 h-10 ml-3 text-gray-300 text-3xl"
            >
              <AiOutlineMenu />
            </div>
          </div>
          <div id="right-header" className="flex flex-row mx-3">
            <div
              id="create-btn"
              className="flex items-center justify-center w-10 h-10 rounded-full ml-2 bg-[#393A3B] text-gray-300 text-2xl"
            >
              <MdAdd />
            </div>
            <div
              id="message-btn"
              className="flex items-center justify-center w-10 h-10 rounded-full ml-2 bg-[#393A3B] text-white"
            >
              <Image
                src="/facebook-messenger.png"
                width="20"
                height="20"
                alt="facebook-messenger-icon"
              ></Image>
            </div>
            <div
              id="notification-btn"
              className="flex items-center justify-center w-10 h-10 rounded-full ml-2 bg-[#393A3B] text-gray-300 text-2xl"
            >
              <MdNotifications />
            </div>
            <div
              id="profile-btn"
              className="flex items-center justify-center w-10 h-10 rounded-full ml-2 bg-red-500 text-white"
            >
              P
            </div>
          </div>
        </section>
        <section id="body" className="mt-6 min-w-full">
          <section
            id="highlights"
            className="flex flex-col h-[293px] bg-dark-section-color"
          >
            {/* Stories, reels and rooms */}
            <div
              id="highlight-header"
              className="flex font-medium border-b border-b-gray-700 px-3 py-5"
            >
              <button
                id="stories"
                className="flex flex-1 flex-row justify-center text-gray-400"
              >
                <div id="stories-icon" className="w-6 h-6">
                  S
                </div>
                <p id="stories-text">Stories</p>
              </button>
              <button
                id="reels"
                className="flex flex-1 justify-center text-gray-400"
              >
                <div id="reels-icon" className="w-6 h-6">
                  R
                </div>
                <p id="reels-text">Reels</p>
              </button>
              <button
                id="rooms"
                className="flex flex-1 justify-center text-gray-400"
              >
                <div id="rooms-icon" className="w-6 h-6">
                  R
                </div>
                <p id="rooms-text">Rooms</p>
              </button>
            </div>
            <div
              id="highlights"
              className="flex flex-1 flex-row gap-2 min-h-max my-3 px-4 overflow-x-scroll no-scrollbar"
            >
              {/* highlights */}
              <div
                id="first-highlight"
                className="basis-28 shrink-0 rounded-md bg-white"
              ></div>
              <div className="basis-28 shrink-0 rounded-md bg-white"></div>
              <div className="basis-28 shrink-0 rounded-md bg-white"></div>
              <div className="basis-28 shrink-0 rounded-md bg-white"></div>
            </div>
          </section>
          <section id="create-feed" className="bg-dark-section-color p-3 mt-5">
            <div id="create-feed-content">
              <div className="flex">
                <div
                  id="content-profile-btn"
                  className="flex items-center justify-center w-10 h-10 rounded-full ml-2 bg-red-500 text-white"
                >
                  P
                </div>
                <input
                  placeholder={`What's on your mind, ${user.firstName}?`}
                  className="flex flex-1 bg-[#353535] rounded-3xl ml-2 px-3 placeholder:text-gray-400 placeholder:font-light"
                ></input>
              </div>
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
          </section>
          <section id="feeds" className="mt-5">
            <div id="feed-1" className="h-[800px] bg-dark-section-color">
              <div id="feed-header" className="flex justify-between p-2">
                <div id="feed-header-left" className="flex items-center">
                  <div
                    id="feed-user-profile"
                    className="flex items-center justify-center w-10 h-10 rounded-full m-2 bg-black text-lime-500"
                  >
                    M
                  </div>
                  <div>
                    <p className="text-gray-200">{feed.user}</p>
                    <span>
                      <p className="text-gray-400 text-xs">{feed.time}</p>
                    </span>
                  </div>
                </div>
                <div id="feed-header-right" className="flex">
                  <button type="button" className="text-gray-300 text-3xl m-1">
                    <MdOutlineMoreHoriz />
                  </button>
                  <button type="button" className="text-gray-300 text-3xl m-1">
                    <MdOutlineClose />
                  </button>
                </div>
              </div>
              <div id="feed-content">
                <p id="feed-caption" className="px-4 text-gray-300">
                  {feed.caption}
                </p>
                <div className="h-[500px] mt-2 bg-white"></div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
