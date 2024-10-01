import ContactForm from '@/components/ContactForm'

const contact = () => {
  return (
    <div className='container max-w-3xl flex-col py-16'>
      <h1 className='flex font-serif text-xl font-bold text-orange-500 sm:text-3xl'>
        Let's talk together.
      </h1>
      <h2 className='mb-10 flex font-serif text-sm sm:text-xl'>
        Send me a message.
      </h2>
      <ContactForm />
    </div>
  )
}

export default contact
