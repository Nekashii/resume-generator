export interface Resume {
  meta: {
    name: string
    locale: string
  }
  basics: {
    fullName: string
    jobTitle?: string
    location: string
    emailAddress: string
    phoneNumber: string
    links?: string[]
    summary?: {
      sectionTitle?: string
      content: string
    }
  }
  education?: {
    sectionTitle: string
    items: {
      institution: string
      degree: string
      location?: string
      graduationDate: string
      summary?: string
      highlights?: string[]
    }[]
  }
  workExperience?: {
    sectionTitle: string
    items: {
      organization: string
      position: string
      location?: string
      dateRange: string
      summary?: string
      highlights?: string[]
    }[]
  }
  leadershipAndActivities?: {
    sectionTitle: string
    items: {
      organization: string
      role: string
      location?: string
      dateRange: string
      summary?: string
      highlights?: string[]
    }[]
  }
  projects?: {
    sectionTitle: string
    items: {
      name: string
      dateRange: string
      summary?: string
      highlights?: string[]
    }[]
  }
  certifications?: {
    sectionTitle: string
    items: {
      name: string
      issuer: string
      date?: string
    }[]
  }
  skillsAndInterests?: {
    sectionTitle: string
    skills: {
      name: string
      subskills?: string[]
    }[]
  }
}
