import Link from "next/link";
import { LogoutButton } from "./ClientSide";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link href={"/"}>
          <h2>Todo App</h2>
        </Link>
      </div>
      <article>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About Me</Link>
        <LogoutButton/>
      </article>
    </div>
  );
};

export default Header;
