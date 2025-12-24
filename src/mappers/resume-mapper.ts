import type { FileResume } from "../models/file-resume"
import type { Resume } from "../models/resume"

export abstract class ResumeMapper {
  static fromFile({
    meta,
    basics,
    education,
    work_experience,
    leadership_and_activities,
    projects,
    certifications,
    skills_and_interests,
  }: FileResume): Resume {
    return {
      meta: {
        name: meta.name,
        locale: meta.locale,
      },
      basics: {
        fullName: basics.full_name,
        jobTitle: basics.job_title,
        location: basics.location,
        emailAddress: basics.email_address,
        phoneNumber: basics.phone_number,
        links: basics.links,
        summary: basics.summary
          ? {
              sectionTitle: basics.summary.section_title,
              content: basics.summary.content,
            }
          : undefined,
      },
      education: education
        ? {
            sectionTitle: education.section_title,
            items: education.items.map(item => ({
              institution: item.institution,
              degree: item.degree,
              location: item.location,
              graduationDate: item.graduation_date,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      workExperience: work_experience
        ? {
            sectionTitle: work_experience.section_title,
            items: work_experience.items.map(item => ({
              organization: item.organization,
              position: item.position,
              location: item.location,
              dateRange: item.date_range,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      leadershipAndActivities: leadership_and_activities
        ? {
            sectionTitle: leadership_and_activities.section_title,
            items: leadership_and_activities.items.map(item => ({
              organization: item.organization,
              role: item.role,
              location: item.location,
              dateRange: item.date_range,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      projects: projects
        ? {
            sectionTitle: projects.section_title,
            items: projects.items.map(item => ({
              name: item.name,
              dateRange: item.date_range,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      certifications: certifications
        ? {
            sectionTitle: certifications.section_title,
            items: certifications.items.map(item => ({
              name: item.name,
              issuer: item.issuer,
              date: item.date,
            })),
          }
        : undefined,
      skillsAndInterests: skills_and_interests
        ? {
            sectionTitle: skills_and_interests.section_title,
            skills: skills_and_interests.skills.map(skill => ({
              name: skill.name,
              subskills: skill.subskills,
            })),
          }
        : undefined,
    }
  }

  static toFile({
    meta,
    basics,
    education,
    workExperience,
    leadershipAndActivities,
    projects,
    certifications,
    skillsAndInterests,
  }: Resume): FileResume {
    return {
      meta: {
        name: meta.name,
        locale: meta.locale,
      },
      basics: {
        full_name: basics.fullName,
        job_title: basics.jobTitle,
        location: basics.location,
        email_address: basics.emailAddress,
        phone_number: basics.phoneNumber,
        links: basics.links,
        summary: basics.summary
          ? {
              section_title: basics.summary.sectionTitle,
              content: basics.summary.content,
            }
          : undefined,
      },
      education: education
        ? {
            section_title: education.sectionTitle,
            items: education.items.map(item => ({
              institution: item.institution,
              degree: item.degree,
              location: item.location,
              graduation_date: item.graduationDate,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      work_experience: workExperience
        ? {
            section_title: workExperience.sectionTitle,
            items: workExperience.items.map(item => ({
              organization: item.organization,
              position: item.position,
              location: item.location,
              date_range: item.dateRange,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      leadership_and_activities: leadershipAndActivities
        ? {
            section_title: leadershipAndActivities.sectionTitle,
            items: leadershipAndActivities.items.map(item => ({
              organization: item.organization,
              role: item.role,
              location: item.location,
              date_range: item.dateRange,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      projects: projects
        ? {
            section_title: projects.sectionTitle,
            items: projects.items.map(item => ({
              name: item.name,
              date_range: item.dateRange,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      certifications: certifications
        ? {
            section_title: certifications.sectionTitle,
            items: certifications.items.map(item => ({
              name: item.name,
              issuer: item.issuer,
              date: item.date,
            })),
          }
        : undefined,
      skills_and_interests: skillsAndInterests
        ? {
            section_title: skillsAndInterests.sectionTitle,
            skills: skillsAndInterests.skills.map(skill => ({
              name: skill.name,
              subskills: skill.subskills,
            })),
          }
        : undefined,
    }
  }
}
