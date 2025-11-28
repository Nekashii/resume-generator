import type { FileResume } from '../models/file-resume'
import type { Resume } from '../models/resume'

export abstract class ResumeMapper {
  static fromFile(fileResume: FileResume): Resume {
    return {
      meta: {
        name: fileResume.meta.name,
        locale: fileResume.meta.locale,
      },
      basics: {
        fullName: fileResume.basics.full_name,
        jobTitle: fileResume.basics.job_title,
        location: {
          city: fileResume.basics.location.city,
          country: fileResume.basics.location.country,
        },
        emailAddress: fileResume.basics.email_address,
        phoneNumber: fileResume.basics.phone_number,
        links: fileResume.basics.links?.map(link => ({
          label: link.label,
          site: link.site,
          url: link.url,
        })),
        summary: fileResume.basics.summary
          ? {
              sectionTitle: fileResume.basics.summary.section_title,
              content: fileResume.basics.summary.content,
            }
          : undefined,
      },
      education: fileResume.education
        ? {
            sectionTitle: fileResume.education.section_title,
            items: fileResume.education.items.map(item => ({
              institution: item.institution,
              degree: item.degree,
              location: item.location,
              startDate: item.start_date,
              endDate: item.end_date,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      workExperience: fileResume.work_experience
        ? {
            sectionTitle: fileResume.work_experience.section_title,
            items: fileResume.work_experience.items.map(item => ({
              organization: item.organization,
              position: item.position,
              location: item.location,
              startDate: item.start_date,
              endDate: item.end_date,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      leadershipAndActivities: fileResume.leadership_and_activities
        ? {
            sectionTitle: fileResume.leadership_and_activities.section_title,
            items: fileResume.leadership_and_activities.items.map(item => ({
              organization: item.organization,
              role: item.role,
              location: item.location,
              startDate: item.start_date,
              endDate: item.end_date,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      projects: fileResume.projects
        ? {
            sectionTitle: fileResume.projects.section_title,
            items: fileResume.projects.items.map(item => ({
              name: item.name,
              startDate: item.start_date,
              endDate: item.end_date,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      certifications: fileResume.certifications
        ? {
            sectionTitle: fileResume.certifications.section_title,
            items: fileResume.certifications.items.map(item => ({
              name: item.name,
              issuer: item.issuer,
              date: item.date,
              url: item.url,
            })),
          }
        : undefined,
      skillsAndInterests: fileResume.skills_and_interests
        ? {
            sectionTitle: fileResume.skills_and_interests.section_title,
            skills: fileResume.skills_and_interests.skills.map(skill => ({
              name: skill.name,
              subskills: skill.subskills,
            })),
          }
        : undefined,
    }
  }

  static toFile(resume: Resume): FileResume {
    return {
      meta: {
        name: resume.meta.name,
        locale: resume.meta.locale,
      },
      basics: {
        full_name: resume.basics.fullName,
        job_title: resume.basics.jobTitle,
        location: {
          city: resume.basics.location.city,
          country: resume.basics.location.country,
        },
        email_address: resume.basics.emailAddress,
        phone_number: resume.basics.phoneNumber,
        links: resume.basics.links?.map(link => ({
          label: link.label,
          site: link.site,
          url: link.url,
        })),
        summary: resume.basics.summary
          ? {
              section_title: resume.basics.summary.sectionTitle,
              content: resume.basics.summary.content,
            }
          : undefined,
      },
      education: resume.education
        ? {
            section_title: resume.education.sectionTitle,
            items: resume.education.items.map(item => ({
              institution: item.institution,
              degree: item.degree,
              location: item.location,
              start_date: item.startDate,
              end_date: item.endDate,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      work_experience: resume.workExperience
        ? {
            section_title: resume.workExperience.sectionTitle,
            items: resume.workExperience.items.map(item => ({
              organization: item.organization,
              position: item.position,
              location: item.location,
              start_date: item.startDate,
              end_date: item.endDate,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      leadership_and_activities: resume.leadershipAndActivities
        ? {
            section_title: resume.leadershipAndActivities.sectionTitle,
            items: resume.leadershipAndActivities.items.map(item => ({
              organization: item.organization,
              role: item.role,
              location: item.location,
              start_date: item.startDate,
              end_date: item.endDate,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      projects: resume.projects
        ? {
            section_title: resume.projects.sectionTitle,
            items: resume.projects.items.map(item => ({
              name: item.name,
              start_date: item.startDate,
              end_date: item.endDate,
              summary: item.summary,
              highlights: item.highlights,
            })),
          }
        : undefined,
      certifications: resume.certifications
        ? {
            section_title: resume.certifications.sectionTitle,
            items: resume.certifications.items.map(item => ({
              name: item.name,
              issuer: item.issuer,
              date: item.date,
              url: item.url,
            })),
          }
        : undefined,
      skills_and_interests: resume.skillsAndInterests
        ? {
            section_title: resume.skillsAndInterests.sectionTitle,
            skills: resume.skillsAndInterests.skills.map(skill => ({
              name: skill.name,
              subskills: skill.subskills,
            })),
          }
        : undefined,
    }
  }
}
