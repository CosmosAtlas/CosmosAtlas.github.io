(() => {
  // <stdin>
  window.addEventListener("load", function() {
    const admonitions = document.getElementsByClassName("admonition-block");
    for (let i = admonitions.length - 1; i >= 0; i--) {
      const elm = admonitions[i];
      const type = elm.classList[1];
      const text = elm.getElementsByTagName("p")[0].innerHTML;
      const parent = elm.parentNode;
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = `<div class="admonitionblock ${type}">
    <table>
      <tbody>
        <tr>
          <td class="icon" style="width:5em ! important; background-color: var(--accent) ! important; border: none ! important;">
            <span style="font-weight:bold ! important;">${type}</span>
          </td>
          <td class="content" style="border: none ! important;">
            ${text}
          </td>
        </tr>
      </tbody>
    </table>
  </div>`;
      const input = tempDiv.childNodes[0];
      parent.replaceChild(input, elm);
    }
  });
})();
