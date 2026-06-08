import React from 'react'
import Contactus from './Contactus'

export async function generateMetadata() {
  return {
    title: "Contact Us | Inquiry Bazaar –B2B Portal in India",
    description: "Get in touch with Inquiry Bazaar, India’s leading B2B marketplace. Contact us for business inquiries, supplier support, partnerships, and platform assistance. We are here to help your business grow through the best B2B portal and industrial marketplace.",
  };
}

export default function page() {
  return (
    <>
    <Contactus/>
    </>
  )
}
