import { useEffect } from "react";

export const initEmbr = () => {
  const initEmbr = () => {
    if (!document.getElementById("embr-script")) {
      const a = document.createElement("script");
      a.id = "embr-script";
      a.type = "text/javascript";
      a.async = !0;
      a.src = "https://cdn.embr.org/embeddables.es.js";
      document.head.append(a);
    }
    if (!window.EMBR) {
      const t = [];
      window.EMBR = { _init: t, mount: (e) => t.push(e) };
    }
  };
};

export const mount = (config) => {
  try {
    window.EMBR.mount(config);
  } catch (e) {
    console.log("Embr Error", e);
  }
};

const EmbrScript = () => {
  useEffect(() => {
    initEmbr();
    mount({
      type: "CheckoutLaunchButton",
      options: {
        checkoutId: '01G85RDGY058PFQY83K3J88ZFX',
        theme: "dark",
      },
    });
  }, []);
  return null;
};

export default EmbrScript;
