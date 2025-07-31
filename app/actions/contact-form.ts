"use server"

import { z } from "zod"
import { isLikelySpam } from "@/lib/spam-protection"

// Define validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Imię musi zawierać co najmniej 2 znaki" }),
  email: z.string().email({ message: "Proszę podać prawidłowy adres email" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Wiadomość musi zawierać co najmniej 10 znaków" }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Zgoda na przetwarzanie danych jest wymagana" }),
  }),
  // Honeypot field - should be empty
  website: z.string().max(0, { message: "Wykryto spam" }).optional(),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    message?: string[]
    consent?: string[]
    website?: string[]
    _form?: string[]
  }
  message?: string
  success?: boolean
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Check honeypot field first
  const honeypot = formData.get("website")
  if (honeypot && honeypot.toString().length > 0) {
    // This is likely a bot - return success but don't process
    console.log("Spam submission detected via honeypot")
    return {
      message: "Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.",
      success: true,
    }
  }

  // Check submission timing
  const formStartTime = formData.get("formStartTime")
  if (formStartTime) {
    const startTime = Number.parseInt(formStartTime.toString(), 10)
    if (isLikelySpam(startTime)) {
      console.log("Spam submission detected via timing")
      // We could block here, but for demonstration we'll just log it
    }
  }

  // Validate form data
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || "",
    message: formData.get("message"),
    consent: formData.get("consent") === "on",
    website: formData.get("website") || "",
  })

  // Return errors if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Proszę poprawić błędy w formularzu.",
      success: false,
    }
  }

  const { name, email, phone, message } = validatedFields.data

  try {
    // In a real application, you would send an email or store the data in a database
    // For demonstration purposes, we'll simulate a delay and return success
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log the form data (in a real app, you'd send this data somewhere)
    console.log("Form submission:", { name, email, phone, message })

    // Return success state
    return {
      message: "Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.",
      success: true,
    }
  } catch (error) {
    // Handle any errors
    console.error("Form submission error:", error)
    return {
      errors: {
        _form: ["Wystąpił błąd podczas wysyłania formularza. Proszę spróbować ponownie."],
      },
      success: false,
    }
  }
}
