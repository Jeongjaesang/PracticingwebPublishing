const $menuSpan = document.getElementById("menuSpan");
const $Intro_menu = document.getElementById("Intro_menu");

let menuVisible = false;

const onClickHandler = (event) => {
  const span = event.currentTarget;

  if (!menuVisible) {
    let childToBeInvisible = "";
    let childToBeVisible = "";

    span.childNodes.forEach((el) => {
      if (el.id == "menuBtn") {
        childToBeInvisible = el;
      } else if (el.id == "closeBtn") {
        childToBeVisible = el;
      }
    });
    childToBeInvisible.style.display = "none";
    childToBeVisible.style.display = "inline";
    $Intro_menu.style.display = "flex";
    menuVisible = true;
    span.style.border = "1px dotted rgb(30, 205, 86)";
    span.style.padding = "15px";
  } else {
    let childToBeInvisible = "";
    let childToBeVisible = "";
    span.childNodes.forEach((el) => {
      if (el.id == "closeBtn") {
        childToBeInvisible = el;
      } else if (el.id == "menuBtn") {
        childToBeVisible = el;
      }
    });
    childToBeInvisible.style.display = "none";
    childToBeVisible.style.display = "inline";
    $Intro_menu.style.display = "none";
    menuVisible = false;
    span.style.border = "none";
    span.style.padding = "0px";
  }
};

$menuSpan.addEventListener("click", onClickHandler);
