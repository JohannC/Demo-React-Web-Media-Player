import React from 'react';

const AudioVinylPlayerCodeSnippet = () => {
  const codeSnippet = '<ReactWebMediaPlayer\n\twidth={400} height={400}\n\ttitle="Key Notez - Summer"\n\tthumbnail={"https://nusid.net/album-cover.jpg"}\n\taudio="https://nusid.net/audio.mp3"\n\tvinyl={{img: "https://nusid.net/album-cover.jpg", rpm: 10}}\n\tlogo={{\n\t\timg: "https://nusid.net/your-logo.png",\n\t\thref: "https://www.npmjs.com/package/react-web-media-player"\n\t}}\n/>';
  return <snippet-highlight theme="dark" language="jsx" content={codeSnippet}/>
}

export default AudioVinylPlayerCodeSnippet;