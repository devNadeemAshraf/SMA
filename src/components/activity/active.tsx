import { Dispatch, SetStateAction, useState } from "react";
import { MessageBoxState } from ".";

import ActiveItem from "./activeItem";

type ActiveProps = {
  messageBoxState: MessageBoxState;
  messageBoxContent: {};
  setMessageBoxState: Dispatch<SetStateAction<MessageBoxState>>;
  setMessageBoxContent: Dispatch<SetStateAction<User>>;
};

export type User = {
  username: string | null;
  status: 0 | 1 | null;
};

export default function Active({
  messageBoxState,
  messageBoxContent,
  setMessageBoxState,
  setMessageBoxContent,
}: ActiveProps) {
  const [currentMessageBoxUser, setCurrentMessageBoxUser] = useState<User>({
    username: null,
    status: null,
  });

  // Message Box Toggle
  const toggleMessageBoxState = ({ username, status }: User) => {
    // Check if Box is Closed and Open It
    // Check if Box is Open and We are clicking on the same user
    // Check if Box is Open and We are not clicking on the same user
    if (messageBoxState === "closed") {
      // Open
      setMessageBoxState("open");
      setMessageBoxContent({ username, status });
      setCurrentMessageBoxUser({ username, status });
    } else if (
      messageBoxState === "open" &&
      currentMessageBoxUser.username !== username
    ) {
      // Open the new Message Box
      setMessageBoxState("open");
      setMessageBoxContent({ username, status });
      setCurrentMessageBoxUser({ username, status });
    } else {
      // Close the Message Box
      setMessageBoxState("closed");
      setMessageBoxContent({ username: null, status: null });
      setCurrentMessageBoxUser({ username: null, status: null });
    }
  };

  // Sort the Users and show active users first.. shows first 10 users
  return (
    <div className="w-full h-auto flex-1 flex flex-col overflow-auto">
      <h4 className="scroll-m-20 text-lg font-medium tracking-tight px-4">
        Active
      </h4>
      <div className="overflow-auto">
        {/* Top 10 trending tags */}
        <ul className="mt-2 space-y-2">
          <ActiveItem
            onClick={() =>
              toggleMessageBoxState({ username: "Nadeem Ashraf", status: 1 })
            }
            username="Nadeem Ashraf"
            status={1}
          />
          <ActiveItem
            onClick={() =>
              toggleMessageBoxState({ username: "John Doe", status: 0 })
            }
            username="John Doe"
            status={0}
          />
        </ul>
      </div>
    </div>
  );
}
