import React from 'react';

const videos = [
  {
    title: 'Sreedrisya & Sreejith Wedding Highlights',
    videoId: 'sHGxNxInifk',
  },
  {
    title: 'Sreejith & Sreedrisya Wedding Teaser',
    videoId: 'QwQvQnQwQwQ',
  },
  {
    title: 'Corporate Video | Company Profile',
    videoId: '1A2B3C4D5E6',
  },
  {
    title: 'Event Highlights | Annual Day',
    videoId: '7F8G9H0I1J2',
  },
  {
    title: 'Documentary | Life in Kerala',
    videoId: '3K4L5M6N7O8',
  },
  {
    title: 'Product Commercial | Juice Ad',
    videoId: '9P0Q1R2S3T4',
  },
  {
    title: 'Music Video | Dance Performance',
    videoId: '5U6V7W8X9Y0',
  },
  {
    title: 'Short Film | The Journey',
    videoId: '1Z2X3C4V5B6',
  },
  {
    title: 'Travel Vlog | Kerala Backwaters',
    videoId: '2A3B4C5D6E7',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-neutral-dark mb-4">Behold the Fruits of Our Work</h2>
          <p className="text-lg text-neutral-DEFAULT max-w-2xl mx-auto">
            We can talk a lot, but it's better to show than tell.
          </p>
        </div>
        {/* First row: 4 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {videos.slice(0, 4).map((video) => (
            <div
              key={video.videoId}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-64"
            >
              <div className="aspect-video w-full h-2/3">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 flex-1 flex items-center justify-center">
                <span className="text-base font-semibold text-neutral-dark text-center">{video.title}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Second row: 5 small cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {videos.slice(4, 9).map((video) => (
            <div
              key={video.videoId}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-40"
            >
              <div className="aspect-video w-full h-2/3">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-2 flex-1 flex items-center justify-center">
                <span className="text-sm font-medium text-neutral-dark text-center">{video.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="/portfolio"
            className="px-8 py-3 rounded-full bg-primary text-white font-semibold text-lg shadow-lg hover:bg-primary-dark transition-colors duration-200"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 