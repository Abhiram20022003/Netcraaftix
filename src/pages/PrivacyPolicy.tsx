import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return <main className="min-h-screen bg-[#101311] px-5 py-16 text-zinc-200">
    <article className="mx-auto max-w-3xl">
      <Link to="/" className="text-sm text-amber-300">← Netcraaftix home</Link>
      <h1 className="mt-8 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mt-4 text-sm text-zinc-500">Last updated: November 2026</p>
      <p className="mt-8 leading-7 text-zinc-300">Netcraaftix respects your privacy. This page explains how information submitted through our website may be used when you contact us about our services.</p>
      <h2 className="mt-8 text-xl font-bold text-white">Information you provide</h2>
      <p className="mt-3 leading-7 text-zinc-400">If you submit an enquiry, you may provide your name, phone number, company or institution, location, service interest and project details.</p>
      <h2 className="mt-8 text-xl font-bold text-white">How we use information</h2>
      <p className="mt-3 leading-7 text-zinc-400">We use enquiry details to respond to your request, understand the services you need, prepare estimates and communicate about the project. We do not ask for passwords, payment card details or other sensitive credentials through this form.</p>
      <h2 className="mt-8 text-xl font-bold text-white">WhatsApp and third-party services</h2>
      <p className="mt-3 leading-7 text-zinc-400">When you choose to continue to WhatsApp, the information in your enquiry is transferred to WhatsApp so you can send it to us. WhatsApp and other third-party services process information under their own privacy policies.</p>
      <h2 className="mt-8 text-xl font-bold text-white">Data retention and contact</h2>
      <p className="mt-3 leading-7 text-zinc-400">We retain enquiry information only as reasonably needed to respond, provide services, maintain business records or meet legal obligations. To ask about information you have shared, contact <a className="text-amber-300" href="mailto:info@netcraaftix.co.in">info@netcraaftix.co.in</a>.</p>
      <h2 className="mt-8 text-xl font-bold text-white">Updates</h2>
      <p className="mt-3 leading-7 text-zinc-400">We may update this notice when our website or enquiry process changes. The latest version will be published on this page.</p>
    </article>
  </main>;
}
