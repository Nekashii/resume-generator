export interface Resume {
  meta: {
    name: string
    locale: string
  }
  basics: {
    fullName: string
    jobTitle: string
    location: {
      city: string
      country: string
    }
    emailAddress: string
    phoneNumber: string
    links?: {
      label: string
      site: string
      url: string
    }[]
    summary?: {
      sectionTitle: string
      content: string
    }
  }
  education?: {
    sectionTitle: string
    items: {
      institution: string
      degree: string
      location?: string
      startDate?: string
      endDate?: string
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
      startDate?: string
      endDate?: string
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
      startDate?: string
      endDate?: string
      summary?: string
      highlights?: string[]
    }[]
  }
  projects?: {
    sectionTitle: string
    items: {
      name: string
      startDate?: string
      endDate?: string
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
      url?: string
    }[]
  }
  skillsAndInterests?: {
    sectionTitle: string
    items: {
      category: string
      items?: string[]
    }[]
  }
}
