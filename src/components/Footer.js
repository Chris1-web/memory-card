import github from "../images/github.png";

function Footer() {
  return (
    <footer>
      <span>Copyright &copy; {new Date().getFullYear()} Christianah</span>
      <a
        target="_blank"
        href="https://github.com/Chris1-web/memory-card"
        rel="noreferrer"
      >
        <img src={github} alt="github icon" />
      </a>
    </footer>
  );
}

export default Footer;
