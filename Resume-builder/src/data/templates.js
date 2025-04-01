export const templates = [
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Clean and contemporary design with purple and gold accents',
    preview: {
      style: {
        header: 'border-b-2 border-[#6D28D9]',
        title: 'text-[#6D28D9]',
        subtitle: 'text-gray-600',
        sectionTitle: 'text-[#FFD700]',
        skills: 'bg-[#6D28D9]/10 text-[#6D28D9]'
      }
    }
  },
  {
    id: 'classic',
    name: 'Classic Executive',
    description: 'Traditional two-column layout with professional typography',
    preview: {
      style: {
        header: 'grid grid-cols-2',
        title: 'font-serif text-gray-800',
        subtitle: 'font-serif text-gray-600',
        sectionTitle: 'font-serif text-gray-800',
        skills: 'list-disc list-inside text-gray-600'
      }
    }
  },
  {
    id: 'creative',
    name: 'Creative Contemporary',
    description: 'Modern design with color-blocked sections and icons',
    preview: {
      style: {
        header: 'bg-[#6D28D9] text-white p-4 rounded-lg',
        title: 'text-white',
        subtitle: 'text-white/80',
        sectionTitle: 'text-[#FFD700] flex items-center',
        skills: 'bg-[#6D28D9]/10 text-[#6D28D9] rounded-full'
      }
    }
  }
]; 