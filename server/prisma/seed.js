const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.venture.createMany({
    data: [
      {
        name: 'Project Alpha',
        description: 'An innovative solution for modern businesses seeking efficiency.',
        featured: true,
      },
      {
        name: 'Project Beta',
        description: 'Transforming how teams collaborate in the digital age.',
        featured: true,
      },
      {
        name: 'Project Gamma',
        description: 'Next-generation platform for seamless workflows.',
        featured: false,
      },
      {
        name: 'Project Delta',
        description: 'Empowering organizations through intelligent automation.',
        featured: true,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.article.createMany({
    data: [
      {
        title: 'Building for the Future',
        slug: 'building-for-the-future',
        excerpt: 'Our philosophy on creating software that stands the test of time.',
        content: 'At Atote Labs, we believe in building software that not only meets today\'s needs but anticipates tomorrow\'s challenges...',
        author: 'Atote Labs Team',
      },
      {
        title: 'The Studio Model Advantage',
        slug: 'studio-model-advantage',
        excerpt: 'Why the startup studio model is reshaping how companies are built.',
        content: 'The startup studio model represents a paradigm shift in how we approach entrepreneurship...',
        author: 'Atote Labs Team',
      },
      {
        title: 'Quality Over Quantity',
        slug: 'quality-over-quantity',
        excerpt: 'How we prioritize excellence in everything we build.',
        content: 'In a world that often prioritizes speed, we take a different approach...',
        author: 'Atote Labs Team',
      },
    ],
    skipDuplicates: true,
  });

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
