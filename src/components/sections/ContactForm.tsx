import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { contactInterests, contactProjectStages } from '../../data/contact'
import { Button } from '../ui/Button'

type FormValues = Record<
  'name' | 'email' | 'company' | 'phone' | 'interest' | 'stage' | 'message' | 'website',
  string
>
type FormErrors = Partial<Record<keyof FormValues, string>>
type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
type ValidationResponse = {
  errors?: Record<string, string[]>
  message?: string
}

const initialValues: FormValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  interest: '',
  stage: '',
  message: '',
  website: '',
}

const apiBaseUrl = import.meta.env.VITE_CONTACT_API_BASE_URL?.trim()
const endpoint = apiBaseUrl
  ? `${apiBaseUrl.replace(/\/$/, '')}/api/contact`
  : '/api/contact'

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      const next = { ...current }
      delete next[field]
      return next
    })
    if (status !== 'submitting') setStatus('idle')
  }

  const getFieldError = (
    field: keyof FormValues,
    submittedValues: FormValues,
  ) => {
    if (field === 'name' && submittedValues.name.trim().length < 2) {
      return 'Enter a name with at least 2 characters.'
    }
    if (field === 'email' && !submittedValues.email.trim()) {
      return 'Enter your business email.'
    }
    if (field === 'email' && !/^\S+@\S+\.\S+$/.test(submittedValues.email)) {
      return 'Enter a valid email address.'
    }
    if (field === 'company' && submittedValues.company.trim().length < 2) {
      return 'Enter your company name.'
    }
    if (
      field === 'phone' &&
      submittedValues.phone.trim() &&
      (submittedValues.phone.length > 40 ||
        !/^[\d+\-() ]+$/.test(submittedValues.phone))
    ) {
      return 'Enter a valid phone number or leave it blank.'
    }
    if (field === 'interest' && !submittedValues.interest) {
      return 'Select what you would like to discuss.'
    }
    if (field === 'stage' && !submittedValues.stage) {
      return 'Select the current project stage.'
    }
    if (field === 'message' && submittedValues.message.trim().length < 20) {
      return 'Tell us a little about your project in at least 20 characters.'
    }

    return undefined
  }

  const validateField = (field: keyof FormValues) => {
    if (field === 'website') return

    const error = getFieldError(field, values)
    setErrors((current) => ({ ...current, [field]: error }))
  }

  const validate = (submittedValues: FormValues) => {
    const next: FormErrors = {}

    ;(['name', 'email', 'company', 'phone', 'interest', 'stage', 'message'] as const).forEach(
      (field) => {
        const error = getFieldError(field, submittedValues)
        if (error) next[field] = error
      },
    )

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validate(values)) {
      setStatus('error')
      setStatusMessage('Please correct the highlighted fields.')
      return
    }

    setStatus('submitting')
    setStatusMessage('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const body = (await response
        .json()
        .catch(() => ({} as ValidationResponse))) as ValidationResponse

      if (!response.ok) {
        const serverErrors = Object.fromEntries(
          Object.entries(body.errors ?? {}).map(([field, messages]) => [
            field,
            messages[0] ?? 'Check this field.',
          ]),
        ) as FormErrors

        setErrors(serverErrors)
        setStatus('error')
        setStatusMessage(
          response.status === 429
            ? 'Too many enquiries were submitted from this connection. Please wait and try again.'
            : 'We could not send your enquiry at this time. Please try again or contact PAL INFOSYS directly by email or phone.',
        )
        return
      }

      setValues(initialValues)
      setErrors({})
      setStatus('success')
      setStatusMessage(
        body.message ?? 'Thank you. Your enquiry has been sent to PAL INFOSYS.',
      )
    } catch {
      setStatus('error')
      setStatusMessage(
        'We could not send your enquiry at this time. Please try again or contact PAL INFOSYS directly by email or phone.',
      )
    }
  }

  const fieldClass = (field: keyof FormValues) =>
    `mt-2 w-full rounded-card border bg-white px-4 py-3 text-text outline-none transition focus:border-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${errors[field] ? 'border-brand-red' : 'border-border'}`

  const isSubmitting = status === 'submitting'

  return (
    <form aria-busy={isSubmitting} className="mt-8" noValidate onSubmit={handleSubmit}>
      <div
        aria-hidden="true"
        className="absolute -left-[10000px] h-px w-px overflow-hidden opacity-0"
      >
        <label htmlFor="website">Website</label>
        <input
          autoComplete="off"
          id="website"
          name="website"
          onChange={(event) => updateValue('website', event.target.value)}
          tabIndex={-1}
          type="text"
          value={values.website}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field error={errors.name} id="name" label="Name" required>
          <input
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            className={fieldClass('name')}
            disabled={isSubmitting}
            id="name"
            name="name"
            onBlur={() => validateField('name')}
            onChange={(event) => updateValue('name', event.target.value)}
            required
            value={values.name}
          />
        </Field>
        <Field error={errors.email} id="email" label="Business Email" required>
          <input
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            className={fieldClass('email')}
            disabled={isSubmitting}
            id="email"
            inputMode="email"
            name="email"
            onBlur={() => validateField('email')}
            onChange={(event) => updateValue('email', event.target.value)}
            required
            type="email"
            value={values.email}
          />
        </Field>
        <Field error={errors.company} id="company" label="Company" required>
          <input
            aria-describedby={errors.company ? 'company-error' : undefined}
            aria-invalid={Boolean(errors.company)}
            autoComplete="organization"
            className={fieldClass('company')}
            disabled={isSubmitting}
            id="company"
            name="company"
            onBlur={() => validateField('company')}
            onChange={(event) => updateValue('company', event.target.value)}
            required
            value={values.company}
          />
        </Field>
        <Field error={errors.phone} id="phone" label="Phone (optional)">
          <input
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            aria-invalid={Boolean(errors.phone)}
            autoComplete="tel"
            className={fieldClass('phone')}
            disabled={isSubmitting}
            id="phone"
            inputMode="tel"
            name="phone"
            onBlur={() => validateField('phone')}
            onChange={(event) => updateValue('phone', event.target.value)}
            type="tel"
            value={values.phone}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field
          error={errors.interest}
          id="interest"
          label="What can we help with?"
          required
        >
          <select
            aria-describedby={errors.interest ? 'interest-error' : undefined}
            aria-invalid={Boolean(errors.interest)}
            className={fieldClass('interest')}
            disabled={isSubmitting}
            id="interest"
            name="interest"
            onBlur={() => validateField('interest')}
            onChange={(event) => updateValue('interest', event.target.value)}
            required
            value={values.interest}
          >
            <option value="">Select an option</option>
            {contactInterests.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </Field>
        <Field error={errors.stage} id="stage" label="Project Stage" required>
          <select
            aria-describedby={errors.stage ? 'stage-error' : undefined}
            aria-invalid={Boolean(errors.stage)}
            className={fieldClass('stage')}
            disabled={isSubmitting}
            id="stage"
            name="stage"
            onBlur={() => validateField('stage')}
            onChange={(event) => updateValue('stage', event.target.value)}
            required
            value={values.stage}
          >
            <option value="">Select a stage</option>
            {contactProjectStages.map((stage) => (
              <option key={stage}>{stage}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field error={errors.message} id="message" label="Project Message" required>
          <textarea
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={Boolean(errors.message)}
            className={fieldClass('message')}
            disabled={isSubmitting}
            id="message"
            maxLength={3000}
            name="message"
            onBlur={() => validateField('message')}
            onChange={(event) => updateValue('message', event.target.value)}
            required
            rows={5}
            value={values.message}
          />
        </Field>
      </div>

      {statusMessage ? (
        <p
          aria-live={status === 'error' ? 'assertive' : 'polite'}
          className={`mt-5 text-sm font-semibold ${status === 'success' ? 'text-ink' : 'text-brand-red'}`}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {statusMessage}
        </p>
      ) : null}

      <Button
        className="mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? 'Sending enquiry…' : 'Start the Conversation'}
      </Button>
    </form>
  )
}

function Field({
  children,
  error,
  id,
  label,
  required = false,
}: {
  children: ReactNode
  error?: string
  id: string
  label: string
  required?: boolean
}) {
  return (
    <div>
      <label className="type-nav text-ink" htmlFor={id}>
        {label}
        {required ? (
          <span aria-hidden="true" className="text-brand-red">
            {' '}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-brand-red" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
