import { Phone, Calendar, TrendingUp, ArrowRight, CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { RevenueCalculator } from "@/components/revenue-calculator"

export default function LandingPage() {
  const stats = [
    { number: "67%", label: "of small business calls go unanswered" },
    { number: "90%", label: "of customers won't call back after no answer" },
    { number: "24/7", label: "availability - never miss peak hours" },
    { number: "1.2 sec", label: "average AI response time" },
  ]

  const problemPoints = [
    "Calls go to voicemail during lunch breaks and meetings",
    "After-hours calls are completely lost to competitors",
    "Weekend emergencies go straight to voicemail",
    "Holiday calls mean lost revenue for weeks",
    "90% of customers won't call back if you don't answer",
    "Each missed call costs $500-$5,000 in lost revenue",
  ]

  const solutionPoints = [
    "AI answers every call in under 2 seconds, even during breaks",
    "24/7 availability including nights, weekends, and holidays",
    "100% call capture rate - never miss a lead again",
    "Handles 50+ calls simultaneously without breaking",
    "Books appointments directly into your calendar",
    "Sounds 99% human - customers can't tell the difference",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Tiham AI Studio" width={36} height={36} className="w-9 h-9 md:w-11 md:h-11" />
              <span className="text-xl md:text-2xl font-bold text-gray-900">Tiham AI Studio</span>
            </div>
            <Link href="https://tally.so/r/3y8G66" target="_blank">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-sm md:px-7 md:text-base transition-all duration-200">
                Get Free Demo
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 md:mb-12 leading-tight">
            Turn Missed Calls Into
            <span className="text-blue-600"> Paying Customers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed">
            <strong>You're losing customers during breaks, after hours, weekends, and holidays.</strong> Our AI
            Receptionist answers every call instantly, 24/7 — so you never miss a sale again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-20">
            <Link href="https://tally.so/r/3y8G66" target="_blank">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 md:px-12 md:py-6 text-xl md:text-2xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Get Free Custom Demo
                <ArrowRight className="ml-3 h-6 w-6 md:h-7 md:w-7" />
              </Button>
            </Link>
          </div>

          {/* Stats integrated into hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/80 p-5 md:p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 md:mb-7">The Problem vs The Solution</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              See exactly how our AI Receptionist transforms your business from losing customers during off-hours to
              capturing every lead, 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            {/* Problem Side */}
            <div className="bg-red-50 p-7 md:p-8 rounded-2xl border-2 border-red-200">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <X className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-red-600">Current Reality</h3>
              </div>
              <div className="space-y-4">
                {problemPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-base md:text-lg">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-5 bg-red-100 rounded-lg border border-red-300">
                <p className="text-red-700 font-semibold text-center text-base md:text-lg">
                  Result: $78,000 - $390,000 lost annually from just 3 missed calls per week
                </p>
              </div>
            </div>

            {/* Solution Side */}
            <div className="bg-green-50 p-7 md:p-8 rounded-2xl border-2 border-green-200">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-green-600">With AI Receptionist</h3>
              </div>
              <div className="space-y-4">
                {solutionPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-base md:text-lg">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-5 bg-green-100 rounded-lg border border-green-300">
                <p className="text-green-700 font-semibold text-center text-base md:text-lg">
                  Result: 30-50% revenue increase within 90 days guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Calculator Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 md:mb-7">Calculate Your Lost Revenue</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              See exactly how much money you're losing every day from missed calls during breaks, after hours, weekends,
              and holidays.
            </p>
          </div>

          <div className="bg-gray-50 p-7 md:p-9 rounded-2xl border border-gray-200">
            <RevenueCalculator />
          </div>
        </div>
      </section>

      {/* Solution Cards Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 md:mb-7">How Our AI Receptionist Works</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Three simple steps to transform your business and never miss another customer again, even during
              off-hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-7 md:gap-8">
            <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Answer</h3>
                <p className="text-gray-600 mb-4 text-base md:text-lg">
                  Every call answered in under 2 seconds, 24/7 including breaks, nights, weekends, and holidays. No more
                  voicemails, no more lost customers.
                </p>
                <div className="text-2xl font-bold text-blue-600">100% Capture Rate</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Booking</h3>
                <p className="text-gray-600 mb-4 text-base md:text-lg">
                  AI qualifies leads, handles objections, and books appointments directly into your calendar
                  automatically, even when you're sleeping.
                </p>
                <div className="text-2xl font-bold text-blue-600">Instant Bookings</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenue Growth</h3>
                <p className="text-gray-600 mb-4 text-base md:text-lg">
                  Watch your revenue grow as you capture every lead, including those after-hour emergencies. Clients see
                  $20K-$50K additional monthly revenue.
                </p>
                <div className="text-2xl font-bold text-blue-600">$35K+ Monthly</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 md:mb-7">
            Stop Losing Customers During Off-Hours
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 md:mb-12 max-w-4xl mx-auto">
            <strong>
              Every break, every evening, every weekend you're not answering calls, you're losing customers.
            </strong>{" "}
            Apply for a free custom demo and see exactly how our AI receptionist will capture every lead for your
            specific business. Limited spots available.
          </p>
          <Link href="https://tally.so/r/3y8G66" target="_blank">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 md:px-12 md:py-6 text-xl md:text-2xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Apply for Free Custom Demo
              <ArrowRight className="ml-3 h-6 w-6 md:h-7 md:w-7" />
            </Button>
          </Link>
          <p className="text-blue-100 mt-6 text-base md:text-lg">
            ✓ See it work with your actual business data ✓ Custom-built for your industry
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 md:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/logo.png" alt="Tiham AI Studio" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold text-white">Tiham AI Studio</span>
            </div>
            <p className="text-gray-400 text-base">© 2024 Tiham AI Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
