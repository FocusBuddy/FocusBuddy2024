import { MdChat } from "react-icons/md";
import { Tooltip } from "flowbite-react";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
// import { IoMdChatbubbles } from "react-icons/io";
import ChatFeature from "./ChatFeature";
import LauchTestChatFeature from "../Lauch-Test-Session/LauchTestChatFeature";
import { useState,useContext } from "react";
import { myContext } from "../../utils/PrivateRoutes";

export default function ChatControls({mainToken,testToken, availableEvents}) {
  const [newMsgCame,setNewMsgCame] = useState(false);
  const [newMsgEvent,setNewMsgEvent] = useState(null);
  const { userProfile } = useContext(myContext);
  
  useEffect(() => {
    initFlowbite();
  }, []);

  function handleDrawerOpen(){
    setNewMsgCame(false);
  }

  return (
    <div style={{ zIndex: 4000 }}>
      <Tooltip id="videoSDKchatcontrol" content="Chat" className="bg-[#323B44]">
        <button
          data-drawer-target="video-chat-drawer"
          data-drawer-show="video-chat-drawer"
          data-drawer-placement="right"
          aria-controls="video-chat-drawer"
          type="button"
          onClick={handleDrawerOpen}
          className="relative p-[0.6rem] text-white focus:bg-[#005FFF] hover:bg-[#323B44] rounded-full"

        >
          {(newMsgEvent?.user?.name !== userProfile.displayName && newMsgCame) ? <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-700"></div> : null}
          <MdChat className="text-2xl" />
        </button>
      </Tooltip>

      <div
        id="video-chat-drawer"
        className="fixed top-0 right-0 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-[#292D3E] w-full md:w-1/2 lg:w-1/3"
        tabIndex="-1"
        aria-labelledby="video-chat-drawer-label"
        style={{ zIndex: 4000 }}
      >
        {/* <h5
          id="drawer-right-label"
          className="inline-flex gap-4 items-center mb-4 text-lg font-semibold text-gray-500"
        >
          <IoMdChatbubbles/>
          Chat
        </h5> */}
        <button
          type="button"
          style={{zIndex: 4000}}
          data-drawer-hide="video-chat-drawer"
          aria-controls="video-chat-drawer"
          className="text-white bg-[#151D2A] rounded-md text-sm w-8 h-8 absolute top-6 end-6 inline-flex items-center justify-center"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        {
          availableEvents === ''
          ?
          <LauchTestChatFeature mainToken={mainToken} testToken={testToken}/>
          :
          <ChatFeature setNewMsgCame={setNewMsgCame} setNewMsgEvent={setNewMsgEvent} token={mainToken} availableEvents={availableEvents}/>
        }
      </div>
    </div>
  );
}
