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
    <div className="rounded-xl overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 p-[1px]">
      <div className="flex flex-col rounded-xl p-4 bg-black text-white">
        <h2 className="text-white font-medium mb-1">{!landing ? "Your Current Plan" : plan.name}</h2>

        <p className="text-gray-400 text-sm mb-1">This is what your plan covers for automations and AI features</p>

        <div className="mb-1 mt-1">
          <span className={cn("font-medium", label === "PRO" ? "text-pink-500" : "text-purple-400")}>{plan.name}</span>
          <div className="text-purple-400 font-medium">{plan.price}</div>
        </div>

        {/* Plan Features */}
        <ul className="space-y-2 mt-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
              <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {landing ? (
          <Button
            className={cn(
              "rounded-full mt-5",
              label === "PRO"
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                : "bg-background-80 text-white hover:text-background-80",
            )}
          >
            {label === current ? "Get Started" : current === "PRO" ? "Free" : "Get Started"}
          </Button>
        ) : (
          <Button
            className="rounded-full mt-5 bg-background-80 text-white hover:text-background-80"
            disabled={label === current}
          >
            {label === current ? "Active" : current === "PRO" ? "Downgrade" : "Upgrade"}
          </Button>
        )}
      </div>
    </div>
  )
}

export default PaymentCard
