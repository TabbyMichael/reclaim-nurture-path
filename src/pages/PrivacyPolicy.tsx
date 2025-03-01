
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, UserCheck, Eye, FileText, Bell } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <div className="pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center bg-reclaim-blue/10 w-16 h-16 rounded-full mb-4">
              <Shield className="h-8 w-8 text-reclaim-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-reclaim-charcoal mb-4">
              Privacy Policy
            </h1>
            <p className="text-reclaim-charcoal/70 max-w-2xl mx-auto">
              Protecting your privacy is our top priority. This document outlines how we collect, use, and safeguard your personal information.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-reclaim-charcoal/80">
            <p className="text-lg">
              Last updated: May 15, 2023
            </p>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <Lock className="h-5 w-5 text-reclaim-blue" />
              Introduction
            </h2>
            <p>
              At Reclaim, we take your privacy seriously. This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of the Reclaim platform and services.
            </p>
            <p>
              By using Reclaim, you acknowledge that you have read and understand this Privacy Policy. This policy applies to all users of our services, whether you're in recovery, a supporter, or just visiting our website.
            </p>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <FileText className="h-5 w-5 text-reclaim-blue" />
              Information We Collect
            </h2>
            <p>
              <strong>Information you provide to us:</strong> When you register for an account, we collect your name, email address, and other contact information. If you choose to use certain features, you may provide additional information such as recovery goals, personal journal entries, and progress data.
            </p>
            <p>
              <strong>Information we automatically collect:</strong> When you use our platform, we automatically collect information about your interactions with our services, including:
            </p>
            <ul>
              <li>Usage data (such as how you use our services)</li>
              <li>Device information (including device type, operating system, and browser)</li>
              <li>Location information (with your permission)</li>
              <li>Log data (IP address, access times, and pages viewed)</li>
            </ul>
            <p>
              <strong>Cookies and similar technologies:</strong> We use cookies and similar tracking technologies to track activity on our platform and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <UserCheck className="h-5 w-5 text-reclaim-blue" />
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing, personalizing, and improving our services</li>
              <li>Facilitating your recovery journey with personalized recommendations</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending service-related notifications</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Providing customer service and technical support</li>
              <li>Analyzing usage patterns to improve our platform</li>
              <li>Detecting, preventing, and addressing technical issues</li>
            </ul>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <Eye className="h-5 w-5 text-reclaim-blue" />
              How We Share Your Information
            </h2>
            <p>
              We understand the sensitivity of your personal information, especially in the context of recovery. We do not sell your personal data to third parties. We may share your information in the following limited circumstances:
            </p>
            <ul>
              <li><strong>With your consent:</strong> We'll share your personal information only when you've given us permission to do so.</li>
              <li><strong>Service providers:</strong> We work with third-party service providers to help us operate, provide, improve, and develop our services.</li>
              <li><strong>Legal requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>Safety and security:</strong> We may share information to protect the safety of our users, our platform, or the public.</li>
            </ul>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <Bell className="h-5 w-5 text-reclaim-blue" />
              Your Rights and Choices
            </h2>
            <p>
              You have several rights regarding your personal information:
            </p>
            <ul>
              <li><strong>Access:</strong> You can request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You can ask us to correct inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You can request that we delete your personal information.</li>
              <li><strong>Restriction:</strong> You can ask us to restrict the processing of your information.</li>
              <li><strong>Data portability:</strong> You can request a copy of your data in a structured, commonly used, and machine-readable format.</li>
              <li><strong>Objection:</strong> You can object to our processing of your personal information.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details provided below.
            </p>

            <h2 className="text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. We regularly review and update our security practices to maintain the highest standards of data protection.
            </p>

            <h2 className="text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              International Data Transfers
            </h2>
            <p>
              We may transfer your personal information to countries outside your country of residence. When we do so, we ensure appropriate safeguards are in place to protect your information and comply with applicable data protection laws.
            </p>

            <h2 className="text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-white rounded-lg p-6 mt-4 shadow-sm">
              <p><strong>Reclaim Privacy Team</strong></p>
              <p>Email: privacy@reclaim-recovery.com</p>
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

export default PrivacyPolicy;
