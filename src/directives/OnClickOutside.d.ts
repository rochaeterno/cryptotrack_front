import Vue from "vue";

interface OnClickOutsideOptions {
  name: string;
  specs: string[];
  replace: boolean;
  styles: string[];
}

declare module "vue/types/vue" {
  interface Vue {
    $htmlToPaper: (
      el: Element,
      localOptions?: Partial<OnClickOutsideOptions>,
      cb?: () => boolean
    ) => void;
  }
}

export {};
