"use client"

const Pricing = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Select the perfect plan for your Instagram growth needs
          </p>
        </div>

        {/* Pricing cards will go here */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="coming-soon">Pricing options coming soon</div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
