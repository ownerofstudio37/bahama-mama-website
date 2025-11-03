import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { generateSEOMetadata } from "@/lib/seo-helpers";

// Lazy load below-the-fold components for better initial page load
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});
const CommercialHighlightGallery = dynamic(
  () => import("@/components/CommercialHighlightGallery"),
  {
    loading: () => <div className="h-96 bg-white animate-pulse" />,
  }
);
const PortraitHighlightGallery = dynamic(
  () => import("@/components/PortraitHighlightGallery"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

// Defer newsletter modal - loads after page is interactive
const DiscountNewsletterModal = dynamic(
  () => import("@/components/DiscountNewsletterModal"),
  {
    ssr: false,
    loading: () => null,
  }
);

export const metadata = generateSEOMetadata({
  title: "#1 CBD Retailer in America - Bahama Mama Texas Locations",
  description:
    "Bahama Mama is the #1 Premier CBD and alternative products retailer in Texas with 100+ locations. Over 3,500 products including CBD, kratom, vapes, and smoking accessories.",
  keywords: [
    "CBD retailer Texas",
    "CBD products Texas",
    "kratom Texas", 
    "vape shop Texas",
    "smoking accessories",
    "Bahama Mama locations",
    "CBD store Houston Dallas Austin",
  ],
  canonicalUrl: "https://bahama-mama.com",
  pageType: "website",
});

// Demo version - no MDX processing needed

export default function HomePage() {
  // Demo version - static content only

  // Static fallback homepage
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <PortraitHighlightGallery />
      <Services />
      <CommercialHighlightGallery />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Visit One of Our 100+ Texas Locations
            </h2>
            <p className="text-lg text-gray-600">
              Experience the #1 Premier CBD retailer with over 3,500 products including CBD, 
              kratom, vapes, and smoking accessories.
            </p>
          </div>
          <LeadCaptureForm />
        </div>
      </section>
      <Testimonials />
      <DiscountNewsletterModal />
    </>
  );
}
