'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

import { ContactFormSchema } from '@/lib/schema'
import CustomFormField from './FormField'
import { useEffect, useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from './ui/toast'

import { CircleX } from 'lucide-react'
import { getCustomLocaleDateTime } from '@/lib/getLocaleTime'

const ContactForm = () => {
  // infering the form fields from the schema
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })
  // const { toast } = useToast()

  // state management
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  // form submit actions
  function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    console.log(values)
    setIsDisabled(true)

    //TODO : on submit success enable
    setTimeout(() => {
      setIsDisabled(false)
    }, 3000)
    //TODO : add toast on submit success
    // showToast()
  }
  // TODO : improve toast
  // function showToast() {
  //   toast({
  //     title: 'Message sent.',
  //     description: `${getCustomLocaleDateTime()}`,
  //     action: (
  //       <ToastAction altText='Close'>
  //         <CircleX />
  //       </ToastAction>
  //     )
  //   })
  // }

  useEffect(() => {
    form.reset()
    //TODO : add message sending related features
  }, [isDisabled])

  return (
    <div>
      <Form {...form}>
        <form
          className='flex-col space-y-6 font-serif'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className='gap-8 sm:flex'>
            <div className='mb-4 flex-1'>
              <CustomFormField
                label='Name'
                placeholder='Enter your name...'
                name='name'
                control={form.control}
                textarea={false}
              />
            </div>
            <div className='flex-1'>
              <CustomFormField
                label='Email'
                placeholder='Enter your email...'
                name='email'
                control={form.control}
                textarea={false}
              />
            </div>
          </div>
          <div className='flex-col'>
            <div className='mb-4'>
              <CustomFormField
                label='Message'
                placeholder='Enter your message here...'
                name='message'
                control={form.control}
                textarea={true}
              />

              <p className='text-xs text-muted-foreground'>
                I will get back to you as soon as I receive your message...
              </p>
            </div>
            <Button
              className='text-md w-full'
              type='submit'
              disabled={isDisabled}
            >
              Submit
            </Button>
          </div>
          {/* // TODO : Add privacy policy page */}
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
