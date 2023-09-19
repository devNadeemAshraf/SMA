import Activity from "@/components/activity";
import Feed from "@/components/feed";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center gap-4 px-6 pt-16 pb-4">
      <Sidebar />
      <Feed />
      <Activity />
    </main>
  );
}
