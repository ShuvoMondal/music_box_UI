import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false)

  useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      styles={{
            bgColor: "rgb(19, 18, 18)",
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