import { cn } from "@/lib/utils"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  label: string
  current: "PRO" | "FREE"
  landing?: boolean
}

const PLANS = [
  {
    name: "Standard",
    description: "Perfect for getting started",
    price: "Free",
    features: [
      "Boost engagement with target responses",
      "Automate comment replies to enhance audience interaction",
      "Turn followers into customers with targeted messaging",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium Plan",
    description: "Advanced features for power users",
    price: "$99",
    features: [
      "All features from Free Plan",
      "AI-powered response generation",
      "Advanced analytics and insights",
      "Priority customer support",
      "Custom branding options",
    ],
    cta: "Upgrade Now",
  },
]

const PaymentCard = ({ current, label, landing }: Props) => {
  // Find the plan corresponding to the label (either 'PRO' or 'FREE')
  const plan = label === "PRO" ? PLANS[1] : PLANS[0]

  return (
    <div className="rounded-xl overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 p-[1px] flex-1">
      <div className="flex flex-col rounded-xl p-5 bg-black text-white h-full">
        <h2 className="text-white font-medium">Your Current Plan</h2>
        <p className="text-gray-400 text-sm mb-3">This is what your plan covers for automations and AI features</p>

        <div className="mb-3">
          <span className={cn("font-medium text-lg", label === "PRO" ? "text-pink-500" : "text-purple-400")}>
            {plan.name}
          </span>
          <div className={cn("font-medium text-lg", label === "PRO" ? "text-pink-500" : "text-purple-400")}>
            {plan.price}
          </div>
        </div>

        {/* Plan Features */}
        <ul className="space-y-3 mb-auto">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
              <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 text-center">
          {label === current ? (
            <div className="text-gray-400 text-sm">Active</div>
          ) : (
            <Button
              className={cn(
                "rounded-md px-6 py-1 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90",
              )}
            >
              Upgrade
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PaymentCard
