import React, { useState } from "react"
import Header from "../components/Header"

const faqsData = [
    {
        id: 1,
        question: "How much is shipping?",
        answer:
            "Standard Shipping: We charge items are $5.99 for the first item + $1.99 for additional items shipped domestic and $6.99 for the first item + $1.99 per each additional product to the rest of the world."
    },
    {
        id: 2,
        question: "Can I expedite my order?",
        answer:
            "We currently do not offer expedited shipping because all of our products are custom made-to-order after each purchase. We are looking into ways to expand our shipping options for you."
    },
    {
        id: 3,
        question: "Can I deliver to multiple addresses?",
        answer:
            "We do not offer shipping to multiple addresses for a single order. If you would like items delivered to multiple addresses, please place those orders separately."
    },
    {
        id: 4,
        question: "Do you offer delivery to PO Boxes or Military APO/FPO addresses?",
        answer:
            "Yes, we can send shipments to PO Boxes and Military APO/FPO addresses. Orders shipped to APO addresses are done so via DHL or UPS, and then are turned over to USPS for final delivery (through the military mail system). Shipments to APOs can take up to 45 additional days to arrive. Unfortunately, once the package enters the military mail system, tracking ceases to update for military security reasons. This means that we no longer have visibility of your order and cannot provide tracking information."
    },
    {
        id: 5,
        question: "Will I be charged VAT taxes?",
        answer:
            "Items shipping internationally from the US are shipped DDU (Delivered Duty Unpaid) and we do not collect VAT (Value Added Taxes). All taxes, duties, and customs fees are the responsibility of the recipient of the package. Depending on the receiving country, your package may incur local customs or VAT charges. We recommend contacting your local customs office for more information regarding your country’s customs policies. Items fulfilled from the UK and EU are charged a 20% VAT rate."
    },
    {
        id: 6,
        question: "Where do I get tracking info?",
        answer:
            "An email with tracking details will be sent to you the moment your product is shipped out!"
    },
    {
        id: 7,
        question: "Have not received my order yet, now what?",
        answer:
            "First, check tracking info and see if it was delivered. If it says delivered but never received please allow a few more days. Sometimes products are delivered late by DHL or scanned delivered by mistake. Then call or email us regarding the whereabouts of your order!"
    }
]


const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <>
            <Header />

            <div className="font-lora">
                <div className="text-white bg-cover h-[50vh] flex items-center justify-center bg-center bg-[url('https://ap-bokifa.myshopify.com/cdn/shop/files/Mask_group_13_1.jpg?v=1729915599&width=2000')]">
                    <h1 className="text-6xl">FAQs</h1>
                </div>

                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h1 className="text-5xl font-extralight mb-10">
                        Help Center
                    </h1>

                    <div className="space-y-4">
                        {faqsData.map((item, index) => (
                            <div
                                key={index}
                                className="border rounded-xl overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium hover:bg-gray-50 transition"
                                >
                                    {item.question}
                                    <span className="text-2xl">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index
                                        ? "max-h-40 py-4 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h1 className="text-5xl font-extralight mb-10">
                        Ordering
                    </h1>

                    <div className="space-y-4">
                        {faqsData.map((item, index) => (
                            <div
                                key={index}
                                className="border rounded-xl overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium hover:bg-gray-50 transition"
                                >
                                    {item.question}
                                    <span className="text-2xl">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index
                                        ? "max-h-40 py-4 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs
