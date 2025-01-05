import githubLogo from "../../assets/github.png";
import linkedinLogo from "../../assets/linkedin.png";

export default function Footer({ selectedClasses }) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={selectedClasses.footer}>
      <p>{year} Book Finder App</p>
      <div className={selectedClasses["icon-container"]}>
        <a
          href="https://github.com/GabZzL"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="github-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/armandogabrieljl"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinLogo} alt="linkedin-icon" />
        </a>
      </div>
    </footer>
  );
}
