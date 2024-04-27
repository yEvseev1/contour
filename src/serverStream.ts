//@ts-ignore
import Stream from "node-rtsp-stream";

//@ts-ignore
export function streamServer(url) {
  const stream = new Stream({
    name: 'liveStream',
    streamUrl: url, // URL будет передан из компонента React
    wsPort: 9999,
    ffmpegOptions: {
      '-stats': '',
      '-r': 30
    }
  });
}

