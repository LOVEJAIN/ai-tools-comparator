export interface AITool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  imageUrl?: string;
  rating: number;
  reviewCount: number;
}

export const aiTools: AITool[] = [
  {
    "id": "1",
    "name": "ai-logo-designer",
    "description": "AI-powered logo maker that creates professional logos in seconds using advanced algorithms. Generate unique brand identities, signatures, and business cards without design skills.",
    "url": "https://arvin.chat/feature/ai-logo-designer",
    "category": "Design & Branding",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-logo-designer",
    "rating": 4.7,
    "reviewCount": 379
  },
  {
    "id": "2",
    "name": "ai-job-description-generator",
    "description": "Automated tool for creating comprehensive and professional job descriptions. Streamlines HR processes by generating tailored job postings for various roles and industries.",
    "url": "https://remotepeople.com/tools/ai-job-description-generator/",
    "category": "Human Resources",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-job-description-generator",
    "rating": 4.8,
    "reviewCount": 462
  },
  {
    "id": "3",
    "name": "psychic",
    "description": "AI-powered psychic and tarot reading service providing personalized insights, future predictions, and spiritual guidance through advanced algorithms.",
    "url": "https://tarotoo.com/psychic",
    "category": "Entertainment & Lifestyle",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=psychic",
    "rating": 4.6,
    "reviewCount": 185
  },
  {
    "id": "4",
    "name": "face-swap",
    "description": "Advanced AI face swapping tool that seamlessly replaces faces in photos and videos. Creates realistic deepfake-quality results for entertainment and creative projects.",
    "url": "https://www.aiease.ai/face-swap/",
    "category": "Photo & Video Editing",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=face-swap",
    "rating": 5.0,
    "reviewCount": 111
  },
  {
    "id": "5",
    "name": "photo-enhancer",
    "description": "AI-powered photo enhancement tool that improves image quality, increases resolution, reduces noise, and enhances colors automatically.",
    "url": "https://www.aiease.ai/photo-enhancer/",
    "category": "Photo & Video Editing",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=photo-enhancer",
    "rating": 4.6,
    "reviewCount": 950
  },
  {
    "id": "6",
    "name": "remove-object-from-photo",
    "description": "Intelligent object removal tool that seamlessly erases unwanted elements from photos while maintaining natural-looking backgrounds.",
    "url": "https://www.aiease.ai/remove-object-from-photo/",
    "category": "Photo & Video Editing",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=remove-object-from-photo",
    "rating": 4.4,
    "reviewCount": 622
  },
  {
    "id": "20",
    "name": "AICodeReviewer",
    "description": "Automated code review tool that analyzes code quality, identifies bugs, suggests improvements, and ensures best practices compliance.",
    "url": "https://www.aixploria.com/out/AICodeReviewer",
    "category": "Developer Tools",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AICodeReviewer",
    "rating": 4.7,
    "reviewCount": 183
  },
  {
    "id": "12",
    "name": "AIBot",
    "description": "Comprehensive AI chatbot platform for customer service, lead generation, and automated conversations with advanced natural language processing.",
    "url": "https://www.aixploria.com/out/AIBot",
    "category": "Customer Service & Chat",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIBot",
    "rating": 4.9,
    "reviewCount": 892
  },
  {
    "id": "13",
    "name": "AIBrane",
    "description": "AI-powered knowledge management and brainstorming tool that helps organize ideas, generate insights, and enhance creative thinking processes.",
    "url": "https://www.aixploria.com/out/AIBrane",
    "category": "Knowledge Management",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIBrane",
    "rating": 4.9,
    "reviewCount": 165
  },
  {
    "id": "14",
    "name": "AICSSAnimation",
    "description": "AI-powered CSS animation generator that creates smooth, professional animations and transitions for web development projects.",
    "url": "https://www.aixploria.com/out/AICSSAnimation",
    "category": "Web Development",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AICSSAnimation",
    "rating": 4.8,
    "reviewCount": 328
  },
  {
    "id": "10",
    "name": "AIAdbyADSBY",
    "description": "AI-driven advertising platform that creates, optimizes, and manages digital ad campaigns across multiple platforms for maximum ROI.",
    "url": "https://www.aixploria.com/out/AIAdbyADSBY",
    "category": "Digital Marketing",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIAdbyADSBY",
    "rating": 4.8,
    "reviewCount": 502
  },
  {
    "id": "15",
    "name": "AICampaignAssistant",
    "description": "Comprehensive marketing campaign management tool that plans, executes, and analyzes marketing strategies using AI insights.",
    "url": "https://www.aixploria.com/out/AICampaignAssistant",
    "category": "Digital Marketing",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AICampaignAssistant",
    "rating": 4.6,
    "reviewCount": 348
  },
  {
    "id": "17",
    "name": "AICareerCoach",
    "description": "Personalized AI career counseling service providing job search strategies, resume optimization, interview preparation, and career development guidance.",
    "url": "https://www.aixploria.com/out/AICareerCoach",
    "category": "Career Development",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AICareerCoach",
    "rating": 4.1,
    "reviewCount": 647
  },
  {
    "id": "18",
    "name": "AICheatCheck",
    "description": "Academic integrity tool that detects AI-generated content, plagiarism, and unauthorized assistance in student submissions.",
    "url": "https://www.aixploria.com/out/AICheatCheck",
    "category": "Education & Academia",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AICheatCheck",
    "rating": 4.7,
    "reviewCount": 384
  },
  {
    "id": "23",
    "name": "AIDungeon",
    "description": "Interactive AI-powered text adventure game that creates infinite, dynamic storylines and immersive role-playing experiences.",
    "url": "https://www.aixploria.com/out/AIDungeon",
    "category": "Gaming & Interactive",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIDungeon",
    "rating": 4.9,
    "reviewCount": 547
  },
  {
    "id": "24",
    "name": "AIEmojiGenerator",
    "description": "Creative AI tool that generates custom emojis and emoticons based on descriptions, perfect for personalized digital communication.",
    "url": "https://www.aixploria.com/out/AIEmojiGenerator",
    "category": "Creative Tools",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIEmojiGenerator",
    "rating": 4.9,
    "reviewCount": 694
  },
  {
    "id": "25",
    "name": "AIExpressionEditor",
    "description": "Advanced video editing tool that modifies facial expressions in videos using AI, perfect for content creation and digital media.",
    "url": "https://www.aixploria.com/out/AIExpressionEditor",
    "category": "Photo & Video Editing",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIExpressionEditor",
    "rating": 4.3,
    "reviewCount": 466
  },
  {
    "id": "26",
    "name": "AIFaceSwapByVidqu",
    "description": "Professional-grade face swapping tool for videos with high-quality results, supporting batch processing and advanced customization options.",
    "url": "https://www.aixploria.com/out/AIFaceSwapByVidqu",
    "category": "Photo & Video Editing",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIFaceSwapByVidqu",
    "rating": 4.9,
    "reviewCount": 389
  },
  {
    "id": "31",
    "name": "AIHumanizerQuillBot",
    "description": "Content humanization tool that makes AI-generated text appear more natural and human-like, bypassing AI detection systems.",
    "url": "https://www.aixploria.com/out/AIHumanizerQuillBot",
    "category": "Content Creation",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIHumanizerQuillBot",
    "rating": 4.6,
    "reviewCount": 698
  },
  {
    "id": "33",
    "name": "AILogoReveals",
    "description": "Animated logo reveal generator that creates professional video intros and logo animations for branding and marketing purposes.",
    "url": "https://www.aixploria.com/out/AILogoReveals",
    "category": "Design & Branding",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AILogoReveals",
    "rating": 4.6,
    "reviewCount": 710
  },
  {
    "id": "35",
    "name": "AIMath",
    "description": "AI-powered mathematical problem solver that provides step-by-step solutions, explanations, and tutoring for various math topics.",
    "url": "https://www.aixploria.com/out/AIMath",
    "category": "Education & Academia",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIMath",
    "rating": 4.5,
    "reviewCount": 483
  },
  {
    "id": "36",
    "name": "AIMeme",
    "description": "Meme generator that creates viral-worthy memes using AI, with trending templates and automatic caption generation.",
    "url": "https://www.aixploria.com/out/AIMeme",
    "category": "Entertainment & Lifestyle",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIMeme",
    "rating": 4.6,
    "reviewCount": 521
  },
  {
    "id": "37",
    "name": "AIMemebyRusher",
    "description": "Advanced meme creation platform with AI-powered humor analysis, trending topic integration, and social media optimization.",
    "url": "https://www.aixploria.com/out/AIMemebyRusher",
    "category": "Entertainment & Lifestyle",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIMemebyRusher",
    "rating": 4.8,
    "reviewCount": 302
  },
  {
    "id": "38",
    "name": "AINamedMyPet",
    "description": "Pet naming assistant that suggests creative and meaningful names for pets based on breed, personality, and owner preferences.",
    "url": "https://www.aixploria.com/out/AINamedMyPet",
    "category": "Entertainment & Lifestyle",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AINamedMyPet",
    "rating": 4.5,
    "reviewCount": 419
  },
  {
    "id": "39",
    "name": "AIPostGenerator",
    "description": "Social media content generator that creates engaging posts, captions, and hashtags optimized for different platforms and audiences.",
    "url": "https://www.aixploria.com/out/AIPostGenerator",
    "category": "Social Media Management",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIPostGenerator",
    "rating": 4.7,
    "reviewCount": 639
  },
  {
    "id": "40",
    "name": "AIRoomPlanner",
    "description": "Interior design tool that creates 3D room layouts, suggests furniture arrangements, and provides design recommendations using AI.",
    "url": "https://www.aixploria.com/out/AIRoomPlanner",
    "category": "Design & Architecture",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIRoomPlanner",
    "rating": 4.3,
    "reviewCount": 980
  },
  {
    "id": "41",
    "name": "AIScientistbySakana",
    "description": "Research assistant AI that helps with scientific literature review, hypothesis generation, and experimental design for researchers.",
    "url": "https://www.aixploria.com/out/AIScientistbySakana",
    "category": "Research & Science",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIScientistbySakana",
    "rating": 4.9,
    "reviewCount": 395
  },
  {
    "id": "42",
    "name": "AISearchGrader",
    "description": "SEO analysis tool that evaluates search performance, ranks content quality, and provides optimization recommendations for better visibility.",
    "url": "https://www.aixploria.com/out/AISearchGrader",
    "category": "SEO & Analytics",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AISearchGrader",
    "rating": 4.9,
    "reviewCount": 419
  },
  {
    "id": "43",
    "name": "AIShoppingGuides",
    "description": "Personalized shopping assistant that compares products, finds best deals, and provides purchase recommendations based on user needs.",
    "url": "https://www.aixploria.com/out/AIShoppingGuides",
    "category": "E-commerce & Shopping",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIShoppingGuides",
    "rating": 4.8,
    "reviewCount": 704
  },
  {
    "id": "44",
    "name": "AISocialBio",
    "description": "Social media bio generator that creates compelling and optimized profile descriptions for various platforms to increase engagement.",
    "url": "https://www.aixploria.com/out/AISocialBio",
    "category": "Social Media Management",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AISocialBio",
    "rating": 4.7,
    "reviewCount": 470
  },
  {
    "id": "45",
    "name": "AISoundCopilot",
    "description": "Audio production assistant that generates music, sound effects, and audio enhancements for multimedia projects and content creation.",
    "url": "https://www.aixploria.com/out/AISoundCopilot",
    "category": "Audio & Music",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AISoundCopilot",
    "rating": 4.2,
    "reviewCount": 312
  },
  {
    "id": "46",
    "name": "AIStory",
    "description": "Creative writing assistant that generates compelling stories, narratives, and creative content for writers and content creators.",
    "url": "https://www.aixploria.com/out/AIStory",
    "category": "Creative Writing",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIStory",
    "rating": 4.6,
    "reviewCount": 622
  },
  {
    "id": "47",
    "name": "AIStudiobyMeta",
    "description": "Meta's comprehensive AI development platform for creating, training, and deploying custom AI models and applications.",
    "url": "https://www.aixploria.com/out/AIStudiobyMeta",
    "category": "AI Development",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIStudiobyMeta",
    "rating": 4.6,
    "reviewCount": 664
  },
  {
    "id": "48",
    "name": "AITemplates",
    "description": "Template generator for various document types including presentations, reports, websites, and business documents using AI automation.",
    "url": "https://www.aixploria.com/out/AITemplates",
    "category": "Document Creation",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AITemplates",
    "rating": 4.8,
    "reviewCount": 172
  },
  {
    "id": "50",
    "name": "AITranscriptionbyRiverside",
    "description": "Professional transcription service that converts audio and video content to text with high accuracy and speaker identification features.",
    "url": "https://www.aixploria.com/out/AITranscriptionbyRiverside",
    "category": "Audio & Transcription",
    "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AITranscriptionbyRiverside",
    "rating": 4.5,
    "reviewCount": 977
  }
];

// Category breakdown for better organization
export const categories = [
  "Design & Branding",
  "Photo & Video Editing", 
  "Digital Marketing",
  "Social Media Management",
  "Content Creation",
  "Creative Writing",
  "Education & Academia",
  "Developer Tools",
  "Web Development",
  "Human Resources",
  "Career Development",
  "Customer Service & Chat",
  "E-commerce & Shopping",
  "Entertainment & Lifestyle",
  "Gaming & Interactive",
  "Audio & Music",
  "Audio & Transcription",
  "Research & Science",
  "AI Development",
  "SEO & Analytics",
  "Document Creation",
  "Knowledge Management",
  "Design & Architecture",
  "Creative Tools"
];