interface projects {
    id: number;
    projectName: string;
    description: string;
    location: string;
    estimatedCompletionDate: string;
    image: string;
    show: boolean;
  }
  
  const cardData: projects[] = [
    {
      id: 1,
      projectName: "Green Energy Initiative",
      description: "A project aimed at developing sustainable energy solutions using solar and wind technology.",
      location: "San Francisco, CA",
      estimatedCompletionDate: "2025-06-15",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      show: false,
    },
    {
      id: 2,
      projectName: "Smart City Infrastructure",
      description: "Implementing IoT-based solutions to improve city management and enhance residents' quality of life.",
      location: "Austin, TX",
      estimatedCompletionDate: "2026-02-20",
      image: "https://images.unsplash.com/photo-1534536281715-5a3b3e9c3f1e",
      show: false,
    },
    {
      id: 3,
      projectName: "Eco-Friendly Housing",
      description: "Designing affordable and environmentally friendly residential complexes.",
      location: "Seattle, WA",
      estimatedCompletionDate: "2024-11-30",
      image: "https://images.unsplash.com/photo-1568048307913-3b5f6c32d3f3",
      show: false,
    },
  ];
  
  export default cardData;
  