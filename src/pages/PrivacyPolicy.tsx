
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, UserCheck, Eye, FileText, Bell, Server, Globe, Calendar, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
            <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-100">
              <p className="text-lg mb-4">
                <strong>Last updated:</strong> June 15, 2024
              </p>
              <p className="text-sm text-reclaim-charcoal/70">
                This Privacy Policy is effective immediately for new users and from July 15, 2024 for existing users.
              </p>
            </div>

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
            <div className="bg-reclaim-blue/5 border border-reclaim-blue/10 rounded-xl p-5 my-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-reclaim-blue/20 flex items-center justify-center mr-3 mt-1">
                  <AlertCircle className="w-5 h-5 text-reclaim-blue" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Special Category Data</h4>
                  <p className="text-sm text-reclaim-charcoal/70">
                    Our service may collect sensitive health-related data. This information is used solely to provide our recovery support services and is never shared with third parties for marketing purposes. You can withdraw consent for this data collection at any time in your account settings.
                  </p>
                </div>
              </div>
            </div>
            <p>
              <strong>Cookies and similar technologies:</strong> We use cookies and similar tracking technologies to track activity on our platform and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <h4 className="text-md font-medium mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-reclaim-blue/10 flex items-center justify-center text-reclaim-blue">1</span>
                  Essential Cookies
                </h4>
                <p className="text-sm text-reclaim-charcoal/70">
                  Required for basic functionality and cannot be disabled.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <h4 className="text-md font-medium mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-reclaim-blue/10 flex items-center justify-center text-reclaim-blue">2</span>
                  Preference Cookies
                </h4>
                <p className="text-sm text-reclaim-charcoal/70">
                  Remember your settings and preferences.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <h4 className="text-md font-medium mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-reclaim-blue/10 flex items-center justify-center text-reclaim-blue">3</span>
                  Analytics Cookies
                </h4>
                <p className="text-sm text-reclaim-charcoal/70">
                  Help us improve the website by collecting anonymous data.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <h4 className="text-md font-medium mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-reclaim-blue/10 flex items-center justify-center text-reclaim-blue">4</span>
                  Marketing Cookies
                </h4>
                <p className="text-sm text-reclaim-charcoal/70">
                  Allow us to deliver more relevant content to you.
                </p>
              </div>
            </div>

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
              <Server className="h-5 w-5 text-reclaim-blue" />
              Data Retention and Deletion
            </h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p>
              You can request deletion of your personal information at any time by contacting us or using the deletion tools in your account settings. Upon your request, we will delete or anonymize your information so that it no longer identifies you, unless we are legally allowed or required to maintain certain information.
            </p>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <Globe className="h-5 w-5 text-reclaim-blue" />
              International Data Transfers
            </h2>
            <p>
              We may transfer your personal information to countries outside your country of residence. When we do so, we ensure appropriate safeguards are in place to protect your information and comply with applicable data protection laws.
            </p>
            <p>
              For users in the European Economic Area (EEA), we rely on mechanisms such as Standard Contractual Clauses approved by the European Commission to lawfully transfer data to countries outside the EEA that do not provide an adequate level of data protection.
            </p>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <Bell className="h-5 w-5 text-reclaim-blue" />
              Your Rights and Choices
            </h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <h4 className="font-medium mb-2">Access</h4>
                <p className="text-sm text-reclaim-charcoal/70">
                  Request a copy of the personal information we hold about you.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <h4 className="font-medium mb-2">Correction</h4>
                <p className="text-sm text-reclaim-charcoal/70">
                  Request correction of inaccurate or incomplete information.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <h4 className="font-medium mb-2">Deletion</h4>
                <p className="text-sm text-reclaim-charcoal/70">
                  Request that we delete your personal information.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <h4 className="font-medium mb-2">Restriction</h4>
                <p className="text-sm text-reclaim-charcoal/70">
                  Request that we restrict the processing of your information.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <h4 className="font-medium mb-2">Data Portability</h4>
                <p className="text-sm text-reclaim-charcoal/70">
                  Request a copy of your data in a structured, commonly used format.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <h4 className="font-medium mb-2">Objection</h4>
                <p className="text-sm text-reclaim-charcoal/70">
                  Object to our processing of your personal information.
                </p>
              </div>
            </div>
            <p>
              To exercise any of these rights, please contact us using the details provided below. Note that we may need to verify your identity before processing your request.
            </p>

            <h2 className="flex items-center gap-2 text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              <Calendar className="h-5 w-5 text-reclaim-blue" />
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy. For significant changes, we will provide a more prominent notice, which may include an email notification.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2 className="text-reclaim-charcoal font-semibold text-xl mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-white rounded-lg p-6 mt-4 mb-8 shadow-sm border border-gray-100">
              <p><strong>Reclaim Privacy Team</strong></p>
              <p>Email: privacy@reclaim-recovery.com</p>
              <p>Address: 123 Recovery Road, Suite 400, Wellness City, WC 98765</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link to="/terms">
                <Button variant="outline" className="w-full sm:w-auto">View Terms of Service</Button>
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

export default PrivacyPolicy;
