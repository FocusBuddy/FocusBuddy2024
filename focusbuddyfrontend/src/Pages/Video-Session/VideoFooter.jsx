import {
  CancelCallButton,
  SpeakingWhileMutedNotification,
  ToggleAudioPublishingButton,
  ToggleVideoPublishingButton,
  ScreenShareButton,
  ReactionsButton,
  useCallStateHooks
} from "@stream-io/video-react-sdk";
import ChatControl from "./ChatControl";
import { useNavigate } from "react-router-dom";

export default function VideoFooter({mainToken,testToken,availableEvents,call}) {
  const navigate = useNavigate();

  async function handleCallEnd(){
      console.log('call leave')
      await call.leave();
      navigate('/dashboard');
  }


  return (
    <div id="VideoSDKfooter" className="w-full gap-2 md:gap-6 mt-10 md:mt-14 h-24 md:h-20 bg-[#19232D] flex justify-center items-center">
      <SpeakingWhileMutedNotification>
        <ToggleAudioPublishingButton />
      </SpeakingWhileMutedNotification>
      <ToggleVideoPublishingButton />
      <ReactionsButton/>
      <ScreenShareButton/>
      <ChatControl mainToken={mainToken} testToken={testToken} availableEvents={availableEvents}/>
      <CancelCallButton onClick={handleCallEnd}/>
    </div>
  );
}
