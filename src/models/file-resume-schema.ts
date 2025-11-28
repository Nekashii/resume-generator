import * as z from 'zod'

const partialDate = z.string().regex(/^\d{4}(-(0[1-9]|1[0-2])(-(0[1-9]|[12]\d|3[01]))?)?$/)

export const FileResumeSchema = z.object({
  meta: z.object({
    name: z.string({}),
    locale: z.string({}),
  }),
  basics: z.object({
    full_name: z.string(),
    job_title: z.string(),
    location: z.object({
      city: z.string(),
      country: z.string(),
    }),
    email_address: z.string(),
    phone_number: z.string(),
    links: z
      .array(
        z.object({
          label: z.string(),
          site: z.string(),
          url: z.url(),
        })
      )
      .optional(),
    summary: z
      .object({
        section_title: z.string().optional(),
        content: z.string(),
      })
      .optional(),
  }),
  education: z
    .object({
      section_title: z.string(),
      items: z.array(
        z.object({
          institution: z.string(),
          degree: z.string(),
          location: z.string().optional(),
          start_date: partialDate.optional(),
          end_date: partialDate.optional(),
          summary: z.string().optional(),
          highlights: z.array(z.string()).optional(),
        })
      ),
    })
    .optional(),
  work_experience: z
    .object({
      section_title: z.string(),
      items: z.array(
        z.object({
          organization: z.string(),
          position: z.string(),
          location: z.string().optional(),
          start_date: partialDate.optional(),
          end_date: partialDate.optional(),
          summary: z.string().optional(),
          highlights: z.array(z.string()).optional(),
        })
      ),
    })
    .optional(),
  leadership_and_activities: z
    .object({
      section_title: z.string(),
      items: z.array(
        z.object({
          organization: z.string(),
          role: z.string(),
          location: z.string().optional(),
          start_date: partialDate.optional(),
          end_date: partialDate.optional(),
          summary: z.string().optional(),
          highlights: z.array(z.string()).optional(),
        })
      ),
    })
    .optional(),
  projects: z
    .object({
      section_title: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          start_date: partialDate.optional(),
          end_date: partialDate.optional(),
          summary: z.string().optional(),
          highlights: z.array(z.string()).optional(),
        })
      ),
    })
    .optional(),
  certifications: z
    .object({
      section_title: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          issuer: z.string(),
          date: partialDate.optional(),
          url: z.url().optional(),
        })
      ),
    })
    .optional(),
  skills_and_interests: z
    .object({
      section_title: z.string(),
      items: z.array(
        z.object({
          category: z.string(),
          items: z.array(z.string()).optional(),
        })
      ),
    })
    .optional(),
})
