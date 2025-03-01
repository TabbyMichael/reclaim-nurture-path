
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollText, FileCheck, Users, AlertTriangle, Scale, Star } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <div className="pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center bg-reclaim-blue/10 w-16 h-16 rounded-full mb-4">
              <ScrollText className="h-8 w-8 text-reclaim-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-reclaim-charcoal mb-4">
              Terms of Service
            </h1>
            <p className="text-reclaim-charcoal/70 max-w-2xl mx-auto">
              Please read these terms carefully before using the Reclaim platform and services.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-reclaim-charcoal/80">
            <p className="text-lg">
              Last updated: May 15, 2023
            </p>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <FileCheck className="h-5 w-5 text-reclaim-blue" />
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Reclaim platform and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
            <p>
              These Terms of Service apply to all users of the platform, including users who contribute content, information, and other materials or services.
            </p>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <Users className="h-5 w-5 text-reclaim-blue" />
              Use of Services
            </h2>
            <p>
              <strong>Eligibility:</strong> You must be at least 18 years old to use our services. By using Reclaim, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into these Terms.
            </p>
            <p>
              <strong>Registration:</strong> To access certain features of the platform, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <p>
              <strong>Account Security:</strong> You are responsible for safeguarding the password that you use to access the platform and for any activities or actions under your account. We encourage you to use strong passwords and to log out of your account at the end of each session.
            </p>
            <p>
              <strong>Prohibited Activities:</strong> You agree not to:
            </p>
            <ul>
              <li>Use the platform for any illegal purpose or in violation of any local, state, national, or international law</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with or disrupt the platform or servers or networks connected to the platform</li>
              <li>Attempt to gain unauthorized access to any portion of the platform or any other accounts, computer systems, or networks connected to the platform</li>
              <li>Use the platform in any manner that could disable, overburden, damage, or impair the site</li>
              <li>Use any robot, spider, or other automatic device, process, or means to access the platform for any purpose</li>
            </ul>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <AlertTriangle className="h-5 w-5 text-reclaim-blue" />
              Medical Disclaimer
            </h2>
            <p>
              Reclaim is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. 
            </p>
            <p>
              The content provided on the platform is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Reliance on any information provided by Reclaim is solely at your own risk.
            </p>
            <p>
              In case of emergency, please call your local emergency services immediately.
            </p>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <Star className="h-5 w-5 text-reclaim-blue" />
              Intellectual Property
            </h2>
            <p>
              <strong>Our Content:</strong> The Reclaim platform and its original content, features, and functionality are owned by Reclaim and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              <strong>Your Content:</strong> You retain all rights to any content you submit, post, or display on or through the platform. By submitting, posting, or displaying content on or through the platform, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any media.
            </p>
            <p>
              <strong>Feedback:</strong> If you provide us with any feedback or suggestions regarding the platform, you hereby assign to us all rights in such feedback and agree that we have the right to use and fully exploit such feedback in any manner we deem appropriate.
            </p>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <Scale className="h-5 w-5 text-reclaim-blue" />
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall Reclaim, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use or inability to use the platform, including but not limited to personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.
            </p>

            <h2 className="text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              Indemnification
            </h2>
            <p>
              You agree to defend, indemnify, and hold harmless Reclaim, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Service or your use of the platform.
            </p>

            <h2 className="text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              Governing Law
            </h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
            </p>

            <h2 className="text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2 className="text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-white rounded-lg p-6 mt-4 shadow-sm">
              <p><strong>Reclaim Legal Team</strong></p>
              <p>Email: legal@reclaim-recovery.com</p>
              <p>Address: 123 Recovery Road, Suite 400, Wellness City, WC 98765</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
