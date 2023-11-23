import Layout from "@/components/meta";
import Container from "@/components/container";
import Link from "next/link";
import Twemoji from "@/components/twemoji";
import { Snippet, Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout>
      <Container>
        <div className="pt-20">
          <Snippet className="text-lg">shva.me</Snippet>
          <p className="text-lg text-mono pt-5 pb-6">
            a url shortener by{" "}
            <Link className="underline" href="https://aram.sh">
              aram
            </Link>
          </p>
          <Divider />
          <p className="text-md pt-6">coming soon :)</p>
        </div>
      </Container>
    </Layout>
  );
}
