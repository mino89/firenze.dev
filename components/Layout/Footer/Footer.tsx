import Copyright from "./Copyright";
import Partners from "./Partners";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="text-center">
      <Social />
      <Partners />
      <Copyright />
    </footer>
  );
}
