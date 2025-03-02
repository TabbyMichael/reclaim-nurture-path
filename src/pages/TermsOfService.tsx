
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollText, FileCheck, Users, AlertTriangle, Scale, Star, Lock, BadgeHelp, LucideHeartHandshake, MessageSquare, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
            <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-100">
              <p className="text-lg mb-4">
                <strong>Last updated:</strong> June 15, 2024
              </p>
              <p className="text-sm text-reclaim-charcoal/70">
                These Terms of Service are effective immediately for new users and from July 15, 2024 for existing users.
              </p>
            </div>

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
            <div className="bg-reclaim-blue/5 border border-reclaim-blue/10 rounded-xl p-5 my-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-reclaim-blue/20 flex items-center justify-center mr-3 mt-1">
                  <AlertTriangle className="w-5 h-5 text-reclaim-blue" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Important Notice</h4>
                  <p className="text-sm text-reclaim-charcoal/70">
                    These Terms include an Agreement to Arbitrate, which will require you to submit claims you have against Reclaim to binding and final arbitration. Under the Agreement to Arbitrate, you will be giving up your right to have a judge or jury decide your claims.
                  </p>
                </div>
              </div>
            </div>

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
              <li>Introduce any viruses, trojan horses, worms, logic bombs, or other harmful material</li>
              <li>Use the platform to transmit or exchange any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
            </ul>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <MessageSquare className="h-5 w-5 text-reclaim-blue" />
              User Content
            </h2>
            <p>
              <strong>Content Responsibility:</strong> You are solely responsible for any content you post, upload, or otherwise make available on the platform. You represent and warrant that:
            </p>
            <ul>
              <li>You own all rights to the content or have the right to use it and grant us the rights and license as provided in these Terms</li>
              <li>The content does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity</li>
              <li>The content complies with these Terms and all applicable laws and regulations</li>
            </ul>
            <p>
              <strong>Content License:</strong> By posting content on or through the platform, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the platform. You agree that this license includes the right for us to make your content available to other users of the platform, who may also use your content subject to these Terms.
            </p>
            <p>
              <strong>Content Removal:</strong> We reserve the right to remove any content that violates these Terms or that we determine in our sole discretion is otherwise objectionable or inappropriate.
            </p>

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
            <div className="bg-reclaim-blue/5 border border-reclaim-blue/10 rounded-xl p-5 my-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-reclaim-blue/20 flex items-center justify-center mr-3 mt-1">
                  <AlertTriangle className="w-5 h-5 text-reclaim-blue" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Emergency Warning</h4>
                  <p className="text-sm text-reclaim-charcoal/70">
                    In case of emergency, please call your local emergency services immediately. Do not rely on this platform for emergency medical needs.
                  </p>
                </div>
              </div>
            </div>

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
              <Lock className="h-5 w-5 text-reclaim-blue" />
              Privacy
            </h2>
            <p>
              Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and disclose information about you. By using Reclaim, you agree to the collection, use, and disclosure of your information as described in our Privacy Policy.
            </p>
            <div className="my-6 text-center">
              <Link to="/privacy" className="text-reclaim-blue hover:text-reclaim-blue/80 inline-flex items-center underline">
                View our Privacy Policy
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <Scale className="h-5 w-5 text-reclaim-blue" />
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall Reclaim, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use or inability to use the platform, including but not limited to personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for certain types of damages. Accordingly, some of the above limitations and disclaimers may not apply to you.
            </p>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <BadgeHelp className="h-5 w-5 text-reclaim-blue" />
              Indemnification
            </h2>
            <p>
              You agree to defend, indemnify, and hold harmless Reclaim, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Service or your use of the platform.
            </p>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <Ban className="h-5 w-5 text-reclaim-blue" />
              Termination
            </h2>
            <p>
              We may terminate or suspend your account and access to the platform immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the platform will immediately cease. If you wish to terminate your account, you may simply discontinue using the platform or contact us to request account deletion.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2 className="text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              Governing Law
            </h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
            </p>

            <h2 className="text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our platform after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the platform.
            </p>

            <h2 className="text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-white rounded-lg p-6 mt-4 mb-8 shadow-sm border border-gray-100">
              <p><strong>Reclaim Legal Team</strong></p>
              <p>Email: legal@reclaim-recovery.com</p>
              <p>Address: 123 Recovery Road, Suite 400, Wellness City, WC 98765</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link to="/privacy">
                <Button variant="outline" className="w-full sm:w-auto">View Privacy Policy</Button>
              </Link>
              <Link to="/">
                <Button className="w-full sm:w-auto bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">Return to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
