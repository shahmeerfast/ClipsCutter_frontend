import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Privacy Policy - Clips Cutter',
  description: 'Read the Clipscutter privacy policy and how we handle your data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Clipscutter.com, accessible from{' '}
              <a className="text-[#5271FF] hover:underline" href="https://clipscutter.com" target="_blank" rel="noopener noreferrer">
                https://clipscutter.com
              </a>
              , one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by Clipscutter.com and how we use it.
            </p>

            <div className="space-y-10 text-gray-700">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect personal information that you voluntarily provide to us when you register on the website, request services, or contact us. The information we collect includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Personal Information:</span> Name, email address, and any other information you provide directly through our website.
                  </li>
                  <li>
                    <span className="font-medium">Usage Data:</span> Information automatically collected when you interact with our services, including IP address, browser type, operating system, pages viewed, and the dates/times of your interactions with our services.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information in the following ways:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, operate, and maintain our website and services.</li>
                  <li>To process your transactions and manage your orders or requests.</li>
                  <li>To communicate with you, including customer service, updates, and promotional messages.</li>
                  <li>To improve, personalize, and expand our website and services.</li>
                  <li>To analyze and monitor usage trends and website traffic for performance enhancements.</li>
                  <li>To detect, prevent, and address technical issues and potential security risks.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Cookies and Tracking Technologies</h2>
                <p>
                  Clipscutter.com uses cookies and similar tracking technologies to improve user experience and monitor website performance. Cookies are small files that are stored on your device when you access our website. You can choose to disable cookies through your browser settings, though this may affect your ability to use some features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Sharing Your Information</h2>
                <p className="mb-4">We do not sell or share your personal information with third parties, except in the following situations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Service Providers:</span> We may share your information with third-party vendors who provide services such as hosting, data analysis, and customer support, solely for the purpose of delivering our services.
                  </li>
                  <li>
                    <span className="font-medium">Legal Requirements:</span> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                  </li>
                  <li>
                    <span className="font-medium">Business Transfers:</span> In the event of a merger, acquisition, or asset sale, your information may be transferred as part of the business.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Data Security</h2>
                <p>
                  We take the security of your personal information seriously and use appropriate technical and organizational measures to safeguard it. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and obtain a copy of your personal information.</li>
                  <li>Correct any inaccuracies in your data.</li>
                  <li>Request the deletion of your personal data, subject to legal requirements.</li>
                  <li>Opt-out of receiving marketing communications at any time by following the unsubscribe instructions in our emails.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites that are not operated by us. We are not responsible for the content, privacy practices, or policies of such websites, and we encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Children’s Privacy</h2>
                <p>
                  Clipscutter.com does not knowingly collect personal information from children under the age of 13. If you believe that your child has provided personal information on our website, please contact us, and we will take appropriate action to remove that information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or services. We encourage you to review this policy periodically for any updates. Your continued use of the website following the posting of changes signifies your acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Contact Us</h2>
                <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
                <p className="mb-6">
                  Email: <a className="text-[#5271FF] hover:underline" href="mailto:contact@clipscutter.com">contact@clipscutter.com</a>
                </p>
                <p>By using Clipscutter.com, you agree to the terms outlined in this Privacy Policy.</p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
