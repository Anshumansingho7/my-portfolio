import React from 'react';
import Header from '../components/Header';

export default function Project() {
  return (
    <div className="Project">
      <Header />
      <div className='mt-10 md:container md:mx-auto md:my-20 text-white'>
        <div className="bg-background text-foreground p-8 md:p-12 relative z-10 shadow-lg rounded-lg">
          <h1 className="text-4xl font-extrabold mb-6 animate-fade-in text-primary">Projects</h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">Explore some of my work, ranging from professional projects to personal endeavors.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-in border-t border-b border-gray-200 py-8">
            {[
              {
                date: "Sep 1, 2022",
                title: "inKind - Ruby on Rails",
                description: "inKind connects savvy diners with top-rated restaurants, bars and cafés where every meal is a VIP experience, and every experience builds community.",
                link: "#"
              },
              {
                date: "Aug 1, 2021",
                title: "Oi - Discord BOT",
                description: "Oi is a Best Music and Multipurpose bot which contains more than 190 commands which helps user to manage their server.",
                link: "#"
              },
              {
                date: "May 1, 2023",
                title: "Wendy's - Fast food restaurant chain",
                description: "Puppet Infrastructure Management & Developer",
                link: "#"
              }
            ].map((project, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-card-hover">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                <h2 className="text-2xl font-semibold mt-4 text-secondary">{project.title}</h2>
                <p className="text-muted-foreground mt-3">{project.description}</p>
                <a href={project.link} className="text-primary hover:underline mt-4 block">Read more →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
