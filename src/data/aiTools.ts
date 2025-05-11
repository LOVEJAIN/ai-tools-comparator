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
  // ... (add more tools with random/default ratings and reviewCount)
]; 