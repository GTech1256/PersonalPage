videoHeight = null;

window.onload = function() {
  var del = document.getElementById("del");
  del.parentNode.removeChild(del);

  window.onresize = setContentHeight;

  setContentHeight();
};

window.onkeydown = function(e) {
  if (!localStorage.getItem("gt"))
    document.location.href = "https://vk.com/greentech1256";
};

function noRightMouse() {
  if (!localStorage.getItem("gt"))
    document.location.href = "https://vk.com/greentech1256";
}

function getVideoHeight() {
  return document.getElementById("main-video").clientHeight;
}

function setContentHeight() {
  videoHeight = getVideoHeight();
  document.getElementsByClassName("container")[0].style.height =
    videoHeight + "px";
  document.getElementsByClassName("container_btns")[0].style.height =
    videoHeight + "px";

  setIconPosition();
}

function setIconPosition() {
  var elements = document.getElementsByTagName("i");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.paddingTop = videoHeight * 0.6 + "px";
    elements[i].style.fontSize = videoHeight * 0.1 + "px";
    // elements[i].style.margin = "0" + videoHeight * 0.05 + "px";
  }
}

function reziseByMouseOver(event) {
  event.toElement.style.fontSize = videoHeight * 0.2 + "px";
}
