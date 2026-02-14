import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Refund Policy - Clips Cutter',
  description: 'Read the Clipscutter Refund Policy.',
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Refund Policy</h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Clipscutter.com, we aim to provide a high-quality and user-friendly service for cutting and downloading YouTube video clips. However, we understand that sometimes issues may arise, and we are committed to addressing your concerns fairly and transparently. This Refund Policy outlines the terms and conditions under which refunds may be granted.
            </p>

            <div className="space-y-10 text-gray-700">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Eligibility for Refunds</h2>
                <p className="mb-4">Refunds may be considered in the following cases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Technical Issues:</span> If you experience persistent technical problems with the Clipscutter.com service that prevent you from using the platform as intended, and our support team is unable to resolve the issue, you may be eligible for a refund.
                  </li>
                  <li>
                    <span className="font-medium">Subscription Services:</span> If you have purchased a subscription and are not satisfied with the service, you may request a refund within 7 days of your initial subscription payment. Refunds for subscription renewals are generally not offered, but exceptions may be made at our discretion in special circumstances.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Non-Refundable Situations</h2>
                <p className="mb-4">Refunds will not be granted in the following cases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Change of Mind:</span> We do not offer refunds if you decide to cancel the service simply due to a change of mind after the purchase.
                  </li>
                  <li>
                    <span className="font-medium">Partial Use:</span> If you have already used a significant portion of the service or downloaded multiple video clips during your subscription period, a refund will not be granted.
                  </li>
                  <li>
                    <span className="font-medium">Misuse or Policy Violations:</span> Refunds are not issued for accounts that are suspended or terminated due to violations of our Terms of Service or misuse of the platform.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Requesting a Refund</h2>
                <p className="mb-4">
                  To request a refund, you must contact our support team at{' '}
                  <a className="text-[#5271FF] hover:underline" href="mailto:contact@clipscutter.com">contact@clipscutter.com</a>{' '}
                  within the eligible period:
                </p>
                <p className="mb-4">
                  <span className="font-medium">Refund Request for Subscription Payments:</span> Requests must be submitted within 7 days of the initial subscription payment. Please include the following information in your refund request:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Your account email or username</li>
                  <li>A description of the issue</li>
                  <li>Any supporting evidence (e.g., screenshots or error messages)</li>
                </ul>
                <p>Our team will review your request and respond within 5 business days.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Refund Process</h2>
                <p className="mb-4">If your refund request is approved:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Refunds will be processed using the original payment method within 10 business days</li>
                  <li>You will receive an email notification once the refund is initiated.</li>
                </ul>
                <p className="mt-4">
                  Please note that it may take additional time for the refund to reflect in your account, depending on your bank or credit card issuer.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Cancellation of Subscriptions</h2>
                <p>
                  You can cancel your subscription at any time by logging into your account and following the cancellation process. Canceling a subscription will stop future billing, but no refunds will be issued for past payments unless otherwise specified by this policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Changes to the Refund Policy</h2>
                <p>
                  We reserve the right to modify this Refund Policy at any time. Any changes will be posted on this page, and your continued use of Clipscutter.com following the posting of changes constitutes your acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Contact Us</h2>
                <p className="mb-2">If you have any questions or concerns regarding our Refund Policy, please contact us:</p>
                <p>
                  Email: <a className="text-[#5271FF] hover:underline" href="mailto:contact@clipscutter.com">contact@clipscutter.com</a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
