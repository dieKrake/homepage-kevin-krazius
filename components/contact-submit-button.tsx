import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function ContactSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3.5rem] w-full sm:w-[12rem] bg-blue-600 text-white rounded-xl outline-none transition-all focus:scale-105 hover:scale-105 hover:bg-blue-700 active:scale-100 disabled:scale-100 disabled:bg-opacity-65 shadow-lg shadow-blue-500/20 font-bold"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Abschicken{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
