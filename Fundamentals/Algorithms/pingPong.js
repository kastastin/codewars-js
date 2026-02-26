// <-- Ping Pong -->

/*
  The folly of Mr Pong
  While Mrs Pong is away visiting her sister, Mr Pong has foolishly set up a ping pong table in his lounge room, and invites his neighbour Mr Ping over for a friendly ping pong session.

  When Mr Ping hits the ping pong ball, the ping pong ball goes ping.

  When Mr Pong hits the ping pong ball, the ping pong ball goes pong.

  Unfortunately, not every hit goes where it was meant to...

  Sometimes the ping pong ball hits the net, or bounces off a wall, or it ricochets off Mrs Pong's rather expensive porcelain collection, a light fitting, or various pieces of lounge furniture, before finally coming to rest on the floor. When that happens there are all kinds of bad noises.

  Example
  A typical rally may sound like this:

  ping-pong-ping-pong-ping-pong-ping-pong-dong-tang-bing-tink-donk-donk-donk

  Mr Ping served
  There were several good returns
  Mr Pong hits a bad shot which broke the handle off his wife's 2nd favourite teacup. Oops.
*/

// <-- Solution -->
function pingPong(sounds) {
  const soundArr = sounds.split("-");
  let ping = 0;
  let pong = 0;
  let finalGoodShot;

  for (i = 0; i < soundArr.length; i++) {
    if (soundArr[i] === "ping" && soundArr[i + 1] === "pong") {
      ping += 1;
    }

    if (soundArr[i] === "ping" && soundArr[i + 1] !== "pong") {
      finalGoodShot = "pong";
    }

    if (soundArr[i] === "pong" && soundArr[i + 1] === "ping") {
      pong += 1;
    }

    if (soundArr[i] === "pong" && soundArr[i + 1] !== "ping") {
      finalGoodShot = "ping";
    }
  }

  return ping > pong ? "ping" : ping < pong ? "pong" : finalGoodShot;
}
