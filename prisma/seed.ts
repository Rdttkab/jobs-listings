import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const company1 = await prisma.company.upsert({
    where: { name: "Photosnap" },
    update: {},
    create: {
      name: "Photosnap",
      logo: "https://res.cloudinary.com/dyoxkg5wp/image/upload/v1693636441/jobs-listings/dyfxxnhhhrhocpzlkk71.svg",
      job: {
        create: {
          new: true,
          featured: true,
          position: "Senior Frontend Developer",
          role: "Frontend",
          level: "Senior",
          //   postedAt: '1d ago',
          contract: "Full Time",
          location: "USA Only",
          languages: ["HTML", "CSS", "JavaScript"],
          tools: [],
        },
      },
    },
  });

  const company2 = await prisma.company.upsert({
    where: { name: "Manage" },
    update: {},
    create: {
      name: "Manage",
      logo: "https://res.cloudinary.com/dyoxkg5wp/image/upload/v1693636440/jobs-listings/lbgri12w2hdelnbpu5iv.svg",
      job: {
        create: {
          new: true,
          featured: true,
          position: "Fullstack Developer",
          role: "Fullstack",
          level: "Midweight",
          //   postedAt: '1d ago',
          contract: "Part Time",
          location: "Remote",
          languages: ["Python"],
          tools: ["React"],
        },
      },
    },
  });

  const company3 = await prisma.company.upsert({
    where: { name: "Account" },
    update: {},
    create: {
      name: "Account",
      logo: "https://res.cloudinary.com/dyoxkg5wp/image/upload/v1693636440/jobs-listings/g68vgtz4cahet7ji3bw9.svg",
      job: {
        create: {
          new: true,
          featured: false,
          position: "Junior Frontend Developer",
          role: "Frontend",
          level: "Junior",
          // postedAt: '2d ago',
          contract: "Part Time",
          location: "USA Only",
          languages: ["JavaScript"],
          tools: ["React", "Sass"],
        },
      },
    },
  });

  const company4 = await prisma.company.upsert({
    where: { name: "MyHome" },
    update: {},
    create: {
      name: "MyHome",
      logo: "https://res.cloudinary.com/dyoxkg5wp/image/upload/v1693636441/jobs-listings/qeq2tcks8ablwywco8oj.svg",
      job: {
        create: {
          new: false,
          featured: false,
          position: "Junior Frontend Developer",
          role: "Frontend",
          level: "Junior",
          // postedAt: '5d ago',
          contract: "Contract",
          location: "USA Only",
          languages: ["CSS", "JavaScript"],
          tools: [],
        },
      },
    },
  });

  const company5 = await prisma.company.upsert({
    where: { name: "Loop Studios" },
    update: {},
    create: {
      name: "Loop Studios",
      logo: "https://res.cloudinary.com/dyoxkg5wp/image/upload/v1693636440/jobs-listings/pbi0ty1gej6glgvqzltb.svg",
      job: {
        create: {
          new: false,
          featured: false,
          position: "Software Engineer",
          role: "Fullstack",
          level: "Midweight",
          // postedAt: '1w ago',
          contract: "Full Time",
          location: "Worldwide",
          languages: ["JavaScript"],
          tools: ["Ruby", "Sass"],
        },
      },
    },
  });

  const company6 = await prisma.company.upsert({
    where: { name: "FaceIt" },
    update: {},
    create: {
      name: "FaceIt",
      logo: "https://res.cloudinary.com/dyoxkg5wp/image/upload/v1693636440/jobs-listings/xozskowvfq8dwcfsepkl.svg",
      job: {
        create: {
          new: false,
          featured: false,
          position: "Junior Backend Developer",
          role: "Backend",
          level: "Junior",
          // postedAt: '2w ago',
          contract: "Full Time",
          location: "UK Only",
          languages: ["Ruby"],
          tools: ["RoR"],
        },
      },
    },
  });

  const company7 = await prisma.company.upsert({
    where: { name: "Shortly" },
    update: {},
    create: {
      name: "Shortly",
      logo: "https://res.cloudinary.com/dyoxkg5wp/image/upload/v1693636441/jobs-listings/gcragxezuwza32p7vp1k.svg",
      job: {
        create: {
          new: false,
          featured: false,
          position: "Junior Developer",
          role: "Frontend",
          level: "Junior",
          // "postedAt": "2w ago",
          contract: "Full Time",
          location: "Worldwide",
          languages: ["HTML", "JavaScript"],
          tools: ["Sass"],
        },
      },
    },
  });

  const company8 = await prisma.company.upsert({
    where: { name: "Insure" },
    update: {},
    create: {
      name: "Insure",
      logo: "https://res.cloudinary.com/dyoxkg5wp/image/upload/v1693636440/jobs-listings/ed6oglkd1lcvuvcgou0v.svg",
      job: {
        create: {
          new: false,
          featured: false,
          position: "Junior Frontend Developer",
          role: "Frontend",
          level: "Junior",
          // "postedAt": "2w ago",
          contract: "Full Time",
          location: "USA Only",
          languages: ["JavaScript"],
          tools: ["Vue", "Sass"],
        },
      },
    },
  });

  const company9 = await prisma.company.upsert({
    where: { name: "Eyecam Co." },
    update: {},
    create: {
      name: "Eyecam Co.",
      logo: "https://res.cloudinary.com/dyoxkg5wp/image/upload/v1693636440/jobs-listings/laojjsuptggemyiozipb.svg",
      job: {
        create: {
          new: false,
          featured: false,
          position: "Full Stack Engineer",
          role: "Fullstack",
          level: "Midweight",
          // "postedAt": "3w ago",
          contract: "Full Time",
          location: "Worldwide",
          languages: ["JavaScript", "Python"],
          tools: ["Django"],
        },
      },
    },
  });

  const company10 = await prisma.company.upsert({
    where: { name: "The Air Filter Company" },
    update: {},
    create: {
      name: "The Air Filter Company",
      logo: "https://res.cloudinary.com/dyoxkg5wp/image/upload/v1693636441/jobs-listings/qxkn5yib6l66b34d9kii.svg",
      job: {
        create: {
          new: false,
          featured: false,
          position: "Front-end Dev",
          role: "Frontend",
          level: "Junior",
          // postedAt: '1mo ago',
          contract: "Part Time",
          location: "Worldwide",
          languages: ["JavaScript"],
          tools: ["React", "Sass"],
        },
      },
    },
  });

  console.log(
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
    company8,
    company9,
    company10
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
