import { useEffect } from "react";

function Cursor() {

  useEffect(() => {

    const move = (e) => {
      const dot = document.createElement("div");
      dot.className = "cursor-dot";
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";

      document.body.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 600);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);

  }, []);

  return null;
}

export default Cursor;
