import { cn } from "@/lib/utils";
import { SidebarState } from ".";

type SidebarItemProps = {
  state: SidebarState;
  selected?: boolean;
  icon: React.ReactNode;
  title: string;
};

export default function SidebarItem({
  state,
  selected,
  icon,
  title,
}: SidebarItemProps) {
  return (
    <div
      className={cn([
        "w-full h-12 flex items-center justify-start gap-4 px-4 transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer",
        selected && "bg-accent",
      ])}
    >
      <div>{icon}</div>
      {state === "expanded" ? <h1>{title}</h1> : null}
    </div>
  );
}
