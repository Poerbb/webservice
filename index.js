const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

const profile = {
  education: {
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    year: '2nd Year Student (2023-2024)',
    university: 'University of Southern Philippines Foundation (USPF)'
  },
  skills: [
    'Understanding of UI/UX principles and design patterns',
    'Experience in optimizing website performance and loading times',
    'Strong problem-solving skills and ability to debug issues efficiently',
    'Strong teamwork and communication skills through collaborative project work'
  ],
  experience: [
    'Collaborated with UX/UI designers to implement design mockups and wireframes into interactive web interfaces, ensuring a seamless user experience across different devices and screen sizes.',
    'Actively involved in the web development community, attending meetups, conferences, and online forums to stay updated on the latest trends, tools, and technologies in the field.',
    'Led a project to optimize website performance by implementing lazy loading techniques, image compression, and code splitting, resulting in significant improvements in page loading times.'
  ],
  awards: [
    'Dean\'s List, USPF',
    '1st place in CCS days'
  ],
  personalInfo: {
    name: 'Lizaroy A. Pingoy',
    address: '1213 Pc hills Apas, Cebu City',
    phoneNumber: '09948296213',
    email: 'lizaroypingoy12@gmail.com',
    birthdate: 'August 12, 2003',
    sex: 'Male'
  }
};

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.json(profile);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});