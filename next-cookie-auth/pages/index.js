import Layout from "../components/layout";
import Link from "next/link";
import { authInitialProps } from "../lib/auth";

export default function Index(props) {
  return (
    <Layout title="Home" {...props}>
      <Link href="/profile">
        <a>Go to profile</a>
      </Link>
    </Layout>
  );
}

Index.getInitialProps = authInitialProps();
