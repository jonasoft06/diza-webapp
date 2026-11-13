"use client";

import { useEffect } from "react";

/** How long scroll stays instant after a back / forward step: enough for the browser to restore the position. */
const INSTANT_MS = 1200;
/** The `popstate` of an anchor click arrives right after the click; this is how long that click is remembered. */
const ANCHOR_CLICK_MS = 400;

/**
 * Makes the browser's scroll restoration instant on back / forward.
 *
 * `globals.css` sets `scroll-behavior: smooth` on `html` (for the anchors). The browser restores the saved
 * position of the page you go back to with that same behaviour, so the page visibly scrolled from the top
 * down to where you were (and, with content still animating, it could land a few pixels off). Next 16 only
 * switches smooth scrolling off for new navigations (`data-scroll-behavior` in the root layout), not for
 * history steps, so it is done here: on `popstate` the behaviour goes to `auto` for a moment.
 * Anchors and every other scroll keep the smooth behaviour: clicking `#anchor` also fires `popstate`, so
 * a click on a link to a hash of the same page is recognised first and its `popstate` is ignored.
 */
export function InstantHistoryScroll() {
  useEffect(() => {
    const html = document.documentElement;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let anchorClickAt = Number.NEGATIVE_INFINITY;

    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (link && link.hash && link.pathname === window.location.pathname) anchorClickAt = performance.now();
    };

    const onPopState = () => {
      if (performance.now() - anchorClickAt < ANCHOR_CLICK_MS) return;
      html.style.scrollBehavior = "auto";
      clearTimeout(timer);
      timer = setTimeout(() => html.style.removeProperty("scroll-behavior"), INSTANT_MS);
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
      clearTimeout(timer);
      html.style.removeProperty("scroll-behavior");
    };
  }, []);

  return null;
}
