import * as z from 'zod'
import type { FileResumeSchema } from './file-resume-schema'

export type FileResume = z.infer<typeof FileResumeSchema>
