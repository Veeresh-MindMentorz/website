// ============================================================
//  MindMentorz — Center Data
//  Used by CenterPage.jsx to render individual center pages
// ============================================================

export const centers = [
  {
    slug: 'vidyaranyapura',
    name: 'Vidyaranyapura Center',
    shortName: 'Vidyaranyapura',
    city: 'Bengaluru, Karnataka',
    badge: 'BRANCH',
    established: '2019',
    tagline: 'Where Brilliant Minds Are Built',
    description:
      'Our Vidyaranyapura center brings world-class chess coaching to North Bengaluru. Located opposite Vidya Spoorthi School, this thriving branch has rapidly grown into a hub for serious young chess enthusiasts. Students here benefit from a focused, competitive environment that blends rigorous training with joyful play.',
    image: '/center-vidyaranyapura.png',
    address: 'Thindlu Main Road Virupakshapura, opposite Vidya Spoorthi School, Kodigehalli, Vidyaranyapura, Bengaluru, Karnataka 560097',
    phone: '+91 91129 11236',
    whatsapp: '919112911236',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d77.5638!3d13.0762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMindMentorz%20Vidyaranyapura!5e0!3m2!1sen!2sin!4v1680000000000',
    directionsUrl: 'https://maps.google.com/?q=Thindlu+Main+Road+Virupakshapura+opposite+Vidya+Spoorthi+School+Vidyaranyapura+Bengaluru',
    color: '#F8A213',
    colorDark: '#E88300',
    colorLight: '#FFF5EB',
    colorGradient: 'linear-gradient(135deg, #E88300 0%, #F8A213 60%, #FBD54A 100%)',
    heroGradient: 'linear-gradient(135deg, rgba(232,131,0,0.85) 0%, rgba(100,43,143,0.7) 100%)',
    stats: [
      { value: '120+', label: 'Students Trained' },
      { value: '8+', label: 'Tournament Wins' },
      { value: '400pts', label: 'Avg Rating Gain' },
      { value: '4.9★', label: 'Parent Rating' },
    ],
    coaches: ['Venugopal', 'Premlatha', 'Kanishka'],
    batches: [
      { day: 'Mon – Fri', time: '4:00 PM – 5:30 PM', level: 'Beginner', size: 'Group (8–12)', color: '#10B981' },
      { day: 'Mon – Fri', time: '5:30 PM – 7:00 PM', level: 'Intermediate', size: 'Group (6–8)', color: '#3B82F6' },
      { day: 'Sat – Sun', time: '9:00 AM – 11:00 AM', level: 'Advanced / Tournament Prep', size: 'Small Group (4–6)', color: '#8B5CF6' },
      { day: 'Flexible', time: 'By Appointment', level: '1-on-1 Private', size: 'Individual', color: '#F8A213' },
    ],
    features: [
      { icon: '♟️', title: 'FIDE-Rated Coaches', desc: 'Train under certified coaches with strong competitive credentials.' },
      { icon: '🏆', title: 'Tournament Prep', desc: 'Regular mock tournaments to build real competitive experience.' },
      { icon: '🧠', title: 'Cognitive Development', desc: 'Chess-based mindset training that boosts focus and problem-solving.' },
      { icon: '👨‍👩‍👧', title: 'Parent Updates', desc: 'Weekly progress reports and open communication with parents.' },
    ],
    gallery: ['/g3.jpeg', '/g5.jpeg', '/g7.jpeg', '/g8.jpeg', '/g10.jpeg', '/g11.webp'],
    testimonials: [
      { name: 'Priya Sharma', child: 'Parent of Aditya, 9', text: 'The Vidyaranyapura center transformed my son. In 8 months, he went from never touching a chess board to winning his first district tournament. The coaches here genuinely care.', stars: 5 },
      { name: 'Ramesh Naidu', child: 'Parent of Sneha, 11', text: 'Excellent structured curriculum. The coaches track every student individually. My daughter improved her rating by over 500 points in a year!', stars: 5 },
    ],
  },

  {
    slug: 'kothanur',
    name: 'Kothanur Center',
    shortName: 'Kothanur',
    city: 'Bengaluru, Karnataka',
    badge: 'MAIN BRANCH',
    established: '2017',
    tagline: 'Our Flagship — Where It All Began',
    description:
      'The Kothanur Center is the founding home of MindMentorz. Established in 2017, this main branch has trained hundreds of students, produced state-level champions, and set the gold standard for chess education in Bengaluru. With our most experienced coaching team and the largest cohort of top-rated students, Kothanur is the heart of the MindMentorz family.',
    image: '/center-kothanur.png',
    address: '1st Floor, No. 54, Sect 2, Hennur Bagalur Main Rd, Kothanur, Byrathi Bande (Krishnanagara), Bengaluru, Karnataka 560077',
    phone: '+91 86185 68046',
    whatsapp: '918618568046',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d77.6354!3d13.0657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMindMentorz%20Kothanur!5e0!3m2!1sen!2sin!4v1680000000001',
    directionsUrl: 'https://maps.google.com/?q=MindMentorz+Kothanur+Bengaluru',
    color: '#642b8f',
    colorDark: '#4B1A6E',
    colorLight: '#F3ECF8',
    colorGradient: 'linear-gradient(135deg, #642b8f 0%, #9D60FA 100%)',
    heroGradient: 'linear-gradient(135deg, rgba(75,26,110,0.9) 0%, rgba(100,43,143,0.75) 100%)',
    stats: [
      { value: '500+', label: 'Students Trained' },
      { value: '35+', label: 'Tournament Wins' },
      { value: '600pts', label: 'Avg Rating Gain' },
      { value: '5.0★', label: 'Parent Rating' },
    ],
    coaches: ['Praveen', 'Rohit', 'Pradeep', 'Kannan'],
    batches: [
      { day: 'Mon – Fri', time: '3:30 PM – 5:00 PM', level: 'Beginner', size: 'Group (8–12)', color: '#10B981' },
      { day: 'Mon – Fri', time: '5:00 PM – 6:30 PM', level: 'Intermediate', size: 'Group (6–8)', color: '#3B82F6' },
      { day: 'Mon – Fri', time: '6:30 PM – 8:00 PM', level: 'Advanced', size: 'Group (4–6)', color: '#8B5CF6' },
      { day: 'Sat – Sun', time: '9:00 AM – 12:00 PM', level: 'Tournament Prep / FIDE Rating', size: 'Elite Group (3–5)', color: '#F8A213' },
      { day: 'Flexible', time: 'By Appointment', level: '1-on-1 Private', size: 'Individual', color: '#642b8f' },
    ],
    features: [
      { icon: '👑', title: 'Flagship Campus', desc: 'Our most established center with the deepest coaching bench since 2017.' },
      { icon: '🏆', title: 'Champion Track Record', desc: 'Produced state-level champions, FIDE-rated players, and national qualifiers.' },
      { icon: '📊', title: 'Structured Curriculum', desc: '5-level proprietary curriculum designed for beginners to advanced.' },
      { icon: '🎯', title: 'FIDE Rating Support', desc: 'Dedicated pathway to official FIDE ratings for serious players.' },
    ],
    gallery: ['/g1.jpeg', '/g2.jpeg', '/g4.jpg', '/g6.jpg', '/g9.jpg', '/g12.webp'],
    testimonials: [
      { name: 'Anitha Reddy', child: 'Parent of Yashas, 10', text: 'My son started with zero knowledge. 12 months later — 1450 rapid rating and 3 tournament wins. Kothanur center is exceptional. Coach Praveen is outstanding!', stars: 5 },
      { name: 'Suresh Kumar', child: 'Parent of Sathvik, 12', text: 'From 900 to 1600 strength in 10 months. The structured training, tournament exposure, and individual attention is unmatched. Highly recommend the main branch!', stars: 5 },
    ],
  },

  {
    slug: 'wakad-pune',
    name: 'Wakad Pune Center',
    shortName: 'Wakad Pune',
    city: 'Pune, Maharashtra',
    badge: 'BRANCH',
    established: '2026',
    tagline: 'Bringing Champion Chess to Pune',
    description:
      'MindMentorz proudly extends its championship chess program to Pune with our Wakad center, conveniently located inside Vision One Mall. This modern, accessible center brings the same proven training methodology that has created champions in Bengaluru — now available for students in Pune and surrounding areas.',
    image: '/center-wakad-pune.png',
    address: 'Office No 147, 1st Floor, Vision One Mall, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411033',
    phone: '+91 85300 86204',
    whatsapp: '918530086204',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.7621!3d18.5985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVision+One+Mall+Wakad+Pune!5e0!3m2!1sen!2sin!4v1680000000002',
    directionsUrl: 'https://maps.app.goo.gl/db2Zp8sX7a9yJiGA8',
    color: '#0D9488',
    colorDark: '#0F766E',
    colorLight: '#E6F4F1',
    colorGradient: 'linear-gradient(135deg, #0F766E 0%, #0D9488 60%, #34D399 100%)',
    heroGradient: 'linear-gradient(135deg, rgba(15,118,110,0.88) 0%, rgba(13,148,136,0.72) 100%)',
    stats: [
      { value: '80+', label: 'Students Trained' },
      { value: '5+', label: 'Tournament Wins' },
      { value: '350pts', label: 'Avg Rating Gain' },
      { value: '4.8★', label: 'Parent Rating' },
    ],
    coaches: ['Kavipriya', 'Newprakash', 'Niranjiny'],
    batches: [
      { day: 'Mon – Fri', time: '4:00 PM – 5:30 PM', level: 'Beginner', size: 'Group (8–12)', color: '#10B981' },
      { day: 'Mon – Fri', time: '5:30 PM – 7:00 PM', level: 'Intermediate', size: 'Group (6–8)', color: '#3B82F6' },
      { day: 'Sat – Sun', time: '10:00 AM – 12:00 PM', level: 'Advanced / Tournament Prep', size: 'Small Group (4–6)', color: '#8B5CF6' },
      { day: 'Flexible', time: 'By Appointment', level: '1-on-1 Private', size: 'Individual', color: '#0D9488' },
    ],
    features: [
      { icon: '🏢', title: 'Mall Location', desc: 'Easy to reach inside Vision One Mall — parking, cafes, and comfort nearby.' },
      { icon: '♟️', title: 'Proven Curriculum', desc: 'Same award-winning MindMentorz curriculum that built Bengaluru champions.' },
      { icon: '🎓', title: 'Expert Coaches', desc: 'FIDE-rated coaches trained in the MindMentorz pedagogy framework.' },
      { icon: '🌱', title: 'Growing Community', desc: 'A rapidly expanding chess community in Pune with tournaments & events.' },
    ],
    gallery: ['/g1.jpeg', '/g3.jpeg', '/g5.jpeg', '/g7.jpeg', '/g10.jpeg', '/g11.webp'],
    testimonials: [
      { name: 'Meera Joshi', child: 'Parent of Arjun, 8', text: 'So happy MindMentorz opened in Pune! The quality of coaching is phenomenal. My son absolutely loves going to class. The mall location makes it super convenient for our family.', stars: 5 },
      { name: 'Vijay Kulkarni', child: 'Parent of Riya, 10', text: 'After trying two other chess classes in Pune, MindMentorz Wakad is on another level. Structured, professional, and the kids are genuinely improving fast.', stars: 5 },
    ],
  },
]

// Helper: get coach data by name
export const allCoaches = [
  { name: 'Praveen',    photo: '/coach-praveen.jpg',    rating: '2777', title: 'HEAD COACH', color: '#F8A213' },
  { name: 'Rohit',      photo: '/coach-rohit.jpg',      rating: '1755', title: 'COACH',      color: '#9D60FA' },
  { name: 'Pradeep',    photo: '/coach-pradeep.jpg',    rating: '2350', title: 'COACH',      color: '#6D28D9' },
  { name: 'Kannan',     photo: '/coach-kannan.jpg',     rating: '1834', title: 'COACH',      color: '#EC4899' },
  { name: 'Venugopal',  photo: '/coach-venugopal.jpg',  rating: '1522', title: 'COACH',      color: '#7C3AED' },
  { name: 'Premlatha',  photo: '/coach-premlatha.jpg',  rating: '1422', title: 'COACH',      color: '#B084FF' },
  { name: 'Kanishka',   photo: '/coach-kanishka.jpg',   rating: '1843', title: 'COACH',      color: '#F59E0B' },
  { name: 'Kavipriya',  photo: '/coach-kavipriya.jpg',  rating: '1643', title: 'COACH',      color: '#10B981' },
  { name: 'Newprakash', photo: '/coach-newprakash.jpg', rating: '1943', title: 'COACH',      color: '#3B82F6' },
  { name: 'Niranjiny',  photo: '/NIranjiny.jpeg',       rating: '1743', title: 'COACH',      color: '#E11D48' },
  { name: 'Kabir',      photo: '/coach-kabir.jpg',      rating: '2200', title: 'COACH',      color: '#6366F1' },
  { name: 'Sabarish',   photo: '/Sabarish.jpeg',        rating: '1684', title: 'COACH',      color: '#0EA5E9' },
]
