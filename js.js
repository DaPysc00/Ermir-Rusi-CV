function openM(src) {
  const modal = document.getElementById("mod");
  const content = document.getElementById("modc");

  content.innerHTML = ''; // Clear previous content

  if (src.endsWith('.mp4')) {
    content.innerHTML = `
      <video controls autoplay style="max-width: 90%; max-height: 90%;">
        <source src="${src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>`;
  } else {
    content.innerHTML = `<img src="${src}" style="max-width: 90%; max-height: 90%;" />`;
  }

  modal.style.display = "flex";
}

function closeM() {
  document.getElementById("mod").style.display = "none";
  document.getElementById("modc").innerHTML = '';
}
