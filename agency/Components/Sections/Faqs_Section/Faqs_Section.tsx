"use client";
import React from 'react'
import Title from '@/Components/Title/Title';
import { faqs } from '@/utils/utils';
import { chevronDown } from '@/utils/icons';
import { motion } from 'framer-motion'

function Faqs_Section() {
    const [activeIndex, setActiveIndex] = React.useState(null);

    const handleToggle = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index)
    }
  return (
    <section className="pt-[5rem] pb-[10rem] mq-sections">
        <Title title='Frequently Asked Questions.' label='FAQ'/>
        <div className="mt-[5rem] grid grid-cols-1 md:grid-cols-2 gap-8">
    {faqs.map((faq, index) => {
        return (
            <motion.div key={index} className="py-4 px-6 bg-2 flex flex-col gap-2 rounded-md border-2 border-color-2 shadow-sm"  onClick={() => handleToggle(index)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
        <motion.div  className="flex items-center justify-between text-gray-300 font-semibold text-lg md:text-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.05}}
            transition={{ type: "string", stiffness: 300}}>
            <span>{faq.question}</span>
            <motion.span className='text-2xl'
            animate={{rotate: activeIndex === index ? 180 : 0}}
            transition={{ duration: 0.3}}>
                {chevronDown}
            </motion.span>
        </motion.div>
        <motion.div
        initial={{ opacity:0, height:0}}
        animate={{
            height: activeIndex === index ? "auto" : 0,
            opacity: activeIndex === index ? 1 : 0,
        }}
        >{faq.answer}</motion.div>
    </motion.div>
        )
    })}
</div>
    </section>
  )
}

export default Faqs_Section