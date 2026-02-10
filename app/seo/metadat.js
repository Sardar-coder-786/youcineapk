import { site } from "./site";

const abs = (path = "") =>
  path.startsWith("http") ? path : `${site.domain}${path.startsWith("/") ? "" : "/"}${path}`;

const withSite = (m) => {
  const out = { ...m };

  // canonical absolute
  if (out.alternates?.canonical) {
    out.alternates = {
      ...out.alternates,
      canonical: abs(out.alternates.canonical),
    };
  }

  // hreflang absolute (if provided)
  if (out.alternates?.languages) {
    const langs = {};
    for (const [k, v] of Object.entries(out.alternates.languages)) {
      langs[k] = abs(v);
    }
    out.alternates.languages = langs;
  }

  // OpenGraph url absolute
  if (out.openGraph?.url) out.openGraph.url = abs(out.openGraph.url);

  // OpenGraph images absolute
  if (out.openGraph?.images?.length) {
    out.openGraph.images = out.openGraph.images.map((img) => ({
      ...img,
      url: abs(img.url || site.ogImage),
    }));
  }

  // Twitter images absolute
  if (out.twitter?.images?.length) {
    out.twitter.images = out.twitter.images.map((img) => abs(img));
  }

  return out;
};

export const meta = {
  home: withSite({
    title: "YouCine APK Download – Watch Movies & Anime HD",
    description:
      "Get YouCine APK for Android and stream movies, TV shows and anime in HD. Smooth playback, fast loading and smart recommendations.",
    alternates: {
      canonical: "/",
      languages: {
        "pt-BR": "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      title: "YouCine APK Download – Watch Movies & Anime HD",
      description:
        "Get YouCine APK for Android and stream movies, TV shows and anime in HD. Smooth playback, fast loading and smart recommendations.",
      url: "/",
      siteName: site.name,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: "YouCine APK – Official Download",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "YouCine APK Download – Watch Movies & Anime HD",
      description:
        "Get YouCine APK for Android and stream movies, TV shows and anime in HD. Smooth playback, fast loading and smart recommendations.",
      images: [site.ogImage],
    },
  }),

  ios: withSite({
    title: "YouCine APK for iOS – Watch Movies & Anime",
    description:
      "Install YouCine on iPhone and iPad to watch movies, TV series and anime in HD. Learn how to access YouCine on iOS devices easily.",
    alternates: {
      canonical: "/youcine-apk-for-ios",
      languages: {
        "pt-BR": "/youcine-apk-for-ios",
        en: "/en/youcine-apk-for-ios",
        "x-default": "/youcine-apk-for-ios",
      },
    },
  }),

  tv: withSite({
    title: "YouCine APK for TV – Watch Movies & Anime",
    description:
      "Install YouCine for TV to watch movies, TV shows and anime in HD on Smart TV, Android TV and Fire TV devices.",
    alternates: {
      canonical: "/youcine-apk-for-tv",
      languages: {
        "pt-BR": "/youcine-apk-for-tv",
        en: "/en/youcine-apk-for-tv",
        "x-default": "/youcine-apk-for-tv",
      },
    },
  }),

  pc: withSite({
    title: "YouCine APK for PC – Watch Movies & Anime",
    description:
      "Use YouCine on PC to watch movies, TV series and anime in HD. Run it on Windows or Mac using an Android emulator.",
    alternates: {
      canonical: "/youcine-apk-for-pc",
      languages: {
        "pt-BR": "/youcine-apk-for-pc",
        en: "/en/youcine-apk-for-pc",
        "x-default": "/youcine-apk-for-pc",
      },
    },
  }),

  blogs: withSite({
    title: "Blogs – YouCine APK",
    description:
      "Guias, soluções e dicas para resolver erros, travamentos e problemas comuns no YouCine (2026).",
    alternates: {
      canonical: "/blogs",
      languages: {
        "pt-BR": "/blogs",
        en: "/en/blogs", // only if you really have this page
        "x-default": "/blogs",
      },
    },
  }),

  contact: withSite({
    title: "Contact Us – YouCine APK",
    description: "Fale Conosco: envie dúvidas, sugestões ou feedback sobre o YouCine APK.",
    alternates: {
      canonical: "/contact-us",
      languages: {
        "pt-BR": "/contact-us",
        en: "/en/contact-us",
        "x-default": "/contact-us",
      },
    },
  }),

  about: withSite({
    title: "About Us – YouCine APK",
    description: "Saiba mais sobre o site YouCine APK, nosso objetivo e informações gerais do projeto.",
    alternates: {
      canonical: "/about-us",
      languages: {
        "pt-BR": "/about-us",
        en: "/en/about-us", // only if exists
        "x-default": "/about-us",
      },
    },
  }),

  privacyPT: withSite({
    title: "Política de Privacidade – YouCine APK",
    description:
      "A Política de Privacidade do YouCine APK explica como coletamos, usamos e protegemos suas informações ao utilizar nosso site.",
    alternates: {
      canonical: "/politica-de-privacidade",
      languages: {
        "pt-BR": "/politica-de-privacidade",
        en: "/en/privacy-policy", // only if you have EN
        "x-default": "/politica-de-privacidade",
      },
    },
  }),

  termsPT: withSite({
    title: "Termos e Condições – YouCine APK",
    description:
      "Confira os Termos e Condições do YouCine APK para conhecer as regras ao acessar e utilizar nosso site.",
    alternates: {
      canonical: "/termos-e-condicoes",
      languages: {
        "pt-BR": "/termos-e-condicoes",
        en: "/en/terms", // only if you have EN
        "x-default": "/termos-e-condicoes",
      },
    },
  }),

  dmcaPT: withSite({
    title: "Política DMCA – YouCine APK",
    description:
      "A Política DMCA do YouCine APK descreve como lidamos com notificações de direitos autorais e remoções.",
    alternates: {
      canonical: "/politica-dmca",
      languages: {
        "pt-BR": "/politica-dmca",
        en: "/en/dmca",
        "x-default": "/politica-dmca",
      },
    },
  }),

  legalPT: withSite({
    title: "Aviso Legal – YouCine APK",
    description:
      "Leia o Aviso Legal do YouCine APK para entender responsabilidades e isenções relacionadas ao conteúdo do site.",
    alternates: {
      canonical: "/aviso-legal",
      languages: {
        "pt-BR": "/aviso-legal",
        en: "/en/legal-notice",
        "x-default": "/aviso-legal",
      },
    },
  }),

  enHome: withSite({
    title: "YouCine APK Download – Watch Movies & Anime HD",
    description:
      "Download the latest YouCine APK (2026) with an Android install guide. Separate pages for TV Box, PC and iOS.",
    alternates: {
      canonical: "/en",
      languages: {
        "pt-BR": "/",
        en: "/en",
        "x-default": "/",
      },
    },
  }),

  enIOS: withSite({
    title: "YouCine iOS 1.16.11 – iPhone & iPad",
    description:
      "Download YouCine iOS 1.16.11: features, security, and a complete iOS installation guide (no jailbreak).",
    alternates: {
      canonical: "/en/youcine-apk-for-ios",
      languages: {
        "pt-BR": "/youcine-apk-for-ios",
        en: "/en/youcine-apk-for-ios",
        "x-default": "/youcine-apk-for-ios",
      },
    },
  }),

  enTV: withSite({
    title: "YouCine for TV Box – Download & Install",
    description:
      "Download YouCine for Android TV/TV Box and follow the step-by-step installation guide.",
    alternates: {
      canonical: "/en/youcine-apk-for-tv",
      languages: {
        "pt-BR": "/youcine-apk-for-tv",
        en: "/en/youcine-apk-for-tv",
        "x-default": "/youcine-apk-for-tv",
      },
    },
  }),

  enPC: withSite({
    title: "YouCine for PC – Download & Install (2026)",
    description:
      "How to run YouCine on PC/Laptop using an Android emulator. Requirements and quick setup tips.",
    alternates: {
      canonical: "/en/youcine-apk-for-pc",
      languages: {
        "pt-BR": "/youcine-apk-for-pc",
        en: "/en/youcine-apk-for-pc",
        "x-default": "/youcine-apk-for-pc",
      },
    },
  }),

  enContact: withSite({
    title: "Contact Us – YouCine APK",
    description: "Contact us to send questions, suggestions, or feedback about YouCine APK.",
    alternates: {
      canonical: "/en/contact-us",
      languages: {
        "pt-BR": "/contact-us",
        en: "/en/contact-us",
        "x-default": "/contact-us",
      },
    },
  }),
};
