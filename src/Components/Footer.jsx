import logoBlack from "../assets/logoBlack.png";

export default function Footer() {
    return (
      <footer>
        <img src={logoBlack} alt="Logo present dans le footer" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
}