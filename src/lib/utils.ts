import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Project } from "#site/content"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export function sortProjects(projects: Array<Project>) {
  return projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}