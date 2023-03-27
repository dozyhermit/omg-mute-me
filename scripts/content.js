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

  const video = document.querySelectorAll("video");
  const videoExists = video.length >= 1;

  if (!videoExists) {
    return;
  }

  const videoMuted = video[0].muted;

  if (adExists && !videoMuted) {
    video[0].muted = true;
    return;
  }
});

observer.observe(document, { childList: true, subtree: true });
