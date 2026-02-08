import React, { useState } from 'react'
import Container from '@/components/layout/Container'
import {useForm} from 'react-hook-form'
import Input from '@/components/forms/Input'
import TextArea from '@/components/forms/TextArea'
import {Button} from '@/components/ui/Button'
import EmailInput from '@/components/forms/EmailInput'
import SEO from '@/components/SEO'
import FloatingBlob from '@/components/animations/FloatingBlob'
import PageTransition from '@/components/animations/PageTransition'



const Contact = () => {

  const {register, handleSubmit,reset, formState:{errors, isSubmitting}} = useForm({mode: "onChange"})

  const [status, setStatus] = useState("idle")   //idle / success / error


  const onSubmit = async (data)=> {
    // console.log("Form submitted:", data)
    // reset()
    // alert("Message sent.")

    try {
      const res = await fetch('https://formspree.io/f/mreagjpv', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify(data)

      })
      if(res.ok){
        setStatus("success")
        reset()

      }
      else{
        setStatus("error")
      }
      
    } catch (error) {
      setStatus("error")
    }
  }

  

  return (
    <PageTransition>
      <section className='py-24 bg-muted'>
        <SEO title="Krishna Ghimire | contact" description="You can contact me with this form." />
        <Container className='relative'>
          <FloatingBlob size={100} color="bg-red-400" top={50} left={30} delay={0} />
          <FloatingBlob size={60} color="bg-blue-400" top={200} left={200} delay={2} />
          <FloatingBlob size={80} color="bg-yellow-400" top={150} left={200} delay={1} />
          <FloatingBlob size={50} color="bg-purple-400" top={300} left={100} delay={3} />
          <div className='max-w-md m-auto relative z-10 space-y-12 border rounded-md p-10 bg-amber-50 shadow-2xl'>
            <div className='space-y-6'>
              <h1 className='font-bold text-2xl tracking-tight text-center'>Contact Me</h1>
              <p className='font-medium text-justify text-accent-foreground'>
                Got a project idea or just want to say hi? Fill out the form below!
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6' noValidate>
              <div>
                  <Input label="Name"
                  placeholder="Your name"
                  register={register}
                  required
                  />
              {errors.Name && <span className='text-red-400 text-sm'>Name is required.</span>}
              </div>
              <div>
                <EmailInput label="Email"
                placeholder="Your email"
                register={register}
                required
                />
                <span className='text-red-400 text-sm'>{errors.Email?.message}</span>
              </div>
              <div>
                <TextArea
                label="Message"
                register={register} 
                required 
                rows={5} 
                placeholder="Your message"
                />
                {errors.Message && <span className='text-red-400 text-sm'>Message is required.</span>}
              </div>
              <Button type="submit" disabled={isSubmitting} className="hover:bg-muted-foreground  hover:border-2" size='sm'>
                {isSubmitting ? "Sending...": "Send Message"}
              </Button>

              {/*Status*/}

              {
                status === "success" && (
                  <p className='text-green-600'>
                    Message sent successfully.
                  </p>
                )
              }
              {
                status === "error" && (
                  <p className='text-red-600'>
                    Something went wrong. Try again.
                  </p>
                )
              }
            </form>
          </div>

        </Container>

      </section>
    </PageTransition>
  )
}

export default Contact
