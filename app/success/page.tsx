import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Tiham AI Studio" width={40} height={40} className="w-10 h-10" />
              <span className="text-2xl font-bold text-gray-900">Tiham AI Studio</span>
            </div>
            <Link href="https://tally.so/r/3y8G66" target="_blank">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">Get Free Demo</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Success Content */}
      <section className="py-32 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Thank You for Your Payment!</h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            <strong>Work has started on your AI Receptionist.</strong>
          </p>

          <p className="text-lg text-gray-500 mb-12">
            You can now leave this page. We'll be in touch soon with updates on your project.
          </p>

          <div className="bg-blue-50 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Our team begins building your custom AI Receptionist</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">We'll contact you within 24 hours with project details</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Your AI will be ready and capturing calls soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/logo.png" alt="Tiham AI Studio" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold text-white">Tiham AI Studio</span>
            </div>
            <p className="text-gray-400">© 2024 Tiham AI Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
