/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const DetailedPrivacyPolicy = () => {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-lg leading-relaxed">
          At <strong>Feel Light Again</strong>, your trust is the foundation of our community. We are dedicated to being transparent about how we collect, use, and protect your information when you interact with our brand, our website, and our wellness support services.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-serif text-earth mb-4">1. Information We Collect</h3>
        <p className="mb-4">We collect information that allows us to provide a personalized and supportive experience. This includes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Communication Data:</strong> When you message us via WhatsApp, we receive your phone number and the history of our conversation. This includes any personal health goals or digestive concerns you choose to share.</li>
          <li><strong>Technical Data:</strong> Like most websites, we collect basic technical information such as your IP address, browser type, and how you navigated to our page (e.g., via a Meta ad). This helps us improve our website experience.</li>
          <li><strong>Engagement Data:</strong> We track which sections of our site are most helpful to our visitors to ensure we are providing the right emotional and digestive support content.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-serif text-earth mb-4">2. How We Use Your Information</h3>
        <p className="mb-4">Your information is used solely to enhance your wellness journey:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Personalized Support:</strong> To understand your unique digestive challenges and suggest appropriate gentle wellness routines.</li>
          <li><strong>Communication:</strong> To respond to your inquiries on WhatsApp and provide follow-up support if requested.</li>
          <li><strong>Platform Improvement:</strong> To analyze the effectiveness of our messaging and website layout for future visitors.</li>
        </ul>
        <p className="mt-4 italic text-sage">We will never sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
      </section>

      <section>
        <h3 className="text-xl font-serif text-earth mb-4">3. Data Security & Storage</h3>
        <p>
          We take the security of your information seriously. Our WhatsApp conversations are protected by end-to-end encryption provided by Meta. Internally, we limit access to your conversation history to only those dedicated to supporting your wellness routine.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-serif text-earth mb-4">4. Third-Party Services</h3>
        <p>
          Our primary point of contact is WhatsApp. By using the "Message Us" feature, your data is subject to WhatsApp's own Privacy Policy. We also use basic analytics to understand how people find us through Meta Ads.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-serif text-earth mb-4">5. Your Privacy Rights</h3>
        <p className="mb-4">You have full control over your data:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Access & Correction:</strong> You can ask us what information we have on file at any time.</li>
          <li><strong>Right to Deletion:</strong> You can request that we delete our WhatsApp conversation history.</li>
          <li><strong>Opt-Out:</strong> You are never under obligation to continue a conversation and can end it at any time.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-serif text-earth mb-4">6. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy or how we handle your data, please reach out to us directly through our WhatsApp channel or via the contact methods listed in our footer.
        </p>
      </section>

      <footer className="pt-8 border-t border-earth/10 text-sm text-earth/50">
        <p>Last Updated: May 21, 2026</p>
      </footer>
    </div>
  );
};
