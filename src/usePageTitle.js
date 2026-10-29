import { useEffect } from "react";

// The browser tab should say which page this is, in the same voice as the header.
export function usePageTitle(page) {
  useEffect(() => {
    document.title = page
      ? `${page} · WhatsLandlord`
      : "WhatsLandlord · Property management, made simple";
  }, [page]);
}
