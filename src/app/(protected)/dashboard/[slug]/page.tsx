import React from 'react'

type Props = {
  params: { slug: string }
}

const Page = ({ params }: Props) => {
  return (
    <div>
      <h2>Dashboard Page for: {params.slug}</h2>
    </div>
  )
}

export default Page
