import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false)

  useEffect(() => setPlay(true), [trackUri]);

  console.log(trackUri);

  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      styles={{
            bgColor: "rgb(0, 0, 0)",
            width: 100,
            color: "#ffffff",
            sliderColor: "#1cb954",
            sliderHandleColor: "whitesmoke",
            trackArtistColor: "#ffffff",
            trackNameColor: "#fff",
          }}
      play={play}
      uris={[trackUri]}
    />
  )
}