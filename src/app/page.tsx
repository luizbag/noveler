import { metadata } from "./layout";

export default function Home() {
  return (
    <>
      <h1>{metadata.title}</h1>
      <p>{metadata.description}</p>
    </>
  );
}
