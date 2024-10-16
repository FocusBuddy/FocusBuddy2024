import {
  CancelCallButton,
  SpeakingWhileMutedNotification,
  ToggleAudioPublishingButton,
  ToggleVideoPublishingButton,
  ScreenShareButton,
  ReactionsButton,
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
    <div id="VideoSDKfooter" className={`${window.screen.width < 676 ? 'static' : 'sticky bottom-0'} w-full gap-2 md:gap-6 mt-10 md:mt-14 h-24 md:h-20 bg-[#19232D] flex justify-center items-center`}>
      <SpeakingWhileMutedNotification>
        <ToggleAudioPublishingButton />
      </SpeakingWhileMutedNotification>
      <ToggleVideoPublishingButton />
      <ReactionsButton/>
      {
        window.screen.width < 676 
        ?
        null
        :
        <ScreenShareButton/>

      }
      <ChatControl mainToken={mainToken} testToken={testToken} availableEvents={availableEvents}/>
      <CancelCallButton onClick={handleCallEnd}/>
    </div>
  );
}
