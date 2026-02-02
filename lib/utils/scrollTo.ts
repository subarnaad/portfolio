// export const scrollToSection = (id: string) => {
//   const el = document.getElementById(id);
//   if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
// };

export const scrollToSection = (id: string) => {
  if (typeof window === "undefined") return;

  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - 100; // navbar height offset

  window.scrollTo({ top: y, behavior: "smooth" });
};
