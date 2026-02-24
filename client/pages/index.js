import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Analyza402</h1>
      <p>Manage and scale your decentralized endpoints.</p>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
