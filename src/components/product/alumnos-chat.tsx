"use client";

import { PhoneChat, usePhoneChatPlayback } from "@/components/product/phone-chat";
import { alumnosChat } from "@/content/alumnos";

/** The phone of the hero of /alumnos: the same chat as "Cómo funciona", shorter, with no step cards. */
export function AlumnosChat() {
  const playback = usePhoneChatPlayback(alumnosChat);

  return (
    <PhoneChat script={alumnosChat} playback={playback} className="mx-auto w-70 md:w-80 lg:w-88" />
  );
}
