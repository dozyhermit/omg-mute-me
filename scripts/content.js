const observer = new MutationObserver(() => {
  const [adShowing, adCreated, adInterrupting] = [
    document.getElementsByClassName("ad-showing"),
    document.getElementsByClassName("ad-created"),
    document.getElementsByClassName("ad-interrupting"),
  ];

  const adExists =
    adShowing.length >= 1 &&
    adCreated.length >= 1 &&
    adInterrupting.length >= 1;

  if (!adExists) {
    return;
  }

  const videoSelector = document.querySelectorAll("video");
  const video = videoSelector[0];

  if (!video) {
    return;
  }

  const videoMuted = video.muted;

  if (videoMuted) {
    return;
  }

  video.muted = true;
});

observer.observe(document, { childList: true, subtree: true });
