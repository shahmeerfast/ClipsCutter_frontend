import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Disclaimer - Clips Cutter',
  description: 'Read the Clipscutter Disclaimer.',
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Disclaimer</h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              The information provided by Clipscutter.com (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) on{' '}
              <a className="text-[#5271FF] hover:underline" href="https://clipscutter.com" target="_blank" rel="noopener noreferrer">
                https://clipscutter.com
              </a>{' '}
              (the &quot;Website&quot;) is for general informational purposes only. All information on the Website is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Website.
            </p>

            <div className="space-y-10 text-gray-700">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. No Professional Advice</h2>
                <p>
                  The content on Clipscutter.com, including video cutting services and other features, is for general use and convenience. It should not be interpreted as professional or legal advice regarding copyright, video use, or content distribution. Users are responsible for ensuring that they have the legal right to download or manipulate any videos through our Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Use at Your Own Risk</h2>
                <p>
                  You agree that your use of the Website and our Service is at your sole risk. Clipscutter.com does not guarantee that the website will be uninterrupted, error-free, secure, or free of viruses or harmful components. You are responsible for taking all necessary precautions to ensure the integrity of your devices and data when using our Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. No Responsibility for User Actions</h2>
                <p>
                  Clipscutter.com is a tool for editing and cutting YouTube videos. We are not responsible for how users apply or share the content created using the Service. Users are solely responsible for their actions, including ensuring compliance with YouTube’s terms of service, copyright laws, and any other applicable regulations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. External Links Disclaimer</h2>
                <p>
                  The Website may contain (or you may be sent through the Website) links to other websites or content belonging to or originating from third parties. These external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, or completeness by us. We do not warrant, endorse, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through Clipscutter.com.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Limitation of Liability</h2>
                <p>
                  Under no circumstances shall Clipscutter.com, its owners, employees, affiliates, or partners be liable for any direct, indirect, incidental, consequential, or punitive damages, including loss of profits, data, or other intangible losses, resulting from your access or use of the Website or our Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Fair Use and Copyright Compliance</h2>
                <p>
                  Clipscutter.com is not liable for any copyright infringements committed by users. The tools and services we provide are intended for lawful use, and it is the responsibility of the user to comply with copyright laws, fair use guidelines, and other applicable regulations. Clipscutter.com does not claim ownership over any third-party content used by its users and does not monitor or review the legality of the material edited or downloaded using our tools.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Service Interruptions</h2>
                <p>
                  At clipscutter.com, we strive to provide uninterrupted service. However, there may be occasions where the service is temporarily or permanently suspended for maintenance, updates, or other unforeseen circumstances. Such interruptions could last for a day, a week, a month, or longer, depending on the nature of the issue.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Accuracy of Clips Cutting</h2>
                <p>
                  While we make every effort to ensure the accuracy of our clip cutting service, we do not guarantee 100% accuracy. Approximately 98% of clip cutting requests are successful. Factors such as video quality, format variations, and technical limitations may affect the success rate of clipping.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Changes and Updates</h2>
                <p>
                  We reserve the right to modify or update this Disclaimer at any time without prior notice. Any changes will be posted on this page, and your continued use of the Website following any updates means you accept those changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Contact Us</h2>
                <p className="mb-2">If you have any questions regarding this Disclaimer, please contact us:</p>
                <p className="mb-6">
                  Email: <a className="text-[#5271FF] hover:underline" href="mailto:contact@clipscutter.com">contact@clipscutter.com</a>
                </p>
                <p>By using Clipscutter.com, you agree to this Disclaimer and assume all responsibility for your use of the Service.</p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
