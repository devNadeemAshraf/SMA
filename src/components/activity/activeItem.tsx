import { User } from "./active";

type ActiveItemProps = User & {
  onClick: () => void;
};

export default function ActiveItem({
  onClick,
  username,
  status,
}: ActiveItemProps) {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer px-4 py-2 flex items-center justify-between transition-colors hover:bg-accent"
    >
      <h1 className="text-sm font-medium leading-none">{username}</h1>
      {status === 1 ? (
        <span className="block bg-green-500 w-2 h-2 rounded-md"></span>
      ) : (
        <span className="block bg-zinc-200 dark:bg-zinc-700 w-2 h-2 rounded-md"></span>
      )}
    </li>
  );
}
