// import { useEffect } from "react";

import "../css/footer.css";

function Footer() {
  //   useEffect(() => {
  //     const observer = new IntersectionObserver(cb, { threshold: 1.0 });

  //     let footer = document.querySelector("footer");
  //     observer.observe(footer);

  //     function cb([entry]) {
  //       console.log(entry);
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("fixed-btm");
  //       } else entry.target.classList.remove("fixed-btm");
  //     }
  //   });

  return (
    <footer className="bg-dark text-white text-center text-lg-start mt-5 fixed-btm">
      {/* <!-- Copyright --> */}
      <div
        className="text-center py-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        2023 Application of Queue Theory in the Reduction of Correctional Center Congestion <br />
        HC20200103307 <br />
        Supervised By <strong>MR.CHRIS</strong>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;
