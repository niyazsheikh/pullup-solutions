import { ArticleCard } from '@/components/ui/article-card';

// Data for the services cards - PullUp's consulting services
const servicesData = [
  {
    category: 'Strategy',
    title: 'Business Strategy',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-emerald-400/70 to-teal-600/70',
    description: 'Data-driven strategies to help your business grow and scale effectively.',
  },
  {
    category: 'Branding',
    title: 'Branding',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d38db7a5495e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-slate-800/70 to-slate-900/70',
    description: 'Build a strong brand identity that resonates with your target audience.',
  },
  {
    category: 'AI',
    title: 'AI Consulting',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-amber-400/70 to-orange-600/70',
    description: 'Leverage artificial intelligence to optimize your business processes.',
  },
  {
    category: 'Technology',
    title: 'Digital Transformation',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-sky-300/70 to-cyan-400/70',
    description: 'Modernize your business with digital solutions and automation.',
  },
  {
    category: 'Marketing',
    title: 'Marketing',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-rose-400/70 to-red-500/70',
    description: 'Strategic marketing campaigns to increase your reach and revenue.',
  },
  {
    category: 'Technology',
    title: 'Technology',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-blue-400/70 to-indigo-500/70',
    description: 'Custom software development and technology solutions for your business.',
  },
];

export default function ServicesDemo() {
  return (
    <div className="p-4 md:p-8 bg-background">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Our Services.</h1>
        <p className="text-muted-foreground mt-2">
          Comprehensive business solutions to help your business grow and thrive.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {servicesData.map((service, index) => (
          <ArticleCard
            key={index}
            category={service.category}
            title={service.title}
            price={service.price}
            imageUrl={service.imageUrl}
            gradient={service.gradient}
          />
        ))}
      </div>
    </div>
  );
}
