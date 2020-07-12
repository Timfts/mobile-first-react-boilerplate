import { useEffect } from "react";


/**
 * this hook provides some utilities to a page component, this utilities are:
 *  - change page title on route change
 *  - change theme color meta tag on route change (this color is used in the mobile version of chrome to change the address bar color)
 */

interface HookArgs {
  pageTitle: string;
  themeColor?: string;
}

export default function usePage({ pageTitle, themeColor }: HookArgs) {
  function changePageTitle(title: string) {
    document.title = `${title} - PWA Boilerplate`;
  }

  function changeThemeColor(color: string) {
    const meta: any = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.content = color;
    }
  }

  useEffect(() => {
    changePageTitle(pageTitle);
    if (themeColor) {
      changeThemeColor(themeColor);
    }
  }, []);
}
