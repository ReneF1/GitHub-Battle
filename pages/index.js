import Link from "next/link";
import Header from "../components/header";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me test</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
