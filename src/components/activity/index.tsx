"use client";

import { useState } from "react";
import Trending from "./trending";
import Active, { User } from "./active";

import { Separator } from "../ui/separator";
import MessageBox from "./message-box";

export type MessageBoxState = "open" | "closed";

export default function Activity() {
  const [messageBoxState, setMessageBoxState] =
    useState<MessageBoxState>("closed");
  const [messageBoxContent, setMessageBoxContent] = useState<User>({
    username: null,
    status: null,
  });
  
  return (
    <aside className="relative w-[240px] h-full flex flex-col items-center justify-start gap-2 border border-input bg-background rounded-md rounded-tr-none py-2 transition-[width]">
      <Trending />
      <Separator />
      <Active
        messageBoxState={messageBoxState}
        messageBoxContent={messageBoxContent}
        setMessageBoxState={setMessageBoxState}
        setMessageBoxContent={setMessageBoxContent}
      />
      {messageBoxState === "open" ? (
        <MessageBox messageBoxContent={messageBoxContent} />
      ) : null}
    </aside>
  );
}
