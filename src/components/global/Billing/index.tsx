import PaymentCard from "./Payment-card"


type Props = {}

const Billing = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-5 w-full">
        <PaymentCard current="FREE" label="FREE" />

        <PaymentCard current="FREE" label="PRO" />
      </div>
    </div>
  )
}

export default Billing
