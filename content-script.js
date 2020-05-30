function run() {
  let mediaSession = navigator.mediaSession;

  mediaSession.setActionHandler('play', function() {
    document.querySelector(".playButton").click();
  });
  mediaSession.setActionHandler('pause', function() {
    document.querySelector(".playButton").click();
  });

  mediaSession.setActionHandler('previoustrack', function() {
    document.querySelector(".previousButton").click();
  });
  mediaSession.setActionHandler('nexttrack', function() {
    document.querySelector(".nextButton").click();
  });

  let amznMusic = window.wrappedJSObject.amznMusic;

  let handler = function() {
    let current = amznMusic.widgets.player.getCurrent();

    mediaSession.metadata = new MediaMetadata({
      title: current.title,
      artist: current.artist.name,
      album: current.album.title
    });
  }

  let wrapped = exportFunction(handler, window);
  amznMusic.events.bind("#nowPlaying", wrapped);

  // TODO: Correctly react to pausing the current song.
}

run();
