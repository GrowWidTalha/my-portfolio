'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { clientReviews } from "../constants"

export default function Component() {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from my Clients</h3>
      <div className="client-container">
        {clientReviews.map((client) => (
          <TestimonialCard key={client.id} client={client} />
        ))}
      </div>
    </section>
  )
}

function TestimonialCard({ client }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="client-review"
    >
      <div>
        <p className="text-white font-light">{client.review}</p>
      </div>
      <div className="client-content">
        <div className="flex gap-3">
          <img
            src={client.img}
            alt={client.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-white-800">{client.name}</p>
            <p className="text-white-500 md:text-base">
              {client.position}
            </p>
          </div>
        </div>
        <div className="flex items-center self-end gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src="/assets/star.png"
              alt="star"
              className="h-5 w-5"
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
