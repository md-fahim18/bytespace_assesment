/**
 * Every image on the site is referenced from here.
 * The files in /public/images are placeholders. Export the real assets from
 * Figma, drop them into /public/images (keep the same file names, or change
 * the paths below if the extension differs, e.g. hero-student.png).
 */
export const assets = {
  heroStudent: "/images/hero-student.svg",
  growthStudent: "/images/growth-student.svg",
  creatorWoman: "/images/creator-woman.svg",

  shapes: {
    squiggleLime: "/images/shapes/squiggle-lime.svg",
    squiggleWhite: "/images/shapes/squiggle-white.svg",
    ring: "/images/shapes/ring.svg",
    cone: "/images/shapes/cone.svg",
    coneLime: "/images/shapes/cone-lime.svg",
    cylinderLime: "/images/shapes/cylinder-lime.svg",
    cylinderWhite: "/images/shapes/cylinder-white.svg",
  },

  courses: [
    "/images/course-1.svg",
    "/images/course-2.svg",
    "/images/course-3.svg",
    "/images/course-4.svg",
    "/images/course-5.svg",
    "/images/course-6.svg",
  ],

  avatars: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/images/avatars/avatar-${n}.svg`),
  testimonials: [1, 2, 3].map((n) => `/images/avatars/testimonial-${n}.svg`),
};
