"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function RevenueCalculator() {
  const [avgCallValue, setAvgCallValue] = useState(750)
  const [callsPerWeek, setCallsPerWeek] = useState(50)
  const [missedCallRate, setMissedCallRate] = useState(65)
  const [closingRate, setClosingRate] = useState(30)

  const missedCallsPerWeek = Math.round((callsPerWeek * missedCallRate) / 100)
  const potentialLeadsLost = Math.round((missedCallsPerWeek * closingRate) / 100)
  const weeklyLoss = potentialLeadsLost * avgCallValue
  const monthlyLoss = weeklyLoss * 4.33
  const annualLoss = monthlyLoss * 12

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-red-600 mb-4 text-center">Interactive Revenue Loss Calculator</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <Label htmlFor="call-value" className="text-xs font-medium text-gray-700 mb-1 block">
              Average Service/Job Value ($)
            </Label>
            <Input
              id="call-value"
              type="number"
              value={avgCallValue}
              onChange={(e) => setAvgCallValue(Number(e.target.value))}
              className="w-full text-sm"
            />
          </div>

          <div>
            <Label htmlFor="calls-per-week" className="text-xs font-medium text-gray-700 mb-1 block">
              Total Calls Per Week
            </Label>
            <Input
              id="calls-per-week"
              type="number"
              value={callsPerWeek}
              onChange={(e) => setCallsPerWeek(Number(e.target.value))}
              className="w-full text-sm"
            />
          </div>

          <div>
            <Label className="text-xs font-medium text-gray-700 mb-2 block">Missed Call Rate: {missedCallRate}%</Label>
            <Slider
              value={[missedCallRate]}
              onValueChange={(value) => setMissedCallRate(value[0])}
              max={90}
              min={30}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>30%</span>
              <span>90%</span>
            </div>
          </div>

          <div>
            <Label className="text-xs font-medium text-gray-700 mb-2 block">Lead Conversion Rate: {closingRate}%</Label>
            <Slider
              value={[closingRate]}
              onValueChange={(value) => setClosingRate(value[0])}
              max={80}
              min={10}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10%</span>
              <span>80%</span>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
          <h4 className="font-bold text-gray-900 mb-3 text-sm">Your Revenue Loss Breakdown</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-1 border-b border-red-200">
              <span className="text-gray-600 text-xs">Calls missed per week:</span>
              <span className="font-semibold text-red-600 text-xs">{missedCallsPerWeek}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-red-200">
              <span className="text-gray-600 text-xs">Potential leads lost per week:</span>
              <span className="font-semibold text-red-600 text-xs">{potentialLeadsLost}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-red-200">
              <span className="text-gray-600 text-xs">Weekly revenue lost:</span>
              <span className="font-semibold text-red-600 text-xs">${weeklyLoss.toLocaleString()}</span>
            </div>
            <div className="bg-white p-3 rounded-lg mt-3 border-2 border-red-300">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-900 font-bold">Monthly loss:</span>
                <span className="font-bold text-red-600">${monthlyLoss.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-gray-900 font-bold">Annual loss:</span>
                <span className="font-bold text-red-600">${annualLoss.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 mt-3">
        <p>
          💡 <strong>Tip:</strong> Adjust the sliders based on your industry. HVAC/Roofing typically have higher missed
          call rates and job values.
        </p>
      </div>
    </div>
  )
}
