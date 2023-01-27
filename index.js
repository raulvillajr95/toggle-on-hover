function toggleOnHover(list, effectedElement, classSelector) {
  let element = document.querySelector(list);
  let effected = document.querySelector(effectedElement);
  element.addEventListener("mouseover", () => {
    effected.classList.toggle(classSelector);
  });
  element.addEventListener("mouseout", () => {
    effected.classList.toggle(classSelector);
  });
}

module.exports = toggleOnHover;
