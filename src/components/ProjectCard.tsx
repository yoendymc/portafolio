type Props = {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='block p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow hover:shadow-lg transition'
    >
      <h4 className='text-lg font-bold mb-2'>{title}</h4>
      <p className='text-gray-700 dark:text-gray-300 text-sm'>{description}</p>
    </a>
  )
}
