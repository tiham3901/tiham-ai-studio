import {
  Phone,
  Clock,
  Calendar,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Thermometer,
  Home,
  Car,
  Sparkles,
  Heart,
  Scissors,
  Dumbbell,
  UtensilsCrossed,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { RevenueCalculator } from "@/components/revenue-calculator"

export default function LandingPage() {
  const industries = [
    { name: "HVAC", icon: Thermometer },
    { name: "Roofing", icon: Home },
    { name: "Car Rentals", icon: Car },
    { name: "Car Detailing", icon: Sparkles },
    { name: "Dental Clinics", icon: Heart },
    { name: "Med Spas", icon: Scissors },
    { name: "Gyms", icon: Dumbbell },
    { name: "Restaurants", icon: UtensilsCrossed },
  ]

  const benefits = [
    "Capture 100% of incoming calls - never miss another lead",
    "Instant response in under 2 seconds vs 4+ rings for humans",
    "Books appointments 24/7 directly into your calendar",
    "Handles 50+ calls simultaneously without breaking a sweat",
    "Sounds 99% human - customers can't tell the difference",
    "Guaranteed 30-50% revenue increase within 90 days",
  ]

  const stats = [
    { number: "67%", label: "of small business calls go unanswered" },
    { number: "90%", label: "of customers won't call back after no answer" },
    { number: "24/7", label: "availability - never miss peak hours" },
    { number: "1.2 sec", label: "average AI response time" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 md:space-x-3">
              <Image src="/logo.png" alt="Tiham AI Studio" width={32} height={32} className="w-8 h-8 md:w-10 md:h-10" />
              <span className="text-lg md:text-2xl font-bold text-gray-900">Tiham AI Studio</span>
            </div>
            <Link href="https://tally.so/r/3y8G66" target="_blank">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-sm md:px-6 md:text-base">
                Get Free Demo
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-10 leading-tight">
            Turn Missed Calls Into
            <span className="text-blue-600"> Paying Customers</span>
          </h1>
          <p className="text-sm md:text-2xl text-gray-700 mb-4 md:mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            <strong>67% of your leads won't call back — they'll call your competitor.</strong>
          </p>
          <p className="text-sm md:text-xl text-gray-600 mb-6 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Our AI Receptionist answers instantly, captures leads, and books them — so you never miss a sale again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://tally.so/r/3y8G66" target="_blank">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-10 md:py-5 text-base md:text-xl font-semibold"
              >
                Get Free Custom Demo
                <ArrowRight className="ml-2 h-4 w-4 md:ml-3 md:h-6 md:w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - moved right after hero */}
      <section className="py-4 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-gray-600 text-xs md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section - now comes after stats */}
      <section className="py-16 md:py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-24">
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-8">
              The Hidden Revenue Killer in Your Business
            </h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
              <strong>You're bleeding money every single day from missed calls.</strong> Here's the brutal reality most
              business owners don't realize:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-red-100 p-2 md:p-3 rounded-full">
                  <Phone className="h-4 w-4 md:h-6 md:w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                    Most Calls Go Straight to Voicemail
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong>Reality check:</strong> Small businesses answer only 1 out of 3 calls during business hours.
                    After 5pm, weekends, and lunch breaks? Almost zero. Meanwhile, your competitors who answer first get
                    the job.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-red-100 p-2 md:p-3 rounded-full">
                  <Clock className="h-4 w-4 md:h-6 md:w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">90% Never Call Back</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong>Customer behavior studies show:</strong> 90% of customers won't call back if you don't
                    answer. They immediately call your competitor instead. Every ring counts - customers expect answers
                    within 3 rings or 15 seconds.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-red-100 p-2 md:p-3 rounded-full">
                  <DollarSign className="h-4 w-4 md:h-6 md:w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                    Each Missed Call Costs $500-$5,000
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong>Industry analysis:</strong> Average job values: HVAC emergency calls ($800-$2,500), roofing
                    projects ($8,000-$15,000), dental procedures ($200-$3,000). Missing just 3 calls per week =
                    $78,000-$390,000 lost annually.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border-2 border-red-200">
              <RevenueCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-24">
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-8">
              The Solution: Never Miss Another Call
            </h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
              <strong>The math is simple: More answered calls = More customers = More money.</strong>
              Our AI Receptionist answers every call instantly, books appointments automatically, and turns missed
              opportunities into revenue. One-time setup, lifetime of captured leads.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Phone className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">Capture Every Dollar</h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-base">
                  Every call that goes to voicemail is money lost forever. Our AI answers in under 2 seconds, 24/7. No
                  more "sorry I missed your call" - just instant connection to paying customers.
                </p>
                <div className="text-lg md:text-2xl font-bold text-blue-600">$0 Lost Revenue</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Calendar className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">Turn Calls Into Cash</h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-base">
                  Stop playing phone tag. Our AI qualifies leads, handles objections, and books appointments instantly.
                  Callers become customers before they hang up.
                </p>
                <div className="text-lg md:text-2xl font-bold text-blue-600">Instant Bookings</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">
                  More Calls = More Money
                </h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-base">
                  Simple equation: Answer more calls, make more money. Clients typically see $20,000-$50,000 additional
                  monthly revenue just from capturing calls they used to miss.
                </p>
                <div className="text-lg md:text-2xl font-bold text-blue-600">$35K+ Monthly</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-24">
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-8">
              Built for Service-Based Businesses
            </h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for businesses that rely on phone calls for bookings and appointments:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-3 md:p-8 rounded-xl text-center hover:bg-blue-50 transition-colors group"
                >
                  <div className="bg-blue-100 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <span className="text-xs md:text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {industry.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-24">
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-8">
              What This Means for Your Business
            </h2>
            <p className="text-sm md:text-xl text-gray-600">
              <strong>Stop losing customers to competitors.</strong> Here's exactly what changes when you never miss a
              call:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 md:space-x-4">
                <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-green-600 mt-0.5 md:mt-1 flex-shrink-0" />
                <span className="text-xs md:text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-4xl font-bold text-white mb-3 md:mb-6">
            Stop Losing Customers to Your Competitors
          </h2>
          <p className="text-sm md:text-xl text-blue-100 mb-4 md:mb-8 max-w-3xl mx-auto">
            <strong>Every day you wait, you're losing customers.</strong> Apply for a free custom demo and see exactly
            how our AI receptionist will capture every lead for your specific business. Limited spots available.
          </p>
          <Link href="https://tally.so/r/3y8G66" target="_blank">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold"
            >
              Apply for Free Custom Demo
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
          <p className="text-blue-100 mt-3 md:mt-4 text-xs md:text-base">
            ✓ See it work with your actual business data ✓ Custom-built for your industry
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-0">
              <Image src="/logo.png" alt="Tiham AI Studio" width={24} height={24} className="w-6 h-6 md:w-8 md:h-8" />
              <span className="text-lg md:text-xl font-bold text-white">Tiham AI Studio</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base">© 2024 Tiham AI Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
