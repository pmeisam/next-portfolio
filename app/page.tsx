import dynamic from "next/dynamic";
const HomeComponent = dynamic(() => import("components/home"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <HomeComponent />
    </main>
  );
}
