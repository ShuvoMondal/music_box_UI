import { useState, useEffect, useCallback, React } from "react";
import useMqtt from "@/hooks/useMqtt";
import Player from "./Player";
import { useSession } from "next-auth/react";

const topic = "/esp32-sm007/nfcData";


function Dashboard() {
  const { data: session, status } = useSession();
  const { mqttSubscribe, isConnected, payload } = useMqtt();
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (isConnected) {
      mqttSubscribe(topic);
    }
  }, [isConnected]);

  useEffect(() => {
    if (payload.message && [topic].includes(payload.topic)) {
      const notifitn = payload.message;
      console.log(notifitn);
      setNotification(notifitn);
    }
  }, [payload]);

  return (
    <div className="flex">
      {notification ? <Player accessToken={session.user.accessToken} trackUri="spotify:user:3146kvhsohpyqituhw4cwxrtt4r4" /> : <div>no playlist</div>}
      {/* {console.log(session)} */}
      {/* <Player accessToken={session.user.accessToken} trackUri="https://open.spotify.com/track/3xMHXmedL5Rvfxmiar9Ryv" />  */}
    </div>
  );
}

export default Dashboard
