import { X } from "lucide-react";

type MessageProps = {
  messageBoxContent: object;
};

export default function MessageBox({ messageBoxContent }: MessageProps) {
  console.log(messageBoxContent);
  return (
    <div className="w-[240px] h-[400px] absolute bg-accent bottom-0 left-[-250px] rounded-md">
      <h1>Message Box</h1>
      <button>
        <X />
      </button>
    </div>
  );
}
