import type { Testimonial } from '@/types';

/* Add real customer testimonials here when available.
   The testimonials section on the home page and about page will
   automatically appear once there is at least one entry. */
export const testimonials: Testimonial[] = [];

export const getFeaturedTestimonials = (): Testimonial[] => testimonials.filter((t) => t.featured);

/** True when there is at least one testimonial to display */
export const hasTestimonials = (): boolean => testimonials.length > 0;
