// import { z } from 'zod'
// import { ContactFormSchema } from './schema'

// type ContactFormInputs = z.infer<typeof ContactFormSchema>

// export async function sendEmail(data: { data: ContactFormInputs }) {
//   const result = ContactFormSchema.safeParse(data)

//   if (result.error) {
//     return { error: result.error.format() }
//   }

//   try {
//     const { name, email, message } = result.data
//     const { data, error } = await resend.emails.send({
//       from: 'berthonysully@gmail.com',
//       to: [email],
//       cc: 'berthonysully@gmail.com',
//       subject: 'Contact form submission',
//       text: `Name${name}\nEmail${email}\nMessage:${message}`,
//       react: ContactFormEmail({ name, email, message })
//     })
//     if (!data || error) {
//       throw new Error('Failed to send email')
//     }
//     return { success: true }
//   } catch (error) {
//     return { error }
//   }

//   const response = await fetch('/api/send-email', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   if (!response.ok) {
//     return { error: true }
//   }
//   return { error: false }
// }
