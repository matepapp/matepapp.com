export const SITE = {
  title: "Mate Papp",
  url: "https://matepapp.com",
  description:
    "I'm Mate Papp, a Software Engineer, a lifelong learner and teacher, an Apple fanboy, a wannabe home barista, and a productivity nerd (= too lazy). Originally from Hungary, currently living in beautiful Barcelona, Spain with my beloved wife.",
  socialImage:
    "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/44932812_2120289778001346_6477928589340704768_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=DDiVel8Quo8AX-s2MIs&_nc_ht=scontent-vie1-1.xx&oh=c3a891698a897901cebda669450267d9&oe=5EABEE7D",
  twitterHandle: "@matepappcom",
} as const;

export function pageTitle(title?: string) {
  return title ? `${title} | ${SITE.title}` : SITE.title;
}

export function canonicalUrl(pathname: string) {
  return new URL(pathname, SITE.url).toString();
}
