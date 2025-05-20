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
    id: "1",
    name: "ChatGPT",
    description: "OpenAI's conversational AI for natural language understanding and generation.",
    url: "https://chat.openai.com/",
    category: "Language Models",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    rating: 4.9,
    reviewCount: 1200
  },
  {
    id: "2",
    name: "Midjourney",
    description: "AI-powered image generation from text prompts.",
    url: "https://www.midjourney.com/",
    category: "Image Generation",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/midjourney.svg",
    rating: 4.8,
    reviewCount: 950
  },
  {
    id: "3",
    name: "DALL-E 3",
    description: "OpenAI's advanced text-to-image generation model.",
    url: "https://openai.com/dall-e-3",
    category: "Image Generation",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    rating: 4.7,
    reviewCount: 800
  },
  {
    id: "4",
    name: "Stable Diffusion",
    description: "Open-source image synthesis model for generating photorealistic images.",
    url: "https://stability.ai/",
    category: "Image Generation",
    imageUrl: "https://stability.ai/favicon.ico",
    rating: 4.6,
    reviewCount: 700
  },
  {
    id: "5",
    name: "Claude",
    description: "Anthropic's conversational AI assistant for complex reasoning.",
    url: "https://claude.ai/",
    category: "Language Models",
    imageUrl: "https://assets-global.website-files.com/63e4a3b7e7b7e2b2e2e2e2e2/63e4a3b7e7b7e2b2e2e2e2e2_claude-logo.svg",
    rating: 4.8,
    reviewCount: 600
  },
  {
    id: "6",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster and with fewer errors.",
    url: "https://github.com/features/copilot",
    category: "Development",
    imageUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    rating: 4.7,
    reviewCount: 1100
  },
  {
    id: "7",
    name: "Notion AI",
    description: "AI-powered writing assistant integrated into Notion.",
    url: "https://www.notion.so/product/ai",
    category: "Productivity",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    rating: 4.6,
    reviewCount: 900
  },
  {
    id: "8",
    name: "RunwayML",
    description: "AI-powered video editing and content creation platform.",
    url: "https://runwayml.com/",
    category: "Video Generation",
    imageUrl: "https://runwayml.com/favicon.ico",
    rating: 4.5,
    reviewCount: 500
  },
  {
    id: "9",
    name: "Perplexity AI",
    description: "AI-powered search and Q&A engine for research and information discovery.",
    url: "https://www.perplexity.ai/",
    category: "Research",
    imageUrl: "https://www.perplexity.ai/favicon.ico",
    rating: 4.7,
    reviewCount: 400
  },
  {
    id: "10",
    name: "Leonardo AI",
    description: "AI art and image generation platform for creators.",
    url: "https://leonardo.ai/",
    category: "Image Generation",
    imageUrl: "https://leonardo.ai/favicon.ico",
    rating: 4.6,
    reviewCount: 350
  },
  {
    id: "11",
    name: "Descript",
    description: "AI-powered audio and video editing for podcasters and creators.",
    url: "https://www.descript.com/",
    category: "Audio",
    imageUrl: "https://www.descript.com/favicon.ico",
    rating: 4.5,
    reviewCount: 300
  },
  {
    id: "12",
    name: "Synthesia",
    description: "Create AI-generated videos from text in minutes.",
    url: "https://www.synthesia.io/",
    category: "Video Generation",
    imageUrl: "https://www.synthesia.io/favicon.ico",
    rating: 4.6,
    reviewCount: 250
  },
  {
    id: "13",
    name: "Jasper",
    description: "AI content platform for marketing, writing, and business.",
    url: "https://www.jasper.ai/",
    category: "Writing",
    imageUrl: "https://www.jasper.ai/favicon.ico",
    rating: 4.5,
    reviewCount: 200
  },
  {
    id: "14",
    name: "Copy.ai",
    description: "AI-powered copywriting and content generation.",
    url: "https://www.copy.ai/",
    category: "Writing",
    imageUrl: "https://www.copy.ai/favicon.ico",
    rating: 4.4,
    reviewCount: 180
  },
  {
    id: "15",
    name: "Quillbot",
    description: "AI-powered paraphrasing and grammar checking tool.",
    url: "https://quillbot.com/",
    category: "Writing",
    imageUrl: "https://quillbot.com/favicon.ico",
    rating: 4.5,
    reviewCount: 160
  },
  {
    id: "16",
    name: "Pictory",
    description: "AI video generator from text and blog posts.",
    url: "https://pictory.ai/",
    category: "Video Generation",
    imageUrl: "https://pictory.ai/favicon.ico",
    rating: 4.4,
    reviewCount: 140
  },
  {
    id: "17",
    name: "Soundful",
    description: "AI music generator for royalty-free tracks.",
    url: "https://soundful.com/",
    category: "Audio",
    imageUrl: "https://soundful.com/favicon.ico",
    rating: 4.3,
    reviewCount: 120
  },
  {
    id: "18",
    name: "AIVA",
    description: "AI music composition assistant for creators.",
    url: "https://www.aiva.ai/",
    category: "Audio",
    imageUrl: "https://www.aiva.ai/favicon.ico",
    rating: 4.2,
    reviewCount: 100
  },
  {
    id: "19",
    name: "Lumen5",
    description: "AI-powered video creation from blog posts and articles.",
    url: "https://lumen5.com/",
    category: "Video Generation",
    imageUrl: "https://lumen5.com/favicon.ico",
    rating: 4.3,
    reviewCount: 90
  },
  {
    id: "20",
    name: "Tome",
    description: "AI-powered storytelling and presentation tool.",
    url: "https://tome.app/",
    category: "Productivity",
    imageUrl: "https://tome.app/favicon.ico",
    rating: 4.2,
    reviewCount: 80
  },
  {
    id: "21",
    name: "Replika",
    description: "AI chatbot companion for conversation and support.",
    url: "https://replika.com/",
    category: "Chatbots",
    imageUrl: "https://replika.com/favicon.ico",
    rating: 4.3,
    reviewCount: 70
  },
  {
    id: "22",
    name: "You.com",
    description: "AI-powered search engine with chat and productivity tools.",
    url: "https://you.com/",
    category: "Research",
    imageUrl: "https://you.com/favicon.ico",
    rating: 4.4,
    reviewCount: 60
  },
  {
    id: "23",
    name: "DeepL",
    description: "AI-powered translation for documents and text.",
    url: "https://www.deepl.com/",
    category: "Translation",
    imageUrl: "https://www.deepl.com/favicon.ico",
    rating: 4.5,
    reviewCount: 50
  },
  {
    id: "24",
    name: "Hugging Face Spaces",
    description: "Community-driven platform for sharing and running AI models.",
    url: "https://huggingface.co/spaces",
    category: "Development",
    imageUrl: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    rating: 4.6,
    reviewCount: 40
  },
  {
    id: "25",
    name: "Cohere",
    description: "AI platform for language understanding and generation.",
    url: "https://cohere.com/",
    category: "Language Models",
    imageUrl: "https://cohere.com/favicon.ico",
    rating: 4.7,
    reviewCount: 30
  },
  {
    id: "26",
    name: "Writesonic",
    description: "AI writing and content generation platform.",
    url: "https://writesonic.com/",
    category: "Writing",
    imageUrl: "https://writesonic.com/favicon.ico",
    rating: 4.8,
    reviewCount: 20
  },
  {
    id: "27",
    name: "Murf AI",
    description: "AI voice generator and text-to-speech platform.",
    url: "https://murf.ai/",
    category: "Audio",
    imageUrl: "https://murf.ai/favicon.ico",
    rating: 4.9,
    reviewCount: 10
  },
  {
    id: "28",
    name: "Beautiful.ai",
    description: "AI-powered presentation and slide design tool.",
    url: "https://www.beautiful.ai/",
    category: "Design",
    imageUrl: "https://www.beautiful.ai/favicon.ico",
    rating: 4.7,
    reviewCount: 5
  },
  {
    id: "29",
    name: "Turing",
    description: "AI-powered platform for hiring and managing remote developers.",
    url: "https://www.turing.com/",
    category: "Development",
    imageUrl: "https://www.turing.com/favicon.ico",
    rating: 4.6,
    reviewCount: 3
  },
  {
    id: "30",
    name: "Surfer SEO",
    description: "AI-powered SEO content optimization platform.",
    url: "https://surferseo.com/",
    category: "Marketing",
    imageUrl: "https://surferseo.com/favicon.ico",
    rating: 4.5,
    reviewCount: 2
  },
    {
      "id": "8",
      "name": "ai-logo-designer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://arvin.chat/feature/ai-logo-designer",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-logo-designer",
      "rating": 4.7,
      "reviewCount": 379
    },
    {
      "id": "15",
      "name": "ai-job-description-generator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://remotepeople.com/tools/ai-job-description-generator/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-job-description-generator",
      "rating": 4.8,
      "reviewCount": 462
    },
    {
      "id": "19",
      "name": "psychic",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://tarotoo.com/psychic",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=psychic",
      "rating": 4.6,
      "reviewCount": 185
    },
    {
      "id": "24",
      "name": "face-swap",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aiease.ai/face-swap/",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=face-swap",
      "rating": 5.0,
      "reviewCount": 111
    },
    {
      "id": "25",
      "name": "photo-enhancer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aiease.ai/photo-enhancer/",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=photo-enhancer",
      "rating": 4.6,
      "reviewCount": 950
    },
    {
      "id": "26",
      "name": "remove-object-from-photo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aiease.ai/remove-object-from-photo/",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=remove-object-from-photo",
      "rating": 4.4,
      "reviewCount": 622
    },
    {
      "id": "29",
      "name": "100DaysOfAIChallenge",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/100DaysOfAIChallenge",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=100DaysOfAIChallenge",
      "rating": 4.7,
      "reviewCount": 495
    },
    {
      "id": "30",
      "name": "3DLHM%28Alibaba%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/3DLHM%28Alibaba%29",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=3DLHM%28Alibaba%29",
      "rating": 4.8,
      "reviewCount": 594
    },
    {
      "id": "31",
      "name": "4DGaussianSplatting",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/4DGaussianSplatting",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=4DGaussianSplatting",
      "rating": 4.1,
      "reviewCount": 490
    },
    {
      "id": "32",
      "name": "ACEStep",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ACEStep",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ACEStep",
      "rating": 4.2,
      "reviewCount": 699
    },
    {
      "id": "33",
      "name": "AIAdbyADSBY",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIAdbyADSBY",
      "category": "Marketing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIAdbyADSBY",
      "rating": 4.8,
      "reviewCount": 502
    },
    {
      "id": "34",
      "name": "AIBackdrop",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIBackdrop",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIBackdrop",
      "rating": 4.5,
      "reviewCount": 103
    },
    {
      "id": "35",
      "name": "AIBot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIBot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIBot",
      "rating": 4.9,
      "reviewCount": 892
    },
    {
      "id": "36",
      "name": "AIBrane",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIBrane",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIBrane",
      "rating": 4.9,
      "reviewCount": 165
    },
    {
      "id": "37",
      "name": "AICSSAnimation",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AICSSAnimation",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AICSSAnimation",
      "rating": 4.8,
      "reviewCount": 328
    },
    {
      "id": "38",
      "name": "AICampaignAssistant",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AICampaignAssistant",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AICampaignAssistant",
      "rating": 4.6,
      "reviewCount": 348
    },
    {
      "id": "39",
      "name": "AICards",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AICards",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AICards",
      "rating": 4.5,
      "reviewCount": 569
    },
    {
      "id": "40",
      "name": "AICareerCoach",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AICareerCoach",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AICareerCoach",
      "rating": 4.1,
      "reviewCount": 647
    },
    {
      "id": "41",
      "name": "AICheatCheck",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AICheatCheck",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AICheatCheck",
      "rating": 4.7,
      "reviewCount": 384
    },
    {
      "id": "42",
      "name": "AIChecklistGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIChecklistGenerator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIChecklistGenerator",
      "rating": 4.3,
      "reviewCount": 433
    },
    {
      "id": "43",
      "name": "AICodeReviewer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AICodeReviewer",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AICodeReviewer",
      "rating": 4.7,
      "reviewCount": 183
    },
    {
      "id": "44",
      "name": "AIColoringPages",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIColoringPages",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIColoringPages",
      "rating": 4.5,
      "reviewCount": 579
    },
    {
      "id": "45",
      "name": "AIDictionarybySider",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIDictionarybySider",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIDictionarybySider",
      "rating": 4.6,
      "reviewCount": 708
    },
    {
      "id": "46",
      "name": "AIDungeon",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIDungeon",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIDungeon",
      "rating": 4.9,
      "reviewCount": 547
    },
    {
      "id": "47",
      "name": "AIEmojiGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIEmojiGenerator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIEmojiGenerator",
      "rating": 4.9,
      "reviewCount": 694
    },
    {
      "id": "48",
      "name": "AIExpressionEditor",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIExpressionEditor",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIExpressionEditor",
      "rating": 4.3,
      "reviewCount": 466
    },
    {
      "id": "49",
      "name": "AIFaceSwapByVidqu",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIFaceSwapByVidqu",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIFaceSwapByVidqu",
      "rating": 4.9,
      "reviewCount": 389
    },
    {
      "id": "50",
      "name": "AIGallery",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIGallery",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIGallery",
      "rating": 4.8,
      "reviewCount": 1000
    },
    {
      "id": "51",
      "name": "AIGenius",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIGenius",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIGenius",
      "rating": 4.9,
      "reviewCount": 116
    },
    {
      "id": "52",
      "name": "AIGradientGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIGradientGenerator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIGradientGenerator",
      "rating": 4.1,
      "reviewCount": 378
    },
    {
      "id": "53",
      "name": "AIHits",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIHits",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIHits",
      "rating": 4.8,
      "reviewCount": 176
    },
    {
      "id": "54",
      "name": "AIHumanizerQuillBot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIHumanizerQuillBot",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIHumanizerQuillBot",
      "rating": 4.6,
      "reviewCount": 698
    },
    {
      "id": "55",
      "name": "AIJukebox",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIJukebox",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIJukebox",
      "rating": 4.5,
      "reviewCount": 320
    },
    {
      "id": "56",
      "name": "AILogoReveals",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AILogoReveals",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AILogoReveals",
      "rating": 4.6,
      "reviewCount": 710
    },
    {
      "id": "57",
      "name": "AIMailer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIMailer",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIMailer",
      "rating": 4.1,
      "reviewCount": 457
    },
    {
      "id": "58",
      "name": "AIMath",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIMath",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIMath",
      "rating": 4.5,
      "reviewCount": 483
    },
    {
      "id": "59",
      "name": "AIMeme",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIMeme",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIMeme",
      "rating": 4.6,
      "reviewCount": 521
    },
    {
      "id": "60",
      "name": "AIMemebyRusher",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIMemebyRusher",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIMemebyRusher",
      "rating": 4.8,
      "reviewCount": 302
    },
    {
      "id": "61",
      "name": "AINamedMyPet",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AINamedMyPet",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AINamedMyPet",
      "rating": 4.5,
      "reviewCount": 419
    },
    {
      "id": "62",
      "name": "AIPostGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIPostGenerator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIPostGenerator",
      "rating": 4.7,
      "reviewCount": 639
    },
    {
      "id": "63",
      "name": "AIRoomPlanner",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIRoomPlanner",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIRoomPlanner",
      "rating": 4.3,
      "reviewCount": 980
    },
    {
      "id": "64",
      "name": "AIScientistbySakana",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIScientistbySakana",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIScientistbySakana",
      "rating": 4.9,
      "reviewCount": 395
    },
    {
      "id": "65",
      "name": "AISearchGrader",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AISearchGrader",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AISearchGrader",
      "rating": 4.9,
      "reviewCount": 419
    },
    {
      "id": "66",
      "name": "AIShoppingGuides",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIShoppingGuides",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIShoppingGuides",
      "rating": 4.8,
      "reviewCount": 704
    },
    {
      "id": "67",
      "name": "AISocialBio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AISocialBio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AISocialBio",
      "rating": 4.7,
      "reviewCount": 470
    },
    {
      "id": "68",
      "name": "AISoundCopilot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AISoundCopilot",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AISoundCopilot",
      "rating": 4.2,
      "reviewCount": 312
    },
    {
      "id": "69",
      "name": "AIStory",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIStory",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIStory",
      "rating": 4.6,
      "reviewCount": 622
    },
    {
      "id": "70",
      "name": "AIStudiobyMeta",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIStudiobyMeta",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIStudiobyMeta",
      "rating": 4.6,
      "reviewCount": 664
    },
    {
      "id": "71",
      "name": "AITemplates",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AITemplates",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AITemplates",
      "rating": 4.8,
      "reviewCount": 172
    },
    {
      "id": "72",
      "name": "AITown",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AITown",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AITown",
      "rating": 4.1,
      "reviewCount": 693
    },
    {
      "id": "73",
      "name": "AITranscriptionbyRiverside",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AITranscriptionbyRiverside",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AITranscriptionbyRiverside",
      "rating": 4.5,
      "reviewCount": 977
    },
    {
      "id": "74",
      "name": "AITutorPro",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AITutorPro",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AITutorPro",
      "rating": 4.2,
      "reviewCount": 355
    },
    {
      "id": "75",
      "name": "AIVA",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIVA",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIVA",
      "rating": 4.3,
      "reviewCount": 715
    },
    {
      "id": "76",
      "name": "AIVideoTranslator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIVideoTranslator",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIVideoTranslator",
      "rating": 4.1,
      "reviewCount": 836
    },
    {
      "id": "77",
      "name": "AIVideoUpscalebyCapcut",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIVideoUpscalebyCapcut",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIVideoUpscalebyCapcut",
      "rating": 4.1,
      "reviewCount": 960
    },
    {
      "id": "78",
      "name": "AIisaJoke",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIisaJoke",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIisaJoke",
      "rating": 4.7,
      "reviewCount": 556
    },
    {
      "id": "79",
      "name": "AIorHuman",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AIorHuman",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AIorHuman",
      "rating": 4.5,
      "reviewCount": 205
    },
    {
      "id": "80",
      "name": "Act-OnebyRunway",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Act-OnebyRunway",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Act-OnebyRunway",
      "rating": 4.8,
      "reviewCount": 623
    },
    {
      "id": "81",
      "name": "Activazon",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Activazon",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Activazon",
      "rating": 4.9,
      "reviewCount": 375
    },
    {
      "id": "82",
      "name": "AdaptivAcademy",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AdaptivAcademy",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AdaptivAcademy",
      "rating": 4.1,
      "reviewCount": 333
    },
    {
      "id": "83",
      "name": "AddyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AddyAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AddyAI",
      "rating": 4.6,
      "reviewCount": 797
    },
    {
      "id": "84",
      "name": "AdeptAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AdeptAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AdeptAI",
      "rating": 4.2,
      "reviewCount": 343
    },
    {
      "id": "85",
      "name": "AdobeContentCredentials",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AdobeContentCredentials",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AdobeContentCredentials",
      "rating": 4.7,
      "reviewCount": 776
    },
    {
      "id": "86",
      "name": "AdobeFirefly3",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AdobeFirefly3",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AdobeFirefly3",
      "rating": 4.2,
      "reviewCount": 203
    },
    {
      "id": "87",
      "name": "AdobeFireflyVideo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AdobeFireflyVideo",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AdobeFireflyVideo",
      "rating": 4.3,
      "reviewCount": 202
    },
    {
      "id": "88",
      "name": "AdobeFreeLogoMaker",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AdobeFreeLogoMaker",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AdobeFreeLogoMaker",
      "rating": 4.8,
      "reviewCount": 429
    },
    {
      "id": "89",
      "name": "AdobePodcast",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AdobePodcast",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AdobePodcast",
      "rating": 4.2,
      "reviewCount": 737
    },
    {
      "id": "90",
      "name": "AdobeProjectConcept",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AdobeProjectConcept",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AdobeProjectConcept",
      "rating": 4.4,
      "reviewCount": 326
    },
    {
      "id": "91",
      "name": "Agent.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Agent.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Agent.ai",
      "rating": 5.0,
      "reviewCount": 630
    },
    {
      "id": "92",
      "name": "Agent2AgentProtocol",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Agent2AgentProtocol",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Agent2AgentProtocol",
      "rating": 4.8,
      "reviewCount": 820
    },
    {
      "id": "93",
      "name": "AgentGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AgentGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AgentGPT",
      "rating": 4.9,
      "reviewCount": 230
    },
    {
      "id": "94",
      "name": "AgentLLM",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AgentLLM",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AgentLLM",
      "rating": 4.5,
      "reviewCount": 244
    },
    {
      "id": "95",
      "name": "Ai%7Ccoustics",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Ai%7Ccoustics",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Ai%7Ccoustics",
      "rating": 4.6,
      "reviewCount": 547
    },
    {
      "id": "96",
      "name": "AiEditor",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AiEditor",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AiEditor",
      "rating": 4.5,
      "reviewCount": 938
    },
    {
      "id": "97",
      "name": "AiTax",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AiTax",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AiTax",
      "rating": 4.1,
      "reviewCount": 602
    },
    {
      "id": "98",
      "name": "AiTerm",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AiTerm",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AiTerm",
      "rating": 4.2,
      "reviewCount": 693
    },
    {
      "id": "99",
      "name": "AiartFM",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AiartFM",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AiartFM",
      "rating": 4.3,
      "reviewCount": 447
    },
    {
      "id": "100",
      "name": "AirbnbReviewSummarizer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AirbnbReviewSummarizer",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AirbnbReviewSummarizer",
      "rating": 4.3,
      "reviewCount": 745
    },
    {
      "id": "101",
      "name": "AirbrushAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AirbrushAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AirbrushAI",
      "rating": 4.3,
      "reviewCount": 333
    },
    {
      "id": "102",
      "name": "Airchat",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Airchat",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Airchat",
      "rating": 4.2,
      "reviewCount": 909
    },
    {
      "id": "103",
      "name": "Aiter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Aiter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Aiter",
      "rating": 4.2,
      "reviewCount": 270
    },
    {
      "id": "104",
      "name": "Aitinerary",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Aitinerary",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Aitinerary",
      "rating": 4.2,
      "reviewCount": 116
    },
    {
      "id": "105",
      "name": "Aitubo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Aitubo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Aitubo",
      "rating": 4.3,
      "reviewCount": 340
    },
    {
      "id": "106",
      "name": "AlphaCode2byDeepMind",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AlphaCode2byDeepMind",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AlphaCode2byDeepMind",
      "rating": 4.7,
      "reviewCount": 135
    },
    {
      "id": "107",
      "name": "AlphaFold3%28GoogleDeepMind%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AlphaFold3%28GoogleDeepMind%29",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AlphaFold3%28GoogleDeepMind%29",
      "rating": 4.1,
      "reviewCount": 270
    },
    {
      "id": "108",
      "name": "AlphaGeometrybyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AlphaGeometrybyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AlphaGeometrybyGoogle",
      "rating": 4.3,
      "reviewCount": 847
    },
    {
      "id": "109",
      "name": "AlteraPlayLabs",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AlteraPlayLabs",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AlteraPlayLabs",
      "rating": 4.8,
      "reviewCount": 150
    },
    {
      "id": "110",
      "name": "Altered",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Altered",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Altered",
      "rating": 4.4,
      "reviewCount": 665
    },
    {
      "id": "111",
      "name": "AmazonCodeWhisperer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AmazonCodeWhisperer",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AmazonCodeWhisperer",
      "rating": 4.3,
      "reviewCount": 169
    },
    {
      "id": "112",
      "name": "AmazonNova",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AmazonNova",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AmazonNova",
      "rating": 4.6,
      "reviewCount": 290
    },
    {
      "id": "113",
      "name": "AmeliabyAmazon",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AmeliabyAmazon",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AmeliabyAmazon",
      "rating": 4.4,
      "reviewCount": 151
    },
    {
      "id": "114",
      "name": "Andi",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Andi",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Andi",
      "rating": 4.5,
      "reviewCount": 246
    },
    {
      "id": "115",
      "name": "AnimateAnyone",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AnimateAnyone",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AnimateAnyone",
      "rating": 4.6,
      "reviewCount": 403
    },
    {
      "id": "116",
      "name": "AnimateDiff",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AnimateDiff",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AnimateDiff",
      "rating": 4.1,
      "reviewCount": 322
    },
    {
      "id": "117",
      "name": "AnimatedDrawings",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AnimatedDrawings",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AnimatedDrawings",
      "rating": 4.7,
      "reviewCount": 896
    },
    {
      "id": "118",
      "name": "AnthropicQuickstarts",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AnthropicQuickstarts",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AnthropicQuickstarts",
      "rating": 4.1,
      "reviewCount": 201
    },
    {
      "id": "119",
      "name": "AnySummary",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AnySummary",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AnySummary",
      "rating": 4.2,
      "reviewCount": 317
    },
    {
      "id": "120",
      "name": "AnyTextAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AnyTextAI",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AnyTextAI",
      "rating": 4.7,
      "reviewCount": 845
    },
    {
      "id": "121",
      "name": "Anychat",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Anychat",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Anychat",
      "rating": 4.7,
      "reviewCount": 967
    },
    {
      "id": "122",
      "name": "AomniAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AomniAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AomniAI",
      "rating": 4.1,
      "reviewCount": 119
    },
    {
      "id": "123",
      "name": "Applio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Applio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Applio",
      "rating": 4.5,
      "reviewCount": 862
    },
    {
      "id": "124",
      "name": "ArcSearch",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ArcSearch",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ArcSearch",
      "rating": 4.3,
      "reviewCount": 816
    },
    {
      "id": "125",
      "name": "ArcwiseAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ArcwiseAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ArcwiseAI",
      "rating": 4.5,
      "reviewCount": 412
    },
    {
      "id": "126",
      "name": "Arduinoai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Arduinoai",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Arduinoai",
      "rating": 4.9,
      "reviewCount": 886
    },
    {
      "id": "127",
      "name": "AreYouSmarterThanChatGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AreYouSmarterThanChatGPT",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AreYouSmarterThanChatGPT",
      "rating": 4.5,
      "reviewCount": 193
    },
    {
      "id": "128",
      "name": "AriabyOpera",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AriabyOpera",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AriabyOpera",
      "rating": 4.6,
      "reviewCount": 544
    },
    {
      "id": "129",
      "name": "ArtFlowAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ArtFlowAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ArtFlowAI",
      "rating": 4.6,
      "reviewCount": 170
    },
    {
      "id": "130",
      "name": "ArtHub",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ArtHub",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ArtHub",
      "rating": 4.2,
      "reviewCount": 425
    },
    {
      "id": "131",
      "name": "ArtRemixbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ArtRemixbyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ArtRemixbyGoogle",
      "rating": 4.3,
      "reviewCount": 883
    },
    {
      "id": "132",
      "name": "ArticleSummarizer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ArticleSummarizer",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ArticleSummarizer",
      "rating": 4.8,
      "reviewCount": 890
    },
    {
      "id": "133",
      "name": "ArtificialAnalysis",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ArtificialAnalysis",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ArtificialAnalysis",
      "rating": 4.5,
      "reviewCount": 173
    },
    {
      "id": "134",
      "name": "ArtificialArt",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ArtificialArt",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ArtificialArt",
      "rating": 4.6,
      "reviewCount": 803
    },
    {
      "id": "135",
      "name": "ArtificialStudioAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ArtificialStudioAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ArtificialStudioAI",
      "rating": 4.0,
      "reviewCount": 454
    },
    {
      "id": "136",
      "name": "ArxivGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ArxivGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ArxivGPT",
      "rating": 4.0,
      "reviewCount": 796
    },
    {
      "id": "137",
      "name": "AskLayla",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AskLayla",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AskLayla",
      "rating": 4.5,
      "reviewCount": 585
    },
    {
      "id": "138",
      "name": "AskLegal.bot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AskLegal.bot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AskLegal.bot",
      "rating": 4.4,
      "reviewCount": 104
    },
    {
      "id": "139",
      "name": "AskNow",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AskNow",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AskNow",
      "rating": 4.7,
      "reviewCount": 891
    },
    {
      "id": "140",
      "name": "AskThee",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AskThee",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AskThee",
      "rating": 4.7,
      "reviewCount": 363
    },
    {
      "id": "141",
      "name": "AskanAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AskanAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AskanAI",
      "rating": 4.7,
      "reviewCount": 576
    },
    {
      "id": "142",
      "name": "AssistantsbyHuggingFace",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AssistantsbyHuggingFace",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AssistantsbyHuggingFace",
      "rating": 4.0,
      "reviewCount": 581
    },
    {
      "id": "143",
      "name": "AstroGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AstroGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AstroGPT",
      "rating": 4.0,
      "reviewCount": 933
    },
    {
      "id": "144",
      "name": "AtlassianRovo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AtlassianRovo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AtlassianRovo",
      "rating": 4.1,
      "reviewCount": 910
    },
    {
      "id": "145",
      "name": "Audio2PhotorealbyMeta",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Audio2PhotorealbyMeta",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Audio2PhotorealbyMeta",
      "rating": 4.5,
      "reviewCount": 978
    },
    {
      "id": "146",
      "name": "AudioNativeElevenLabs",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AudioNativeElevenLabs",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AudioNativeElevenLabs",
      "rating": 4.5,
      "reviewCount": 827
    },
    {
      "id": "147",
      "name": "AudioSealbyMetaAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AudioSealbyMetaAI",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AudioSealbyMetaAI",
      "rating": 4.8,
      "reviewCount": 811
    },
    {
      "id": "148",
      "name": "AudioSparxbyStability.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AudioSparxbyStability.ai",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AudioSparxbyStability.ai",
      "rating": 4.9,
      "reviewCount": 436
    },
    {
      "id": "149",
      "name": "AudioboxbyMeta",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AudioboxbyMeta",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AudioboxbyMeta",
      "rating": 4.7,
      "reviewCount": 985
    },
    {
      "id": "150",
      "name": "AutoBackend",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AutoBackend",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AutoBackend",
      "rating": 4.3,
      "reviewCount": 534
    },
    {
      "id": "151",
      "name": "AutoDraw",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AutoDraw",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AutoDraw",
      "rating": 4.3,
      "reviewCount": 364
    },
    {
      "id": "152",
      "name": "AutoGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AutoGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AutoGPT",
      "rating": 4.6,
      "reviewCount": 952
    },
    {
      "id": "153",
      "name": "AutoGen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AutoGen",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AutoGen",
      "rating": 4.4,
      "reviewCount": 147
    },
    {
      "id": "154",
      "name": "Automatic1111",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Automatic1111",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Automatic1111",
      "rating": 4.0,
      "reviewCount": 309
    },
    {
      "id": "155",
      "name": "AuxWorld",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/AuxWorld",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=AuxWorld",
      "rating": 4.8,
      "reviewCount": 130
    },
    {
      "id": "156",
      "name": "Avanzai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Avanzai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Avanzai",
      "rating": 5.0,
      "reviewCount": 953
    },
    {
      "id": "157",
      "name": "Avaturn",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Avaturn",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Avaturn",
      "rating": 4.5,
      "reviewCount": 954
    },
    {
      "id": "158",
      "name": "B7Labs",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/B7Labs",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=B7Labs",
      "rating": 4.2,
      "reviewCount": 263
    },
    {
      "id": "159",
      "name": "BGBye",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BGBye",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BGBye",
      "rating": 4.9,
      "reviewCount": 326
    },
    {
      "id": "160",
      "name": "BGRemovalBirefnet",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BGRemovalBirefnet",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BGRemovalBirefnet",
      "rating": 4.1,
      "reviewCount": 699
    },
    {
      "id": "161",
      "name": "BabyAgi",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BabyAgi",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BabyAgi",
      "rating": 4.2,
      "reviewCount": 954
    },
    {
      "id": "162",
      "name": "BackgroundsBlur",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BackgroundsBlur",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BackgroundsBlur",
      "rating": 4.6,
      "reviewCount": 538
    },
    {
      "id": "163",
      "name": "BannerGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BannerGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BannerGPT",
      "rating": 4.4,
      "reviewCount": 148
    },
    {
      "id": "164",
      "name": "BardAI%28Gemini%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BardAI%28Gemini%29",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BardAI%28Gemini%29",
      "rating": 5.0,
      "reviewCount": 673
    },
    {
      "id": "165",
      "name": "BeFunky",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BeFunky",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BeFunky",
      "rating": 4.4,
      "reviewCount": 447
    },
    {
      "id": "166",
      "name": "Beatoven",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Beatoven",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Beatoven",
      "rating": 4.2,
      "reviewCount": 713
    },
    {
      "id": "167",
      "name": "Bedrock%28Amazon%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Bedrock%28Amazon%29",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Bedrock%28Amazon%29",
      "rating": 4.3,
      "reviewCount": 501
    },
    {
      "id": "168",
      "name": "BeeAgentFramework",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BeeAgentFramework",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BeeAgentFramework",
      "rating": 4.6,
      "reviewCount": 814
    },
    {
      "id": "169",
      "name": "BenchmarkEmail",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BenchmarkEmail",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BenchmarkEmail",
      "rating": 4.9,
      "reviewCount": 756
    },
    {
      "id": "170",
      "name": "Bestflights",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Bestflights",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Bestflights",
      "rating": 4.6,
      "reviewCount": 153
    },
    {
      "id": "171",
      "name": "Beyond12",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Beyond12",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Beyond12",
      "rating": 4.6,
      "reviewCount": 861
    },
    {
      "id": "172",
      "name": "BgSub",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BgSub",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BgSub",
      "rating": 4.3,
      "reviewCount": 606
    },
    {
      "id": "173",
      "name": "BiRead",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BiRead",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BiRead",
      "rating": 4.7,
      "reviewCount": 332
    },
    {
      "id": "174",
      "name": "BigJPG",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BigJPG",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BigJPG",
      "rating": 4.3,
      "reviewCount": 801
    },
    {
      "id": "175",
      "name": "BigSpeakAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BigSpeakAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BigSpeakAI",
      "rating": 4.9,
      "reviewCount": 178
    },
    {
      "id": "176",
      "name": "Bigfoot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Bigfoot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Bigfoot",
      "rating": 4.9,
      "reviewCount": 607
    },
    {
      "id": "177",
      "name": "BingImageCreator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BingImageCreator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BingImageCreator",
      "rating": 4.8,
      "reviewCount": 664
    },
    {
      "id": "178",
      "name": "BioGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BioGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BioGPT",
      "rating": 4.1,
      "reviewCount": 750
    },
    {
      "id": "179",
      "name": "BitoAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BitoAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BitoAI",
      "rating": 4.8,
      "reviewCount": 211
    },
    {
      "id": "180",
      "name": "BlackInk",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BlackInk",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BlackInk",
      "rating": 4.4,
      "reviewCount": 629
    },
    {
      "id": "181",
      "name": "BlazeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BlazeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BlazeAI",
      "rating": 4.0,
      "reviewCount": 269
    },
    {
      "id": "182",
      "name": "BlogIdeasGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BlogIdeasGenerator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BlogIdeasGenerator",
      "rating": 4.7,
      "reviewCount": 986
    },
    {
      "id": "183",
      "name": "BlogNLP",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BlogNLP",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BlogNLP",
      "rating": 4.0,
      "reviewCount": 888
    },
    {
      "id": "184",
      "name": "BloombergGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BloombergGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BloombergGPT",
      "rating": 4.2,
      "reviewCount": 721
    },
    {
      "id": "185",
      "name": "BlueWillow",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BlueWillow",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BlueWillow",
      "rating": 4.8,
      "reviewCount": 970
    },
    {
      "id": "186",
      "name": "BlushAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BlushAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BlushAI",
      "rating": 4.1,
      "reviewCount": 424
    },
    {
      "id": "187",
      "name": "Bolt.new",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Bolt.new",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Bolt.new",
      "rating": 4.4,
      "reviewCount": 126
    },
    {
      "id": "188",
      "name": "Bookabout",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Bookabout",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Bookabout",
      "rating": 4.9,
      "reviewCount": 904
    },
    {
      "id": "189",
      "name": "BooksAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BooksAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BooksAI",
      "rating": 5.0,
      "reviewCount": 726
    },
    {
      "id": "190",
      "name": "Boolv",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Boolv",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Boolv",
      "rating": 4.8,
      "reviewCount": 502
    },
    {
      "id": "191",
      "name": "Boomy",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Boomy",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Boomy",
      "rating": 4.1,
      "reviewCount": 897
    },
    {
      "id": "192",
      "name": "Booom.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Booom.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Booom.ai",
      "rating": 4.7,
      "reviewCount": 754
    },
    {
      "id": "193",
      "name": "Botowski",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Botowski",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Botowski",
      "rating": 4.5,
      "reviewCount": 781
    },
    {
      "id": "194",
      "name": "BoximatorbyByteDance",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BoximatorbyByteDance",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BoximatorbyByteDance",
      "rating": 4.9,
      "reviewCount": 626
    },
    {
      "id": "195",
      "name": "BraveGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BraveGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BraveGPT",
      "rating": 4.2,
      "reviewCount": 904
    },
    {
      "id": "196",
      "name": "BraveLeoAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BraveLeoAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BraveLeoAI",
      "rating": 4.4,
      "reviewCount": 534
    },
    {
      "id": "197",
      "name": "BrickCenter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BrickCenter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BrickCenter",
      "rating": 5.0,
      "reviewCount": 272
    },
    {
      "id": "198",
      "name": "BrickitApp",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BrickitApp",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BrickitApp",
      "rating": 4.9,
      "reviewCount": 629
    },
    {
      "id": "199",
      "name": "BrieflyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BrieflyAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BrieflyAI",
      "rating": 4.8,
      "reviewCount": 682
    },
    {
      "id": "200",
      "name": "BrightEye",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BrightEye",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BrightEye",
      "rating": 4.7,
      "reviewCount": 354
    },
    {
      "id": "201",
      "name": "BrowseGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BrowseGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BrowseGPT",
      "rating": 4.2,
      "reviewCount": 169
    },
    {
      "id": "202",
      "name": "BrowserUse",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BrowserUse",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BrowserUse",
      "rating": 5.0,
      "reviewCount": 479
    },
    {
      "id": "203",
      "name": "Buildbox4",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Buildbox4",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Buildbox4",
      "rating": 4.2,
      "reviewCount": 425
    },
    {
      "id": "204",
      "name": "Buildt",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Buildt",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Buildt",
      "rating": 4.2,
      "reviewCount": 955
    },
    {
      "id": "205",
      "name": "ButterfliesAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ButterfliesAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ButterfliesAI",
      "rating": 4.4,
      "reviewCount": 695
    },
    {
      "id": "206",
      "name": "BuyScout",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BuyScout",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BuyScout",
      "rating": 4.9,
      "reviewCount": 159
    },
    {
      "id": "207",
      "name": "BuzzCaptions",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/BuzzCaptions",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=BuzzCaptions",
      "rating": 4.8,
      "reviewCount": 272
    },
    {
      "id": "208",
      "name": "Bytelearn",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Bytelearn",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Bytelearn",
      "rating": 4.6,
      "reviewCount": 754
    },
    {
      "id": "209",
      "name": "Byway",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Byway",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Byway",
      "rating": 4.5,
      "reviewCount": 431
    },
    {
      "id": "210",
      "name": "CADwithAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CADwithAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CADwithAI",
      "rating": 4.2,
      "reviewCount": 544
    },
    {
      "id": "211",
      "name": "CamelAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CamelAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CamelAI",
      "rating": 4.9,
      "reviewCount": 225
    },
    {
      "id": "212",
      "name": "CapCutOnlineCreativeSuite",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CapCutOnlineCreativeSuite",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CapCutOnlineCreativeSuite",
      "rating": 4.5,
      "reviewCount": 759
    },
    {
      "id": "213",
      "name": "Capacities.io",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Capacities.io",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Capacities.io",
      "rating": 4.0,
      "reviewCount": 813
    },
    {
      "id": "214",
      "name": "CapitolAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CapitolAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CapitolAI",
      "rating": 4.7,
      "reviewCount": 957
    },
    {
      "id": "215",
      "name": "CaptionGen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CaptionGen",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CaptionGen",
      "rating": 4.1,
      "reviewCount": 666
    },
    {
      "id": "216",
      "name": "Captions",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Captions",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Captions",
      "rating": 4.5,
      "reviewCount": 151
    },
    {
      "id": "217",
      "name": "CareerDekhoAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CareerDekhoAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CareerDekhoAI",
      "rating": 4.8,
      "reviewCount": 502
    },
    {
      "id": "218",
      "name": "CareerHubAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CareerHubAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CareerHubAI",
      "rating": 4.8,
      "reviewCount": 183
    },
    {
      "id": "219",
      "name": "CareeredAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CareeredAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CareeredAI",
      "rating": 4.6,
      "reviewCount": 328
    },
    {
      "id": "220",
      "name": "CaricaturerIO",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CaricaturerIO",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CaricaturerIO",
      "rating": 4.7,
      "reviewCount": 814
    },
    {
      "id": "221",
      "name": "Cartwheel",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Cartwheel",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Cartwheel",
      "rating": 4.8,
      "reviewCount": 408
    },
    {
      "id": "222",
      "name": "Cascade",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Cascade",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Cascade",
      "rating": 4.3,
      "reviewCount": 670
    },
    {
      "id": "223",
      "name": "Cascadeur",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Cascadeur",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Cascadeur",
      "rating": 4.9,
      "reviewCount": 444
    },
    {
      "id": "224",
      "name": "CasperAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CasperAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CasperAI",
      "rating": 4.3,
      "reviewCount": 180
    },
    {
      "id": "225",
      "name": "Censius",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Censius",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Censius",
      "rating": 4.4,
      "reviewCount": 726
    },
    {
      "id": "226",
      "name": "Cerebras-GPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Cerebras-GPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Cerebras-GPT",
      "rating": 4.7,
      "reviewCount": 415
    },
    {
      "id": "227",
      "name": "ChainClarity",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChainClarity",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChainClarity",
      "rating": 4.0,
      "reviewCount": 585
    },
    {
      "id": "228",
      "name": "ChainGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChainGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChainGPT",
      "rating": 4.3,
      "reviewCount": 782
    },
    {
      "id": "229",
      "name": "ChampAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChampAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChampAI",
      "rating": 4.3,
      "reviewCount": 572
    },
    {
      "id": "230",
      "name": "CharacterGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CharacterGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CharacterGPT",
      "rating": 4.8,
      "reviewCount": 703
    },
    {
      "id": "231",
      "name": "CharacterGen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CharacterGen",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CharacterGen",
      "rating": 4.3,
      "reviewCount": 455
    },
    {
      "id": "232",
      "name": "Charisma",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Charisma",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Charisma",
      "rating": 4.5,
      "reviewCount": 647
    },
    {
      "id": "233",
      "name": "ChatArena",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatArena",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatArena",
      "rating": 4.8,
      "reviewCount": 104
    },
    {
      "id": "234",
      "name": "ChatAvatar",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatAvatar",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatAvatar",
      "rating": 5.0,
      "reviewCount": 957
    },
    {
      "id": "235",
      "name": "ChatDOC",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatDOC",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatDOC",
      "rating": 4.8,
      "reviewCount": 638
    },
    {
      "id": "236",
      "name": "ChatGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatGPT",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatGPT",
      "rating": 4.9,
      "reviewCount": 194
    },
    {
      "id": "237",
      "name": "ChatGPTForSearchEngines",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatGPTForSearchEngines",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatGPTForSearchEngines",
      "rating": 4.9,
      "reviewCount": 447
    },
    {
      "id": "238",
      "name": "ChatGPTPromptGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatGPTPromptGenerator",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatGPTPromptGenerator",
      "rating": 4.7,
      "reviewCount": 966
    },
    {
      "id": "239",
      "name": "ChatGPTPromptPlus",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatGPTPromptPlus",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatGPTPromptPlus",
      "rating": 4.8,
      "reviewCount": 458
    },
    {
      "id": "240",
      "name": "ChatGPTSidebar",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatGPTSidebar",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatGPTSidebar",
      "rating": 4.4,
      "reviewCount": 944
    },
    {
      "id": "241",
      "name": "ChatGPTSuper",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatGPTSuper",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatGPTSuper",
      "rating": 4.1,
      "reviewCount": 275
    },
    {
      "id": "242",
      "name": "ChatGPTUnWrapped2023",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatGPTUnWrapped2023",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatGPTUnWrapped2023",
      "rating": 4.9,
      "reviewCount": 585
    },
    {
      "id": "243",
      "name": "ChatGPTWriter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatGPTWriter",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatGPTWriter",
      "rating": 4.5,
      "reviewCount": 610
    },
    {
      "id": "244",
      "name": "ChatGPTforAmazon",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatGPTforAmazon",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatGPTforAmazon",
      "rating": 4.4,
      "reviewCount": 513
    },
    {
      "id": "245",
      "name": "ChatGPTforGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatGPTforGoogle",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatGPTforGoogle",
      "rating": 4.7,
      "reviewCount": 163
    },
    {
      "id": "246",
      "name": "ChatGPTforYouTube",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatGPTforYouTube",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatGPTforYouTube",
      "rating": 4.4,
      "reviewCount": 891
    },
    {
      "id": "247",
      "name": "ChatHub",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatHub",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatHub",
      "rating": 4.4,
      "reviewCount": 121
    },
    {
      "id": "248",
      "name": "ChatJams",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatJams",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatJams",
      "rating": 4.7,
      "reviewCount": 798
    },
    {
      "id": "249",
      "name": "ChatMind",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatMind",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatMind",
      "rating": 5.0,
      "reviewCount": 188
    },
    {
      "id": "250",
      "name": "ChatSonic",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatSonic",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatSonic",
      "rating": 4.9,
      "reviewCount": 402
    },
    {
      "id": "251",
      "name": "ChatWizard",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatWizard",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatWizard",
      "rating": 4.1,
      "reviewCount": 247
    },
    {
      "id": "252",
      "name": "ChatbotUI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatbotUI",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatbotUI",
      "rating": 4.5,
      "reviewCount": 297
    },
    {
      "id": "253",
      "name": "ChatdAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatdAI",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatdAI",
      "rating": 4.9,
      "reviewCount": 601
    },
    {
      "id": "254",
      "name": "Chatmosphere",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Chatmosphere",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Chatmosphere",
      "rating": 4.1,
      "reviewCount": 759
    },
    {
      "id": "255",
      "name": "ChatterbyHumeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatterbyHumeAI",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatterbyHumeAI",
      "rating": 4.4,
      "reviewCount": 634
    },
    {
      "id": "256",
      "name": "ChatwithMLX",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatwithMLX",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatwithMLX",
      "rating": 4.5,
      "reviewCount": 119
    },
    {
      "id": "257",
      "name": "ChatwithRTXbyNvidia",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChatwithRTXbyNvidia",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatwithRTXbyNvidia",
      "rating": 4.9,
      "reviewCount": 269
    },
    {
      "id": "258",
      "name": "ChessGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ChessGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChessGPT",
      "rating": 4.3,
      "reviewCount": 462
    },
    {
      "id": "259",
      "name": "Circleback",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Circleback",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Circleback",
      "rating": 4.2,
      "reviewCount": 977
    },
    {
      "id": "260",
      "name": "Civitai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Civitai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Civitai",
      "rating": 4.9,
      "reviewCount": 548
    },
    {
      "id": "261",
      "name": "ClarityAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ClarityAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ClarityAI",
      "rating": 4.5,
      "reviewCount": 907
    },
    {
      "id": "262",
      "name": "ClassPointAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ClassPointAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ClassPointAI",
      "rating": 4.5,
      "reviewCount": 987
    },
    {
      "id": "263",
      "name": "ClassifyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ClassifyAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ClassifyAI",
      "rating": 4.4,
      "reviewCount": 624
    },
    {
      "id": "264",
      "name": "ClaudeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ClaudeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ClaudeAI",
      "rating": 4.1,
      "reviewCount": 403
    },
    {
      "id": "265",
      "name": "ClaudeEngineer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ClaudeEngineer",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ClaudeEngineer",
      "rating": 4.0,
      "reviewCount": 990
    },
    {
      "id": "266",
      "name": "ClaudeForSheets",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ClaudeForSheets",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ClaudeForSheets",
      "rating": 4.3,
      "reviewCount": 184
    },
    {
      "id": "267",
      "name": "CleanupPictures",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CleanupPictures",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CleanupPictures",
      "rating": 4.8,
      "reviewCount": 563
    },
    {
      "id": "268",
      "name": "Clearword",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Clearword",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Clearword",
      "rating": 4.8,
      "reviewCount": 939
    },
    {
      "id": "269",
      "name": "ClimatePolicyRadar",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ClimatePolicyRadar",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ClimatePolicyRadar",
      "rating": 4.0,
      "reviewCount": 133
    },
    {
      "id": "270",
      "name": "Cline",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Cline",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Cline",
      "rating": 4.5,
      "reviewCount": 297
    },
    {
      "id": "271",
      "name": "CloneDub",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CloneDub",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CloneDub",
      "rating": 4.2,
      "reviewCount": 370
    },
    {
      "id": "272",
      "name": "CloudflareAIValueTool",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CloudflareAIValueTool",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CloudflareAIValueTool",
      "rating": 4.6,
      "reviewCount": 471
    },
    {
      "id": "273",
      "name": "CoTracker3",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CoTracker3",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CoTracker3",
      "rating": 4.3,
      "reviewCount": 303
    },
    {
      "id": "274",
      "name": "CoachMarlee",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CoachMarlee",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CoachMarlee",
      "rating": 4.9,
      "reviewCount": 214
    },
    {
      "id": "275",
      "name": "Code-GPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Code-GPT",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Code-GPT",
      "rating": 4.6,
      "reviewCount": 915
    },
    {
      "id": "276",
      "name": "CodeAssist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CodeAssist",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CodeAssist",
      "rating": 4.2,
      "reviewCount": 767
    },
    {
      "id": "277",
      "name": "CodeFormer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CodeFormer",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CodeFormer",
      "rating": 4.1,
      "reviewCount": 748
    },
    {
      "id": "278",
      "name": "CodeGeeXAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CodeGeeXAI",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CodeGeeXAI",
      "rating": 4.3,
      "reviewCount": 440
    },
    {
      "id": "279",
      "name": "CodeGemmabyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CodeGemmabyGoogle",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CodeGemmabyGoogle",
      "rating": 4.9,
      "reviewCount": 251
    },
    {
      "id": "280",
      "name": "CodeLlama70B",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CodeLlama70B",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CodeLlama70B",
      "rating": 4.2,
      "reviewCount": 702
    },
    {
      "id": "281",
      "name": "Codeamigo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Codeamigo",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Codeamigo",
      "rating": 4.1,
      "reviewCount": 509
    },
    {
      "id": "282",
      "name": "CodenullAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CodenullAI",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CodenullAI",
      "rating": 4.0,
      "reviewCount": 392
    },
    {
      "id": "283",
      "name": "CodesquireAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CodesquireAI",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CodesquireAI",
      "rating": 4.1,
      "reviewCount": 721
    },
    {
      "id": "284",
      "name": "Codestral",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Codestral",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Codestral",
      "rating": 5.0,
      "reviewCount": 748
    },
    {
      "id": "285",
      "name": "Cognosys2.0",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Cognosys2.0",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Cognosys2.0",
      "rating": 4.9,
      "reviewCount": 254
    },
    {
      "id": "286",
      "name": "ColoromoAIArtGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ColoromoAIArtGenerator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ColoromoAIArtGenerator",
      "rating": 4.4,
      "reviewCount": 194
    },
    {
      "id": "287",
      "name": "ColorsbyDeblank",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ColorsbyDeblank",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ColorsbyDeblank",
      "rating": 4.0,
      "reviewCount": 933
    },
    {
      "id": "288",
      "name": "CommandDash",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CommandDash",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CommandDash",
      "rating": 4.4,
      "reviewCount": 763
    },
    {
      "id": "289",
      "name": "Consensus",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Consensus",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Consensus",
      "rating": 5.0,
      "reviewCount": 623
    },
    {
      "id": "290",
      "name": "ConsistentCharacterbyfofr",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ConsistentCharacterbyfofr",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ConsistentCharacterbyfofr",
      "rating": 4.6,
      "reviewCount": 636
    },
    {
      "id": "291",
      "name": "ConstructAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ConstructAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ConstructAI",
      "rating": 4.5,
      "reviewCount": 931
    },
    {
      "id": "292",
      "name": "ContentAtScale",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ContentAtScale",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ContentAtScale",
      "rating": 4.1,
      "reviewCount": 749
    },
    {
      "id": "293",
      "name": "ContentCredentials",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ContentCredentials",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ContentCredentials",
      "rating": 4.1,
      "reviewCount": 641
    },
    {
      "id": "294",
      "name": "ContinualAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ContinualAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ContinualAI",
      "rating": 5.0,
      "reviewCount": 531
    },
    {
      "id": "295",
      "name": "ControlNet",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ControlNet",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ControlNet",
      "rating": 4.4,
      "reviewCount": 252
    },
    {
      "id": "296",
      "name": "CoolGiftIdeas",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CoolGiftIdeas",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CoolGiftIdeas",
      "rating": 4.6,
      "reviewCount": 768
    },
    {
      "id": "297",
      "name": "CoolMindMaps",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CoolMindMaps",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CoolMindMaps",
      "rating": 4.9,
      "reviewCount": 540
    },
    {
      "id": "298",
      "name": "CopyFish",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CopyFish",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CopyFish",
      "rating": 4.8,
      "reviewCount": 745
    },
    {
      "id": "299",
      "name": "Copyleaks",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Copyleaks",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Copyleaks",
      "rating": 4.3,
      "reviewCount": 680
    },
    {
      "id": "300",
      "name": "CopyrightCheckAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CopyrightCheckAI",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CopyrightCheckAI",
      "rating": 4.9,
      "reviewCount": 210
    },
    {
      "id": "301",
      "name": "Coqui",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Coqui",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Coqui",
      "rating": 4.0,
      "reviewCount": 504
    },
    {
      "id": "302",
      "name": "Cordial",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Cordial",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Cordial",
      "rating": 4.5,
      "reviewCount": 695
    },
    {
      "id": "303",
      "name": "CorrectorApp",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CorrectorApp",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CorrectorApp",
      "rating": 4.5,
      "reviewCount": 434
    },
    {
      "id": "304",
      "name": "CoverLetterGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CoverLetterGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CoverLetterGPT",
      "rating": 4.2,
      "reviewCount": 504
    },
    {
      "id": "305",
      "name": "CoverLetterbyGrammarly",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CoverLetterbyGrammarly",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CoverLetterbyGrammarly",
      "rating": 4.2,
      "reviewCount": 274
    },
    {
      "id": "306",
      "name": "CozeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CozeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CozeAI",
      "rating": 4.0,
      "reviewCount": 656
    },
    {
      "id": "307",
      "name": "Craiyon",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Craiyon",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Craiyon",
      "rating": 4.4,
      "reviewCount": 451
    },
    {
      "id": "308",
      "name": "CreateAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CreateAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CreateAI",
      "rating": 4.0,
      "reviewCount": 651
    },
    {
      "id": "309",
      "name": "CreateaZapbyZapier",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CreateaZapbyZapier",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CreateaZapbyZapier",
      "rating": 4.1,
      "reviewCount": 284
    },
    {
      "id": "310",
      "name": "CreatieAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CreatieAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CreatieAI",
      "rating": 4.4,
      "reviewCount": 276
    },
    {
      "id": "311",
      "name": "CreativeFastAID",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CreativeFastAID",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CreativeFastAID",
      "rating": 4.6,
      "reviewCount": 425
    },
    {
      "id": "312",
      "name": "CreatorKitSanta",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CreatorKitSanta",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CreatorKitSanta",
      "rating": 4.8,
      "reviewCount": 818
    },
    {
      "id": "313",
      "name": "CreatusAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CreatusAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CreatusAI",
      "rating": 4.4,
      "reviewCount": 375
    },
    {
      "id": "314",
      "name": "CronAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CronAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CronAI",
      "rating": 4.9,
      "reviewCount": 628
    },
    {
      "id": "315",
      "name": "CrowdView",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CrowdView",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CrowdView",
      "rating": 4.2,
      "reviewCount": 990
    },
    {
      "id": "316",
      "name": "Curiosio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Curiosio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Curiosio",
      "rating": 4.9,
      "reviewCount": 617
    },
    {
      "id": "317",
      "name": "CursorAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/CursorAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=CursorAI",
      "rating": 4.1,
      "reviewCount": 604
    },
    {
      "id": "318",
      "name": "DBRXbyDatabricks",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DBRXbyDatabricks",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DBRXbyDatabricks",
      "rating": 4.7,
      "reviewCount": 703
    },
    {
      "id": "319",
      "name": "DGMAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DGMAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DGMAI",
      "rating": 4.9,
      "reviewCount": 927
    },
    {
      "id": "320",
      "name": "DeciphrAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeciphrAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeciphrAI",
      "rating": 4.9,
      "reviewCount": 742
    },
    {
      "id": "321",
      "name": "Decktopus",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Decktopus",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Decktopus",
      "rating": 4.1,
      "reviewCount": 847
    },
    {
      "id": "322",
      "name": "DeepAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepAI",
      "rating": 4.7,
      "reviewCount": 389
    },
    {
      "id": "323",
      "name": "DeepDreamGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepDreamGenerator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepDreamGenerator",
      "rating": 4.6,
      "reviewCount": 498
    },
    {
      "id": "324",
      "name": "DeepFaceLab",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepFaceLab",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepFaceLab",
      "rating": 4.0,
      "reviewCount": 855
    },
    {
      "id": "325",
      "name": "DeepFakeDetector",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepFakeDetector",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepFakeDetector",
      "rating": 4.6,
      "reviewCount": 876
    },
    {
      "id": "326",
      "name": "DeepFakesWeb",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepFakesWeb",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepFakesWeb",
      "rating": 4.4,
      "reviewCount": 475
    },
    {
      "id": "327",
      "name": "DeepReview",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepReview",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepReview",
      "rating": 4.7,
      "reviewCount": 809
    },
    {
      "id": "328",
      "name": "DeepSeek-Prover-V2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepSeek-Prover-V2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepSeek-Prover-V2",
      "rating": 4.2,
      "reviewCount": 213
    },
    {
      "id": "329",
      "name": "DeepSeek-R1",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepSeek-R1",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepSeek-R1",
      "rating": 4.3,
      "reviewCount": 490
    },
    {
      "id": "330",
      "name": "DeepSeek-R1-Lite-Preview",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepSeek-R1-Lite-Preview",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepSeek-R1-Lite-Preview",
      "rating": 4.9,
      "reviewCount": 126
    },
    {
      "id": "331",
      "name": "DeepSeek-V2.5",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepSeek-V2.5",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepSeek-V2.5",
      "rating": 4.2,
      "reviewCount": 361
    },
    {
      "id": "332",
      "name": "DeepSeek-V3",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepSeek-V3",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepSeek-V3",
      "rating": 4.7,
      "reviewCount": 744
    },
    {
      "id": "333",
      "name": "DeepSeek-VL2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepSeek-VL2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepSeek-VL2",
      "rating": 4.8,
      "reviewCount": 534
    },
    {
      "id": "334",
      "name": "DeepSwapperAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepSwapperAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepSwapperAI",
      "rating": 5.0,
      "reviewCount": 978
    },
    {
      "id": "335",
      "name": "Deepl",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Deepl",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Deepl",
      "rating": 4.1,
      "reviewCount": 125
    },
    {
      "id": "336",
      "name": "DeeplWrite",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeeplWrite",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeeplWrite",
      "rating": 4.1,
      "reviewCount": 922
    },
    {
      "id": "337",
      "name": "DeepmindSparrow",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeepmindSparrow",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeepmindSparrow",
      "rating": 4.3,
      "reviewCount": 775
    },
    {
      "id": "338",
      "name": "Deepsite",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Deepsite",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Deepsite",
      "rating": 4.7,
      "reviewCount": 133
    },
    {
      "id": "339",
      "name": "DeforumStableDiffusion",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DeforumStableDiffusion",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DeforumStableDiffusion",
      "rating": 4.8,
      "reviewCount": 151
    },
    {
      "id": "340",
      "name": "DepthPro",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DepthPro",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DepthPro",
      "rating": 4.9,
      "reviewCount": 816
    },
    {
      "id": "341",
      "name": "Depthify.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Depthify.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Depthify.ai",
      "rating": 4.5,
      "reviewCount": 545
    },
    {
      "id": "342",
      "name": "DesignSketchbyStylar",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DesignSketchbyStylar",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DesignSketchbyStylar",
      "rating": 4.6,
      "reviewCount": 430
    },
    {
      "id": "343",
      "name": "DetectGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DetectGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DetectGPT",
      "rating": 4.6,
      "reviewCount": 605
    },
    {
      "id": "344",
      "name": "DevikaAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DevikaAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DevikaAI",
      "rating": 4.3,
      "reviewCount": 761
    },
    {
      "id": "345",
      "name": "DevinAIbyCognition",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DevinAIbyCognition",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DevinAIbyCognition",
      "rating": 4.7,
      "reviewCount": 663
    },
    {
      "id": "346",
      "name": "Dewatermark.AI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Dewatermark.AI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Dewatermark.AI",
      "rating": 4.8,
      "reviewCount": 508
    },
    {
      "id": "347",
      "name": "Dezgo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Dezgo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Dezgo",
      "rating": 5.0,
      "reviewCount": 227
    },
    {
      "id": "348",
      "name": "Dia1.6B",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Dia1.6B",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Dia1.6B",
      "rating": 4.7,
      "reviewCount": 682
    },
    {
      "id": "349",
      "name": "DictationIO",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DictationIO",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DictationIO",
      "rating": 4.8,
      "reviewCount": 695
    },
    {
      "id": "350",
      "name": "DiffRhythm",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DiffRhythm",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DiffRhythm",
      "rating": 4.8,
      "reviewCount": 136
    },
    {
      "id": "351",
      "name": "DifferentDimensionMe",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DifferentDimensionMe",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DifferentDimensionMe",
      "rating": 4.1,
      "reviewCount": 368
    },
    {
      "id": "352",
      "name": "DiffusionBee",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DiffusionBee",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DiffusionBee",
      "rating": 5.0,
      "reviewCount": 318
    },
    {
      "id": "353",
      "name": "DiffusionLight",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DiffusionLight",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DiffusionLight",
      "rating": 4.9,
      "reviewCount": 288
    },
    {
      "id": "354",
      "name": "Dify.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Dify.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Dify.ai",
      "rating": 4.2,
      "reviewCount": 147
    },
    {
      "id": "355",
      "name": "DimensionX",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DimensionX",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DimensionX",
      "rating": 4.3,
      "reviewCount": 902
    },
    {
      "id": "356",
      "name": "Dinnerfy",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Dinnerfy",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Dinnerfy",
      "rating": 4.7,
      "reviewCount": 501
    },
    {
      "id": "357",
      "name": "DiplopAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DiplopAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DiplopAI",
      "rating": 5.0,
      "reviewCount": 236
    },
    {
      "id": "358",
      "name": "DiveDeck.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DiveDeck.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DiveDeck.ai",
      "rating": 4.1,
      "reviewCount": 839
    },
    {
      "id": "359",
      "name": "DoctrinaAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DoctrinaAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DoctrinaAI",
      "rating": 4.6,
      "reviewCount": 757
    },
    {
      "id": "360",
      "name": "Documind",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Documind",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Documind",
      "rating": 5.0,
      "reviewCount": 104
    },
    {
      "id": "361",
      "name": "DolaAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DolaAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DolaAI",
      "rating": 4.4,
      "reviewCount": 448
    },
    {
      "id": "362",
      "name": "DolbyOn",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DolbyOn",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DolbyOn",
      "rating": 4.7,
      "reviewCount": 819
    },
    {
      "id": "363",
      "name": "Dolly2.0",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Dolly2.0",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Dolly2.0",
      "rating": 4.8,
      "reviewCount": 415
    },
    {
      "id": "364",
      "name": "DolphinGemma",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DolphinGemma",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DolphinGemma",
      "rating": 4.8,
      "reviewCount": 975
    },
    {
      "id": "365",
      "name": "Dora",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Dora",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Dora",
      "rating": 4.4,
      "reviewCount": 106
    },
    {
      "id": "366",
      "name": "DorkGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DorkGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DorkGPT",
      "rating": 4.5,
      "reviewCount": 474
    },
    {
      "id": "367",
      "name": "DoubtClearAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DoubtClearAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DoubtClearAI",
      "rating": 4.7,
      "reviewCount": 531
    },
    {
      "id": "368",
      "name": "Dough",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Dough",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Dough",
      "rating": 4.7,
      "reviewCount": 532
    },
    {
      "id": "369",
      "name": "DragGAN",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DragGAN",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DragGAN",
      "rating": 4.7,
      "reviewCount": 988
    },
    {
      "id": "370",
      "name": "DrawMyUI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DrawMyUI",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DrawMyUI",
      "rating": 4.6,
      "reviewCount": 828
    },
    {
      "id": "371",
      "name": "DrawingPrompt",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DrawingPrompt",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DrawingPrompt",
      "rating": 4.2,
      "reviewCount": 917
    },
    {
      "id": "372",
      "name": "DreaMoving",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DreaMoving",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DreaMoving",
      "rating": 5.0,
      "reviewCount": 214
    },
    {
      "id": "373",
      "name": "DreamAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DreamAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DreamAI",
      "rating": 4.4,
      "reviewCount": 310
    },
    {
      "id": "374",
      "name": "DreamActor-M1",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DreamActor-M1",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DreamActor-M1",
      "rating": 4.9,
      "reviewCount": 865
    },
    {
      "id": "375",
      "name": "DreamFusion3D",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DreamFusion3D",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DreamFusion3D",
      "rating": 4.7,
      "reviewCount": 835
    },
    {
      "id": "376",
      "name": "DreamGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DreamGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DreamGPT",
      "rating": 4.6,
      "reviewCount": 709
    },
    {
      "id": "377",
      "name": "DreamInterpreter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DreamInterpreter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DreamInterpreter",
      "rating": 4.8,
      "reviewCount": 195
    },
    {
      "id": "378",
      "name": "DreamTalk",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DreamTalk",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DreamTalk",
      "rating": 4.0,
      "reviewCount": 553
    },
    {
      "id": "379",
      "name": "DreaminaAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DreaminaAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DreaminaAI",
      "rating": 4.7,
      "reviewCount": 617
    },
    {
      "id": "380",
      "name": "DreamsandsIO",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DreamsandsIO",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DreamsandsIO",
      "rating": 4.7,
      "reviewCount": 144
    },
    {
      "id": "381",
      "name": "DrumMachine",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DrumMachine",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DrumMachine",
      "rating": 4.1,
      "reviewCount": 217
    },
    {
      "id": "382",
      "name": "DrumloopAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DrumloopAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DrumloopAI",
      "rating": 4.4,
      "reviewCount": 424
    },
    {
      "id": "383",
      "name": "DuckDuckGoAIChat",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/DuckDuckGoAIChat",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=DuckDuckGoAIChat",
      "rating": 4.1,
      "reviewCount": 819
    },
    {
      "id": "384",
      "name": "ECommercePromptGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ECommercePromptGenerator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ECommercePromptGenerator",
      "rating": 4.8,
      "reviewCount": 516
    },
    {
      "id": "385",
      "name": "Ebsynth",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Ebsynth",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Ebsynth",
      "rating": 4.3,
      "reviewCount": 872
    },
    {
      "id": "386",
      "name": "Edify3D",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Edify3D",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Edify3D",
      "rating": 4.9,
      "reviewCount": 551
    },
    {
      "id": "387",
      "name": "EditGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/EditGPT",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=EditGPT",
      "rating": 4.6,
      "reviewCount": 578
    },
    {
      "id": "388",
      "name": "EillaAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/EillaAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=EillaAI",
      "rating": 4.5,
      "reviewCount": 900
    },
    {
      "id": "389",
      "name": "EinsteinCopilot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/EinsteinCopilot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=EinsteinCopilot",
      "rating": 4.6,
      "reviewCount": 945
    },
    {
      "id": "390",
      "name": "ElevenLabsMCP",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ElevenLabsMCP",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ElevenLabsMCP",
      "rating": 4.8,
      "reviewCount": 818
    },
    {
      "id": "391",
      "name": "ElevenLabsMusic",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ElevenLabsMusic",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ElevenLabsMusic",
      "rating": 4.3,
      "reviewCount": 927
    },
    {
      "id": "392",
      "name": "ElevenLabsVoiceIsolator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ElevenLabsVoiceIsolator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ElevenLabsVoiceIsolator",
      "rating": 4.4,
      "reviewCount": 715
    },
    {
      "id": "393",
      "name": "ElfHelp",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ElfHelp",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ElfHelp",
      "rating": 4.7,
      "reviewCount": 585
    },
    {
      "id": "394",
      "name": "EmailTriager",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/EmailTriager",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=EmailTriager",
      "rating": 4.0,
      "reviewCount": 183
    },
    {
      "id": "395",
      "name": "EmotePortraitAlive%28EMO%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/EmotePortraitAlive%28EMO%29",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=EmotePortraitAlive%28EMO%29",
      "rating": 4.2,
      "reviewCount": 255
    },
    {
      "id": "396",
      "name": "EmuVideobyMeta",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/EmuVideobyMeta",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=EmuVideobyMeta",
      "rating": 4.8,
      "reviewCount": 476
    },
    {
      "id": "397",
      "name": "EraseIt",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/EraseIt",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=EraseIt",
      "rating": 4.7,
      "reviewCount": 945
    },
    {
      "id": "398",
      "name": "Ermine",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Ermine",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Ermine",
      "rating": 4.1,
      "reviewCount": 821
    },
    {
      "id": "399",
      "name": "EscapeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/EscapeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=EscapeAI",
      "rating": 4.4,
      "reviewCount": 293
    },
    {
      "id": "400",
      "name": "EssayBuilderAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/EssayBuilderAI",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=EssayBuilderAI",
      "rating": 4.5,
      "reviewCount": 809
    },
    {
      "id": "401",
      "name": "EvTexture",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/EvTexture",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=EvTexture",
      "rating": 4.5,
      "reviewCount": 576
    },
    {
      "id": "402",
      "name": "EvelynAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/EvelynAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=EvelynAI",
      "rating": 4.3,
      "reviewCount": 646
    },
    {
      "id": "403",
      "name": "Everypixel",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Everypixel",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Everypixel",
      "rating": 4.7,
      "reviewCount": 598
    },
    {
      "id": "404",
      "name": "ExperAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ExperAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ExperAI",
      "rating": 4.3,
      "reviewCount": 407
    },
    {
      "id": "405",
      "name": "ExplainPaper",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ExplainPaper",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ExplainPaper",
      "rating": 4.4,
      "reviewCount": 351
    },
    {
      "id": "406",
      "name": "ExploreAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ExploreAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ExploreAI",
      "rating": 4.9,
      "reviewCount": 655
    },
    {
      "id": "407",
      "name": "Exportify",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Exportify",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Exportify",
      "rating": 4.2,
      "reviewCount": 552
    },
    {
      "id": "408",
      "name": "ExpressivePhotoAvatar",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ExpressivePhotoAvatar",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ExpressivePhotoAvatar",
      "rating": 4.3,
      "reviewCount": 205
    },
    {
      "id": "409",
      "name": "Extrapolate",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Extrapolate",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Extrapolate",
      "rating": 4.8,
      "reviewCount": 458
    },
    {
      "id": "410",
      "name": "F-LitebyFreepik",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/F-LitebyFreepik",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=F-LitebyFreepik",
      "rating": 4.1,
      "reviewCount": 662
    },
    {
      "id": "411",
      "name": "F5-TTS",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/F5-TTS",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=F5-TTS",
      "rating": 4.8,
      "reviewCount": 286
    },
    {
      "id": "412",
      "name": "FILM",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FILM",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FILM",
      "rating": 4.8,
      "reviewCount": 388
    },
    {
      "id": "413",
      "name": "FLUX.1",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FLUX.1",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FLUX.1",
      "rating": 4.8,
      "reviewCount": 927
    },
    {
      "id": "414",
      "name": "FLUX.1Tools",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FLUX.1Tools",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FLUX.1Tools",
      "rating": 4.1,
      "reviewCount": 742
    },
    {
      "id": "415",
      "name": "FLUXLoRaLab",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FLUXLoRaLab",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FLUXLoRaLab",
      "rating": 4.1,
      "reviewCount": 186
    },
    {
      "id": "416",
      "name": "FMA-Net",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FMA-Net",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FMA-Net",
      "rating": 4.8,
      "reviewCount": 891
    },
    {
      "id": "417",
      "name": "Fable",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Fable",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Fable",
      "rating": 4.6,
      "reviewCount": 535
    },
    {
      "id": "418",
      "name": "Face-to-Stickerbyfofr",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Face-to-Stickerbyfofr",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Face-to-Stickerbyfofr",
      "rating": 4.4,
      "reviewCount": 365
    },
    {
      "id": "419",
      "name": "FaceAnimator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FaceAnimator",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FaceAnimator",
      "rating": 4.8,
      "reviewCount": 545
    },
    {
      "id": "420",
      "name": "FacePoke",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FacePoke",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FacePoke",
      "rating": 4.2,
      "reviewCount": 533
    },
    {
      "id": "421",
      "name": "FaceSwapOpen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FaceSwapOpen",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FaceSwapOpen",
      "rating": 5.0,
      "reviewCount": 117
    },
    {
      "id": "422",
      "name": "FaceSwapbyRemaker",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FaceSwapbyRemaker",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FaceSwapbyRemaker",
      "rating": 5.0,
      "reviewCount": 312
    },
    {
      "id": "423",
      "name": "FacialAssessmentTool",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FacialAssessmentTool",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FacialAssessmentTool",
      "rating": 4.7,
      "reviewCount": 803
    },
    {
      "id": "424",
      "name": "FakerLabs",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FakerLabs",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FakerLabs",
      "rating": 4.6,
      "reviewCount": 415
    },
    {
      "id": "425",
      "name": "FashionAdvisorAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FashionAdvisorAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FashionAdvisorAI",
      "rating": 4.6,
      "reviewCount": 459
    },
    {
      "id": "426",
      "name": "FastGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FastGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FastGPT",
      "rating": 4.8,
      "reviewCount": 896
    },
    {
      "id": "427",
      "name": "FastSDXLbyFal.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FastSDXLbyFal.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FastSDXLbyFal.ai",
      "rating": 4.3,
      "reviewCount": 290
    },
    {
      "id": "428",
      "name": "Fathom.fm",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Fathom.fm",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Fathom.fm",
      "rating": 4.9,
      "reviewCount": 873
    },
    {
      "id": "429",
      "name": "Feyn",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Feyn",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Feyn",
      "rating": 4.0,
      "reviewCount": 331
    },
    {
      "id": "430",
      "name": "FilloutAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FilloutAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FilloutAI",
      "rating": 5.0,
      "reviewCount": 824
    },
    {
      "id": "431",
      "name": "FilmmakerPRO",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FilmmakerPRO",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FilmmakerPRO",
      "rating": 5.0,
      "reviewCount": 835
    },
    {
      "id": "432",
      "name": "Finalle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Finalle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Finalle",
      "rating": 4.6,
      "reviewCount": 463
    },
    {
      "id": "433",
      "name": "Finchat.io",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Finchat.io",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Finchat.io",
      "rating": 5.0,
      "reviewCount": 351
    },
    {
      "id": "434",
      "name": "FindAMeal",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FindAMeal",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FindAMeal",
      "rating": 4.9,
      "reviewCount": 651
    },
    {
      "id": "435",
      "name": "FindYourNextBook",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FindYourNextBook",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FindYourNextBook",
      "rating": 4.4,
      "reviewCount": 945
    },
    {
      "id": "436",
      "name": "FindingWords",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FindingWords",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FindingWords",
      "rating": 5.0,
      "reviewCount": 812
    },
    {
      "id": "437",
      "name": "FineshareSingify",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FineshareSingify",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FineshareSingify",
      "rating": 4.9,
      "reviewCount": 260
    },
    {
      "id": "438",
      "name": "FirebaseStudio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FirebaseStudio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FirebaseStudio",
      "rating": 4.7,
      "reviewCount": 577
    },
    {
      "id": "439",
      "name": "FixBlur",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FixBlur",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FixBlur",
      "rating": 4.3,
      "reviewCount": 260
    },
    {
      "id": "440",
      "name": "FlairAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FlairAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FlairAI",
      "rating": 4.5,
      "reviewCount": 602
    },
    {
      "id": "441",
      "name": "Floneum",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Floneum",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Floneum",
      "rating": 4.6,
      "reviewCount": 800
    },
    {
      "id": "442",
      "name": "FlowiseAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FlowiseAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FlowiseAI",
      "rating": 4.1,
      "reviewCount": 743
    },
    {
      "id": "443",
      "name": "Fluentify",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Fluentify",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Fluentify",
      "rating": 4.5,
      "reviewCount": 538
    },
    {
      "id": "444",
      "name": "FluidAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FluidAI",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FluidAI",
      "rating": 4.3,
      "reviewCount": 117
    },
    {
      "id": "445",
      "name": "FluigAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FluigAI",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FluigAI",
      "rating": 4.8,
      "reviewCount": 464
    },
    {
      "id": "446",
      "name": "Flux.1-devUpscaler",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Flux.1-devUpscaler",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Flux.1-devUpscaler",
      "rating": 4.9,
      "reviewCount": 998
    },
    {
      "id": "447",
      "name": "FluxyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FluxyAI",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FluxyAI",
      "rating": 4.3,
      "reviewCount": 524
    },
    {
      "id": "448",
      "name": "Follow-Your-Click",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Follow-Your-Click",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Follow-Your-Click",
      "rating": 4.3,
      "reviewCount": 501
    },
    {
      "id": "449",
      "name": "FollowFox",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FollowFox",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FollowFox",
      "rating": 4.7,
      "reviewCount": 255
    },
    {
      "id": "450",
      "name": "Fontjoy",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Fontjoy",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Fontjoy",
      "rating": 4.9,
      "reviewCount": 947
    },
    {
      "id": "451",
      "name": "FoodMoodbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FoodMoodbyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FoodMoodbyGoogle",
      "rating": 4.4,
      "reviewCount": 291
    },
    {
      "id": "452",
      "name": "FordiAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FordiAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FordiAI",
      "rating": 4.4,
      "reviewCount": 537
    },
    {
      "id": "453",
      "name": "FramesByRunway",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FramesByRunway",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FramesByRunway",
      "rating": 4.3,
      "reviewCount": 593
    },
    {
      "id": "454",
      "name": "FreeAIChatbotBuilder",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FreeAIChatbotBuilder",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FreeAIChatbotBuilder",
      "rating": 4.9,
      "reviewCount": 848
    },
    {
      "id": "455",
      "name": "FreeAIContentAssistant",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FreeAIContentAssistant",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FreeAIContentAssistant",
      "rating": 4.4,
      "reviewCount": 553
    },
    {
      "id": "456",
      "name": "FreeAIContentWriter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FreeAIContentWriter",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FreeAIContentWriter",
      "rating": 4.5,
      "reviewCount": 322
    },
    {
      "id": "457",
      "name": "FreeAIEmailWriter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FreeAIEmailWriter",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FreeAIEmailWriter",
      "rating": 4.1,
      "reviewCount": 598
    },
    {
      "id": "458",
      "name": "FreeFaceSearchOnline",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FreeFaceSearchOnline",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FreeFaceSearchOnline",
      "rating": 4.4,
      "reviewCount": 511
    },
    {
      "id": "459",
      "name": "FreeImageAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FreeImageAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FreeImageAI",
      "rating": 4.9,
      "reviewCount": 658
    },
    {
      "id": "460",
      "name": "FreeSubtitlesAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FreeSubtitlesAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FreeSubtitlesAI",
      "rating": 4.4,
      "reviewCount": 689
    },
    {
      "id": "461",
      "name": "FreeTTS",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FreeTTS",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FreeTTS",
      "rating": 4.3,
      "reviewCount": 507
    },
    {
      "id": "462",
      "name": "FreepikPikaso",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FreepikPikaso",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FreepikPikaso",
      "rating": 4.1,
      "reviewCount": 744
    },
    {
      "id": "463",
      "name": "FreepikUpscaler",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FreepikUpscaler",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FreepikUpscaler",
      "rating": 4.1,
      "reviewCount": 796
    },
    {
      "id": "464",
      "name": "Freshly.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Freshly.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Freshly.ai",
      "rating": 4.7,
      "reviewCount": 415
    },
    {
      "id": "465",
      "name": "FugattoNvidia",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FugattoNvidia",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FugattoNvidia",
      "rating": 4.3,
      "reviewCount": 799
    },
    {
      "id": "466",
      "name": "FuupsAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/FuupsAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=FuupsAI",
      "rating": 4.4,
      "reviewCount": 778
    },
    {
      "id": "467",
      "name": "Fy%21Studio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Fy%21Studio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Fy%21Studio",
      "rating": 4.7,
      "reviewCount": 135
    },
    {
      "id": "468",
      "name": "G1LlamaMeta",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/G1LlamaMeta",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=G1LlamaMeta",
      "rating": 4.9,
      "reviewCount": 795
    },
    {
      "id": "469",
      "name": "GAIAbyMicrosoft",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GAIAbyMicrosoft",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GAIAbyMicrosoft",
      "rating": 4.8,
      "reviewCount": 201
    },
    {
      "id": "470",
      "name": "GPT-2OutputDetector",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GPT-2OutputDetector",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPT-2OutputDetector",
      "rating": 4.5,
      "reviewCount": 823
    },
    {
      "id": "471",
      "name": "GPT-4o",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GPT-4o",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPT-4o",
      "rating": 4.6,
      "reviewCount": 132
    },
    {
      "id": "472",
      "name": "GPT-4omini",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GPT-4omini",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPT-4omini",
      "rating": 4.5,
      "reviewCount": 726
    },
    {
      "id": "473",
      "name": "GPT2-chatbot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GPT2-chatbot",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPT2-chatbot",
      "rating": 4.4,
      "reviewCount": 199
    },
    {
      "id": "474",
      "name": "GPT2Markdown",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GPT2Markdown",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPT2Markdown",
      "rating": 4.3,
      "reviewCount": 808
    },
    {
      "id": "475",
      "name": "GPTCheatSheet",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GPTCheatSheet",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPTCheatSheet",
      "rating": 4.8,
      "reviewCount": 400
    },
    {
      "id": "476",
      "name": "GPTExcel",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GPTExcel",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPTExcel",
      "rating": 4.7,
      "reviewCount": 397
    },
    {
      "id": "477",
      "name": "GPTGO",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GPTGO",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPTGO",
      "rating": 4.6,
      "reviewCount": 979
    },
    {
      "id": "478",
      "name": "GPTZero",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GPTZero",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPTZero",
      "rating": 4.9,
      "reviewCount": 877
    },
    {
      "id": "479",
      "name": "GPTforSheets",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GPTforSheets",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPTforSheets",
      "rating": 4.1,
      "reviewCount": 135
    },
    {
      "id": "480",
      "name": "GPTforSlides",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GPTforSlides",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPTforSlides",
      "rating": 5.0,
      "reviewCount": 163
    },
    {
      "id": "481",
      "name": "GPTionary",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GPTionary",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPTionary",
      "rating": 4.7,
      "reviewCount": 702
    },
    {
      "id": "482",
      "name": "Galactica",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Galactica",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Galactica",
      "rating": 4.6,
      "reviewCount": 1000
    },
    {
      "id": "483",
      "name": "GameNgen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GameNgen",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GameNgen",
      "rating": 4.5,
      "reviewCount": 641
    },
    {
      "id": "484",
      "name": "GammaApp",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GammaApp",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GammaApp",
      "rating": 4.2,
      "reviewCount": 884
    },
    {
      "id": "485",
      "name": "Gatekeep",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Gatekeep",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Gatekeep",
      "rating": 4.3,
      "reviewCount": 952
    },
    {
      "id": "486",
      "name": "GaussianObject",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GaussianObject",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GaussianObject",
      "rating": 4.5,
      "reviewCount": 737
    },
    {
      "id": "487",
      "name": "GauthAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GauthAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GauthAI",
      "rating": 4.1,
      "reviewCount": 681
    },
    {
      "id": "488",
      "name": "GcoreAIImage",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GcoreAIImage",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GcoreAIImage",
      "rating": 4.1,
      "reviewCount": 277
    },
    {
      "id": "489",
      "name": "Gemini2.0",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Gemini2.0",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Gemini2.0",
      "rating": 4.5,
      "reviewCount": 557
    },
    {
      "id": "490",
      "name": "GeminiAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GeminiAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GeminiAI",
      "rating": 4.6,
      "reviewCount": 180
    },
    {
      "id": "491",
      "name": "GeminiCo-Drawing",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GeminiCo-Drawing",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GeminiCo-Drawing",
      "rating": 4.3,
      "reviewCount": 819
    },
    {
      "id": "492",
      "name": "GeminiPro1.5",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GeminiPro1.5",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GeminiPro1.5",
      "rating": 4.9,
      "reviewCount": 979
    },
    {
      "id": "493",
      "name": "Gemma2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Gemma2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Gemma2",
      "rating": 4.6,
      "reviewCount": 554
    },
    {
      "id": "494",
      "name": "Gemma3byGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Gemma3byGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Gemma3byGoogle",
      "rating": 4.2,
      "reviewCount": 172
    },
    {
      "id": "495",
      "name": "GenCast",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GenCast",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GenCast",
      "rating": 4.5,
      "reviewCount": 915
    },
    {
      "id": "496",
      "name": "GenFMElevenReader",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GenFMElevenReader",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GenFMElevenReader",
      "rating": 4.1,
      "reviewCount": 211
    },
    {
      "id": "497",
      "name": "GenTypebyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GenTypebyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GenTypebyGoogle",
      "rating": 4.9,
      "reviewCount": 757
    },
    {
      "id": "498",
      "name": "Genera.so",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Genera.so",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Genera.so",
      "rating": 4.6,
      "reviewCount": 444
    },
    {
      "id": "499",
      "name": "GenerativeFillbyStylar",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GenerativeFillbyStylar",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GenerativeFillbyStylar",
      "rating": 4.2,
      "reviewCount": 221
    },
    {
      "id": "500",
      "name": "Genesis",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Genesis",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Genesis",
      "rating": 4.1,
      "reviewCount": 916
    },
    {
      "id": "501",
      "name": "GeniebyCosine",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GeniebyCosine",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GeniebyCosine",
      "rating": 4.3,
      "reviewCount": 112
    },
    {
      "id": "502",
      "name": "GeniebyDeepmind",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GeniebyDeepmind",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GeniebyDeepmind",
      "rating": 4.2,
      "reviewCount": 627
    },
    {
      "id": "503",
      "name": "GeniebyLumalabs",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GeniebyLumalabs",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GeniebyLumalabs",
      "rating": 4.7,
      "reviewCount": 694
    },
    {
      "id": "504",
      "name": "GeniusReview",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GeniusReview",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GeniusReview",
      "rating": 4.6,
      "reviewCount": 998
    },
    {
      "id": "505",
      "name": "GenmoAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GenmoAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GenmoAI",
      "rating": 4.5,
      "reviewCount": 224
    },
    {
      "id": "506",
      "name": "Genspark",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Genspark",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Genspark",
      "rating": 4.3,
      "reviewCount": 796
    },
    {
      "id": "507",
      "name": "Get3DNvidia",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Get3DNvidia",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Get3DNvidia",
      "rating": 4.5,
      "reviewCount": 214
    },
    {
      "id": "508",
      "name": "Ghostwrite",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Ghostwrite",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Ghostwrite",
      "rating": 4.8,
      "reviewCount": 989
    },
    {
      "id": "509",
      "name": "GiftsGenie",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GiftsGenie",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GiftsGenie",
      "rating": 4.8,
      "reviewCount": 957
    },
    {
      "id": "510",
      "name": "GitFluence",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GitFluence",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GitFluence",
      "rating": 4.2,
      "reviewCount": 432
    },
    {
      "id": "511",
      "name": "GitHubCopilotWorkspace",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GitHubCopilotWorkspace",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GitHubCopilotWorkspace",
      "rating": 4.4,
      "reviewCount": 726
    },
    {
      "id": "512",
      "name": "GitHubModels",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GitHubModels",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GitHubModels",
      "rating": 4.7,
      "reviewCount": 556
    },
    {
      "id": "513",
      "name": "GitHubSpark",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GitHubSpark",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GitHubSpark",
      "rating": 4.3,
      "reviewCount": 598
    },
    {
      "id": "514",
      "name": "GitPodcast",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GitPodcast",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GitPodcast",
      "rating": 4.8,
      "reviewCount": 256
    },
    {
      "id": "515",
      "name": "GitaGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GitaGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GitaGPT",
      "rating": 4.1,
      "reviewCount": 148
    },
    {
      "id": "516",
      "name": "Glarity",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Glarity",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Glarity",
      "rating": 5.0,
      "reviewCount": 100
    },
    {
      "id": "517",
      "name": "Glasp",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Glasp",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Glasp",
      "rating": 4.4,
      "reviewCount": 363
    },
    {
      "id": "518",
      "name": "GlassHealthAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GlassHealthAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GlassHealthAI",
      "rating": 4.8,
      "reviewCount": 603
    },
    {
      "id": "519",
      "name": "GlifsApp",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GlifsApp",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GlifsApp",
      "rating": 4.2,
      "reviewCount": 180
    },
    {
      "id": "520",
      "name": "GlingAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GlingAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GlingAI",
      "rating": 4.7,
      "reviewCount": 981
    },
    {
      "id": "521",
      "name": "GlitterAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GlitterAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GlitterAI",
      "rating": 4.1,
      "reviewCount": 556
    },
    {
      "id": "522",
      "name": "GlobeExplorerAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GlobeExplorerAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GlobeExplorerAI",
      "rating": 4.3,
      "reviewCount": 227
    },
    {
      "id": "523",
      "name": "GlowAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GlowAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GlowAI",
      "rating": 4.8,
      "reviewCount": 944
    },
    {
      "id": "524",
      "name": "Go-with-the-Flow",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Go-with-the-Flow",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Go-with-the-Flow",
      "rating": 4.1,
      "reviewCount": 460
    },
    {
      "id": "525",
      "name": "GoblinTools",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GoblinTools",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GoblinTools",
      "rating": 4.8,
      "reviewCount": 388
    },
    {
      "id": "526",
      "name": "Godmode",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Godmode",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Godmode",
      "rating": 4.5,
      "reviewCount": 463
    },
    {
      "id": "527",
      "name": "GooGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GooGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GooGPT",
      "rating": 4.9,
      "reviewCount": 655
    },
    {
      "id": "528",
      "name": "Goody-2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Goody-2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Goody-2",
      "rating": 5.0,
      "reviewCount": 495
    },
    {
      "id": "529",
      "name": "GoogleColabCopilot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GoogleColabCopilot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GoogleColabCopilot",
      "rating": 4.0,
      "reviewCount": 888
    },
    {
      "id": "530",
      "name": "GoogleGenie2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GoogleGenie2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GoogleGenie2",
      "rating": 4.7,
      "reviewCount": 132
    },
    {
      "id": "531",
      "name": "GoogleMusicLM",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GoogleMusicLM",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GoogleMusicLM",
      "rating": 4.5,
      "reviewCount": 268
    },
    {
      "id": "532",
      "name": "GoogleTranslate",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GoogleTranslate",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GoogleTranslate",
      "rating": 4.2,
      "reviewCount": 895
    },
    {
      "id": "533",
      "name": "GoogleTrendsSupercharged2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GoogleTrendsSupercharged2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GoogleTrendsSupercharged2",
      "rating": 4.2,
      "reviewCount": 690
    },
    {
      "id": "534",
      "name": "GoogleVids",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GoogleVids",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GoogleVids",
      "rating": 4.9,
      "reviewCount": 741
    },
    {
      "id": "535",
      "name": "Gpttwit-bot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Gpttwit-bot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Gpttwit-bot",
      "rating": 4.6,
      "reviewCount": 605
    },
    {
      "id": "536",
      "name": "Gr00tbyNvidia",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Gr00tbyNvidia",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Gr00tbyNvidia",
      "rating": 4.7,
      "reviewCount": 770
    },
    {
      "id": "537",
      "name": "GrahamAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GrahamAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GrahamAI",
      "rating": 5.0,
      "reviewCount": 985
    },
    {
      "id": "538",
      "name": "GreatHeadlines",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GreatHeadlines",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GreatHeadlines",
      "rating": 4.6,
      "reviewCount": 584
    },
    {
      "id": "539",
      "name": "GrimoAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GrimoAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GrimoAI",
      "rating": 4.6,
      "reviewCount": 501
    },
    {
      "id": "540",
      "name": "Grok-1",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Grok-1",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Grok-1",
      "rating": 4.7,
      "reviewCount": 819
    },
    {
      "id": "541",
      "name": "Grok-1.5",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Grok-1.5",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Grok-1.5",
      "rating": 4.0,
      "reviewCount": 274
    },
    {
      "id": "542",
      "name": "GuanacoAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GuanacoAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GuanacoAI",
      "rating": 4.5,
      "reviewCount": 102
    },
    {
      "id": "543",
      "name": "GuideGeek",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GuideGeek",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GuideGeek",
      "rating": 4.8,
      "reviewCount": 906
    },
    {
      "id": "544",
      "name": "GymGenie",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/GymGenie",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GymGenie",
      "rating": 4.4,
      "reviewCount": 202
    },
    {
      "id": "545",
      "name": "HTTPieAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HTTPieAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HTTPieAI",
      "rating": 4.9,
      "reviewCount": 930
    },
    {
      "id": "546",
      "name": "HTTPieAIChat",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HTTPieAIChat",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HTTPieAIChat",
      "rating": 4.9,
      "reviewCount": 218
    },
    {
      "id": "547",
      "name": "HailuoAI%28MiniMax%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HailuoAI%28MiniMax%29",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HailuoAI%28MiniMax%29",
      "rating": 4.1,
      "reviewCount": 129
    },
    {
      "id": "548",
      "name": "HailuoAIAudio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HailuoAIAudio",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HailuoAIAudio",
      "rating": 4.4,
      "reviewCount": 663
    },
    {
      "id": "549",
      "name": "HaiperAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HaiperAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HaiperAI",
      "rating": 4.6,
      "reviewCount": 140
    },
    {
      "id": "550",
      "name": "Hallo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Hallo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Hallo",
      "rating": 4.0,
      "reviewCount": 592
    },
    {
      "id": "551",
      "name": "Hama",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Hama",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Hama",
      "rating": 4.5,
      "reviewCount": 190
    },
    {
      "id": "552",
      "name": "HanamiLiveTranslator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HanamiLiveTranslator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HanamiLiveTranslator",
      "rating": 4.0,
      "reviewCount": 688
    },
    {
      "id": "553",
      "name": "HappyMama",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HappyMama",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HappyMama",
      "rating": 4.1,
      "reviewCount": 394
    },
    {
      "id": "554",
      "name": "Harmonai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Harmonai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Harmonai",
      "rating": 4.1,
      "reviewCount": 981
    },
    {
      "id": "555",
      "name": "HarpaAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HarpaAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HarpaAI",
      "rating": 4.7,
      "reviewCount": 873
    },
    {
      "id": "556",
      "name": "HaveIBeenEncoded",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HaveIBeenEncoded",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HaveIBeenEncoded",
      "rating": 4.7,
      "reviewCount": 974
    },
    {
      "id": "557",
      "name": "HeadshotPro",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HeadshotPro",
      "category": "Marketing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HeadshotPro",
      "rating": 4.3,
      "reviewCount": 735
    },
    {
      "id": "558",
      "name": "HedraAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HedraAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HedraAI",
      "rating": 4.9,
      "reviewCount": 719
    },
    {
      "id": "559",
      "name": "Helicone",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Helicone",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Helicone",
      "rating": 4.5,
      "reviewCount": 977
    },
    {
      "id": "560",
      "name": "HelloHistory",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HelloHistory",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HelloHistory",
      "rating": 4.9,
      "reviewCount": 671
    },
    {
      "id": "561",
      "name": "HemingwayApp",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HemingwayApp",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HemingwayApp",
      "rating": 4.6,
      "reviewCount": 758
    },
    {
      "id": "562",
      "name": "Hermes3",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Hermes3",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Hermes3",
      "rating": 4.1,
      "reviewCount": 953
    },
    {
      "id": "563",
      "name": "HeroAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HeroAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HeroAI",
      "rating": 4.6,
      "reviewCount": 714
    },
    {
      "id": "564",
      "name": "Heuristica",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Heuristica",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Heuristica",
      "rating": 4.8,
      "reviewCount": 637
    },
    {
      "id": "565",
      "name": "HexagenWorldAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HexagenWorldAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HexagenWorldAI",
      "rating": 5.0,
      "reviewCount": 820
    },
    {
      "id": "566",
      "name": "Hey%2CGitHub",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Hey%2CGitHub",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Hey%2CGitHub",
      "rating": 4.7,
      "reviewCount": 228
    },
    {
      "id": "567",
      "name": "HeyGenInteractiveAvatar",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HeyGenInteractiveAvatar",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HeyGenInteractiveAvatar",
      "rating": 4.1,
      "reviewCount": 220
    },
    {
      "id": "568",
      "name": "HeyTale",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HeyTale",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HeyTale",
      "rating": 4.2,
      "reviewCount": 940
    },
    {
      "id": "569",
      "name": "Hibiki",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Hibiki",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Hibiki",
      "rating": 4.4,
      "reviewCount": 426
    },
    {
      "id": "570",
      "name": "HireLakeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HireLakeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HireLakeAI",
      "rating": 4.1,
      "reviewCount": 267
    },
    {
      "id": "571",
      "name": "HoneyDo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HoneyDo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HoneyDo",
      "rating": 4.8,
      "reviewCount": 667
    },
    {
      "id": "572",
      "name": "Hotshot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Hotshot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Hotshot",
      "rating": 5.0,
      "reviewCount": 580
    },
    {
      "id": "573",
      "name": "HourOneAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HourOneAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HourOneAI",
      "rating": 4.9,
      "reviewCount": 336
    },
    {
      "id": "574",
      "name": "HubSpotClipCreator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HubSpotClipCreator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HubSpotClipCreator",
      "rating": 4.2,
      "reviewCount": 593
    },
    {
      "id": "575",
      "name": "HuggingChat",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HuggingChat",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HuggingChat",
      "rating": 5.0,
      "reviewCount": 657
    },
    {
      "id": "576",
      "name": "HuggingFace",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HuggingFace",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HuggingFace",
      "rating": 4.9,
      "reviewCount": 444
    },
    {
      "id": "577",
      "name": "HumanizeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HumanizeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HumanizeAI",
      "rating": 4.5,
      "reviewCount": 319
    },
    {
      "id": "578",
      "name": "HumanorAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HumanorAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HumanorAI",
      "rating": 4.4,
      "reviewCount": 277
    },
    {
      "id": "579",
      "name": "HumanorNot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HumanorNot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HumanorNot",
      "rating": 4.1,
      "reviewCount": 749
    },
    {
      "id": "580",
      "name": "HumanorNot2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HumanorNot2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HumanorNot2",
      "rating": 4.8,
      "reviewCount": 369
    },
    {
      "id": "581",
      "name": "Hunyuan3D",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Hunyuan3D",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Hunyuan3D",
      "rating": 4.7,
      "reviewCount": 364
    },
    {
      "id": "582",
      "name": "HunyuanVideo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HunyuanVideo",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HunyuanVideo",
      "rating": 4.6,
      "reviewCount": 406
    },
    {
      "id": "583",
      "name": "HyperPilot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HyperPilot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HyperPilot",
      "rating": 4.1,
      "reviewCount": 333
    },
    {
      "id": "584",
      "name": "HyperWriteAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/HyperWriteAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=HyperWriteAI",
      "rating": 4.2,
      "reviewCount": 328
    },
    {
      "id": "585",
      "name": "I-JEPA",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/I-JEPA",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=I-JEPA",
      "rating": 4.0,
      "reviewCount": 745
    },
    {
      "id": "586",
      "name": "IMIPrompt",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/IMIPrompt",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=IMIPrompt",
      "rating": 4.6,
      "reviewCount": 193
    },
    {
      "id": "587",
      "name": "IMSToucan",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/IMSToucan",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=IMSToucan",
      "rating": 5.0,
      "reviewCount": 778
    },
    {
      "id": "588",
      "name": "IPAdapterFaceID",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/IPAdapterFaceID",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=IPAdapterFaceID",
      "rating": 5.0,
      "reviewCount": 632
    },
    {
      "id": "589",
      "name": "IPlanAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/IPlanAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=IPlanAI",
      "rating": 4.9,
      "reviewCount": 901
    },
    {
      "id": "590",
      "name": "Icons8AI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Icons8AI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Icons8AI",
      "rating": 4.8,
      "reviewCount": 281
    },
    {
      "id": "591",
      "name": "IlluminatebyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/IlluminatebyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=IlluminatebyGoogle",
      "rating": 4.6,
      "reviewCount": 765
    },
    {
      "id": "592",
      "name": "Image2SFX",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Image2SFX",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Image2SFX",
      "rating": 4.1,
      "reviewCount": 979
    },
    {
      "id": "593",
      "name": "ImageAnimator%28PIA%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImageAnimator%28PIA%29",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImageAnimator%28PIA%29",
      "rating": 4.4,
      "reviewCount": 380
    },
    {
      "id": "594",
      "name": "ImageBind",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImageBind",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImageBind",
      "rating": 4.7,
      "reviewCount": 876
    },
    {
      "id": "595",
      "name": "ImageCandy",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImageCandy",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImageCandy",
      "rating": 4.8,
      "reviewCount": 908
    },
    {
      "id": "596",
      "name": "ImageCleaner",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImageCleaner",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImageCleaner",
      "rating": 4.9,
      "reviewCount": 456
    },
    {
      "id": "597",
      "name": "ImageEnhancerRefiners",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImageEnhancerRefiners",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImageEnhancerRefiners",
      "rating": 4.8,
      "reviewCount": 695
    },
    {
      "id": "598",
      "name": "ImageFXbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImageFXbyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImageFXbyGoogle",
      "rating": 4.8,
      "reviewCount": 490
    },
    {
      "id": "599",
      "name": "ImageMaker",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImageMaker",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImageMaker",
      "rating": 4.0,
      "reviewCount": 285
    },
    {
      "id": "600",
      "name": "ImageMixer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImageMixer",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImageMixer",
      "rating": 4.9,
      "reviewCount": 161
    },
    {
      "id": "601",
      "name": "ImageToVector",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImageToVector",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImageToVector",
      "rating": 4.1,
      "reviewCount": 754
    },
    {
      "id": "602",
      "name": "Imagecolorizer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Imagecolorizer",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Imagecolorizer",
      "rating": 4.9,
      "reviewCount": 757
    },
    {
      "id": "603",
      "name": "Imagen2byGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Imagen2byGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Imagen2byGoogle",
      "rating": 4.9,
      "reviewCount": 719
    },
    {
      "id": "604",
      "name": "Imagen3byGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Imagen3byGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Imagen3byGoogle",
      "rating": 4.8,
      "reviewCount": 586
    },
    {
      "id": "605",
      "name": "ImagenVideo%28Beta%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImagenVideo%28Beta%29",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImagenVideo%28Beta%29",
      "rating": 5.0,
      "reviewCount": 683
    },
    {
      "id": "606",
      "name": "Imagetocartoon",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Imagetocartoon",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Imagetocartoon",
      "rating": 4.7,
      "reviewCount": 613
    },
    {
      "id": "607",
      "name": "Imagica",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Imagica",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Imagica",
      "rating": 4.4,
      "reviewCount": 920
    },
    {
      "id": "608",
      "name": "ImaginebyMetaAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImaginebyMetaAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImaginebyMetaAI",
      "rating": 4.4,
      "reviewCount": 869
    },
    {
      "id": "609",
      "name": "Imaiger",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Imaiger",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Imaiger",
      "rating": 4.7,
      "reviewCount": 792
    },
    {
      "id": "610",
      "name": "ImgLarger",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImgLarger",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImgLarger",
      "rating": 5.0,
      "reviewCount": 961
    },
    {
      "id": "611",
      "name": "ImgUpscaler",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImgUpscaler",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImgUpscaler",
      "rating": 4.4,
      "reviewCount": 643
    },
    {
      "id": "612",
      "name": "ImgenArena.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ImgenArena.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ImgenArena.ai",
      "rating": 5.0,
      "reviewCount": 897
    },
    {
      "id": "613",
      "name": "IndexGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/IndexGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=IndexGPT",
      "rating": 4.8,
      "reviewCount": 509
    },
    {
      "id": "614",
      "name": "InfiniteCraftByNeal",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/InfiniteCraftByNeal",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=InfiniteCraftByNeal",
      "rating": 4.6,
      "reviewCount": 565
    },
    {
      "id": "615",
      "name": "InfiniteYou-FLUX",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/InfiniteYou-FLUX",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=InfiniteYou-FLUX",
      "rating": 4.4,
      "reviewCount": 627
    },
    {
      "id": "616",
      "name": "IngestAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/IngestAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=IngestAI",
      "rating": 4.2,
      "reviewCount": 955
    },
    {
      "id": "617",
      "name": "InkDrop",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/InkDrop",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=InkDrop",
      "rating": 4.4,
      "reviewCount": 917
    },
    {
      "id": "618",
      "name": "InlineGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/InlineGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=InlineGPT",
      "rating": 4.9,
      "reviewCount": 943
    },
    {
      "id": "619",
      "name": "InpaintingNvidia",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/InpaintingNvidia",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=InpaintingNvidia",
      "rating": 4.2,
      "reviewCount": 504
    },
    {
      "id": "620",
      "name": "InsightFace",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/InsightFace",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=InsightFace",
      "rating": 4.4,
      "reviewCount": 912
    },
    {
      "id": "621",
      "name": "InsightJournal",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/InsightJournal",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=InsightJournal",
      "rating": 4.2,
      "reviewCount": 691
    },
    {
      "id": "622",
      "name": "InspireMusic",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/InspireMusic",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=InspireMusic",
      "rating": 4.1,
      "reviewCount": 326
    },
    {
      "id": "623",
      "name": "Instabooks",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Instabooks",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Instabooks",
      "rating": 4.9,
      "reviewCount": 718
    },
    {
      "id": "624",
      "name": "InstantID",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/InstantID",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=InstantID",
      "rating": 4.6,
      "reviewCount": 790
    },
    {
      "id": "625",
      "name": "InstantMesh3D",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/InstantMesh3D",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=InstantMesh3D",
      "rating": 4.9,
      "reviewCount": 620
    },
    {
      "id": "626",
      "name": "IntelliNode",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/IntelliNode",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=IntelliNode",
      "rating": 4.7,
      "reviewCount": 678
    },
    {
      "id": "627",
      "name": "IsThisImageNSFW",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/IsThisImageNSFW",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=IsThisImageNSFW",
      "rating": 4.1,
      "reviewCount": 396
    },
    {
      "id": "628",
      "name": "Jan.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Jan.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Jan.ai",
      "rating": 4.0,
      "reviewCount": 686
    },
    {
      "id": "629",
      "name": "Janus-Pro-7B",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Janus-Pro-7B",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Janus-Pro-7B",
      "rating": 4.7,
      "reviewCount": 995
    },
    {
      "id": "630",
      "name": "Jarvis%28Microsoft%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Jarvis%28Microsoft%29",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Jarvis%28Microsoft%29",
      "rating": 4.4,
      "reviewCount": 708
    },
    {
      "id": "631",
      "name": "JetsonOrinNanoSuper",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/JetsonOrinNanoSuper",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=JetsonOrinNanoSuper",
      "rating": 4.8,
      "reviewCount": 772
    },
    {
      "id": "632",
      "name": "JimengAIbyByteDance",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/JimengAIbyByteDance",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=JimengAIbyByteDance",
      "rating": 4.1,
      "reviewCount": 200
    },
    {
      "id": "633",
      "name": "JobrightAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/JobrightAI",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=JobrightAI",
      "rating": 4.3,
      "reviewCount": 914
    },
    {
      "id": "634",
      "name": "Jokelub",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Jokelub",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Jokelub",
      "rating": 4.6,
      "reviewCount": 394
    },
    {
      "id": "635",
      "name": "Journeai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Journeai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Journeai",
      "rating": 4.3,
      "reviewCount": 399
    },
    {
      "id": "636",
      "name": "JourneyArtAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/JourneyArtAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=JourneyArtAI",
      "rating": 4.9,
      "reviewCount": 820
    },
    {
      "id": "637",
      "name": "JourneyPlan",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/JourneyPlan",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=JourneyPlan",
      "rating": 4.8,
      "reviewCount": 338
    },
    {
      "id": "638",
      "name": "Jukebox",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Jukebox",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Jukebox",
      "rating": 4.3,
      "reviewCount": 477
    },
    {
      "id": "639",
      "name": "Jungle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Jungle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Jungle",
      "rating": 4.7,
      "reviewCount": 110
    },
    {
      "id": "640",
      "name": "JustPrompts",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/JustPrompts",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=JustPrompts",
      "rating": 4.2,
      "reviewCount": 222
    },
    {
      "id": "641",
      "name": "KV-Edit",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/KV-Edit",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=KV-Edit",
      "rating": 4.8,
      "reviewCount": 167
    },
    {
      "id": "642",
      "name": "Kaggle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Kaggle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Kaggle",
      "rating": 4.7,
      "reviewCount": 903
    },
    {
      "id": "643",
      "name": "Kayyo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Kayyo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Kayyo",
      "rating": 4.4,
      "reviewCount": 374
    },
    {
      "id": "644",
      "name": "Keychain",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Keychain",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Keychain",
      "rating": 4.4,
      "reviewCount": 743
    },
    {
      "id": "645",
      "name": "Khanmigo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Khanmigo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Khanmigo",
      "rating": 4.8,
      "reviewCount": 722
    },
    {
      "id": "646",
      "name": "Khroma",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Khroma",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Khroma",
      "rating": 4.5,
      "reviewCount": 106
    },
    {
      "id": "647",
      "name": "Kili",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Kili",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Kili",
      "rating": 4.9,
      "reviewCount": 956
    },
    {
      "id": "648",
      "name": "Kimi.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Kimi.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Kimi.ai",
      "rating": 4.1,
      "reviewCount": 797
    },
    {
      "id": "649",
      "name": "Kinetix",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Kinetix",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Kinetix",
      "rating": 4.7,
      "reviewCount": 941
    },
    {
      "id": "650",
      "name": "Klap",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Klap",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Klap",
      "rating": 4.4,
      "reviewCount": 270
    },
    {
      "id": "651",
      "name": "Kling2.0",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Kling2.0",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Kling2.0",
      "rating": 4.6,
      "reviewCount": 715
    },
    {
      "id": "652",
      "name": "Knit",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Knit",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Knit",
      "rating": 4.1,
      "reviewCount": 525
    },
    {
      "id": "653",
      "name": "KnowleeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/KnowleeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=KnowleeAI",
      "rating": 4.2,
      "reviewCount": 306
    },
    {
      "id": "654",
      "name": "KoalaAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/KoalaAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=KoalaAI",
      "rating": 4.2,
      "reviewCount": 240
    },
    {
      "id": "655",
      "name": "KodeziAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/KodeziAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=KodeziAI",
      "rating": 4.0,
      "reviewCount": 909
    },
    {
      "id": "656",
      "name": "Kokoro-82MTTS",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Kokoro-82MTTS",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Kokoro-82MTTS",
      "rating": 4.6,
      "reviewCount": 121
    },
    {
      "id": "657",
      "name": "KolorsVirtual",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/KolorsVirtual",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=KolorsVirtual",
      "rating": 5.0,
      "reviewCount": 735
    },
    {
      "id": "658",
      "name": "KomoSearch",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/KomoSearch",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=KomoSearch",
      "rating": 4.5,
      "reviewCount": 443
    },
    {
      "id": "659",
      "name": "Koolio.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Koolio.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Koolio.ai",
      "rating": 4.1,
      "reviewCount": 983
    },
    {
      "id": "660",
      "name": "Krea.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Krea.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Krea.ai",
      "rating": 4.5,
      "reviewCount": 616
    },
    {
      "id": "661",
      "name": "L-MAGICbyIntel",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/L-MAGICbyIntel",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=L-MAGICbyIntel",
      "rating": 4.7,
      "reviewCount": 733
    },
    {
      "id": "662",
      "name": "LDM3D",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LDM3D",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LDM3D",
      "rating": 4.4,
      "reviewCount": 250
    },
    {
      "id": "663",
      "name": "LGM3D",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LGM3D",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LGM3D",
      "rating": 4.1,
      "reviewCount": 972
    },
    {
      "id": "664",
      "name": "LLaMA%28META%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LLaMA%28META%29",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LLaMA%28META%29",
      "rating": 4.6,
      "reviewCount": 905
    },
    {
      "id": "665",
      "name": "LMStudio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LMStudio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LMStudio",
      "rating": 4.7,
      "reviewCount": 340
    },
    {
      "id": "666",
      "name": "LTXStudio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LTXStudio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LTXStudio",
      "rating": 4.2,
      "reviewCount": 198
    },
    {
      "id": "667",
      "name": "Lablab.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Lablab.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Lablab.ai",
      "rating": 4.5,
      "reviewCount": 745
    },
    {
      "id": "668",
      "name": "LabsbyPerplexity",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LabsbyPerplexity",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LabsbyPerplexity",
      "rating": 4.2,
      "reviewCount": 689
    },
    {
      "id": "669",
      "name": "Laion",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Laion",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Laion",
      "rating": 4.6,
      "reviewCount": 116
    },
    {
      "id": "670",
      "name": "LanguageTool",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LanguageTool",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LanguageTool",
      "rating": 4.9,
      "reviewCount": 102
    },
    {
      "id": "671",
      "name": "LargeSpatialModel%28LSM%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LargeSpatialModel%28LSM%29",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LargeSpatialModel%28LSM%29",
      "rating": 4.1,
      "reviewCount": 549
    },
    {
      "id": "672",
      "name": "LatentSyncByteDance",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LatentSyncByteDance",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LatentSyncByteDance",
      "rating": 4.5,
      "reviewCount": 823
    },
    {
      "id": "673",
      "name": "LeChatbyMistralAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LeChatbyMistralAI",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LeChatbyMistralAI",
      "rating": 4.5,
      "reviewCount": 168
    },
    {
      "id": "674",
      "name": "LeaderboardLLM",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LeaderboardLLM",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LeaderboardLLM",
      "rating": 4.7,
      "reviewCount": 458
    },
    {
      "id": "675",
      "name": "LearnAboutbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LearnAboutbyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LearnAboutbyGoogle",
      "rating": 4.7,
      "reviewCount": 367
    },
    {
      "id": "676",
      "name": "LearnLMbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LearnLMbyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LearnLMbyGoogle",
      "rating": 4.8,
      "reviewCount": 809
    },
    {
      "id": "677",
      "name": "LearnLingo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LearnLingo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LearnLingo",
      "rating": 4.7,
      "reviewCount": 208
    },
    {
      "id": "678",
      "name": "LearnSmarter.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LearnSmarter.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LearnSmarter.ai",
      "rating": 4.7,
      "reviewCount": 474
    },
    {
      "id": "679",
      "name": "LeetResumes",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LeetResumes",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LeetResumes",
      "rating": 4.9,
      "reviewCount": 154
    },
    {
      "id": "680",
      "name": "Leffa",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Leffa",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Leffa",
      "rating": 4.8,
      "reviewCount": 715
    },
    {
      "id": "681",
      "name": "LegendsAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LegendsAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LegendsAI",
      "rating": 5.0,
      "reviewCount": 264
    },
    {
      "id": "682",
      "name": "LensGo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LensGo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LensGo",
      "rating": 4.9,
      "reviewCount": 294
    },
    {
      "id": "683",
      "name": "LenyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LenyAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LenyAI",
      "rating": 4.5,
      "reviewCount": 462
    },
    {
      "id": "684",
      "name": "Lexica.art",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Lexica.art",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Lexica.art",
      "rating": 4.8,
      "reviewCount": 150
    },
    {
      "id": "685",
      "name": "Lexii.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Lexii.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Lexii.ai",
      "rating": 5.0,
      "reviewCount": 436
    },
    {
      "id": "686",
      "name": "Liner.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Liner.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Liner.ai",
      "rating": 4.4,
      "reviewCount": 146
    },
    {
      "id": "687",
      "name": "LinerAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LinerAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LinerAI",
      "rating": 4.9,
      "reviewCount": 681
    },
    {
      "id": "688",
      "name": "LiterallyAnything",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LiterallyAnything",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LiterallyAnything",
      "rating": 4.1,
      "reviewCount": 543
    },
    {
      "id": "689",
      "name": "LittleArtist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LittleArtist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LittleArtist",
      "rating": 4.1,
      "reviewCount": 853
    },
    {
      "id": "690",
      "name": "LiveAIBot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LiveAIBot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LiveAIBot",
      "rating": 4.7,
      "reviewCount": 879
    },
    {
      "id": "691",
      "name": "LivePortraitAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LivePortraitAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LivePortraitAI",
      "rating": 4.2,
      "reviewCount": 829
    },
    {
      "id": "692",
      "name": "Llama3",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Llama3",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Llama3",
      "rating": 4.1,
      "reviewCount": 158
    },
    {
      "id": "693",
      "name": "Llama3.1405B",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Llama3.1405B",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Llama3.1405B",
      "rating": 4.7,
      "reviewCount": 190
    },
    {
      "id": "694",
      "name": "Llama3.2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Llama3.2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Llama3.2",
      "rating": 4.5,
      "reviewCount": 225
    },
    {
      "id": "695",
      "name": "Llama4",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Llama4",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Llama4",
      "rating": 4.3,
      "reviewCount": 553
    },
    {
      "id": "696",
      "name": "LlamaCoder",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LlamaCoder",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LlamaCoder",
      "rating": 4.6,
      "reviewCount": 298
    },
    {
      "id": "697",
      "name": "LlamaTutor",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LlamaTutor",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LlamaTutor",
      "rating": 4.3,
      "reviewCount": 520
    },
    {
      "id": "698",
      "name": "Lobe",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Lobe",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Lobe",
      "rating": 4.2,
      "reviewCount": 142
    },
    {
      "id": "699",
      "name": "Locofy",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Locofy",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Locofy",
      "rating": 5.0,
      "reviewCount": 150
    },
    {
      "id": "700",
      "name": "LogoFast",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LogoFast",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LogoFast",
      "rating": 4.5,
      "reviewCount": 393
    },
    {
      "id": "701",
      "name": "LogoMakerNamecheap",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LogoMakerNamecheap",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LogoMakerNamecheap",
      "rating": 4.9,
      "reviewCount": 710
    },
    {
      "id": "702",
      "name": "LoopGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LoopGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LoopGPT",
      "rating": 5.0,
      "reviewCount": 637
    },
    {
      "id": "703",
      "name": "Looria",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Looria",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Looria",
      "rating": 4.5,
      "reviewCount": 989
    },
    {
      "id": "704",
      "name": "LoveGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LoveGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LoveGPT",
      "rating": 4.2,
      "reviewCount": 164
    },
    {
      "id": "705",
      "name": "LoveGenius",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LoveGenius",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LoveGenius",
      "rating": 4.8,
      "reviewCount": 579
    },
    {
      "id": "706",
      "name": "Loyae",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Loyae",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Loyae",
      "rating": 4.1,
      "reviewCount": 315
    },
    {
      "id": "707",
      "name": "Lucidpic",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Lucidpic",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Lucidpic",
      "rating": 4.8,
      "reviewCount": 502
    },
    {
      "id": "708",
      "name": "LumaDreamMachine",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LumaDreamMachine",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LumaDreamMachine",
      "rating": 4.8,
      "reviewCount": 436
    },
    {
      "id": "709",
      "name": "LumiereAIbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LumiereAIbyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LumiereAIbyGoogle",
      "rating": 4.7,
      "reviewCount": 938
    },
    {
      "id": "710",
      "name": "LummiAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/LummiAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=LummiAI",
      "rating": 4.9,
      "reviewCount": 681
    },
    {
      "id": "711",
      "name": "MAGEAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MAGEAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MAGEAI",
      "rating": 4.6,
      "reviewCount": 635
    },
    {
      "id": "712",
      "name": "MAGNeTbyMeta",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MAGNeTbyMeta",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MAGNeTbyMeta",
      "rating": 4.5,
      "reviewCount": 853
    },
    {
      "id": "713",
      "name": "MARS5byCamb.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MARS5byCamb.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MARS5byCamb.ai",
      "rating": 4.7,
      "reviewCount": 499
    },
    {
      "id": "714",
      "name": "METAGENE-1",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/METAGENE-1",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=METAGENE-1",
      "rating": 4.6,
      "reviewCount": 550
    },
    {
      "id": "715",
      "name": "MJSplitter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MJSplitter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MJSplitter",
      "rating": 4.9,
      "reviewCount": 321
    },
    {
      "id": "716",
      "name": "MMAudio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MMAudio",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MMAudio",
      "rating": 4.3,
      "reviewCount": 844
    },
    {
      "id": "717",
      "name": "MacGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MacGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MacGPT",
      "rating": 4.4,
      "reviewCount": 607
    },
    {
      "id": "718",
      "name": "MachineTranslation",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MachineTranslation",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MachineTranslation",
      "rating": 4.8,
      "reviewCount": 799
    },
    {
      "id": "719",
      "name": "MaesterApp",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MaesterApp",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MaesterApp",
      "rating": 4.6,
      "reviewCount": 403
    },
    {
      "id": "720",
      "name": "Mage",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Mage",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Mage",
      "rating": 4.2,
      "reviewCount": 623
    },
    {
      "id": "721",
      "name": "MagentaStudio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MagentaStudio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MagentaStudio",
      "rating": 4.6,
      "reviewCount": 450
    },
    {
      "id": "722",
      "name": "Magentic-One",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Magentic-One",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Magentic-One",
      "rating": 4.7,
      "reviewCount": 403
    },
    {
      "id": "723",
      "name": "Magi-1bySand.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Magi-1bySand.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Magi-1bySand.ai",
      "rating": 4.7,
      "reviewCount": 566
    },
    {
      "id": "724",
      "name": "MagicAnimate",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MagicAnimate",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MagicAnimate",
      "rating": 4.3,
      "reviewCount": 638
    },
    {
      "id": "725",
      "name": "MagicForm",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MagicForm",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MagicForm",
      "rating": 4.1,
      "reviewCount": 447
    },
    {
      "id": "726",
      "name": "MagicPublishAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MagicPublishAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MagicPublishAI",
      "rating": 4.9,
      "reviewCount": 977
    },
    {
      "id": "727",
      "name": "MagicQuill",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MagicQuill",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MagicQuill",
      "rating": 4.3,
      "reviewCount": 269
    },
    {
      "id": "728",
      "name": "MagicTypeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MagicTypeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MagicTypeAI",
      "rating": 4.4,
      "reviewCount": 448
    },
    {
      "id": "729",
      "name": "MagicVideo-V2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MagicVideo-V2",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MagicVideo-V2",
      "rating": 4.1,
      "reviewCount": 102
    },
    {
      "id": "730",
      "name": "MagikabyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MagikabyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MagikabyGoogle",
      "rating": 4.2,
      "reviewCount": 387
    },
    {
      "id": "731",
      "name": "Make",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Make",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Make",
      "rating": 4.7,
      "reviewCount": 588
    },
    {
      "id": "732",
      "name": "Make-A-Character",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Make-A-Character",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Make-A-Character",
      "rating": 4.1,
      "reviewCount": 624
    },
    {
      "id": "733",
      "name": "Make-A-Video%28Meta%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Make-A-Video%28Meta%29",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Make-A-Video%28Meta%29",
      "rating": 4.3,
      "reviewCount": 580
    },
    {
      "id": "734",
      "name": "MakeMeACoverLetter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MakeMeACoverLetter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MakeMeACoverLetter",
      "rating": 4.2,
      "reviewCount": 431
    },
    {
      "id": "735",
      "name": "MakeMyTale",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MakeMyTale",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MakeMyTale",
      "rating": 4.5,
      "reviewCount": 592
    },
    {
      "id": "736",
      "name": "ManusAIAgent",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ManusAIAgent",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ManusAIAgent",
      "rating": 4.6,
      "reviewCount": 794
    },
    {
      "id": "737",
      "name": "Manychat",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Manychat",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Manychat",
      "rating": 4.3,
      "reviewCount": 940
    },
    {
      "id": "738",
      "name": "MapsGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MapsGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MapsGPT",
      "rating": 4.1,
      "reviewCount": 174
    },
    {
      "id": "739",
      "name": "Maroofy",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Maroofy",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Maroofy",
      "rating": 4.4,
      "reviewCount": 754
    },
    {
      "id": "740",
      "name": "MarsAi",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MarsAi",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MarsAi",
      "rating": 4.4,
      "reviewCount": 320
    },
    {
      "id": "741",
      "name": "MaskmyPrompt",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MaskmyPrompt",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MaskmyPrompt",
      "rating": 4.2,
      "reviewCount": 434
    },
    {
      "id": "742",
      "name": "MatchThatRole",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MatchThatRole",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MatchThatRole",
      "rating": 4.4,
      "reviewCount": 438
    },
    {
      "id": "743",
      "name": "MathlyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MathlyAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MathlyAI",
      "rating": 4.5,
      "reviewCount": 143
    },
    {
      "id": "744",
      "name": "Maverick",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Maverick",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Maverick",
      "rating": 5.0,
      "reviewCount": 717
    },
    {
      "id": "745",
      "name": "MaverickAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MaverickAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MaverickAI",
      "rating": 4.5,
      "reviewCount": 732
    },
    {
      "id": "746",
      "name": "MealPractice",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MealPractice",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MealPractice",
      "rating": 4.2,
      "reviewCount": 263
    },
    {
      "id": "747",
      "name": "MeaningAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MeaningAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MeaningAI",
      "rating": 4.3,
      "reviewCount": 392
    },
    {
      "id": "748",
      "name": "MechanicForAChat",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MechanicForAChat",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MechanicForAChat",
      "rating": 4.9,
      "reviewCount": 886
    },
    {
      "id": "749",
      "name": "MediaIO",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MediaIO",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MediaIO",
      "rating": 4.3,
      "reviewCount": 390
    },
    {
      "id": "750",
      "name": "MedicalChat",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MedicalChat",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MedicalChat",
      "rating": 4.1,
      "reviewCount": 235
    },
    {
      "id": "751",
      "name": "MeetGeek",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MeetGeek",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MeetGeek",
      "rating": 4.2,
      "reviewCount": 611
    },
    {
      "id": "752",
      "name": "Melodisco",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Melodisco",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Melodisco",
      "rating": 4.2,
      "reviewCount": 666
    },
    {
      "id": "753",
      "name": "MelonAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MelonAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MelonAI",
      "rating": 4.4,
      "reviewCount": 891
    },
    {
      "id": "754",
      "name": "MemeCamAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MemeCamAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MemeCamAI",
      "rating": 4.2,
      "reviewCount": 140
    },
    {
      "id": "755",
      "name": "MemoruFlashcards",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MemoruFlashcards",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MemoruFlashcards",
      "rating": 4.5,
      "reviewCount": 727
    },
    {
      "id": "756",
      "name": "MemoryGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MemoryGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MemoryGPT",
      "rating": 4.4,
      "reviewCount": 551
    },
    {
      "id": "757",
      "name": "MercurybyInceptionLabs",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MercurybyInceptionLabs",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MercurybyInceptionLabs",
      "rating": 4.6,
      "reviewCount": 541
    },
    {
      "id": "758",
      "name": "Merlin",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Merlin",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Merlin",
      "rating": 4.8,
      "reviewCount": 714
    },
    {
      "id": "759",
      "name": "Meshcapade",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Meshcapade",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Meshcapade",
      "rating": 4.3,
      "reviewCount": 412
    },
    {
      "id": "760",
      "name": "Meta3DGen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Meta3DGen",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Meta3DGen",
      "rating": 4.9,
      "reviewCount": 305
    },
    {
      "id": "761",
      "name": "MetaAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MetaAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MetaAI",
      "rating": 4.2,
      "reviewCount": 261
    },
    {
      "id": "762",
      "name": "MetaMovieGen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MetaMovieGen",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MetaMovieGen",
      "rating": 4.6,
      "reviewCount": 807
    },
    {
      "id": "763",
      "name": "Metawork",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Metawork",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Metawork",
      "rating": 5.0,
      "reviewCount": 749
    },
    {
      "id": "764",
      "name": "MetisbyAmazon",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MetisbyAmazon",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MetisbyAmazon",
      "rating": 4.2,
      "reviewCount": 817
    },
    {
      "id": "765",
      "name": "MicrosoftBing",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MicrosoftBing",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MicrosoftBing",
      "rating": 4.8,
      "reviewCount": 776
    },
    {
      "id": "766",
      "name": "MicrosoftCopilot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MicrosoftCopilot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MicrosoftCopilot",
      "rating": 4.1,
      "reviewCount": 952
    },
    {
      "id": "767",
      "name": "MicrosoftOmniParser",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MicrosoftOmniParser",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MicrosoftOmniParser",
      "rating": 4.1,
      "reviewCount": 958
    },
    {
      "id": "768",
      "name": "MidJourneyPromptHelper",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MidJourneyPromptHelper",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MidJourneyPromptHelper",
      "rating": 4.7,
      "reviewCount": 864
    },
    {
      "id": "769",
      "name": "MidJourneyStyles%26%23038%3BKeywords",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MidJourneyStyles%26%23038%3BKeywords",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MidJourneyStyles%26%23038%3BKeywords",
      "rating": 4.1,
      "reviewCount": 868
    },
    {
      "id": "770",
      "name": "Midday",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Midday",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Midday",
      "rating": 4.7,
      "reviewCount": 222
    },
    {
      "id": "771",
      "name": "MimicMotion",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MimicMotion",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MimicMotion",
      "rating": 4.6,
      "reviewCount": 468
    },
    {
      "id": "772",
      "name": "Mimir",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Mimir",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Mimir",
      "rating": 4.5,
      "reviewCount": 430
    },
    {
      "id": "773",
      "name": "Mindfulq",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Mindfulq",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Mindfulq",
      "rating": 4.6,
      "reviewCount": 268
    },
    {
      "id": "774",
      "name": "Mindmap.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Mindmap.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Mindmap.ai",
      "rating": 4.1,
      "reviewCount": 162
    },
    {
      "id": "775",
      "name": "MindmapGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MindmapGenerator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MindmapGenerator",
      "rating": 4.3,
      "reviewCount": 199
    },
    {
      "id": "776",
      "name": "Minerva",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Minerva",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Minerva",
      "rating": 4.6,
      "reviewCount": 447
    },
    {
      "id": "777",
      "name": "MiniMax-01",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MiniMax-01",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MiniMax-01",
      "rating": 4.8,
      "reviewCount": 263
    },
    {
      "id": "778",
      "name": "Miniapps.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Miniapps.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Miniapps.ai",
      "rating": 4.6,
      "reviewCount": 411
    },
    {
      "id": "779",
      "name": "Minigpt-4",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Minigpt-4",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Minigpt-4",
      "rating": 4.2,
      "reviewCount": 810
    },
    {
      "id": "780",
      "name": "Miqu-1-70b",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Miqu-1-70b",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Miqu-1-70b",
      "rating": 4.9,
      "reviewCount": 408
    },
    {
      "id": "781",
      "name": "Misgif",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Misgif",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Misgif",
      "rating": 4.6,
      "reviewCount": 179
    },
    {
      "id": "782",
      "name": "Mistral-Next",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Mistral-Next",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Mistral-Next",
      "rating": 4.2,
      "reviewCount": 885
    },
    {
      "id": "783",
      "name": "Mistral-medium",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Mistral-medium",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Mistral-medium",
      "rating": 4.8,
      "reviewCount": 885
    },
    {
      "id": "784",
      "name": "MistralLarge2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MistralLarge2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MistralLarge2",
      "rating": 4.7,
      "reviewCount": 756
    },
    {
      "id": "785",
      "name": "MistralSmall3.1",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MistralSmall3.1",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MistralSmall3.1",
      "rating": 4.0,
      "reviewCount": 105
    },
    {
      "id": "786",
      "name": "Mixtral8x22B",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Mixtral8x22B",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Mixtral8x22B",
      "rating": 4.9,
      "reviewCount": 110
    },
    {
      "id": "787",
      "name": "MoChabyMeta",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MoChabyMeta",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MoChabyMeta",
      "rating": 4.7,
      "reviewCount": 496
    },
    {
      "id": "788",
      "name": "MoMask",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MoMask",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MoMask",
      "rating": 4.1,
      "reviewCount": 226
    },
    {
      "id": "789",
      "name": "MobileDiffusionbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MobileDiffusionbyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MobileDiffusionbyGoogle",
      "rating": 4.7,
      "reviewCount": 459
    },
    {
      "id": "790",
      "name": "Mobirise",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Mobirise",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Mobirise",
      "rating": 4.8,
      "reviewCount": 697
    },
    {
      "id": "791",
      "name": "Mochi1byGenmo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Mochi1byGenmo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Mochi1byGenmo",
      "rating": 4.2,
      "reviewCount": 476
    },
    {
      "id": "792",
      "name": "ModelScopeText-To-Video",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ModelScopeText-To-Video",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ModelScopeText-To-Video",
      "rating": 4.8,
      "reviewCount": 471
    },
    {
      "id": "793",
      "name": "ModernReality",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ModernReality",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ModernReality",
      "rating": 4.5,
      "reviewCount": 857
    },
    {
      "id": "794",
      "name": "Modif",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Modif",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Modif",
      "rating": 4.7,
      "reviewCount": 950
    },
    {
      "id": "795",
      "name": "MolmobyAi2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MolmobyAi2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MolmobyAi2",
      "rating": 4.5,
      "reviewCount": 947
    },
    {
      "id": "796",
      "name": "MonsterMash",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MonsterMash",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MonsterMash",
      "rating": 4.2,
      "reviewCount": 684
    },
    {
      "id": "797",
      "name": "MoonvalleyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MoonvalleyAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MoonvalleyAI",
      "rating": 4.4,
      "reviewCount": 973
    },
    {
      "id": "798",
      "name": "Morpheus-1byPropheticAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Morpheus-1byPropheticAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Morpheus-1byPropheticAI",
      "rating": 4.2,
      "reviewCount": 969
    },
    {
      "id": "799",
      "name": "Morphic",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Morphic",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Morphic",
      "rating": 4.2,
      "reviewCount": 278
    },
    {
      "id": "800",
      "name": "MorphicAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MorphicAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MorphicAI",
      "rating": 4.8,
      "reviewCount": 872
    },
    {
      "id": "801",
      "name": "Morphlin",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Morphlin",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Morphlin",
      "rating": 4.1,
      "reviewCount": 877
    },
    {
      "id": "802",
      "name": "MorphobyNeutone",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MorphobyNeutone",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MorphobyNeutone",
      "rating": 4.2,
      "reviewCount": 375
    },
    {
      "id": "803",
      "name": "MoshiAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MoshiAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MoshiAI",
      "rating": 4.3,
      "reviewCount": 396
    },
    {
      "id": "804",
      "name": "Motiff",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Motiff",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Motiff",
      "rating": 4.4,
      "reviewCount": 200
    },
    {
      "id": "805",
      "name": "MotionGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MotionGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MotionGPT",
      "rating": 4.2,
      "reviewCount": 345
    },
    {
      "id": "806",
      "name": "MovieDeepSearch",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MovieDeepSearch",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MovieDeepSearch",
      "rating": 4.5,
      "reviewCount": 990
    },
    {
      "id": "807",
      "name": "Mr.Cook",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Mr.Cook",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Mr.Cook",
      "rating": 4.2,
      "reviewCount": 445
    },
    {
      "id": "808",
      "name": "Multi-GPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Multi-GPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Multi-GPT",
      "rating": 4.6,
      "reviewCount": 427
    },
    {
      "id": "809",
      "name": "MusicFXDJ",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MusicFXDJ",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MusicFXDJ",
      "rating": 4.6,
      "reviewCount": 418
    },
    {
      "id": "810",
      "name": "MusicFXbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MusicFXbyGoogle",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MusicFXbyGoogle",
      "rating": 4.6,
      "reviewCount": 173
    },
    {
      "id": "811",
      "name": "MusicGen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MusicGen",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MusicGen",
      "rating": 4.9,
      "reviewCount": 578
    },
    {
      "id": "812",
      "name": "MyAskAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MyAskAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MyAskAI",
      "rating": 4.3,
      "reviewCount": 695
    },
    {
      "id": "813",
      "name": "MyCody",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MyCody",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MyCody",
      "rating": 4.2,
      "reviewCount": 109
    },
    {
      "id": "814",
      "name": "MyLens.AI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MyLens.AI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MyLens.AI",
      "rating": 4.5,
      "reviewCount": 737
    },
    {
      "id": "815",
      "name": "MyStoryElf",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/MyStoryElf",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=MyStoryElf",
      "rating": 4.6,
      "reviewCount": 661
    },
    {
      "id": "816",
      "name": "NPC-Playground",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NPC-Playground",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NPC-Playground",
      "rating": 4.0,
      "reviewCount": 779
    },
    {
      "id": "817",
      "name": "NVIDIACosmos",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NVIDIACosmos",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NVIDIACosmos",
      "rating": 4.6,
      "reviewCount": 563
    },
    {
      "id": "818",
      "name": "NVIDIANVLM-1",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NVIDIANVLM-1",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NVIDIANVLM-1",
      "rating": 4.1,
      "reviewCount": 305
    },
    {
      "id": "819",
      "name": "NVIDIARTXRemix",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NVIDIARTXRemix",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NVIDIARTXRemix",
      "rating": 4.6,
      "reviewCount": 819
    },
    {
      "id": "820",
      "name": "NameDropAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NameDropAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NameDropAI",
      "rating": 4.4,
      "reviewCount": 731
    },
    {
      "id": "821",
      "name": "NameSnack",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NameSnack",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NameSnack",
      "rating": 4.1,
      "reviewCount": 242
    },
    {
      "id": "822",
      "name": "Namelix",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Namelix",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Namelix",
      "rating": 4.2,
      "reviewCount": 782
    },
    {
      "id": "823",
      "name": "NamifyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NamifyAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NamifyAI",
      "rating": 4.9,
      "reviewCount": 943
    },
    {
      "id": "824",
      "name": "Namyai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Namyai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Namyai",
      "rating": 4.8,
      "reviewCount": 655
    },
    {
      "id": "825",
      "name": "NaturalLanguagePlaylist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NaturalLanguagePlaylist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NaturalLanguagePlaylist",
      "rating": 4.4,
      "reviewCount": 647
    },
    {
      "id": "826",
      "name": "Nemotron-70B",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Nemotron-70B",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Nemotron-70B",
      "rating": 4.5,
      "reviewCount": 572
    },
    {
      "id": "827",
      "name": "NetworkAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NetworkAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NetworkAI",
      "rating": 4.5,
      "reviewCount": 283
    },
    {
      "id": "828",
      "name": "NeuralConsult",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NeuralConsult",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NeuralConsult",
      "rating": 4.5,
      "reviewCount": 555
    },
    {
      "id": "829",
      "name": "NeuralangelobyNVIDIA",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NeuralangelobyNVIDIA",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NeuralangelobyNVIDIA",
      "rating": 4.2,
      "reviewCount": 221
    },
    {
      "id": "830",
      "name": "NeuroSpell",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NeuroSpell",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NeuroSpell",
      "rating": 4.5,
      "reviewCount": 205
    },
    {
      "id": "831",
      "name": "NewswriterAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NewswriterAI",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NewswriterAI",
      "rating": 4.7,
      "reviewCount": 848
    },
    {
      "id": "832",
      "name": "NexGenTeam",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NexGenTeam",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NexGenTeam",
      "rating": 4.8,
      "reviewCount": 452
    },
    {
      "id": "833",
      "name": "NextThreeBooks",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NextThreeBooks",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NextThreeBooks",
      "rating": 4.3,
      "reviewCount": 698
    },
    {
      "id": "834",
      "name": "NightCaf%C3%A9",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NightCaf%C3%A9",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NightCaf%C3%A9",
      "rating": 4.7,
      "reviewCount": 759
    },
    {
      "id": "835",
      "name": "NightshadeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NightshadeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NightshadeAI",
      "rating": 4.5,
      "reviewCount": 647
    },
    {
      "id": "836",
      "name": "NijiJourney",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NijiJourney",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NijiJourney",
      "rating": 4.5,
      "reviewCount": 968
    },
    {
      "id": "837",
      "name": "No-Background",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/No-Background",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=No-Background",
      "rating": 4.7,
      "reviewCount": 559
    },
    {
      "id": "838",
      "name": "NoctieAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NoctieAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NoctieAI",
      "rating": 4.6,
      "reviewCount": 820
    },
    {
      "id": "839",
      "name": "NoiseeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NoiseeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NoiseeAI",
      "rating": 4.2,
      "reviewCount": 264
    },
    {
      "id": "840",
      "name": "NolanAi",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NolanAi",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NolanAi",
      "rating": 4.0,
      "reviewCount": 158
    },
    {
      "id": "841",
      "name": "NorthbyCohere",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NorthbyCohere",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NorthbyCohere",
      "rating": 4.8,
      "reviewCount": 269
    },
    {
      "id": "842",
      "name": "NotebookLM",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NotebookLM",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NotebookLM",
      "rating": 4.7,
      "reviewCount": 399
    },
    {
      "id": "843",
      "name": "NotionMail",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NotionMail",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NotionMail",
      "rating": 4.6,
      "reviewCount": 660
    },
    {
      "id": "844",
      "name": "NotionSites",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NotionSites",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NotionSites",
      "rating": 4.2,
      "reviewCount": 230
    },
    {
      "id": "845",
      "name": "NousChat",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NousChat",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NousChat",
      "rating": 4.3,
      "reviewCount": 147
    },
    {
      "id": "846",
      "name": "NumerousAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NumerousAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NumerousAI",
      "rating": 4.1,
      "reviewCount": 561
    },
    {
      "id": "847",
      "name": "NvidiaCanvas",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NvidiaCanvas",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NvidiaCanvas",
      "rating": 4.8,
      "reviewCount": 895
    },
    {
      "id": "848",
      "name": "NvidiaLaunchpadAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/NvidiaLaunchpadAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=NvidiaLaunchpadAI",
      "rating": 4.5,
      "reviewCount": 606
    },
    {
      "id": "849",
      "name": "Nyx",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Nyx",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Nyx",
      "rating": 4.4,
      "reviewCount": 932
    },
    {
      "id": "850",
      "name": "OLMo2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OLMo2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OLMo2",
      "rating": 4.5,
      "reviewCount": 169
    },
    {
      "id": "851",
      "name": "OSSInsight",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OSSInsight",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OSSInsight",
      "rating": 4.9,
      "reviewCount": 578
    },
    {
      "id": "852",
      "name": "OWLbyCamelAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OWLbyCamelAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OWLbyCamelAI",
      "rating": 4.4,
      "reviewCount": 412
    },
    {
      "id": "853",
      "name": "OasisAIGame",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OasisAIGame",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OasisAIGame",
      "rating": 4.4,
      "reviewCount": 197
    },
    {
      "id": "854",
      "name": "Odoo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Odoo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Odoo",
      "rating": 5.0,
      "reviewCount": 460
    },
    {
      "id": "855",
      "name": "Ollama",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Ollama",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Ollama",
      "rating": 4.8,
      "reviewCount": 577
    },
    {
      "id": "856",
      "name": "OllieAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OllieAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OllieAI",
      "rating": 4.1,
      "reviewCount": 371
    },
    {
      "id": "857",
      "name": "Omlete",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Omlete",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Omlete",
      "rating": 5.0,
      "reviewCount": 436
    },
    {
      "id": "858",
      "name": "OmniGen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OmniGen",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OmniGen",
      "rating": 4.1,
      "reviewCount": 450
    },
    {
      "id": "859",
      "name": "OmniParserV2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OmniParserV2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OmniParserV2",
      "rating": 4.9,
      "reviewCount": 474
    },
    {
      "id": "860",
      "name": "OmniverseAudio2Face",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OmniverseAudio2Face",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OmniverseAudio2Face",
      "rating": 4.6,
      "reviewCount": 667
    },
    {
      "id": "861",
      "name": "Onlycoms",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Onlycoms",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Onlycoms",
      "rating": 4.1,
      "reviewCount": 157
    },
    {
      "id": "862",
      "name": "OpenAGI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenAGI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenAGI",
      "rating": 4.9,
      "reviewCount": 719
    },
    {
      "id": "863",
      "name": "OpenAILive%5BSpringUpdates%5D",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenAILive%5BSpringUpdates%5D",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenAILive%5BSpringUpdates%5D",
      "rating": 4.4,
      "reviewCount": 490
    },
    {
      "id": "864",
      "name": "OpenAILiveConference",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenAILiveConference",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenAILiveConference",
      "rating": 4.6,
      "reviewCount": 599
    },
    {
      "id": "865",
      "name": "OpenAIRealtimeAgents",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenAIRealtimeAgents",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenAIRealtimeAgents",
      "rating": 4.8,
      "reviewCount": 495
    },
    {
      "id": "866",
      "name": "OpenAgentStudio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenAgentStudio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenAgentStudio",
      "rating": 4.7,
      "reviewCount": 108
    },
    {
      "id": "867",
      "name": "OpenAssistant",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenAssistant",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenAssistant",
      "rating": 4.9,
      "reviewCount": 803
    },
    {
      "id": "868",
      "name": "OpenDeepResearch",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenDeepResearch",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenDeepResearch",
      "rating": 4.6,
      "reviewCount": 363
    },
    {
      "id": "869",
      "name": "OpenDevin",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenDevin",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenDevin",
      "rating": 4.2,
      "reviewCount": 944
    },
    {
      "id": "870",
      "name": "OpenELMbyApple",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenELMbyApple",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenELMbyApple",
      "rating": 4.3,
      "reviewCount": 386
    },
    {
      "id": "871",
      "name": "OpenInterpreter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenInterpreter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenInterpreter",
      "rating": 4.9,
      "reviewCount": 145
    },
    {
      "id": "872",
      "name": "OpenManus",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenManus",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenManus",
      "rating": 4.9,
      "reviewCount": 819
    },
    {
      "id": "873",
      "name": "OpenMusic",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenMusic",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenMusic",
      "rating": 4.8,
      "reviewCount": 699
    },
    {
      "id": "874",
      "name": "OpenRead",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenRead",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenRead",
      "rating": 4.1,
      "reviewCount": 375
    },
    {
      "id": "875",
      "name": "OpenVINObyAudacity",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenVINObyAudacity",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenVINObyAudacity",
      "rating": 4.3,
      "reviewCount": 972
    },
    {
      "id": "876",
      "name": "OpenVoiceAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenVoiceAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenVoiceAI",
      "rating": 4.7,
      "reviewCount": 405
    },
    {
      "id": "877",
      "name": "OpenVoiceOS",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenVoiceOS",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenVoiceOS",
      "rating": 4.8,
      "reviewCount": 404
    },
    {
      "id": "878",
      "name": "OpenWidget",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpenWidget",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenWidget",
      "rating": 4.6,
      "reviewCount": 685
    },
    {
      "id": "879",
      "name": "Openart",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Openart",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Openart",
      "rating": 4.1,
      "reviewCount": 311
    },
    {
      "id": "880",
      "name": "OperaOneBrowser",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OperaOneBrowser",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OperaOneBrowser",
      "rating": 4.5,
      "reviewCount": 741
    },
    {
      "id": "881",
      "name": "OptimizerAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OptimizerAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OptimizerAI",
      "rating": 4.5,
      "reviewCount": 521
    },
    {
      "id": "882",
      "name": "Optimo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Optimo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Optimo",
      "rating": 4.0,
      "reviewCount": 544
    },
    {
      "id": "883",
      "name": "OpusClip",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OpusClip",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpusClip",
      "rating": 4.6,
      "reviewCount": 995
    },
    {
      "id": "884",
      "name": "OrionbyOpenAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OrionbyOpenAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OrionbyOpenAI",
      "rating": 4.6,
      "reviewCount": 812
    },
    {
      "id": "885",
      "name": "Orkoi",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Orkoi",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Orkoi",
      "rating": 4.0,
      "reviewCount": 533
    },
    {
      "id": "886",
      "name": "OtterAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OtterAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OtterAI",
      "rating": 5.0,
      "reviewCount": 247
    },
    {
      "id": "887",
      "name": "OutfitAnyone",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OutfitAnyone",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OutfitAnyone",
      "rating": 4.6,
      "reviewCount": 915
    },
    {
      "id": "888",
      "name": "OutplayHQ",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/OutplayHQ",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OutplayHQ",
      "rating": 4.7,
      "reviewCount": 534
    },
    {
      "id": "889",
      "name": "PDF2Audio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PDF2Audio",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PDF2Audio",
      "rating": 4.6,
      "reviewCount": 860
    },
    {
      "id": "890",
      "name": "PDFGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PDFGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PDFGPT",
      "rating": 4.1,
      "reviewCount": 716
    },
    {
      "id": "891",
      "name": "PIXART-%CE%B1",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PIXART-%CE%B1",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PIXART-%CE%B1",
      "rating": 4.7,
      "reviewCount": 232
    },
    {
      "id": "892",
      "name": "PMRF",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PMRF",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PMRF",
      "rating": 4.8,
      "reviewCount": 301
    },
    {
      "id": "893",
      "name": "PNGMaker",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PNGMaker",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PNGMaker",
      "rating": 4.0,
      "reviewCount": 379
    },
    {
      "id": "894",
      "name": "PPLEGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PPLEGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PPLEGPT",
      "rating": 4.7,
      "reviewCount": 557
    },
    {
      "id": "895",
      "name": "PROTEUSbyApparate",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PROTEUSbyApparate",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PROTEUSbyApparate",
      "rating": 4.2,
      "reviewCount": 890
    },
    {
      "id": "896",
      "name": "PS2Filter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PS2Filter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PS2Filter",
      "rating": 4.2,
      "reviewCount": 626
    },
    {
      "id": "897",
      "name": "PageGenie",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PageGenie",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PageGenie",
      "rating": 5.0,
      "reviewCount": 501
    },
    {
      "id": "898",
      "name": "PaintsUndo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PaintsUndo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PaintsUndo",
      "rating": 4.8,
      "reviewCount": 832
    },
    {
      "id": "899",
      "name": "PanoHead",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PanoHead",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PanoHead",
      "rating": 4.1,
      "reviewCount": 423
    },
    {
      "id": "900",
      "name": "PapermarkAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PapermarkAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PapermarkAI",
      "rating": 4.7,
      "reviewCount": 830
    },
    {
      "id": "901",
      "name": "PapersGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PapersGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PapersGPT",
      "rating": 4.4,
      "reviewCount": 838
    },
    {
      "id": "902",
      "name": "Parabrain",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Parabrain",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Parabrain",
      "rating": 4.2,
      "reviewCount": 139
    },
    {
      "id": "903",
      "name": "ParadigmAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ParadigmAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ParadigmAI",
      "rating": 4.8,
      "reviewCount": 729
    },
    {
      "id": "904",
      "name": "ParakeetbyNvidia",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ParakeetbyNvidia",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ParakeetbyNvidia",
      "rating": 4.0,
      "reviewCount": 215
    },
    {
      "id": "905",
      "name": "ParallelGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ParallelGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ParallelGPT",
      "rating": 4.7,
      "reviewCount": 340
    },
    {
      "id": "906",
      "name": "Parler-TTS",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Parler-TTS",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Parler-TTS",
      "rating": 4.8,
      "reviewCount": 897
    },
    {
      "id": "907",
      "name": "PatentPal",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PatentPal",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PatentPal",
      "rating": 4.5,
      "reviewCount": 490
    },
    {
      "id": "908",
      "name": "PawMatchAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PawMatchAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PawMatchAI",
      "rating": 4.6,
      "reviewCount": 348
    },
    {
      "id": "909",
      "name": "Peech",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Peech",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Peech",
      "rating": 4.9,
      "reviewCount": 132
    },
    {
      "id": "910",
      "name": "PennyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PennyAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PennyAI",
      "rating": 4.6,
      "reviewCount": 892
    },
    {
      "id": "911",
      "name": "Penseum",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Penseum",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Penseum",
      "rating": 4.7,
      "reviewCount": 234
    },
    {
      "id": "912",
      "name": "PerplexityAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PerplexityAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PerplexityAI",
      "rating": 4.4,
      "reviewCount": 725
    },
    {
      "id": "913",
      "name": "PerplexityAssistant",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PerplexityAssistant",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PerplexityAssistant",
      "rating": 5.0,
      "reviewCount": 678
    },
    {
      "id": "914",
      "name": "PheedsPromptSilo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PheedsPromptSilo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PheedsPromptSilo",
      "rating": 4.1,
      "reviewCount": 988
    },
    {
      "id": "915",
      "name": "Phenaki",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Phenaki",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Phenaki",
      "rating": 4.1,
      "reviewCount": 858
    },
    {
      "id": "916",
      "name": "Phi-3-minibyMicrosoft",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Phi-3-minibyMicrosoft",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Phi-3-minibyMicrosoft",
      "rating": 4.4,
      "reviewCount": 183
    },
    {
      "id": "917",
      "name": "Phi-4",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Phi-4",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Phi-4",
      "rating": 4.2,
      "reviewCount": 455
    },
    {
      "id": "918",
      "name": "Phind",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Phind",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Phind",
      "rating": 4.6,
      "reviewCount": 885
    },
    {
      "id": "919",
      "name": "PhotoFix",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PhotoFix",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PhotoFix",
      "rating": 4.8,
      "reviewCount": 429
    },
    {
      "id": "920",
      "name": "PhotoMakerV2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PhotoMakerV2",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PhotoMakerV2",
      "rating": 4.1,
      "reviewCount": 418
    },
    {
      "id": "921",
      "name": "Photopea",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Photopea",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Photopea",
      "rating": 4.5,
      "reviewCount": 552
    },
    {
      "id": "922",
      "name": "PhotorAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PhotorAI",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PhotorAI",
      "rating": 4.6,
      "reviewCount": 644
    },
    {
      "id": "923",
      "name": "Photoroom",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Photoroom",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Photoroom",
      "rating": 4.8,
      "reviewCount": 157
    },
    {
      "id": "924",
      "name": "PiAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PiAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PiAI",
      "rating": 4.5,
      "reviewCount": 137
    },
    {
      "id": "925",
      "name": "PianoGenie",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PianoGenie",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PianoGenie",
      "rating": 4.1,
      "reviewCount": 305
    },
    {
      "id": "926",
      "name": "PicFinder",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PicFinder",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PicFinder",
      "rating": 4.4,
      "reviewCount": 807
    },
    {
      "id": "927",
      "name": "PicWish",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PicWish",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PicWish",
      "rating": 4.6,
      "reviewCount": 775
    },
    {
      "id": "928",
      "name": "PicWonderful",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PicWonderful",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PicWonderful",
      "rating": 4.4,
      "reviewCount": 258
    },
    {
      "id": "929",
      "name": "Picapiu",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Picapiu",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Picapiu",
      "rating": 4.5,
      "reviewCount": 635
    },
    {
      "id": "930",
      "name": "PiktochartAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PiktochartAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PiktochartAI",
      "rating": 4.2,
      "reviewCount": 977
    },
    {
      "id": "931",
      "name": "PionexGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PionexGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PionexGPT",
      "rating": 4.2,
      "reviewCount": 865
    },
    {
      "id": "932",
      "name": "Pix2PixVideo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Pix2PixVideo",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Pix2PixVideo",
      "rating": 4.3,
      "reviewCount": 653
    },
    {
      "id": "933",
      "name": "PixVerse",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PixVerse",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PixVerse",
      "rating": 4.7,
      "reviewCount": 717
    },
    {
      "id": "934",
      "name": "PixelaAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PixelaAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PixelaAI",
      "rating": 4.8,
      "reviewCount": 731
    },
    {
      "id": "935",
      "name": "Pixelcut",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Pixelcut",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Pixelcut",
      "rating": 4.5,
      "reviewCount": 428
    },
    {
      "id": "936",
      "name": "Pixelhunter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Pixelhunter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Pixelhunter",
      "rating": 4.5,
      "reviewCount": 525
    },
    {
      "id": "937",
      "name": "Pixelicious",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Pixelicious",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Pixelicious",
      "rating": 4.2,
      "reviewCount": 779
    },
    {
      "id": "938",
      "name": "Pixels2Flutter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Pixels2Flutter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Pixels2Flutter",
      "rating": 4.4,
      "reviewCount": 423
    },
    {
      "id": "939",
      "name": "Pixian.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Pixian.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Pixian.ai",
      "rating": 4.0,
      "reviewCount": 731
    },
    {
      "id": "940",
      "name": "PixiteAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PixiteAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PixiteAI",
      "rating": 4.2,
      "reviewCount": 902
    },
    {
      "id": "941",
      "name": "Pixtral12B",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Pixtral12B",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Pixtral12B",
      "rating": 4.1,
      "reviewCount": 233
    },
    {
      "id": "942",
      "name": "PlantIdentify",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PlantIdentify",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PlantIdentify",
      "rating": 4.3,
      "reviewCount": 697
    },
    {
      "id": "943",
      "name": "PlayAfar",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PlayAfar",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PlayAfar",
      "rating": 4.5,
      "reviewCount": 345
    },
    {
      "id": "944",
      "name": "PlayArti",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PlayArti",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PlayArti",
      "rating": 5.0,
      "reviewCount": 744
    },
    {
      "id": "945",
      "name": "Playphrase.me",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Playphrase.me",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Playphrase.me",
      "rating": 4.1,
      "reviewCount": 938
    },
    {
      "id": "946",
      "name": "Plazmapunk",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Plazmapunk",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Plazmapunk",
      "rating": 4.2,
      "reviewCount": 921
    },
    {
      "id": "947",
      "name": "PluginsbyUpscale.media",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PluginsbyUpscale.media",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PluginsbyUpscale.media",
      "rating": 4.4,
      "reviewCount": 141
    },
    {
      "id": "948",
      "name": "Podcast",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Podcast",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Podcast",
      "rating": 4.3,
      "reviewCount": 615
    },
    {
      "id": "949",
      "name": "Podcastle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Podcastle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Podcastle",
      "rating": 4.1,
      "reviewCount": 334
    },
    {
      "id": "950",
      "name": "Podsift",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Podsift",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Podsift",
      "rating": 4.2,
      "reviewCount": 546
    },
    {
      "id": "951",
      "name": "Podsum",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Podsum",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Podsum",
      "rating": 4.4,
      "reviewCount": 123
    },
    {
      "id": "952",
      "name": "Point-E",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Point-E",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Point-E",
      "rating": 4.9,
      "reviewCount": 124
    },
    {
      "id": "953",
      "name": "PolitePost",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PolitePost",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PolitePost",
      "rating": 4.7,
      "reviewCount": 705
    },
    {
      "id": "954",
      "name": "Pollinations",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Pollinations",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Pollinations",
      "rating": 4.8,
      "reviewCount": 200
    },
    {
      "id": "955",
      "name": "PolySpeak",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PolySpeak",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PolySpeak",
      "rating": 4.6,
      "reviewCount": 725
    },
    {
      "id": "956",
      "name": "Polymath",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Polymath",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Polymath",
      "rating": 4.2,
      "reviewCount": 120
    },
    {
      "id": "957",
      "name": "Pop2Piano",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Pop2Piano",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Pop2Piano",
      "rating": 4.4,
      "reviewCount": 806
    },
    {
      "id": "958",
      "name": "PowerModeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PowerModeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PowerModeAI",
      "rating": 4.9,
      "reviewCount": 315
    },
    {
      "id": "959",
      "name": "PrayGen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PrayGen",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PrayGen",
      "rating": 4.8,
      "reviewCount": 720
    },
    {
      "id": "960",
      "name": "PrivateLLM",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PrivateLLM",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PrivateLLM",
      "rating": 4.6,
      "reviewCount": 799
    },
    {
      "id": "961",
      "name": "ProductBot%28Claros%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ProductBot%28Claros%29",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ProductBot%28Claros%29",
      "rating": 4.2,
      "reviewCount": 487
    },
    {
      "id": "962",
      "name": "ProfessionalizeItToMe",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ProfessionalizeItToMe",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ProfessionalizeItToMe",
      "rating": 4.3,
      "reviewCount": 285
    },
    {
      "id": "963",
      "name": "ProgrammingHelper",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ProgrammingHelper",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ProgrammingHelper",
      "rating": 4.9,
      "reviewCount": 993
    },
    {
      "id": "964",
      "name": "ProjectAstrabyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ProjectAstrabyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ProjectAstrabyGoogle",
      "rating": 4.8,
      "reviewCount": 786
    },
    {
      "id": "965",
      "name": "ProjectDescriptionGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ProjectDescriptionGenerator",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ProjectDescriptionGenerator",
      "rating": 4.6,
      "reviewCount": 410
    },
    {
      "id": "966",
      "name": "ProjectG-Assist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ProjectG-Assist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ProjectG-Assist",
      "rating": 4.2,
      "reviewCount": 120
    },
    {
      "id": "967",
      "name": "ProjectIDXbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ProjectIDXbyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ProjectIDXbyGoogle",
      "rating": 4.2,
      "reviewCount": 715
    },
    {
      "id": "968",
      "name": "ProjectMariner",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ProjectMariner",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ProjectMariner",
      "rating": 4.3,
      "reviewCount": 279
    },
    {
      "id": "969",
      "name": "PrompBase",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PrompBase",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PrompBase",
      "rating": 4.2,
      "reviewCount": 115
    },
    {
      "id": "970",
      "name": "Prompt-Journey",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Prompt-Journey",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Prompt-Journey",
      "rating": 4.5,
      "reviewCount": 786
    },
    {
      "id": "971",
      "name": "PromptDen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PromptDen",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PromptDen",
      "rating": 4.0,
      "reviewCount": 367
    },
    {
      "id": "972",
      "name": "PromptDrive.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PromptDrive.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PromptDrive.ai",
      "rating": 4.9,
      "reviewCount": 746
    },
    {
      "id": "973",
      "name": "PromptExtend",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PromptExtend",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PromptExtend",
      "rating": 4.9,
      "reviewCount": 969
    },
    {
      "id": "974",
      "name": "PromptJourneyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PromptJourneyAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PromptJourneyAI",
      "rating": 4.7,
      "reviewCount": 188
    },
    {
      "id": "975",
      "name": "PromptLayer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PromptLayer",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PromptLayer",
      "rating": 4.5,
      "reviewCount": 604
    },
    {
      "id": "976",
      "name": "PromptMixer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PromptMixer",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PromptMixer",
      "rating": 4.1,
      "reviewCount": 688
    },
    {
      "id": "977",
      "name": "PromptOptimizer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PromptOptimizer",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PromptOptimizer",
      "rating": 4.8,
      "reviewCount": 190
    },
    {
      "id": "978",
      "name": "PromptVibes",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PromptVibes",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PromptVibes",
      "rating": 4.7,
      "reviewCount": 889
    },
    {
      "id": "979",
      "name": "Prompthero",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Prompthero",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Prompthero",
      "rating": 4.7,
      "reviewCount": 700
    },
    {
      "id": "980",
      "name": "Promptheus",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Promptheus",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Promptheus",
      "rating": 4.8,
      "reviewCount": 682
    },
    {
      "id": "981",
      "name": "Promptist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Promptist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Promptist",
      "rating": 4.5,
      "reviewCount": 160
    },
    {
      "id": "982",
      "name": "Promptly",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Promptly",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Promptly",
      "rating": 4.2,
      "reviewCount": 197
    },
    {
      "id": "983",
      "name": "Promptstacks",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Promptstacks",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Promptstacks",
      "rating": 4.9,
      "reviewCount": 321
    },
    {
      "id": "984",
      "name": "Proseable",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Proseable",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Proseable",
      "rating": 4.1,
      "reviewCount": 756
    },
    {
      "id": "985",
      "name": "ProteinGenesisAIv2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ProteinGenesisAIv2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ProteinGenesisAIv2",
      "rating": 4.2,
      "reviewCount": 672
    },
    {
      "id": "986",
      "name": "PublicPrompts",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PublicPrompts",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PublicPrompts",
      "rating": 4.2,
      "reviewCount": 278
    },
    {
      "id": "987",
      "name": "Puppetry",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Puppetry",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Puppetry",
      "rating": 4.4,
      "reviewCount": 260
    },
    {
      "id": "988",
      "name": "PyramidFlow",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/PyramidFlow",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=PyramidFlow",
      "rating": 4.7,
      "reviewCount": 312
    },
    {
      "id": "989",
      "name": "QRCraft",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/QRCraft",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=QRCraft",
      "rating": 4.5,
      "reviewCount": 935
    },
    {
      "id": "990",
      "name": "QVQbyQwen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/QVQbyQwen",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=QVQbyQwen",
      "rating": 4.6,
      "reviewCount": 823
    },
    {
      "id": "991",
      "name": "QuickDrawbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/QuickDrawbyGoogle",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=QuickDrawbyGoogle",
      "rating": 4.5,
      "reviewCount": 924
    },
    {
      "id": "992",
      "name": "Quill",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Quill",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Quill",
      "rating": 4.5,
      "reviewCount": 355
    },
    {
      "id": "993",
      "name": "QuillBot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/QuillBot",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=QuillBot",
      "rating": 5.0,
      "reviewCount": 404
    },
    {
      "id": "994",
      "name": "Quivr",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Quivr",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Quivr",
      "rating": 4.0,
      "reviewCount": 107
    },
    {
      "id": "995",
      "name": "QuizLet",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/QuizLet",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=QuizLet",
      "rating": 4.7,
      "reviewCount": 330
    },
    {
      "id": "996",
      "name": "QuizardAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/QuizardAI",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=QuizardAI",
      "rating": 4.3,
      "reviewCount": 452
    },
    {
      "id": "997",
      "name": "QureosResumeBuilder",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/QureosResumeBuilder",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=QureosResumeBuilder",
      "rating": 4.8,
      "reviewCount": 706
    },
    {
      "id": "998",
      "name": "Quriosity",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Quriosity",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Quriosity",
      "rating": 4.2,
      "reviewCount": 576
    },
    {
      "id": "999",
      "name": "QwQ-32B",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/QwQ-32B",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=QwQ-32B",
      "rating": 4.7,
      "reviewCount": 127
    },
    {
      "id": "1000",
      "name": "Qwen-VL-Plus",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Qwen-VL-Plus",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Qwen-VL-Plus",
      "rating": 4.4,
      "reviewCount": 817
    },
    {
      "id": "1001",
      "name": "Qwen1.5",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Qwen1.5",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Qwen1.5",
      "rating": 4.2,
      "reviewCount": 219
    },
    {
      "id": "1002",
      "name": "Qwen2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Qwen2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Qwen2",
      "rating": 4.3,
      "reviewCount": 451
    },
    {
      "id": "1003",
      "name": "Qwen2-Math",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Qwen2-Math",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Qwen2-Math",
      "rating": 4.3,
      "reviewCount": 980
    },
    {
      "id": "1004",
      "name": "Qwen2.5-Coder",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Qwen2.5-Coder",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Qwen2.5-Coder",
      "rating": 4.2,
      "reviewCount": 990
    },
    {
      "id": "1005",
      "name": "Qwen2.5-Max",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Qwen2.5-Max",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Qwen2.5-Max",
      "rating": 4.5,
      "reviewCount": 758
    },
    {
      "id": "1006",
      "name": "Qwen2.5-Omni",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Qwen2.5-Omni",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Qwen2.5-Omni",
      "rating": 4.7,
      "reviewCount": 239
    },
    {
      "id": "1007",
      "name": "Qwen3",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Qwen3",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Qwen3",
      "rating": 4.1,
      "reviewCount": 269
    },
    {
      "id": "1008",
      "name": "REimagineHome",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/REimagineHome",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=REimagineHome",
      "rating": 4.2,
      "reviewCount": 710
    },
    {
      "id": "1009",
      "name": "RTutor",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RTutor",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RTutor",
      "rating": 4.6,
      "reviewCount": 482
    },
    {
      "id": "1010",
      "name": "RaveDJ",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RaveDJ",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RaveDJ",
      "rating": 4.8,
      "reviewCount": 396
    },
    {
      "id": "1011",
      "name": "Readbay.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Readbay.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Readbay.ai",
      "rating": 4.7,
      "reviewCount": 519
    },
    {
      "id": "1012",
      "name": "ReaderGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ReaderGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ReaderGPT",
      "rating": 4.3,
      "reviewCount": 696
    },
    {
      "id": "1013",
      "name": "ReadingCoachbyMicrosoft",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ReadingCoachbyMicrosoft",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ReadingCoachbyMicrosoft",
      "rating": 4.1,
      "reviewCount": 538
    },
    {
      "id": "1014",
      "name": "Readyverse",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Readyverse",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Readyverse",
      "rating": 4.3,
      "reviewCount": 385
    },
    {
      "id": "1015",
      "name": "RealorFakeText",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RealorFakeText",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RealorFakeText",
      "rating": 4.6,
      "reviewCount": 392
    },
    {
      "id": "1016",
      "name": "ReaperAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ReaperAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ReaperAI",
      "rating": 4.6,
      "reviewCount": 644
    },
    {
      "id": "1017",
      "name": "RecipesByAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RecipesByAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RecipesByAI",
      "rating": 4.3,
      "reviewCount": 556
    },
    {
      "id": "1018",
      "name": "Recraft",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Recraft",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Recraft",
      "rating": 4.8,
      "reviewCount": 763
    },
    {
      "id": "1019",
      "name": "RedditScoutAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RedditScoutAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RedditScoutAI",
      "rating": 4.9,
      "reviewCount": 431
    },
    {
      "id": "1020",
      "name": "ReelMagic",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ReelMagic",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ReelMagic",
      "rating": 4.5,
      "reviewCount": 101
    },
    {
      "id": "1021",
      "name": "Refraction.dev",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Refraction.dev",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Refraction.dev",
      "rating": 4.0,
      "reviewCount": 516
    },
    {
      "id": "1022",
      "name": "ReidenAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ReidenAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ReidenAI",
      "rating": 4.5,
      "reviewCount": 363
    },
    {
      "id": "1023",
      "name": "RekaCore",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RekaCore",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RekaCore",
      "rating": 4.7,
      "reviewCount": 624
    },
    {
      "id": "1024",
      "name": "RekaFlash",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RekaFlash",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RekaFlash",
      "rating": 4.1,
      "reviewCount": 928
    },
    {
      "id": "1025",
      "name": "Remix.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Remix.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Remix.ai",
      "rating": 5.0,
      "reviewCount": 882
    },
    {
      "id": "1026",
      "name": "RemoveBG",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RemoveBG",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RemoveBG",
      "rating": 4.1,
      "reviewCount": 755
    },
    {
      "id": "1027",
      "name": "RemoverZMO",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RemoverZMO",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RemoverZMO",
      "rating": 4.3,
      "reviewCount": 217
    },
    {
      "id": "1028",
      "name": "ReplaceAnything",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ReplaceAnything",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ReplaceAnything",
      "rating": 4.6,
      "reviewCount": 272
    },
    {
      "id": "1029",
      "name": "Replay.io",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Replay.io",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Replay.io",
      "rating": 5.0,
      "reviewCount": 725
    },
    {
      "id": "1030",
      "name": "ResearchGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ResearchGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ResearchGPT",
      "rating": 4.3,
      "reviewCount": 394
    },
    {
      "id": "1031",
      "name": "ResearchRabbit",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ResearchRabbit",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ResearchRabbit",
      "rating": 4.7,
      "reviewCount": 242
    },
    {
      "id": "1032",
      "name": "Resemble",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Resemble",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Resemble",
      "rating": 4.4,
      "reviewCount": 906
    },
    {
      "id": "1033",
      "name": "Respell",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Respell",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Respell",
      "rating": 5.0,
      "reviewCount": 500
    },
    {
      "id": "1034",
      "name": "RespoAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RespoAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RespoAI",
      "rating": 4.9,
      "reviewCount": 511
    },
    {
      "id": "1035",
      "name": "RestorePhotos",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RestorePhotos",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RestorePhotos",
      "rating": 4.1,
      "reviewCount": 574
    },
    {
      "id": "1036",
      "name": "RetrovisionApp",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RetrovisionApp",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RetrovisionApp",
      "rating": 4.4,
      "reviewCount": 598
    },
    {
      "id": "1037",
      "name": "ReveImage",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ReveImage",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ReveImage",
      "rating": 4.3,
      "reviewCount": 366
    },
    {
      "id": "1038",
      "name": "ReworkdAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ReworkdAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ReworkdAI",
      "rating": 4.1,
      "reviewCount": 789
    },
    {
      "id": "1039",
      "name": "RiddleMeThis",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RiddleMeThis",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RiddleMeThis",
      "rating": 4.7,
      "reviewCount": 203
    },
    {
      "id": "1040",
      "name": "Riffusion",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Riffusion",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Riffusion",
      "rating": 4.6,
      "reviewCount": 844
    },
    {
      "id": "1041",
      "name": "RizeIO",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RizeIO",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RizeIO",
      "rating": 4.6,
      "reviewCount": 582
    },
    {
      "id": "1042",
      "name": "Rizz%21Keyboard",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Rizz%21Keyboard",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Rizz%21Keyboard",
      "rating": 4.1,
      "reviewCount": 417
    },
    {
      "id": "1043",
      "name": "RoamAround",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RoamAround",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RoamAround",
      "rating": 4.3,
      "reviewCount": 922
    },
    {
      "id": "1044",
      "name": "RoastMyDesk",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RoastMyDesk",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RoastMyDesk",
      "rating": 4.7,
      "reviewCount": 780
    },
    {
      "id": "1045",
      "name": "RocketAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RocketAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RocketAI",
      "rating": 4.2,
      "reviewCount": 640
    },
    {
      "id": "1046",
      "name": "RoomGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RoomGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RoomGPT",
      "rating": 4.6,
      "reviewCount": 764
    },
    {
      "id": "1047",
      "name": "Rooms",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Rooms",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Rooms",
      "rating": 4.0,
      "reviewCount": 493
    },
    {
      "id": "1048",
      "name": "RoopAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RoopAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RoopAI",
      "rating": 4.5,
      "reviewCount": 529
    },
    {
      "id": "1049",
      "name": "Rory",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Rory",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Rory",
      "rating": 4.3,
      "reviewCount": 346
    },
    {
      "id": "1050",
      "name": "Rosebud",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Rosebud",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Rosebud",
      "rating": 5.0,
      "reviewCount": 692
    },
    {
      "id": "1051",
      "name": "Rows",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Rows",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Rows",
      "rating": 4.7,
      "reviewCount": 658
    },
    {
      "id": "1052",
      "name": "RufusbyAmazon",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RufusbyAmazon",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RufusbyAmazon",
      "rating": 4.3,
      "reviewCount": 981
    },
    {
      "id": "1053",
      "name": "RunnerH",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/RunnerH",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=RunnerH",
      "rating": 4.1,
      "reviewCount": 164
    },
    {
      "id": "1054",
      "name": "SDXLAutoFaceSwap",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SDXLAutoFaceSwap",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SDXLAutoFaceSwap",
      "rating": 4.8,
      "reviewCount": 562
    },
    {
      "id": "1055",
      "name": "SDXLFlash",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SDXLFlash",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SDXLFlash",
      "rating": 4.9,
      "reviewCount": 128
    },
    {
      "id": "1056",
      "name": "SDXLTurboOnline",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SDXLTurboOnline",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SDXLTurboOnline",
      "rating": 4.6,
      "reviewCount": 590
    },
    {
      "id": "1057",
      "name": "SEALLeaderboards",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SEALLeaderboards",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SEALLeaderboards",
      "rating": 4.6,
      "reviewCount": 658
    },
    {
      "id": "1058",
      "name": "SEOGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SEOGPT",
      "category": "Marketing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SEOGPT",
      "rating": 4.8,
      "reviewCount": 405
    },
    {
      "id": "1059",
      "name": "SIMAAIbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SIMAAIbyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SIMAAIbyGoogle",
      "rating": 4.1,
      "reviewCount": 153
    },
    {
      "id": "1060",
      "name": "SMRY",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SMRY",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SMRY",
      "rating": 4.7,
      "reviewCount": 387
    },
    {
      "id": "1061",
      "name": "SUPIRbyXPixelGroup",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SUPIRbyXPixelGroup",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SUPIRbyXPixelGroup",
      "rating": 4.1,
      "reviewCount": 533
    },
    {
      "id": "1062",
      "name": "SVFR",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SVFR",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SVFR",
      "rating": 4.4,
      "reviewCount": 464
    },
    {
      "id": "1063",
      "name": "SVG.io",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SVG.io",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SVG.io",
      "rating": 4.3,
      "reviewCount": 742
    },
    {
      "id": "1064",
      "name": "SWE-agent",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SWE-agent",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SWE-agent",
      "rating": 5.0,
      "reviewCount": 242
    },
    {
      "id": "1065",
      "name": "Safurai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Safurai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Safurai",
      "rating": 4.7,
      "reviewCount": 629
    },
    {
      "id": "1066",
      "name": "Saga",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Saga",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Saga",
      "rating": 4.7,
      "reviewCount": 720
    },
    {
      "id": "1067",
      "name": "Sagify",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Sagify",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Sagify",
      "rating": 4.8,
      "reviewCount": 908
    },
    {
      "id": "1068",
      "name": "Sam2byMeta",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Sam2byMeta",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Sam2byMeta",
      "rating": 4.5,
      "reviewCount": 386
    },
    {
      "id": "1069",
      "name": "Samplette",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Samplette",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Samplette",
      "rating": 4.4,
      "reviewCount": 209
    },
    {
      "id": "1070",
      "name": "SamurAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SamurAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SamurAI",
      "rating": 4.6,
      "reviewCount": 698
    },
    {
      "id": "1071",
      "name": "Samwell",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Samwell",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Samwell",
      "rating": 4.2,
      "reviewCount": 638
    },
    {
      "id": "1072",
      "name": "Sana",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Sana",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Sana",
      "rating": 4.8,
      "reviewCount": 323
    },
    {
      "id": "1073",
      "name": "SanctumAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SanctumAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SanctumAI",
      "rating": 4.8,
      "reviewCount": 363
    },
    {
      "id": "1074",
      "name": "SaveDay",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SaveDay",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SaveDay",
      "rating": 4.2,
      "reviewCount": 218
    },
    {
      "id": "1075",
      "name": "SayMyName%21",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SayMyName%21",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SayMyName%21",
      "rating": 4.9,
      "reviewCount": 256
    },
    {
      "id": "1076",
      "name": "SceneOne",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SceneOne",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SceneOne",
      "rating": 4.7,
      "reviewCount": 683
    },
    {
      "id": "1077",
      "name": "SchoolHack",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SchoolHack",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SchoolHack",
      "rating": 4.8,
      "reviewCount": 146
    },
    {
      "id": "1078",
      "name": "SciSummary",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SciSummary",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SciSummary",
      "rating": 4.3,
      "reviewCount": 144
    },
    {
      "id": "1079",
      "name": "Scispace",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Scispace",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Scispace",
      "rating": 4.1,
      "reviewCount": 749
    },
    {
      "id": "1080",
      "name": "Scrabblecam",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Scrabblecam",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Scrabblecam",
      "rating": 4.9,
      "reviewCount": 446
    },
    {
      "id": "1081",
      "name": "ScreenshotToCode",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ScreenshotToCode",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ScreenshotToCode",
      "rating": 4.9,
      "reviewCount": 367
    },
    {
      "id": "1082",
      "name": "ScribbleAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ScribbleAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ScribbleAI",
      "rating": 4.6,
      "reviewCount": 756
    },
    {
      "id": "1083",
      "name": "Scribens",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Scribens",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Scribens",
      "rating": 4.7,
      "reviewCount": 915
    },
    {
      "id": "1084",
      "name": "ScripAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ScripAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ScripAI",
      "rating": 4.6,
      "reviewCount": 267
    },
    {
      "id": "1085",
      "name": "SeamlessStudio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SeamlessStudio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SeamlessStudio",
      "rating": 4.4,
      "reviewCount": 824
    },
    {
      "id": "1086",
      "name": "SearchGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SearchGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SearchGPT",
      "rating": 4.7,
      "reviewCount": 493
    },
    {
      "id": "1087",
      "name": "Seaweed.video",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Seaweed.video",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Seaweed.video",
      "rating": 4.3,
      "reviewCount": 265
    },
    {
      "id": "1088",
      "name": "SecretLlama",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SecretLlama",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SecretLlama",
      "rating": 4.5,
      "reviewCount": 691
    },
    {
      "id": "1089",
      "name": "Seedream3.0",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Seedream3.0",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Seedream3.0",
      "rating": 4.8,
      "reviewCount": 910
    },
    {
      "id": "1090",
      "name": "SemanticScholar",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SemanticScholar",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SemanticScholar",
      "rating": 4.7,
      "reviewCount": 402
    },
    {
      "id": "1091",
      "name": "SeoReviewTools",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SeoReviewTools",
      "category": "Marketing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SeoReviewTools",
      "rating": 4.9,
      "reviewCount": 707
    },
    {
      "id": "1092",
      "name": "SeonaAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SeonaAI",
      "category": "Marketing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SeonaAI",
      "rating": 4.6,
      "reviewCount": 278
    },
    {
      "id": "1093",
      "name": "ShakkerAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ShakkerAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ShakkerAI",
      "rating": 4.0,
      "reviewCount": 977
    },
    {
      "id": "1094",
      "name": "Shap-e",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Shap-e",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Shap-e",
      "rating": 4.2,
      "reviewCount": 274
    },
    {
      "id": "1095",
      "name": "SharkTankAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SharkTankAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SharkTankAI",
      "rating": 4.0,
      "reviewCount": 631
    },
    {
      "id": "1096",
      "name": "Shop.app",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Shop.app",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Shop.app",
      "rating": 4.7,
      "reviewCount": 124
    },
    {
      "id": "1097",
      "name": "Showrunner",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Showrunner",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Showrunner",
      "rating": 4.2,
      "reviewCount": 109
    },
    {
      "id": "1098",
      "name": "Shuttle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Shuttle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Shuttle",
      "rating": 4.3,
      "reviewCount": 220
    },
    {
      "id": "1099",
      "name": "SignLLM",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SignLLM",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SignLLM",
      "rating": 4.2,
      "reviewCount": 184
    },
    {
      "id": "1100",
      "name": "SimilarSongsFinder",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SimilarSongsFinder",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SimilarSongsFinder",
      "rating": 4.9,
      "reviewCount": 722
    },
    {
      "id": "1101",
      "name": "Simplescraper",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Simplescraper",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Simplescraper",
      "rating": 4.3,
      "reviewCount": 746
    },
    {
      "id": "1102",
      "name": "Simulon",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Simulon",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Simulon",
      "rating": 4.8,
      "reviewCount": 252
    },
    {
      "id": "1103",
      "name": "SiviAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SiviAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SiviAI",
      "rating": 4.4,
      "reviewCount": 561
    },
    {
      "id": "1104",
      "name": "Sketch",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Sketch",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Sketch",
      "rating": 4.4,
      "reviewCount": 997
    },
    {
      "id": "1105",
      "name": "Sketch2App",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Sketch2App",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Sketch2App",
      "rating": 4.5,
      "reviewCount": 706
    },
    {
      "id": "1106",
      "name": "Sketch2Render",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Sketch2Render",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Sketch2Render",
      "rating": 5.0,
      "reviewCount": 642
    },
    {
      "id": "1107",
      "name": "Sketch2SoundAdobe",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Sketch2SoundAdobe",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Sketch2SoundAdobe",
      "rating": 4.7,
      "reviewCount": 712
    },
    {
      "id": "1108",
      "name": "SketchProAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SketchProAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SketchProAI",
      "rating": 4.1,
      "reviewCount": 396
    },
    {
      "id": "1109",
      "name": "Skibs.co",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Skibs.co",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Skibs.co",
      "rating": 4.5,
      "reviewCount": 963
    },
    {
      "id": "1110",
      "name": "SkimIt",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SkimIt",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SkimIt",
      "rating": 4.9,
      "reviewCount": 590
    },
    {
      "id": "1111",
      "name": "SkyboxLab",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SkyboxLab",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SkyboxLab",
      "rating": 4.2,
      "reviewCount": 200
    },
    {
      "id": "1112",
      "name": "SlidesAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SlidesAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SlidesAI",
      "rating": 4.0,
      "reviewCount": 236
    },
    {
      "id": "1113",
      "name": "SmartCrawlAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SmartCrawlAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SmartCrawlAI",
      "rating": 4.7,
      "reviewCount": 650
    },
    {
      "id": "1114",
      "name": "SmartScout",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SmartScout",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SmartScout",
      "rating": 4.1,
      "reviewCount": 128
    },
    {
      "id": "1115",
      "name": "SnackPrompt",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SnackPrompt",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SnackPrompt",
      "rating": 4.8,
      "reviewCount": 573
    },
    {
      "id": "1116",
      "name": "SnapEdit",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SnapEdit",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SnapEdit",
      "rating": 4.2,
      "reviewCount": 280
    },
    {
      "id": "1117",
      "name": "SnopesFactbot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SnopesFactbot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SnopesFactbot",
      "rating": 4.2,
      "reviewCount": 669
    },
    {
      "id": "1118",
      "name": "SocialCommentsGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SocialCommentsGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SocialCommentsGPT",
      "rating": 4.3,
      "reviewCount": 174
    },
    {
      "id": "1119",
      "name": "SocraticbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SocraticbyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SocraticbyGoogle",
      "rating": 4.5,
      "reviewCount": 499
    },
    {
      "id": "1120",
      "name": "SolidPoint",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SolidPoint",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SolidPoint",
      "rating": 4.1,
      "reviewCount": 603
    },
    {
      "id": "1121",
      "name": "SolobyMozilla",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SolobyMozilla",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SolobyMozilla",
      "rating": 4.2,
      "reviewCount": 988
    },
    {
      "id": "1122",
      "name": "SongR",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SongR",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SongR",
      "rating": 4.2,
      "reviewCount": 109
    },
    {
      "id": "1123",
      "name": "Songtell",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Songtell",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Songtell",
      "rating": 4.5,
      "reviewCount": 254
    },
    {
      "id": "1124",
      "name": "SoraVideos",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SoraVideos",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SoraVideos",
      "rating": 4.5,
      "reviewCount": 716
    },
    {
      "id": "1125",
      "name": "SoundStormbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SoundStormbyGoogle",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SoundStormbyGoogle",
      "rating": 4.0,
      "reviewCount": 219
    },
    {
      "id": "1126",
      "name": "Soundful",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Soundful",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Soundful",
      "rating": 4.1,
      "reviewCount": 464
    },
    {
      "id": "1127",
      "name": "Soundraw",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Soundraw",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Soundraw",
      "rating": 5.0,
      "reviewCount": 966
    },
    {
      "id": "1128",
      "name": "SoundryAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SoundryAI",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SoundryAI",
      "rating": 4.8,
      "reviewCount": 541
    },
    {
      "id": "1129",
      "name": "SpeechSynthesis",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SpeechSynthesis",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SpeechSynthesis",
      "rating": 4.0,
      "reviewCount": 985
    },
    {
      "id": "1130",
      "name": "Speechki",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Speechki",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Speechki",
      "rating": 4.4,
      "reviewCount": 288
    },
    {
      "id": "1131",
      "name": "SpellarAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SpellarAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SpellarAI",
      "rating": 4.1,
      "reviewCount": 426
    },
    {
      "id": "1132",
      "name": "SpinBot",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SpinBot",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SpinBot",
      "rating": 4.8,
      "reviewCount": 781
    },
    {
      "id": "1133",
      "name": "SplashMusic",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SplashMusic",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SplashMusic",
      "rating": 4.4,
      "reviewCount": 890
    },
    {
      "id": "1134",
      "name": "SrefHunter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SrefHunter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SrefHunter",
      "rating": 4.1,
      "reviewCount": 614
    },
    {
      "id": "1135",
      "name": "StableAudio2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StableAudio2",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StableAudio2",
      "rating": 4.7,
      "reviewCount": 331
    },
    {
      "id": "1136",
      "name": "StableAudioOpen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StableAudioOpen",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StableAudioOpen",
      "rating": 4.9,
      "reviewCount": 975
    },
    {
      "id": "1137",
      "name": "StableCascade",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StableCascade",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StableCascade",
      "rating": 4.2,
      "reviewCount": 283
    },
    {
      "id": "1138",
      "name": "StableDiffusion3.5",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StableDiffusion3.5",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StableDiffusion3.5",
      "rating": 4.9,
      "reviewCount": 997
    },
    {
      "id": "1139",
      "name": "StableDiffusion3Medium",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StableDiffusion3Medium",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StableDiffusion3Medium",
      "rating": 4.1,
      "reviewCount": 481
    },
    {
      "id": "1140",
      "name": "StableHorde",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StableHorde",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StableHorde",
      "rating": 4.2,
      "reviewCount": 925
    },
    {
      "id": "1141",
      "name": "StableLM",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StableLM",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StableLM",
      "rating": 4.4,
      "reviewCount": 893
    },
    {
      "id": "1142",
      "name": "StableLM2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StableLM2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StableLM2",
      "rating": 4.8,
      "reviewCount": 407
    },
    {
      "id": "1143",
      "name": "StableStudio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StableStudio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StableStudio",
      "rating": 4.0,
      "reviewCount": 324
    },
    {
      "id": "1144",
      "name": "StableVideo3D",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StableVideo3D",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StableVideo3D",
      "rating": 5.0,
      "reviewCount": 376
    },
    {
      "id": "1145",
      "name": "StableVideoDiffusion",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StableVideoDiffusion",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StableVideoDiffusion",
      "rating": 4.2,
      "reviewCount": 378
    },
    {
      "id": "1146",
      "name": "StableVirtualCamera",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StableVirtualCamera",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StableVirtualCamera",
      "rating": 4.2,
      "reviewCount": 927
    },
    {
      "id": "1147",
      "name": "StarCoder",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StarCoder",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StarCoder",
      "rating": 4.6,
      "reviewCount": 191
    },
    {
      "id": "1148",
      "name": "StarVector",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StarVector",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StarVector",
      "rating": 4.1,
      "reviewCount": 515
    },
    {
      "id": "1149",
      "name": "Starryai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Starryai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Starryai",
      "rating": 4.6,
      "reviewCount": 467
    },
    {
      "id": "1150",
      "name": "Steno",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Steno",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Steno",
      "rating": 4.7,
      "reviewCount": 115
    },
    {
      "id": "1151",
      "name": "StickerBaker",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StickerBaker",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StickerBaker",
      "rating": 4.7,
      "reviewCount": 223
    },
    {
      "id": "1152",
      "name": "StickerPromptGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StickerPromptGenerator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StickerPromptGenerator",
      "rating": 4.6,
      "reviewCount": 835
    },
    {
      "id": "1153",
      "name": "StockGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StockGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StockGPT",
      "rating": 4.0,
      "reviewCount": 661
    },
    {
      "id": "1154",
      "name": "StocknewsAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StocknewsAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StocknewsAI",
      "rating": 4.6,
      "reviewCount": 552
    },
    {
      "id": "1155",
      "name": "Storm",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Storm",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Storm",
      "rating": 4.8,
      "reviewCount": 576
    },
    {
      "id": "1156",
      "name": "StoryBird",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StoryBird",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StoryBird",
      "rating": 4.8,
      "reviewCount": 356
    },
    {
      "id": "1157",
      "name": "StoryBooks",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StoryBooks",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StoryBooks",
      "rating": 4.4,
      "reviewCount": 889
    },
    {
      "id": "1158",
      "name": "StoryDiffusion",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StoryDiffusion",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StoryDiffusion",
      "rating": 4.1,
      "reviewCount": 513
    },
    {
      "id": "1159",
      "name": "StoryIllustratorAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StoryIllustratorAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StoryIllustratorAI",
      "rating": 4.3,
      "reviewCount": 236
    },
    {
      "id": "1160",
      "name": "StorytellerbyAugie",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StorytellerbyAugie",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StorytellerbyAugie",
      "rating": 4.5,
      "reviewCount": 943
    },
    {
      "id": "1161",
      "name": "StripeAgenticWorkflow",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StripeAgenticWorkflow",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StripeAgenticWorkflow",
      "rating": 4.7,
      "reviewCount": 345
    },
    {
      "id": "1162",
      "name": "Strut",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Strut",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Strut",
      "rating": 4.8,
      "reviewCount": 792
    },
    {
      "id": "1163",
      "name": "StudyCrumb",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StudyCrumb",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StudyCrumb",
      "rating": 4.6,
      "reviewCount": 706
    },
    {
      "id": "1164",
      "name": "StudyGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StudyGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StudyGPT",
      "rating": 4.1,
      "reviewCount": 479
    },
    {
      "id": "1165",
      "name": "StupidGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StupidGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StupidGPT",
      "rating": 4.7,
      "reviewCount": 860
    },
    {
      "id": "1166",
      "name": "StyleDrop",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StyleDrop",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StyleDrop",
      "rating": 4.9,
      "reviewCount": 300
    },
    {
      "id": "1167",
      "name": "StyleSketch",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/StyleSketch",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=StyleSketch",
      "rating": 4.6,
      "reviewCount": 998
    },
    {
      "id": "1168",
      "name": "Substance3DViewer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Substance3DViewer",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Substance3DViewer",
      "rating": 4.3,
      "reviewCount": 766
    },
    {
      "id": "1169",
      "name": "SugarFree",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SugarFree",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SugarFree",
      "rating": 4.7,
      "reviewCount": 555
    },
    {
      "id": "1170",
      "name": "SumlyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SumlyAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SumlyAI",
      "rating": 4.9,
      "reviewCount": 992
    },
    {
      "id": "1171",
      "name": "Summarist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Summarist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Summarist",
      "rating": 4.8,
      "reviewCount": 184
    },
    {
      "id": "1172",
      "name": "SummarizeTech",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SummarizeTech",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SummarizeTech",
      "rating": 4.8,
      "reviewCount": 628
    },
    {
      "id": "1173",
      "name": "Summate",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Summate",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Summate",
      "rating": 4.9,
      "reviewCount": 127
    },
    {
      "id": "1174",
      "name": "SunoAIBark",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SunoAIBark",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SunoAIBark",
      "rating": 4.5,
      "reviewCount": 880
    },
    {
      "id": "1175",
      "name": "SuperAGI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SuperAGI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SuperAGI",
      "rating": 4.9,
      "reviewCount": 575
    },
    {
      "id": "1176",
      "name": "SuperDuperDB",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SuperDuperDB",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SuperDuperDB",
      "rating": 4.9,
      "reviewCount": 168
    },
    {
      "id": "1177",
      "name": "SuperMeme",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SuperMeme",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SuperMeme",
      "rating": 4.5,
      "reviewCount": 449
    },
    {
      "id": "1178",
      "name": "SuperReply",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SuperReply",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SuperReply",
      "rating": 4.1,
      "reviewCount": 315
    },
    {
      "id": "1179",
      "name": "SuperboltGeoSpy",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SuperboltGeoSpy",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SuperboltGeoSpy",
      "rating": 4.2,
      "reviewCount": 516
    },
    {
      "id": "1180",
      "name": "SuperpowerGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SuperpowerGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SuperpowerGPT",
      "rating": 4.9,
      "reviewCount": 140
    },
    {
      "id": "1181",
      "name": "Swapface",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Swapface",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Swapface",
      "rating": 4.6,
      "reviewCount": 789
    },
    {
      "id": "1182",
      "name": "SwarmbyOpenAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SwarmbyOpenAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SwarmbyOpenAI",
      "rating": 4.5,
      "reviewCount": 269
    },
    {
      "id": "1183",
      "name": "Switti",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Switti",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Switti",
      "rating": 4.4,
      "reviewCount": 853
    },
    {
      "id": "1184",
      "name": "SymblAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SymblAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SymblAI",
      "rating": 4.8,
      "reviewCount": 359
    },
    {
      "id": "1185",
      "name": "Symplified",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Symplified",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Symplified",
      "rating": 5.0,
      "reviewCount": 198
    },
    {
      "id": "1186",
      "name": "SymptomCheckerIO",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SymptomCheckerIO",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SymptomCheckerIO",
      "rating": 4.1,
      "reviewCount": 957
    },
    {
      "id": "1187",
      "name": "SynthesysX",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/SynthesysX",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=SynthesysX",
      "rating": 4.0,
      "reviewCount": 665
    },
    {
      "id": "1188",
      "name": "TTSLabs",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TTSLabs",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TTSLabs",
      "rating": 4.6,
      "reviewCount": 132
    },
    {
      "id": "1189",
      "name": "TTSMaker",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TTSMaker",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TTSMaker",
      "rating": 4.5,
      "reviewCount": 593
    },
    {
      "id": "1190",
      "name": "TTSReader",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TTSReader",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TTSReader",
      "rating": 4.4,
      "reviewCount": 934
    },
    {
      "id": "1191",
      "name": "TTT-MLP",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TTT-MLP",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TTT-MLP",
      "rating": 4.7,
      "reviewCount": 742
    },
    {
      "id": "1192",
      "name": "Tability",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Tability",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Tability",
      "rating": 4.4,
      "reviewCount": 606
    },
    {
      "id": "1193",
      "name": "TaiaTranslations",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TaiaTranslations",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TaiaTranslations",
      "rating": 4.4,
      "reviewCount": 603
    },
    {
      "id": "1194",
      "name": "TailwindStudio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TailwindStudio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TailwindStudio",
      "rating": 5.0,
      "reviewCount": 581
    },
    {
      "id": "1195",
      "name": "TalkToBooks",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TalkToBooks",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TalkToBooks",
      "rating": 5.0,
      "reviewCount": 877
    },
    {
      "id": "1196",
      "name": "TalkpalAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TalkpalAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TalkpalAI",
      "rating": 4.6,
      "reviewCount": 319
    },
    {
      "id": "1197",
      "name": "TammyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TammyAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TammyAI",
      "rating": 4.1,
      "reviewCount": 748
    },
    {
      "id": "1198",
      "name": "TandemGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TandemGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TandemGPT",
      "rating": 4.5,
      "reviewCount": 602
    },
    {
      "id": "1199",
      "name": "TargumVideo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TargumVideo",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TargumVideo",
      "rating": 4.5,
      "reviewCount": 814
    },
    {
      "id": "1200",
      "name": "Teach-O-Matic",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Teach-O-Matic",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Teach-O-Matic",
      "rating": 4.1,
      "reviewCount": 681
    },
    {
      "id": "1201",
      "name": "TeachAnything",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TeachAnything",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TeachAnything",
      "rating": 4.3,
      "reviewCount": 739
    },
    {
      "id": "1202",
      "name": "TechmartAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TechmartAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TechmartAI",
      "rating": 4.7,
      "reviewCount": 925
    },
    {
      "id": "1203",
      "name": "TemporalGaussianHierarchy",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TemporalGaussianHierarchy",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TemporalGaussianHierarchy",
      "rating": 4.6,
      "reviewCount": 984
    },
    {
      "id": "1204",
      "name": "Text-to-CADUI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Text-to-CADUI",
      "category": "Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Text-to-CADUI",
      "rating": 4.1,
      "reviewCount": 333
    },
    {
      "id": "1205",
      "name": "TextBehindImage",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TextBehindImage",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TextBehindImage",
      "rating": 4.0,
      "reviewCount": 289
    },
    {
      "id": "1206",
      "name": "TextFXbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TextFXbyGoogle",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TextFXbyGoogle",
      "rating": 4.5,
      "reviewCount": 895
    },
    {
      "id": "1207",
      "name": "TextGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TextGPT",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TextGPT",
      "rating": 4.5,
      "reviewCount": 604
    },
    {
      "id": "1208",
      "name": "TexteroAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TexteroAI",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TexteroAI",
      "rating": 4.9,
      "reviewCount": 547
    },
    {
      "id": "1209",
      "name": "Texti",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Texti",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Texti",
      "rating": 4.8,
      "reviewCount": 506
    },
    {
      "id": "1210",
      "name": "TexttoPokemon",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TexttoPokemon",
      "category": "Writing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TexttoPokemon",
      "rating": 4.6,
      "reviewCount": 471
    },
    {
      "id": "1211",
      "name": "TexttoSoundEffects",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TexttoSoundEffects",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TexttoSoundEffects",
      "rating": 4.1,
      "reviewCount": 786
    },
    {
      "id": "1212",
      "name": "TheGPTWhoLived",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TheGPTWhoLived",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TheGPTWhoLived",
      "rating": 4.2,
      "reviewCount": 578
    },
    {
      "id": "1213",
      "name": "TheStoryGraph",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TheStoryGraph",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TheStoryGraph",
      "rating": 4.1,
      "reviewCount": 625
    },
    {
      "id": "1214",
      "name": "There%26%238217%3BsaPromptforthat",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/There%26%238217%3BsaPromptforthat",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=There%26%238217%3BsaPromptforthat",
      "rating": 4.6,
      "reviewCount": 908
    },
    {
      "id": "1215",
      "name": "Theselyricsdonotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Theselyricsdonotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Theselyricsdonotexist",
      "rating": 4.8,
      "reviewCount": 915
    },
    {
      "id": "1216",
      "name": "ThingTranslator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ThingTranslator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ThingTranslator",
      "rating": 4.1,
      "reviewCount": 186
    },
    {
      "id": "1217",
      "name": "This-mp-does-not-exist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/This-mp-does-not-exist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=This-mp-does-not-exist",
      "rating": 4.2,
      "reviewCount": 785
    },
    {
      "id": "1218",
      "name": "ThisMemeDoesNotExist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ThisMemeDoesNotExist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ThisMemeDoesNotExist",
      "rating": 4.9,
      "reviewCount": 979
    },
    {
      "id": "1219",
      "name": "ThisModelDoesNotExist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ThisModelDoesNotExist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ThisModelDoesNotExist",
      "rating": 4.7,
      "reviewCount": 114
    },
    {
      "id": "1220",
      "name": "Thisautomobiledoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisautomobiledoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisautomobiledoesnotexist",
      "rating": 4.4,
      "reviewCount": 439
    },
    {
      "id": "1221",
      "name": "Thisbaseballplayerdoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisbaseballplayerdoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisbaseballplayerdoesnotexist",
      "rating": 4.2,
      "reviewCount": 116
    },
    {
      "id": "1222",
      "name": "Thisbeachdoesnotexist.com",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisbeachdoesnotexist.com",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisbeachdoesnotexist.com",
      "rating": 4.5,
      "reviewCount": 936
    },
    {
      "id": "1223",
      "name": "Thiscampsitedoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thiscampsitedoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thiscampsitedoesnotexist",
      "rating": 4.0,
      "reviewCount": 149
    },
    {
      "id": "1224",
      "name": "Thischairdoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thischairdoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thischairdoesnotexist",
      "rating": 4.2,
      "reviewCount": 996
    },
    {
      "id": "1225",
      "name": "Thiscitydoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thiscitydoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thiscitydoesnotexist",
      "rating": 4.9,
      "reviewCount": 634
    },
    {
      "id": "1226",
      "name": "Thisemotiondoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisemotiondoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisemotiondoesnotexist",
      "rating": 4.6,
      "reviewCount": 568
    },
    {
      "id": "1227",
      "name": "Thisflagdoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisflagdoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisflagdoesnotexist",
      "rating": 4.6,
      "reviewCount": 165
    },
    {
      "id": "1228",
      "name": "Thisfoodblogdoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisfoodblogdoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisfoodblogdoesnotexist",
      "rating": 4.8,
      "reviewCount": 608
    },
    {
      "id": "1229",
      "name": "Thisfootdoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisfootdoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisfootdoesnotexist",
      "rating": 4.2,
      "reviewCount": 915
    },
    {
      "id": "1230",
      "name": "Thisfursonadoesnotexist.com",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisfursonadoesnotexist.com",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisfursonadoesnotexist.com",
      "rating": 4.7,
      "reviewCount": 791
    },
    {
      "id": "1231",
      "name": "Thisgraffitidoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisgraffitidoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisgraffitidoesnotexist",
      "rating": 4.7,
      "reviewCount": 527
    },
    {
      "id": "1232",
      "name": "Thishomerdoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thishomerdoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thishomerdoesnotexist",
      "rating": 4.9,
      "reviewCount": 186
    },
    {
      "id": "1233",
      "name": "Thishousedoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thishousedoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thishousedoesnotexist",
      "rating": 4.6,
      "reviewCount": 102
    },
    {
      "id": "1234",
      "name": "Thisirisdoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisirisdoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisirisdoesnotexist",
      "rating": 4.2,
      "reviewCount": 519
    },
    {
      "id": "1235",
      "name": "Thismountaindoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thismountaindoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thismountaindoesnotexist",
      "rating": 4.5,
      "reviewCount": 446
    },
    {
      "id": "1236",
      "name": "Thisnightskydoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisnightskydoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisnightskydoesnotexist",
      "rating": 4.5,
      "reviewCount": 673
    },
    {
      "id": "1237",
      "name": "Thispersondoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thispersondoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thispersondoesnotexist",
      "rating": 4.4,
      "reviewCount": 164
    },
    {
      "id": "1238",
      "name": "Thisponydoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisponydoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisponydoesnotexist",
      "rating": 4.9,
      "reviewCount": 169
    },
    {
      "id": "1239",
      "name": "Thisresumedoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisresumedoesnotexist",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisresumedoesnotexist",
      "rating": 4.0,
      "reviewCount": 613
    },
    {
      "id": "1240",
      "name": "Thissneakerdoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thissneakerdoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thissneakerdoesnotexist",
      "rating": 4.1,
      "reviewCount": 479
    },
    {
      "id": "1241",
      "name": "Thisstreetviewdoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisstreetviewdoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisstreetviewdoesnotexist",
      "rating": 4.7,
      "reviewCount": 906
    },
    {
      "id": "1242",
      "name": "Thiswaifudoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thiswaifudoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thiswaifudoesnotexist",
      "rating": 4.8,
      "reviewCount": 257
    },
    {
      "id": "1243",
      "name": "Thisworddoesnotexist",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thisworddoesnotexist",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thisworddoesnotexist",
      "rating": 4.3,
      "reviewCount": 769
    },
    {
      "id": "1244",
      "name": "Thumbly",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thumbly",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thumbly",
      "rating": 4.5,
      "reviewCount": 927
    },
    {
      "id": "1245",
      "name": "ThumbnailAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ThumbnailAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ThumbnailAI",
      "rating": 4.1,
      "reviewCount": 506
    },
    {
      "id": "1246",
      "name": "Thunderbit",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Thunderbit",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Thunderbit",
      "rating": 4.2,
      "reviewCount": 598
    },
    {
      "id": "1247",
      "name": "TikTokSymphony",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TikTokSymphony",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TikTokSymphony",
      "rating": 4.8,
      "reviewCount": 233
    },
    {
      "id": "1248",
      "name": "TinEye",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TinEye",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TinEye",
      "rating": 4.0,
      "reviewCount": 148
    },
    {
      "id": "1249",
      "name": "TinyMagic",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TinyMagic",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TinyMagic",
      "rating": 4.0,
      "reviewCount": 289
    },
    {
      "id": "1250",
      "name": "TinyWow",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TinyWow",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TinyWow",
      "rating": 4.9,
      "reviewCount": 567
    },
    {
      "id": "1251",
      "name": "TogetherChat",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TogetherChat",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TogetherChat",
      "rating": 4.8,
      "reviewCount": 156
    },
    {
      "id": "1252",
      "name": "TokenCounter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TokenCounter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TokenCounter",
      "rating": 4.9,
      "reviewCount": 477
    },
    {
      "id": "1253",
      "name": "TomeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TomeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TomeAI",
      "rating": 4.9,
      "reviewCount": 901
    },
    {
      "id": "1254",
      "name": "TooltipsAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TooltipsAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TooltipsAI",
      "rating": 5.0,
      "reviewCount": 829
    },
    {
      "id": "1255",
      "name": "ToonCrafter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ToonCrafter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ToonCrafter",
      "rating": 4.7,
      "reviewCount": 985
    },
    {
      "id": "1256",
      "name": "Tracksy",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Tracksy",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Tracksy",
      "rating": 4.6,
      "reviewCount": 955
    },
    {
      "id": "1257",
      "name": "Traivl",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Traivl",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Traivl",
      "rating": 4.9,
      "reviewCount": 855
    },
    {
      "id": "1258",
      "name": "TransPixarAdobe",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TransPixarAdobe",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TransPixarAdobe",
      "rating": 4.7,
      "reviewCount": 751
    },
    {
      "id": "1259",
      "name": "Transvribe",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Transvribe",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Transvribe",
      "rating": 4.5,
      "reviewCount": 391
    },
    {
      "id": "1260",
      "name": "TravelPlanAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TravelPlanAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TravelPlanAI",
      "rating": 4.5,
      "reviewCount": 441
    },
    {
      "id": "1261",
      "name": "TraverseAI%E2%84%A2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TraverseAI%E2%84%A2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TraverseAI%E2%84%A2",
      "rating": 4.8,
      "reviewCount": 985
    },
    {
      "id": "1262",
      "name": "TreeofKnowledgeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TreeofKnowledgeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TreeofKnowledgeAI",
      "rating": 4.4,
      "reviewCount": 755
    },
    {
      "id": "1263",
      "name": "Trellis3D",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Trellis3D",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Trellis3D",
      "rating": 4.2,
      "reviewCount": 136
    },
    {
      "id": "1264",
      "name": "TripoSR",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TripoSR",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TripoSR",
      "rating": 4.8,
      "reviewCount": 922
    },
    {
      "id": "1265",
      "name": "TripplannerAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TripplannerAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TripplannerAI",
      "rating": 4.2,
      "reviewCount": 671
    },
    {
      "id": "1266",
      "name": "TruthGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TruthGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TruthGPT",
      "rating": 4.6,
      "reviewCount": 450
    },
    {
      "id": "1267",
      "name": "TryOffAnyone",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TryOffAnyone",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TryOffAnyone",
      "rating": 4.4,
      "reviewCount": 708
    },
    {
      "id": "1268",
      "name": "TuneFlow",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TuneFlow",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TuneFlow",
      "rating": 4.1,
      "reviewCount": 576
    },
    {
      "id": "1269",
      "name": "Turbo.art",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Turbo.art",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Turbo.art",
      "rating": 4.9,
      "reviewCount": 595
    },
    {
      "id": "1270",
      "name": "TweetEmote",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TweetEmote",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TweetEmote",
      "rating": 4.9,
      "reviewCount": 678
    },
    {
      "id": "1271",
      "name": "TwitterBio",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TwitterBio",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TwitterBio",
      "rating": 4.2,
      "reviewCount": 921
    },
    {
      "id": "1272",
      "name": "Typho",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Typho",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Typho",
      "rating": 4.7,
      "reviewCount": 667
    },
    {
      "id": "1273",
      "name": "TyppoApp",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/TyppoApp",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=TyppoApp",
      "rating": 4.2,
      "reviewCount": 221
    },
    {
      "id": "1274",
      "name": "Uberduck",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Uberduck",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Uberduck",
      "rating": 4.4,
      "reviewCount": 676
    },
    {
      "id": "1275",
      "name": "UltraPixelAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/UltraPixelAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=UltraPixelAI",
      "rating": 4.2,
      "reviewCount": 608
    },
    {
      "id": "1276",
      "name": "Uminal",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Uminal",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Uminal",
      "rating": 4.3,
      "reviewCount": 431
    },
    {
      "id": "1277",
      "name": "UniAnimate",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/UniAnimate",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=UniAnimate",
      "rating": 4.6,
      "reviewCount": 590
    },
    {
      "id": "1278",
      "name": "Unique3D",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Unique3D",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Unique3D",
      "rating": 4.2,
      "reviewCount": 988
    },
    {
      "id": "1279",
      "name": "UniversalTranslatorbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/UniversalTranslatorbyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=UniversalTranslatorbyGoogle",
      "rating": 4.4,
      "reviewCount": 167
    },
    {
      "id": "1280",
      "name": "UnlimitedBG",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/UnlimitedBG",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=UnlimitedBG",
      "rating": 4.5,
      "reviewCount": 406
    },
    {
      "id": "1281",
      "name": "UnrealMeal",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/UnrealMeal",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=UnrealMeal",
      "rating": 4.7,
      "reviewCount": 836
    },
    {
      "id": "1282",
      "name": "UnrealPerson",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/UnrealPerson",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=UnrealPerson",
      "rating": 4.4,
      "reviewCount": 215
    },
    {
      "id": "1283",
      "name": "Unscreen",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Unscreen",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Unscreen",
      "rating": 4.5,
      "reviewCount": 397
    },
    {
      "id": "1284",
      "name": "UnslothAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/UnslothAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=UnslothAI",
      "rating": 4.6,
      "reviewCount": 336
    },
    {
      "id": "1285",
      "name": "UnstuckAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/UnstuckAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=UnstuckAI",
      "rating": 4.7,
      "reviewCount": 926
    },
    {
      "id": "1286",
      "name": "UpcatAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/UpcatAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=UpcatAI",
      "rating": 5.0,
      "reviewCount": 975
    },
    {
      "id": "1287",
      "name": "Upscale-A-Video",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Upscale-A-Video",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Upscale-A-Video",
      "rating": 4.7,
      "reviewCount": 574
    },
    {
      "id": "1288",
      "name": "Upscale.media",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Upscale.media",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Upscale.media",
      "rating": 4.9,
      "reviewCount": 690
    },
    {
      "id": "1289",
      "name": "UpscaleWorkflow",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/UpscaleWorkflow",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=UpscaleWorkflow",
      "rating": 4.2,
      "reviewCount": 701
    },
    {
      "id": "1290",
      "name": "Upscayl",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Upscayl",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Upscayl",
      "rating": 5.0,
      "reviewCount": 283
    },
    {
      "id": "1291",
      "name": "Usetwain",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Usetwain",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Usetwain",
      "rating": 4.7,
      "reviewCount": 908
    },
    {
      "id": "1292",
      "name": "V-JEPAbyMeta",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/V-JEPAbyMeta",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=V-JEPAbyMeta",
      "rating": 4.9,
      "reviewCount": 100
    },
    {
      "id": "1293",
      "name": "V2AbyGoogleDeepMind",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/V2AbyGoogleDeepMind",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=V2AbyGoogleDeepMind",
      "rating": 5.0,
      "reviewCount": 108
    },
    {
      "id": "1294",
      "name": "VASA-1byMicrosoft",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VASA-1byMicrosoft",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VASA-1byMicrosoft",
      "rating": 4.2,
      "reviewCount": 943
    },
    {
      "id": "1295",
      "name": "VLOGGERbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VLOGGERbyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VLOGGERbyGoogle",
      "rating": 4.3,
      "reviewCount": 913
    },
    {
      "id": "1296",
      "name": "Vacation%26%23038%3BTravelChat",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Vacation%26%23038%3BTravelChat",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Vacation%26%23038%3BTravelChat",
      "rating": 5.0,
      "reviewCount": 500
    },
    {
      "id": "1297",
      "name": "ValidatorAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ValidatorAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ValidatorAI",
      "rating": 4.5,
      "reviewCount": 253
    },
    {
      "id": "1298",
      "name": "Vall-E",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Vall-E",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Vall-E",
      "rating": 4.7,
      "reviewCount": 956
    },
    {
      "id": "1299",
      "name": "VanaPortrait",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VanaPortrait",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VanaPortrait",
      "rating": 4.1,
      "reviewCount": 680
    },
    {
      "id": "1300",
      "name": "VarysAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VarysAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VarysAI",
      "rating": 4.9,
      "reviewCount": 124
    },
    {
      "id": "1301",
      "name": "VectorArt.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VectorArt.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VectorArt.ai",
      "rating": 4.6,
      "reviewCount": 108
    },
    {
      "id": "1302",
      "name": "Venngage",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Venngage",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Venngage",
      "rating": 4.7,
      "reviewCount": 615
    },
    {
      "id": "1303",
      "name": "VenturusAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VenturusAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VenturusAI",
      "rating": 4.5,
      "reviewCount": 520
    },
    {
      "id": "1304",
      "name": "Veo2Google",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Veo2Google",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Veo2Google",
      "rating": 4.3,
      "reviewCount": 509
    },
    {
      "id": "1305",
      "name": "VeobyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VeobyGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VeobyGoogle",
      "rating": 4.1,
      "reviewCount": 830
    },
    {
      "id": "1306",
      "name": "VercelAIPlayground",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VercelAIPlayground",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VercelAIPlayground",
      "rating": 4.8,
      "reviewCount": 627
    },
    {
      "id": "1307",
      "name": "Vibrato",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Vibrato",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Vibrato",
      "rating": 4.6,
      "reviewCount": 819
    },
    {
      "id": "1308",
      "name": "Vicuna",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Vicuna",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Vicuna",
      "rating": 4.9,
      "reviewCount": 830
    },
    {
      "id": "1309",
      "name": "VideoPoetbyGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VideoPoetbyGoogle",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VideoPoetbyGoogle",
      "rating": 4.3,
      "reviewCount": 705
    },
    {
      "id": "1310",
      "name": "VideoSealbyMeta",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VideoSealbyMeta",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VideoSealbyMeta",
      "rating": 4.8,
      "reviewCount": 483
    },
    {
      "id": "1311",
      "name": "VideoSummarization",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VideoSummarization",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VideoSummarization",
      "rating": 4.1,
      "reviewCount": 221
    },
    {
      "id": "1312",
      "name": "VideotoSoundsEffects",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VideotoSoundsEffects",
      "category": "Audio",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VideotoSoundsEffects",
      "rating": 4.7,
      "reviewCount": 240
    },
    {
      "id": "1313",
      "name": "Vieutopia",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Vieutopia",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Vieutopia",
      "rating": 4.3,
      "reviewCount": 870
    },
    {
      "id": "1314",
      "name": "ViewCrafter",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ViewCrafter",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ViewCrafter",
      "rating": 4.1,
      "reviewCount": 505
    },
    {
      "id": "1315",
      "name": "Viggle2.0",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Viggle2.0",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Viggle2.0",
      "rating": 4.5,
      "reviewCount": 437
    },
    {
      "id": "1316",
      "name": "ViralPostGenerator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ViralPostGenerator",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ViralPostGenerator",
      "rating": 5.0,
      "reviewCount": 226
    },
    {
      "id": "1317",
      "name": "VisilyAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VisilyAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VisilyAI",
      "rating": 4.3,
      "reviewCount": 272
    },
    {
      "id": "1318",
      "name": "Vizard",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Vizard",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Vizard",
      "rating": 4.6,
      "reviewCount": 619
    },
    {
      "id": "1319",
      "name": "Vizcom",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Vizcom",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Vizcom",
      "rating": 4.2,
      "reviewCount": 484
    },
    {
      "id": "1320",
      "name": "Vocalist.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Vocalist.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Vocalist.ai",
      "rating": 4.2,
      "reviewCount": 585
    },
    {
      "id": "1321",
      "name": "VoiceAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VoiceAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VoiceAI",
      "rating": 4.1,
      "reviewCount": 899
    },
    {
      "id": "1322",
      "name": "VoiceControlforChatGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VoiceControlforChatGPT",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VoiceControlforChatGPT",
      "rating": 4.5,
      "reviewCount": 553
    },
    {
      "id": "1323",
      "name": "VoiceEnginebyOpenAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VoiceEnginebyOpenAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VoiceEnginebyOpenAI",
      "rating": 4.2,
      "reviewCount": 789
    },
    {
      "id": "1324",
      "name": "VoiceMaker",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VoiceMaker",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VoiceMaker",
      "rating": 4.3,
      "reviewCount": 872
    },
    {
      "id": "1325",
      "name": "VoiceboxbyMeta",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VoiceboxbyMeta",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VoiceboxbyMeta",
      "rating": 4.9,
      "reviewCount": 317
    },
    {
      "id": "1326",
      "name": "VoidEditor",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VoidEditor",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VoidEditor",
      "rating": 4.7,
      "reviewCount": 849
    },
    {
      "id": "1327",
      "name": "VoyagerMinecraftAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/VoyagerMinecraftAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=VoyagerMinecraftAI",
      "rating": 4.1,
      "reviewCount": 194
    },
    {
      "id": "1328",
      "name": "W.A.L.T",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/W.A.L.T",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=W.A.L.T",
      "rating": 5.0,
      "reviewCount": 299
    },
    {
      "id": "1329",
      "name": "WNR.AI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WNR.AI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WNR.AI",
      "rating": 4.7,
      "reviewCount": 490
    },
    {
      "id": "1330",
      "name": "WTFDoesThisCompanyDo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WTFDoesThisCompanyDo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WTFDoesThisCompanyDo",
      "rating": 4.6,
      "reviewCount": 874
    },
    {
      "id": "1331",
      "name": "Wan2.1AIVideo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Wan2.1AIVideo",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Wan2.1AIVideo",
      "rating": 4.3,
      "reviewCount": 562
    },
    {
      "id": "1332",
      "name": "WandrrAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WandrrAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WandrrAI",
      "rating": 4.1,
      "reviewCount": 507
    },
    {
      "id": "1333",
      "name": "WatchNow",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WatchNow",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WatchNow",
      "rating": 4.1,
      "reviewCount": 450
    },
    {
      "id": "1334",
      "name": "Wear-Any-Way",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Wear-Any-Way",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Wear-Any-Way",
      "rating": 4.7,
      "reviewCount": 364
    },
    {
      "id": "1335",
      "name": "Web3Summary",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Web3Summary",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Web3Summary",
      "rating": 4.2,
      "reviewCount": 797
    },
    {
      "id": "1336",
      "name": "WebChatGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WebChatGPT",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WebChatGPT",
      "rating": 4.5,
      "reviewCount": 596
    },
    {
      "id": "1337",
      "name": "WebCopilotAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WebCopilotAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WebCopilotAI",
      "rating": 4.3,
      "reviewCount": 894
    },
    {
      "id": "1338",
      "name": "WebsimAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WebsimAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WebsimAI",
      "rating": 4.8,
      "reviewCount": 179
    },
    {
      "id": "1339",
      "name": "WestWorldSimulation",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WestWorldSimulation",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WestWorldSimulation",
      "rating": 4.7,
      "reviewCount": 390
    },
    {
      "id": "1340",
      "name": "WhatBeatsRock",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WhatBeatsRock",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WhatBeatsRock",
      "rating": 4.9,
      "reviewCount": 876
    },
    {
      "id": "1341",
      "name": "WhiskGoogle",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WhiskGoogle",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WhiskGoogle",
      "rating": 4.0,
      "reviewCount": 427
    },
    {
      "id": "1342",
      "name": "WhisperLargeV3Turbo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WhisperLargeV3Turbo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WhisperLargeV3Turbo",
      "rating": 4.9,
      "reviewCount": 409
    },
    {
      "id": "1343",
      "name": "WhisperOpenAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WhisperOpenAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WhisperOpenAI",
      "rating": 4.3,
      "reviewCount": 467
    },
    {
      "id": "1344",
      "name": "WhisperTimestamped",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WhisperTimestamped",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WhisperTimestamped",
      "rating": 4.4,
      "reviewCount": 561
    },
    {
      "id": "1345",
      "name": "WhisperWebGPU",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WhisperWebGPU",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WhisperWebGPU",
      "rating": 4.7,
      "reviewCount": 715
    },
    {
      "id": "1346",
      "name": "WildGaussians",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WildGaussians",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WildGaussians",
      "rating": 4.7,
      "reviewCount": 787
    },
    {
      "id": "1347",
      "name": "Windsor",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Windsor",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Windsor",
      "rating": 4.1,
      "reviewCount": 313
    },
    {
      "id": "1348",
      "name": "Wisecut",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Wisecut",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Wisecut",
      "rating": 4.9,
      "reviewCount": 638
    },
    {
      "id": "1349",
      "name": "WistAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WistAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WistAI",
      "rating": 4.4,
      "reviewCount": 643
    },
    {
      "id": "1350",
      "name": "WithEden",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WithEden",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WithEden",
      "rating": 4.8,
      "reviewCount": 773
    },
    {
      "id": "1351",
      "name": "WoebotHealth",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WoebotHealth",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WoebotHealth",
      "rating": 4.1,
      "reviewCount": 687
    },
    {
      "id": "1352",
      "name": "Wonderplan",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Wonderplan",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Wonderplan",
      "rating": 4.5,
      "reviewCount": 844
    },
    {
      "id": "1353",
      "name": "WorkHunty",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WorkHunty",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WorkHunty",
      "rating": 4.6,
      "reviewCount": 420
    },
    {
      "id": "1354",
      "name": "WorldLabs",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WorldLabs",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WorldLabs",
      "rating": 4.6,
      "reviewCount": 417
    },
    {
      "id": "1355",
      "name": "WriteGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WriteGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WriteGPT",
      "rating": 4.4,
      "reviewCount": 815
    },
    {
      "id": "1356",
      "name": "WrpUp",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/WrpUp",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=WrpUp",
      "rating": 4.2,
      "reviewCount": 871
    },
    {
      "id": "1357",
      "name": "X-Portrait2",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/X-Portrait2",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=X-Portrait2",
      "rating": 4.9,
      "reviewCount": 385
    },
    {
      "id": "1358",
      "name": "XtoVoice",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/XtoVoice",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=XtoVoice",
      "rating": 4.9,
      "reviewCount": 502
    },
    {
      "id": "1359",
      "name": "Yarn.co",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Yarn.co",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Yarn.co",
      "rating": 4.1,
      "reviewCount": 289
    },
    {
      "id": "1360",
      "name": "Yip",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Yip",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Yip",
      "rating": 4.6,
      "reviewCount": 369
    },
    {
      "id": "1361",
      "name": "You.com",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/You.com",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=You.com",
      "rating": 4.6,
      "reviewCount": 573
    },
    {
      "id": "1362",
      "name": "YouTubeSummarized",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/YouTubeSummarized",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=YouTubeSummarized",
      "rating": 4.1,
      "reviewCount": 583
    },
    {
      "id": "1363",
      "name": "YourDoctorAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/YourDoctorAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=YourDoctorAI",
      "rating": 4.1,
      "reviewCount": 588
    },
    {
      "id": "1364",
      "name": "Yoursearch.ai",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Yoursearch.ai",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Yoursearch.ai",
      "rating": 4.4,
      "reviewCount": 792
    },
    {
      "id": "1365",
      "name": "YuEAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/YuEAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=YuEAI",
      "rating": 4.7,
      "reviewCount": 110
    },
    {
      "id": "1366",
      "name": "Zaplingo",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Zaplingo",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Zaplingo",
      "rating": 4.6,
      "reviewCount": 567
    },
    {
      "id": "1367",
      "name": "ZeroscopeAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ZeroscopeAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ZeroscopeAI",
      "rating": 4.3,
      "reviewCount": 294
    },
    {
      "id": "1368",
      "name": "ZonosAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/ZonosAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ZonosAI",
      "rating": 4.3,
      "reviewCount": 658
    },
    {
      "id": "1369",
      "name": "Zyng",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/Zyng",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Zyng",
      "rating": 4.5,
      "reviewCount": 863
    },
    {
      "id": "1370",
      "name": "bardeenAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/bardeenAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=bardeenAI",
      "rating": 4.6,
      "reviewCount": 650
    },
    {
      "id": "1371",
      "name": "campAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/campAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=campAI",
      "rating": 4.7,
      "reviewCount": 549
    },
    {
      "id": "1372",
      "name": "iAsk.AI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/iAsk.AI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=iAsk.AI",
      "rating": 4.5,
      "reviewCount": 594
    },
    {
      "id": "1373",
      "name": "iChatWithGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/iChatWithGPT",
      "category": "Chatbot",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=iChatWithGPT",
      "rating": 4.6,
      "reviewCount": 184
    },
    {
      "id": "1374",
      "name": "iMeanShopping",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/iMeanShopping",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=iMeanShopping",
      "rating": 4.1,
      "reviewCount": 542
    },
    {
      "id": "1375",
      "name": "mRelief",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/mRelief",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=mRelief",
      "rating": 4.7,
      "reviewCount": 735
    },
    {
      "id": "1376",
      "name": "nanoGPT",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/nanoGPT",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=nanoGPT",
      "rating": 4.1,
      "reviewCount": 338
    },
    {
      "id": "1377",
      "name": "o3byOpenAI",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/o3byOpenAI",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=o3byOpenAI",
      "rating": 4.7,
      "reviewCount": 187
    },
    {
      "id": "1378",
      "name": "promptoMANIA",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/promptoMANIA",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=promptoMANIA",
      "rating": 4.5,
      "reviewCount": 856
    },
    {
      "id": "1379",
      "name": "tldraw",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/tldraw",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=tldraw",
      "rating": 4.8,
      "reviewCount": 374
    },
    {
      "id": "1380",
      "name": "xAI%28ElonMusk%29",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/xAI%28ElonMusk%29",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=xAI%28ElonMusk%29",
      "rating": 4.8,
      "reviewCount": 488
    },
    {
      "id": "1381",
      "name": "zero1cine",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.aixploria.com/out/zero1cine",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=zero1cine",
      "rating": 4.8,
      "reviewCount": 291
    },
    {
      "id": "1383",
      "name": "ai-image-generator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.insmind.com/ai-image-generator/",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-image-generator",
      "rating": 4.7,
      "reviewCount": 312
    },
    {
      "id": "1384",
      "name": "ai-logo-generator",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.insmind.com/ai-logo-generator/",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-logo-generator",
      "rating": 5.0,
      "reviewCount": 558
    },
    {
      "id": "1387",
      "name": "background-changer",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.pokecut.com/tools/background-changer",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=background-changer",
      "rating": 4.5,
      "reviewCount": 251
    },
    {
      "id": "1388",
      "name": "blur-background",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.pokecut.com/tools/blur-background",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=blur-background",
      "rating": 4.2,
      "reviewCount": 383
    },
    {
      "id": "1390",
      "name": "spygpt",
      "description": "AI tool for enhancing productivity or creativity.",
      "url": "https://www.spyfu.com/spygpt",
      "category": "Miscellaneous",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=spygpt",
      "rating": 4.2,
      "reviewCount": 716
    }
  // ... (add more tools with random/default ratings and reviewCount)
]; 