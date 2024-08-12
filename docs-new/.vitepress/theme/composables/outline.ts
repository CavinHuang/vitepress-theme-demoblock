import { onMounted, onUnmounted, onUpdated, ref, Ref } from "vue";
import { throttleAndDebounce } from "../utils";
import { getScrollOffset, Header } from "vitepress";

const resolvedHeaders: { element: HTMLHeadElement; link: string }[] = [];

export function useActiveAnchor(
  container: Ref<HTMLElement | undefined>,
  flatentHeaders: Ref<Header[]>
) {
  const onScroll = throttleAndDebounce(setActiveLink, 100);

  let prevActiveLink: HTMLAnchorElement | null = null;

  const currentActiveLink = ref<string | null>(null);

  onMounted(() => {
    // requestAnimationFrame(setActiveLink);
    window.addEventListener('scroll', onScroll);
  });

  onUpdated(() => {
    // sidebar update means a route change
    activateLink(location.hash);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });

  function setActiveLink() {
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;

    // resolvedHeader可以重新定位、隐藏或固定位置
    const headers = resolvedHeaders
      .map(({ element, link }) => ({
        link,
        top: getAbsoluteTop(element)
      }))
      .filter(({ top }) => !Number.isNaN(top))
      .sort((a, b) => a.top - b.top);

    // page top
    if (scrollY < 1) {
      activateLink(null);
      return;
    }

    // page bottom - highlight last link
    if (isBottom) {
      activateLink(flatentHeaders.value[flatentHeaders.value.length - 1].link);
      return;
    }

    // find the last header above the top of viewport
    let activeLink: string | null = null;
    for (const { link, top } of headers) {
      if (top > scrollY + getScrollOffset() + 4) {
        break;
      }
      activeLink = link;
    }
    activateLink(activeLink);
  }

  function activateLink(hash: string | null) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove('active');
    }

    if (hash === null) {
      prevActiveLink = null;
    } else {
      const selector = decodeURIComponent(hash).slice(1);
      prevActiveLink = container.value?.querySelector( `a[data-link="${selector}"]`)  || null;
    }

    const activeLink = prevActiveLink;

    if (activeLink) {
      activeLink.classList.add('active');
      currentActiveLink.value = activeLink.getAttribute('data-link');
    }
  }

  return {
    currentActiveLink
  };
}

function getAbsoluteTop(element: HTMLElement): number {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      // child element is:
      // - not attached to the DOM (display: none)
      // - set to fixed position (not scrollable)
      // - body or html element (null offsetParent)
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent as HTMLElement;
  }
  return offsetTop;
}

