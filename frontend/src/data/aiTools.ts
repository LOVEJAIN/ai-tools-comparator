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

export const aiTools: AITool[] =
  [
    {
      "id": "1",
      "name": "OpenAI API",
      "description": "OpenAI's API provides access to GPT-3 and GPT-4 models, which performs a wide variety of natural language tasks, and Codex, which translates natural language to code.",
      "url": "https://openai.com/api/",
      "category": "Models",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=OpenAI+API",
      "rating": 4.9,
      "reviewCount": 1250
    },
    {
      "id": "2",
      "name": "Gopher",
      "description": "Gopher by DeepMind is a 280 billion parameter language model designed for advanced natural language processing tasks.",
      "url": "https://deepmind.com/",
      "category": "Models",
      "imageUrl": "https://dummyimage.com/600x400/1a73e8/fff&text=Gopher",
      "rating": 4.7,
      "reviewCount": 324
    },
    {
      "id": "3",
      "name": "OPT",
      "description": "Open Pretrained Transformers (OPT) by Facebook is a suite of decoder-only pre-trained transformers for various language tasks.",
      "url": "https://ai.facebook.com/",
      "category": "Models",
      "imageUrl": "https://dummyimage.com/600x400/1877f2/fff&text=OPT",
      "rating": 4.5,
      "reviewCount": 189
    },
    {
      "id": "4",
      "name": "Bloom",
      "description": "BLOOM by Hugging Face is a model similar to GPT-3 that has been trained on 46 different languages and 13 programming languages.",
      "url": "https://huggingface.co/bigscience/bloom",
      "category": "Models",
      "imageUrl": "https://dummyimage.com/600x400/ff6b35/fff&text=Bloom",
      "rating": 4.6,
      "reviewCount": 567
    },
    {
      "id": "5",
      "name": "LLaMA",
      "description": "A foundational, 65-billion-parameter large language model by Meta designed for research and development.",
      "url": "https://ai.meta.com/",
      "category": "Models",
      "imageUrl": "https://dummyimage.com/600x400/0084ff/fff&text=LLaMA",
      "rating": 4.4,
      "reviewCount": 423
    },
    {
      "id": "6",
      "name": "Llama 2",
      "description": "The next generation of Meta's open source large language model with enhanced capabilities and performance.",
      "url": "https://ai.meta.com/llama/",
      "category": "Models",
      "imageUrl": "https://dummyimage.com/600x400/0084ff/fff&text=Llama+2",
      "rating": 4.7,
      "reviewCount": 892
    },
    {
      "id": "7",
      "name": "Claude 3",
      "description": "Talk to Claude, an AI assistant from Anthropic designed for helpful, harmless, and honest conversations.",
      "url": "https://claude.ai/",
      "category": "Models",
      "imageUrl": "https://dummyimage.com/600x400/d4a574/fff&text=Claude+3",
      "rating": 4.8,
      "reviewCount": 1156
    },
    {
      "id": "8",
      "name": "Vicuna-13B",
      "description": "An open-source chatbot trained by fine-tuning LLaMA on user-shared conversations collected from ShareGPT.",
      "url": "https://vicuna.lmsys.org/",
      "category": "Models",
      "imageUrl": "https://dummyimage.com/600x400/6b46c1/fff&text=Vicuna-13B",
      "rating": 4.3,
      "reviewCount": 278
    },
    {
      "id": "9",
      "name": "Stable Beluga",
      "description": "A finetuned LLaMA 65B model optimized for enhanced performance and stability in various tasks.",
      "url": "https://stability.ai/",
      "category": "Models",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Stable+Beluga",
      "rating": 4.2,
      "reviewCount": 167
    },
    {
      "id": "10",
      "name": "Stable Beluga 2",
      "description": "A finetuned LLaMA2 70B model with improved capabilities and performance for complex language tasks.",
      "url": "https://stability.ai/",
      "category": "Models",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Stable+Beluga+2",
      "rating": 4.4,
      "reviewCount": 234
    },
    {
      "id": "11",
      "name": "GPT-4o Mini",
      "description": "Advancing cost-efficient intelligence with OpenAI's compact yet powerful language model for various applications.",
      "url": "https://openai.com/",
      "category": "Models",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=GPT-4o+Mini",
      "rating": 4.6,
      "reviewCount": 789
    },
    {
      "id": "12",
      "name": "ChatGPT",
      "description": "ChatGPT by OpenAI is a large language model that interacts in a conversational way for various tasks.",
      "url": "https://chat.openai.com/",
      "category": "Chatbots",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ChatGPT",
      "rating": 4.8,
      "reviewCount": 2345
    },
    {
      "id": "13",
      "name": "Bing Chat",
      "description": "A conversational AI language model powered by Microsoft Bing for intelligent search and chat interactions.",
      "url": "https://www.bing.com/chat",
      "category": "Chatbots",
      "imageUrl": "https://dummyimage.com/600x400/0078d4/fff&text=Bing+Chat",
      "rating": 4.5,
      "reviewCount": 1567
    },
    {
      "id": "14",
      "name": "Gemini",
      "description": "An experimental AI chatbot by Google, powered by advanced language models for natural conversations.",
      "url": "https://gemini.google.com/",
      "category": "Chatbots",
      "imageUrl": "https://dummyimage.com/600x400/4285f4/fff&text=Gemini",
      "rating": 4.4,
      "reviewCount": 987
    },
    {
      "id": "15",
      "name": "Character.AI",
      "description": "Character.AI lets you create characters and chat to them, enabling creative roleplay and storytelling.",
      "url": "https://character.ai/",
      "category": "Chatbots",
      "imageUrl": "https://dummyimage.com/600x400/8b5cf6/fff&text=Character.AI",
      "rating": 4.6,
      "reviewCount": 1234
    },
    {
      "id": "16",
      "name": "ChatPDF",
      "description": "Chat with any PDF document using AI to extract information and get answers from your documents.",
      "url": "https://www.chatpdf.com/",
      "category": "Chatbots",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=ChatPDF",
      "rating": 4.7,
      "reviewCount": 856
    },
    {
      "id": "17",
      "name": "ChatSonic",
      "description": "An AI-powered assistant that enables text and image creation with advanced conversational capabilities.",
      "url": "https://writesonic.com/chatsonic",
      "category": "Chatbots",
      "imageUrl": "https://dummyimage.com/600x400/6366f1/fff&text=ChatSonic",
      "rating": 4.5,
      "reviewCount": 623
    },
    {
      "id": "18",
      "name": "Phind",
      "description": "Phind is an intelligent search engine and assistant for programmers with web browsing capabilities.",
      "url": "https://www.phind.com/",
      "category": "Chatbots",
      "imageUrl": "https://dummyimage.com/600x400/10b981/fff&text=Phind",
      "rating": 4.6,
      "reviewCount": 445
    },
    {
      "id": "19",
      "name": "Tiledesk",
      "description": "Open-source LLM-enabled no-code chatbot development framework for designing and launching conversational flows.",
      "url": "https://tiledesk.com/",
      "category": "Chatbots",
      "imageUrl": "https://dummyimage.com/600x400/f59e0b/fff&text=Tiledesk",
      "rating": 4.3,
      "reviewCount": 234
    },
    {
      "id": "20",
      "name": "AICamp",
      "description": "ChatGPT for Teams - collaborative AI workspace for team productivity and enhanced communication.",
      "url": "https://aicamp.so/",
      "category": "Chatbots",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=AICamp",
      "rating": 4.4,
      "reviewCount": 312
    },
    {
      "id": "21",
      "name": "Kazimir.ai",
      "description": "A search engine designed specifically to search AI-generated images with advanced filtering capabilities.",
      "url": "https://kazimir.ai/",
      "category": "Search engines",
      "imageUrl": "https://dummyimage.com/600x400/1f2937/fff&text=Kazimir.ai",
      "rating": 4.2,
      "reviewCount": 156
    },
    {
      "id": "22",
      "name": "Perplexity AI",
      "description": "AI powered search tools that provide direct answers with citations from reliable sources.",
      "url": "https://www.perplexity.ai/",
      "category": "Search engines",
      "imageUrl": "https://dummyimage.com/600x400/374151/fff&text=Perplexity+AI",
      "rating": 4.7,
      "reviewCount": 892
    },
    {
      "id": "23",
      "name": "Metaphor",
      "description": "Language model powered search engine that understands natural language queries for better results.",
      "url": "https://metaphor.systems/",
      "category": "Search engines",
      "imageUrl": "https://dummyimage.com/600x400/9333ea/fff&text=Metaphor",
      "rating": 4.4,
      "reviewCount": 367
    },
    {
      "id": "24",
      "name": "You.com",
      "description": "A search engine built on AI that provides users with a customized search experience while keeping their data 100% private.",
      "url": "https://you.com/",
      "category": "Search engines",
      "imageUrl": "https://dummyimage.com/600x400/2563eb/fff&text=You.com",
      "rating": 4.3,
      "reviewCount": 534
    },
    {
      "id": "25",
      "name": "Komo AI",
      "description": "An AI based search engine which provides quick and short answers to user queries efficiently.",
      "url": "https://komo.ai/",
      "category": "Search engines",
      "imageUrl": "https://dummyimage.com/600x400/ec4899/fff&text=Komo+AI",
      "rating": 4.1,
      "reviewCount": 223
    },
    {
      "id": "26",
      "name": "Telborg",
      "description": "AI for Climate Research, with data exclusively from governments, international institutions and companies.",
      "url": "https://telborg.com/",
      "category": "Search engines",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Telborg",
      "rating": 4.5,
      "reviewCount": 178
    },
    {
      "id": "27",
      "name": "MemFree",
      "description": "Open Source Hybrid AI Search Engine, instantly get accurate answers from the Internet, Bookmarks, Notes, and Docs.",
      "url": "https://www.memfree.me/",
      "category": "Search engines",
      "imageUrl": "https://dummyimage.com/600x400/7c2d12/fff&text=MemFree",
      "rating": 4.6,
      "reviewCount": 289
    },
    {
      "id": "28",
      "name": "privateGPT",
      "description": "Ask questions to your documents without an internet connection, using the power of LLMs for privacy-focused document interaction.",
      "url": "https://github.com/imartinez/privateGPT",
      "category": "Search engines",
      "imageUrl": "https://dummyimage.com/600x400/1f2937/fff&text=privateGPT",
      "rating": 4.4,
      "reviewCount": 445
    },
    {
      "id": "29",
      "name": "quivr",
      "description": "Dump all your files and chat with it using your generative AI second brain using LLMs & embeddings.",
      "url": "https://www.quivr.app/",
      "category": "Search engines",
      "imageUrl": "https://dummyimage.com/600x400/6366f1/fff&text=quivr",
      "rating": 4.3,
      "reviewCount": 356
    },
    {
      "id": "30",
      "name": "Jasper",
      "description": "Create content faster with artificial intelligence - comprehensive AI writing assistant for marketing and business content.",
      "url": "https://www.jasper.ai/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=Jasper",
      "rating": 4.7,
      "reviewCount": 1567
    },
    {
      "id": "31",
      "name": "Compose AI",
      "description": "Compose AI is a free Chrome extension that cuts your writing time by 40% with AI-powered autocompletion.",
      "url": "https://www.compose.ai/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/2563eb/fff&text=Compose+AI",
      "rating": 4.5,
      "reviewCount": 892
    },
    {
      "id": "32",
      "name": "Rytr",
      "description": "Rytr is an AI writing assistant that helps you create high-quality content for various purposes quickly.",
      "url": "https://rytr.me/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=Rytr",
      "rating": 4.4,
      "reviewCount": 734
    },
    {
      "id": "33",
      "name": "wordtune",
      "description": "Personal writing assistant that helps you rewrite and improve your sentences for better clarity and impact.",
      "url": "https://www.wordtune.com/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/0ea5e9/fff&text=wordtune",
      "rating": 4.6,
      "reviewCount": 1023
    },
    {
      "id": "34",
      "name": "HyperWrite",
      "description": "HyperWrite helps you write with confidence and get your work done faster from idea to final draft.",
      "url": "https://hyperwriteai.com/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/f59e0b/fff&text=HyperWrite",
      "rating": 4.5,
      "reviewCount": 567
    },
    {
      "id": "35",
      "name": "Nexus AI",
      "description": "Nexus AI is a generative cutting-edge AI Platform for writing, coding, voiceovers, research, image creation and beyond.",
      "url": "https://mynexusai.com",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/8b5cf6/fff&text=Nexus+AI",
      "rating": 4.3,
      "reviewCount": 345
    },
    {
      "id": "36",
      "name": "Moonbeam",
      "description": "Better blogs in a fraction of the time - AI-powered blog writing assistant for content creators.",
      "url": "https://www.gomoonbeam.com/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/fbbf24/fff&text=Moonbeam",
      "rating": 4.4,
      "reviewCount": 412
    },
    {
      "id": "37",
      "name": "copy.ai",
      "description": "Write better marketing copy and content with AI - comprehensive copywriting tool for businesses.",
      "url": "https://www.copy.ai/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/10b981/fff&text=copy.ai",
      "rating": 4.6,
      "reviewCount": 1234
    },
    {
      "id": "38",
      "name": "Anyword",
      "description": "Anyword's AI writing assistant generates effective copy for anyone with data-driven insights.",
      "url": "https://anyword.com/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/ef4444/fff&text=Anyword",
      "rating": 4.5,
      "reviewCount": 678
    },
    {
      "id": "39",
      "name": "Contenda",
      "description": "Create the content your audience wants, from content you've already made - repurpose existing content efficiently.",
      "url": "https://contenda.co/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/6366f1/fff&text=Contenda",
      "rating": 4.2,
      "reviewCount": 289
    },
    {
      "id": "40",
      "name": "Hypotenuse AI",
      "description": "Turn a few keywords into original, insightful articles, product descriptions and social media copy.",
      "url": "https://www.hypotenuse.ai/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=Hypotenuse+AI",
      "rating": 4.3,
      "reviewCount": 456
    },
    {
      "id": "41",
      "name": "Lavender",
      "description": "Lavender email assistant helps you get more replies in less time with AI-powered email optimization.",
      "url": "https://www.lavender.ai/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/a855f7/fff&text=Lavender",
      "rating": 4.7,
      "reviewCount": 623
    },
    {
      "id": "42",
      "name": "Lex",
      "description": "A word processor with artificial intelligence baked in, so you can write faster and more effectively.",
      "url": "https://lex.page/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/1f2937/fff&text=Lex",
      "rating": 4.4,
      "reviewCount": 367
    },
    {
      "id": "43",
      "name": "Jenni",
      "description": "Jenni is the ultimate writing assistant that saves you hours of ideation and writing time for academic and professional work.",
      "url": "https://jenni.ai/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Jenni",
      "rating": 4.6,
      "reviewCount": 789
    },
    {
      "id": "44",
      "name": "LAIKA",
      "description": "LAIKA trains an artificial intelligence on your own writing to create a personalised creative partner-in-crime.",
      "url": "https://www.writewithlaika.com/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=LAIKA",
      "rating": 4.2,
      "reviewCount": 234
    },
    {
      "id": "45",
      "name": "QuillBot",
      "description": "AI-powered paraphrasing tool that helps rewrite and improve your text while maintaining original meaning.",
      "url": "https://quillbot.com/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/2563eb/fff&text=QuillBot",
      "rating": 4.8,
      "reviewCount": 1876
    },
    {
      "id": "46",
      "name": "Postwise",
      "description": "Write tweets, schedule posts and grow your following using AI-powered social media management.",
      "url": "https://postwise.ai/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/1da1f2/fff&text=Postwise",
      "rating": 4.3,
      "reviewCount": 445
    },
    {
      "id": "47",
      "name": "Copysmith",
      "description": "AI content creation solution for Enterprise & eCommerce with scalable copywriting capabilities.",
      "url": "https://copysmith.ai/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/f59e0b/fff&text=Copysmith",
      "rating": 4.4,
      "reviewCount": 556
    },
    {
      "id": "48",
      "name": "Yomu",
      "description": "AI writing assistant for students and academics, helping with research papers and academic writing.",
      "url": "https://www.yomu.ai/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/8b5cf6/fff&text=Yomu",
      "rating": 4.5,
      "reviewCount": 378
    },
    {
      "id": "49",
      "name": "Listomatic",
      "description": "Free and fully configurable real estate listing description generator powered by AI technology.",
      "url": "https://listomatic.ai/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/10b981/fff&text=Listomatic",
      "rating": 4.1,
      "reviewCount": 167
    },
    {
      "id": "50",
      "name": "Quick Creator",
      "description": "SEO-Optimized Blog platform powered by AI for creating high-quality, search-friendly content.",
      "url": "https://quickcreator.io/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/ef4444/fff&text=Quick+Creator",
      "rating": 4.3,
      "reviewCount": 289
    },

    {
      "id": "51",
      "name": "Dittto.ai",
      "description": "Fix your hero copy with an AI trained on top SaaS websites for better conversion optimization.",
      "url": "https://dittto.ai/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/6366f1/fff&text=Dittto.ai",
      "rating": 4.2,
      "reviewCount": 198
    },
    {
      "id": "52",
      "name": "PulsePost",
      "description": "AI writer that Auto Publishes to your own website, streamlining content creation and publishing workflow.",
      "url": "https://pulsepost.io/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/ec4899/fff&text=PulsePost",
      "rating": 4.3,
      "reviewCount": 156
    },
    {
      "id": "53",
      "name": "Shy Editor",
      "description": "A modern AI-assisted writing environment for all types of prose with intuitive interface and smart suggestions.",
      "url": "https://shyeditor.com/",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/7c2d12/fff&text=Shy+Editor",
      "rating": 4.1,
      "reviewCount": 123
    },
    {
      "id": "54",
      "name": "DeepL Write",
      "description": "AI writing tool that improves written communication with advanced language processing and style enhancement.",
      "url": "https://www.deepl.com/write",
      "category": "Writing assistants",
      "imageUrl": "https://dummyimage.com/600x400/0f172a/fff&text=DeepL+Write",
      "rating": 4.6,
      "reviewCount": 892
    },
    {
      "id": "55",
      "name": "Gist AI",
      "description": "ChatGPT-powered free Summarizer for Websites, YouTube and PDF documents with comprehensive analysis.",
      "url": "https://gist.ai/",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Gist+AI",
      "rating": 4.5,
      "reviewCount": 567
    },
    {
      "id": "56",
      "name": "WebChatGPT",
      "description": "Augment your ChatGPT prompts with relevant results from the web for enhanced and up-to-date responses.",
      "url": "https://chrome.google.com/webstore",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/2563eb/fff&text=WebChatGPT",
      "rating": 4.7,
      "reviewCount": 1234
    },
    {
      "id": "57",
      "name": "GPT for Sheets and Docs",
      "description": "ChatGPT extension for Google Sheets and Google Docs to integrate AI capabilities into your workflow.",
      "url": "https://workspace.google.com/marketplace",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/34a853/fff&text=GPT+Sheets+Docs",
      "rating": 4.6,
      "reviewCount": 987
    },
    {
      "id": "58",
      "name": "YouTube Summary with ChatGPT",
      "description": "Use ChatGPT to summarize YouTube videos quickly and efficiently for better content consumption.",
      "url": "https://chrome.google.com/webstore",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/ff0000/fff&text=YouTube+Summary",
      "rating": 4.4,
      "reviewCount": 756
    },
    {
      "id": "59",
      "name": "ChatGPT Prompt Genius",
      "description": "Discover, share, import, and use the best prompts for ChatGPT & save your chat history locally.",
      "url": "https://chrome.google.com/webstore",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=Prompt+Genius",
      "rating": 4.5,
      "reviewCount": 623
    },
    {
      "id": "60",
      "name": "ChatGPT for Search Engines",
      "description": "Display ChatGPT response alongside Google, Bing, and DuckDuckGo search results for enhanced search experience.",
      "url": "https://chrome.google.com/webstore",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/1a73e8/fff&text=ChatGPT+Search",
      "rating": 4.3,
      "reviewCount": 445
    },
    {
      "id": "61",
      "name": "ShareGPT",
      "description": "Share your ChatGPT conversations and explore conversations shared by others in the community.",
      "url": "https://sharegpt.com/",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/10b981/fff&text=ShareGPT",
      "rating": 4.2,
      "reviewCount": 334
    },
    {
      "id": "62",
      "name": "Merlin",
      "description": "ChatGPT Plus extension on all websites for seamless AI assistance across the web.",
      "url": "https://merlin.foyer.work/",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/8b5cf6/fff&text=Merlin",
      "rating": 4.6,
      "reviewCount": 789
    },
    {
      "id": "63",
      "name": "ChatGPT Writer",
      "description": "Generate entire emails and messages using ChatGPT AI for efficient communication.",
      "url": "https://chatgptwriter.ai/",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=ChatGPT+Writer",
      "rating": 4.4,
      "reviewCount": 567
    },
    {
      "id": "64",
      "name": "ChatGPT for Jupyter",
      "description": "Add various helper functions in Jupyter Notebooks and Jupyter Lab, powered by ChatGPT.",
      "url": "https://github.com/",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/f97316/fff&text=ChatGPT+Jupyter",
      "rating": 4.3,
      "reviewCount": 278
    },
    {
      "id": "65",
      "name": "editGPT",
      "description": "Easily proofread, edit, and track changes to your content in chatGPT with professional editing tools.",
      "url": "https://www.editgpt.app/",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/6366f1/fff&text=editGPT",
      "rating": 4.5,
      "reviewCount": 412
    },
    {
      "id": "66",
      "name": "Chatbot UI",
      "description": "An open source ChatGPT UI for creating custom chat interfaces with enhanced functionality.",
      "url": "https://github.com/mckaywrigley/chatbot-ui",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/1f2937/fff&text=Chatbot+UI",
      "rating": 4.4,
      "reviewCount": 356
    },
    {
      "id": "67",
      "name": "Forefront",
      "description": "A Better ChatGPT Experience with enhanced features and improved user interface.",
      "url": "https://www.forefront.ai/",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/0ea5e9/fff&text=Forefront",
      "rating": 4.3,
      "reviewCount": 289
    },
    {
      "id": "68",
      "name": "AI Character for GPT",
      "description": "One click to curate AI chatbot, including ChatGPT, Google Bard to improve AI responses.",
      "url": "https://aicharacter.org/",
      "category": "ChatGPT extensions",
      "imageUrl": "https://dummyimage.com/600x400/a855f7/fff&text=AI+Character",
      "rating": 4.2,
      "reviewCount": 234
    },
    {
      "id": "69",
      "name": "Mem",
      "description": "Mem is the world's first AI-powered workspace that's personalized to you. Amplify your creativity, automate the mundane, and stay organized automatically.",
      "url": "https://mem.ai/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=Mem",
      "rating": 4.6,
      "reviewCount": 734
    },
    {
      "id": "70",
      "name": "Taskade",
      "description": "Build, train, and deploy autonomous AI agents for task management, team collaboration, and workflow automation—all within a unified workspace.",
      "url": "https://www.taskade.com/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/10b981/fff&text=Taskade",
      "rating": 4.5,
      "reviewCount": 892
    },
    {
      "id": "71",
      "name": "Notion AI",
      "description": "Write better, more efficient notes and docs with AI-powered assistance integrated into Notion workspace.",
      "url": "https://www.notion.so/product/ai",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=Notion+AI",
      "rating": 4.7,
      "reviewCount": 1567
    },
    {
      "id": "72",
      "name": "Nekton AI",
      "description": "Automate your workflows with AI. Describe your workflows step by step in plain language.",
      "url": "https://nekton.ai/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Nekton+AI",
      "rating": 4.3,
      "reviewCount": 345
    },
    {
      "id": "73",
      "name": "Elephas",
      "description": "Personal AI writing assistant for the Mac with seamless integration across all Mac applications.",
      "url": "https://elephas.app/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/6b7280/fff&text=Elephas",
      "rating": 4.4,
      "reviewCount": 456
    },
    {
      "id": "74",
      "name": "Lemmy",
      "description": "Autonomous AI Assistant for Work that helps streamline daily tasks and improve productivity.",
      "url": "https://lemmy.ai/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/f59e0b/fff&text=Lemmy",
      "rating": 4.2,
      "reviewCount": 267
    },
    {
      "id": "75",
      "name": "Google Sheets Formula Generator",
      "description": "Forget about frustrating formulas in Google Sheets with AI-powered formula generation and explanation.",
      "url": "https://workspace.google.com/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/34a853/fff&text=Sheets+Formula",
      "rating": 4.5,
      "reviewCount": 623
    },
    {
      "id": "76",
      "name": "CreateEasily",
      "description": "Free speech-to-text tool for content creators that accurately transcribes audio & video files up to 2GB.",
      "url": "https://createeasily.com/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/ec4899/fff&text=CreateEasily",
      "rating": 4.3,
      "reviewCount": 389
    },
    {
      "id": "77",
      "name": "aiPDF",
      "description": "The most advanced AI document assistant for intelligent PDF processing and analysis.",
      "url": "https://aipdf.ai/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=aiPDF",
      "rating": 4.6,
      "reviewCount": 567
    },
    {
      "id": "78",
      "name": "Summary With AI",
      "description": "Summarize any long PDF with AI. Comprehensive summaries using information from all pages of a document.",
      "url": "https://summarywith.ai/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/2563eb/fff&text=Summary+AI",
      "rating": 4.4,
      "reviewCount": 445
    },
    {
      "id": "79",
      "name": "Emilio",
      "description": "Stop drowning in emails - Emilio prioritizes and automates your email, saving 60% of your time.",
      "url": "https://getemil.io/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/1da1f2/fff&text=Emilio",
      "rating": 4.5,
      "reviewCount": 678
    },
    {
      "id": "80",
      "name": "Pieces",
      "description": "AI-enabled productivity tool designed to supercharge developer efficiency, with an on-device copilot that helps capture, enrich, and reuse useful materials.",
      "url": "https://pieces.app/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/8b5cf6/fff&text=Pieces",
      "rating": 4.7,
      "reviewCount": 789
    },
    {
      "id": "81",
      "name": "Huntr AI Resume Builder",
      "description": "Craft the perfect resume, with a little help from AI. Huntr's customizable AI Resume Builder will help you craft a well-written, ATS-friendly resume.",
      "url": "https://huntr.co/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Huntr+Resume",
      "rating": 4.6,
      "reviewCount": 892
    },
    {
      "id": "82",
      "name": "Chat With PDF by Copilot.us",
      "description": "An AI app that enables dialogue with PDF documents, supporting interactions with multiple files simultaneously through language models.",
      "url": "https://copilot.us/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/6366f1/fff&text=Chat+PDF",
      "rating": 4.4,
      "reviewCount": 534
    },
    {
      "id": "83",
      "name": "Recall",
      "description": "Summarize Anything, Forget Nothing - AI-powered knowledge management and information recall system.",
      "url": "https://recall.ai/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/7c2d12/fff&text=Recall",
      "rating": 4.3,
      "reviewCount": 367
    },
    {
      "id": "84",
      "name": "Talently AI",
      "description": "An AI interviewer that conducts live, conversational interviews and gives real-time evaluations to effortlessly identify top performers.",
      "url": "https://talently.ai/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/f97316/fff&text=Talently+AI",
      "rating": 4.5,
      "reviewCount": 456
    },
    {
      "id": "85",
      "name": "TailorTask",
      "description": "Automate any boring and repetitive task, without having to learn a new tool for enhanced productivity.",
      "url": "https://tailortask.com/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/10b981/fff&text=TailorTask",
      "rating": 4.2,
      "reviewCount": 289
    },
    {
      "id": "86",
      "name": "AnkiDecks AI",
      "description": "Create Flashcards 10x faster. Generate Anki Flashcards from any File or Text with AI for efficient learning.",
      "url": "https://ankidecks.ai/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=AnkiDecks+AI",
      "rating": 4.4,
      "reviewCount": 378
    },
    {
      "id": "87",
      "name": "AI for Google Slides",
      "description": "AI presentation maker for Google Slides that creates professional presentations automatically.",
      "url": "https://workspace.google.com/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/34a853/fff&text=AI+Slides",
      "rating": 4.3,
      "reviewCount": 567
    },
    {
      "id": "88",
      "name": "FARSITE",
      "description": "AI-powered Compliance Software for U.S. Government Contractors with automated compliance monitoring.",
      "url": "https://farsite.ai/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/1f2937/fff&text=FARSITE",
      "rating": 4.1,
      "reviewCount": 123
    },
    {
      "id": "89",
      "name": "GOSH - Free AI Price Tracker",
      "description": "Track any price of any product at any store using AI for smart shopping decisions.",
      "url": "https://gosh.ai/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/ef4444/fff&text=GOSH+Tracker",
      "rating": 4.2,
      "reviewCount": 234
    },
    {
      "id": "90",
      "name": "Pomodoro Timer Tools",
      "description": "Minimal AI-Driven Pomodoro Timer App for enhanced focus and productivity management.",
      "url": "https://pomodorotimer.tools/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/f59e0b/fff&text=Pomodoro+AI",
      "rating": 4.0,
      "reviewCount": 167
    },
    {
      "id": "91",
      "name": "BrainSoup",
      "description": "Multi-agent & multi-LLM native client where AIs can remember, react to events, use tools, leverage local and external resources, and work together autonomously.",
      "url": "https://brainsoup.ai/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/a855f7/fff&text=BrainSoup",
      "rating": 4.4,
      "reviewCount": 345
    },
    {
      "id": "92",
      "name": "MindPal",
      "description": "Build your AI Second Brain with a team of AI agents and multi-agent workflow for enhanced productivity.",
      "url": "https://mindpal.io/",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=MindPal",
      "rating": 4.5,
      "reviewCount": 456
    },
    {
      "id": "93",
      "name": "Otter.ai",
      "description": "A meeting assistant that records audio, writes notes, automatically captures slides, and generates summaries.",
      "url": "https://otter.ai/",
      "category": "Meeting assistants",
      "imageUrl": "https://dummyimage.com/600x400/2563eb/fff&text=Otter.ai",
      "rating": 4.7,
      "reviewCount": 1456
    },
    {
      "id": "94",
      "name": "Cogram",
      "description": "Cogram takes automatic notes in virtual meetings and identifies action items for better meeting productivity.",
      "url": "https://www.cogram.com/",
      "category": "Meeting assistants",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Cogram",
      "rating": 4.4,
      "reviewCount": 623
    },
    {
      "id": "95",
      "name": "Sybill",
      "description": "Sybill generates summaries of sales calls, including next steps, pain points and areas of interest, by combining transcript and emotion-based insights.",
      "url": "https://www.sybill.ai/",
      "category": "Meeting assistants",
      "imageUrl": "https://dummyimage.com/600x400/8b5cf6/fff&text=Sybill",
      "rating": 4.5,
      "reviewCount": 387
    },
    {
      "id": "96",
      "name": "Loopin AI",
      "description": "Loopin is a collaborative meeting workspace that not only enables you to record, transcribe & summaries meetings using AI, but also enables you to auto-organise meeting notes on top of your calendar.",
      "url": "https://www.loopin.ai/",
      "category": "Meeting assistants",
      "imageUrl": "https://dummyimage.com/600x400/10b981/fff&text=Loopin+AI",
      "rating": 4.3,
      "reviewCount": 234
    },
    {
      "id": "97",
      "name": "Elicit",
      "description": "Elicit uses language models to help you automate research workflows, like parts of literature review.",
      "url": "https://elicit.org/",
      "category": "Academia",
      "imageUrl": "https://dummyimage.com/600x400/6366f1/fff&text=Elicit",
      "rating": 4.6,
      "reviewCount": 789
    },
    {
      "id": "98",
      "name": "genei",
      "description": "Summarise academic articles in seconds and save 80% on your research times with AI-powered analysis.",
      "url": "https://www.genei.io/",
      "category": "Academia",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=genei",
      "rating": 4.5,
      "reviewCount": 567
    },
    {
      "id": "99",
      "name": "Explainpaper",
      "description": "A better way to read academic papers. Upload a paper, highlight confusing text, get an explanation.",
      "url": "https://www.explainpaper.com/",
      "category": "Academia",
      "imageUrl": "https://dummyimage.com/600x400/f59e0b/fff&text=Explainpaper",
      "rating": 4.4,
      "reviewCount": 445
    },
    {
      "id": "100",
      "name": "Galactica",
      "description": "A large language model for science. Can summarize academic literature, solve math problems, generate Wiki articles, write scientific code, annotate molecules and proteins, and more.",
      "url": "https://galactica.org/",
      "category": "Academia",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=Galactica",
      "rating": 4.3,
      "reviewCount": 356
    },

    {
      "id": "101",
      "name": "consensus",
      "description": "AI-powered search engine that finds answers in scientific research. Uses artificial intelligence to analyze and extract insights from academic literature and research papers.",
      "url": "https://consensus.app/",
      "category": "Academia",
      "imageUrl": "https://dummyimage.com/600x400/1e3a8a/fff&text=Consensus",
      "rating": 4.6,
      "reviewCount": 284
    },
    {
      "id": "102",
      "name": "sourcely",
      "description": "Academic citation finding tool powered by AI. Helps researchers and students find relevant sources and citations for their academic work efficiently.",
      "url": "https://sourcely.net/",
      "category": "Academia",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Sourcely",
      "rating": 4.4,
      "reviewCount": 198
    },
    {
      "id": "103",
      "name": "scispace",
      "description": "AI chat interface for scientific PDFs. Enables researchers to interact with and extract insights from scientific documents through conversational AI.",
      "url": "https://typeset.io/",
      "category": "Academia",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=SciSpace",
      "rating": 4.5,
      "reviewCount": 312
    },
    {
      "id": "104",
      "name": "sitegpt",
      "description": "Transform AI into your expert customer support agent. Automates customer service with intelligent responses and 24/7 availability for websites.",
      "url": "https://sitegpt.ai/",
      "category": "Customer Support",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=SiteGPT",
      "rating": 4.7,
      "reviewCount": 425
    },
    {
      "id": "105",
      "name": "gpthelp-ai",
      "description": "ChatGPT integration for websites and AI customer support chatbot. Provides instant, intelligent customer service solutions for businesses.",
      "url": "https://gpthelp.ai/",
      "category": "Customer Support",
      "imageUrl": "https://dummyimage.com/600x400/ea580c/fff&text=GPTHelp.ai",
      "rating": 4.3,
      "reviewCount": 267
    },
    {
      "id": "106",
      "name": "sitespeakai",
      "description": "Automate customer support operations with AI-powered chatbots. Reduces response times and improves customer satisfaction through intelligent automation.",
      "url": "https://sitespeak.ai/",
      "category": "Customer Support",
      "imageUrl": "https://dummyimage.com/600x400/0891b2/fff&text=SiteSpeakAI",
      "rating": 4.6,
      "reviewCount": 189
    },
    {
      "id": "107",
      "name": "dear-ai",
      "description": "Supercharge customer services and boost sales with AI chatbot technology. Enhances customer engagement and drives revenue growth.",
      "url": "https://dear.ai/",
      "category": "Customer Support",
      "imageUrl": "https://dummyimage.com/600x400/be185d/fff&text=Dear+AI",
      "rating": 4.4,
      "reviewCount": 156
    },
    {
      "id": "108",
      "name": "inline-help",
      "description": "Proactively answer customer questions before they ask. Reduces support tickets by providing contextual help and guidance.",
      "url": "https://inlinehelp.com/",
      "category": "Customer Support",
      "imageUrl": "https://dummyimage.com/600x400/7c2d12/fff&text=Inline+Help",
      "rating": 4.2,
      "reviewCount": 143
    },
    {
      "id": "109",
      "name": "aidbase",
      "description": "AI-powered support platform designed specifically for SaaS startups. Streamlines customer service operations with intelligent automation.",
      "url": "https://aidbase.ai/",
      "category": "Customer Support",
      "imageUrl": "https://dummyimage.com/600x400/1d4ed8/fff&text=Aidbase",
      "rating": 4.5,
      "reviewCount": 201
    },
    {
      "id": "110",
      "name": "emailtriager",
      "description": "Automatically draft email replies in the background using AI. Saves time and improves email response efficiency for professionals.",
      "url": "https://emailtriager.com/",
      "category": "Other Text Generators",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=EmailTriager",
      "rating": 4.3,
      "reviewCount": 178
    },
    {
      "id": "111",
      "name": "ai-poem-generator",
      "description": "AI-powered tool that creates beautiful rhyming poems on any subject from text prompts. Perfect for creative writing and personal expression.",
      "url": "https://aipoemgenerator.com/",
      "category": "Other Text Generators",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=AI+Poem+Generator",
      "rating": 4.1,
      "reviewCount": 234
    },
    {
      "id": "112",
      "name": "never-jobless-linkedin-generator",
      "description": "Maximize interview chances with AI-powered LinkedIn messaging. Crafts personalized and professional LinkedIn outreach messages.",
      "url": "https://neverjobless.com/",
      "category": "Other Text Generators",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=Never+Jobless",
      "rating": 4.4,
      "reviewCount": 167
    },
    {
      "id": "113",
      "name": "ollama",
      "description": "Load and run large language models locally for terminal use or app development. Enables private, offline AI model deployment.",
      "url": "https://ollama.ai/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/0f172a/fff&text=Ollama",
      "rating": 4.8,
      "reviewCount": 392
    },
    {
      "id": "114",
      "name": "cohere",
      "description": "Access to advanced Large Language Models and NLP tools. Provides enterprise-grade language AI capabilities for developers.",
      "url": "https://cohere.ai/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/1e40af/fff&text=Cohere",
      "rating": 4.7,
      "reviewCount": 318
    },
    {
      "id": "115",
      "name": "haystack",
      "description": "Framework for building NLP applications including agents, semantic search, and question-answering with language models.",
      "url": "https://haystack.deepset.ai/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Haystack",
      "rating": 4.6,
      "reviewCount": 456
    },
    {
      "id": "116",
      "name": "keploy",
      "description": "Open source tool for converting user traffic to test cases and data stubs. Simplifies API testing and development workflows.",
      "url": "https://keploy.io/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/ea580c/fff&text=Keploy",
      "rating": 4.3,
      "reviewCount": 189
    },
    {
      "id": "117",
      "name": "langchain",
      "description": "Framework for developing applications powered by language models. Enables complex AI application development with modular components.",
      "url": "https://langchain.com/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=LangChain",
      "rating": 4.8,
      "reviewCount": 623
    },
    {
      "id": "118",
      "name": "gpt4all",
      "description": "Chatbot trained on clean assistant data including code, stories, and dialogue. Runs locally without internet connection.",
      "url": "https://gpt4all.io/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/be185d/fff&text=GPT4All",
      "rating": 4.5,
      "reviewCount": 347
    },
    {
      "id": "119",
      "name": "lmql",
      "description": "Query language specifically designed for large language models. Provides structured way to interact with and control LLMs.",
      "url": "https://lmql.ai/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/0891b2/fff&text=LMQL",
      "rating": 4.4,
      "reviewCount": 276
    },
    {
      "id": "120",
      "name": "llamaindex",
      "description": "Data framework for building LLM applications over external data. Connects language models with private or domain-specific data.",
      "url": "https://llamaindex.ai/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/7c2d12/fff&text=LlamaIndex",
      "rating": 4.7,
      "reviewCount": 412
    },
    {
      "id": "121",
      "name": "langfuse",
      "description": "Open-source LLM engineering platform for collaborative debugging, analysis, and iteration on LLM applications.",
      "url": "https://langfuse.com/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/1d4ed8/fff&text=Langfuse",
      "rating": 4.6,
      "reviewCount": 298
    },
    {
      "id": "122",
      "name": "phoenix",
      "description": "Open-source ML observability tool for monitoring and fine-tuning LLM, computer vision, and tabular models in notebook environments.",
      "url": "https://phoenix.arize.com/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=Phoenix",
      "rating": 4.5,
      "reviewCount": 234
    },
    {
      "id": "123",
      "name": "prediction-guard",
      "description": "Seamlessly integrate private, controlled, and compliant Large Language Model functionality into applications.",
      "url": "https://predictionguard.com/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Prediction+Guard",
      "rating": 4.4,
      "reviewCount": 187
    },
    {
      "id": "124",
      "name": "portkey",
      "description": "Full-stack LLMOps platform to monitor, manage, and improve LLM-based applications with comprehensive observability.",
      "url": "https://portkey.ai/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=Portkey",
      "rating": 4.6,
      "reviewCount": 321
    },
    {
      "id": "125",
      "name": "openai-downtime-monitor",
      "description": "Free tool that tracks API uptime and latencies for various OpenAI models and other LLM providers.",
      "url": "https://status.openai.com/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/ea580c/fff&text=OpenAI+Monitor",
      "rating": 4.2,
      "reviewCount": 156
    },
    {
      "id": "126",
      "name": "chatwithcloud",
      "description": "CLI tool allowing interaction with AWS Cloud using human language inside your terminal for cloud management.",
      "url": "https://chatwithcloud.ai/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/0891b2/fff&text=ChatWithCloud",
      "rating": 4.3,
      "reviewCount": 143
    },
    {
      "id": "127",
      "name": "singlebasecloud",
      "description": "AI-powered backend platform with Vector DB, DocumentDB, Auth, and more to accelerate app development.",
      "url": "https://singlebase.cloud/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/be185d/fff&text=SinglebaseCloud",
      "rating": 4.5,
      "reviewCount": 198
    },
    {
      "id": "128",
      "name": "maxim-ai",
      "description": "Generative AI evaluation and observability platform empowering modern AI teams to ship products with quality, reliability, and speed.",
      "url": "https://getmaxim.ai/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/7c2d12/fff&text=Maxim+AI",
      "rating": 4.4,
      "reviewCount": 167
    },
    {
      "id": "129",
      "name": "wordware",
      "description": "Web-hosted IDE where non-technical domain experts work with AI Engineers to build task-specific AI agents.",
      "url": "https://wordware.ai/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/1d4ed8/fff&text=Wordware",
      "rating": 4.6,
      "reviewCount": 289
    },
    {
      "id": "130",
      "name": "coderabbit",
      "description": "AI-powered code review tool that helps developers improve code quality and productivity through intelligent analysis.",
      "url": "https://coderabbit.ai/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=CodeRabbit",
      "rating": 4.7,
      "reviewCount": 356
    },
    {
      "id": "131",
      "name": "pagerly",
      "description": "Operations Co-pilot on Slack/Teams that assists and prompts oncall with relevant information to debug issues.",
      "url": "https://pagerly.io/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Pagerly",
      "rating": 4.3,
      "reviewCount": 178
    },
    {
      "id": "132",
      "name": "hexabot",
      "description": "Open-source no-code tool to build AI chatbots and agents with multi-lingual, multi-channel support and custom extensions.",
      "url": "https://hexabot.ai/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=Hexabot",
      "rating": 4.4,
      "reviewCount": 201
    },
    {
      "id": "133",
      "name": "plandex",
      "description": "Open source, terminal-based AI programming engine designed for handling complex development tasks efficiently.",
      "url": "https://plandex.ai/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/ea580c/fff&text=Plandex",
      "rating": 4.5,
      "reviewCount": 234
    },
    {
      "id": "134",
      "name": "aiml-api",
      "description": "AI/ML API gives developers access to 100+ AI models through a single, unified API interface.",
      "url": "https://aimlapi.com/",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/0891b2/fff&text=AI%2FML+API",
      "rating": 4.6,
      "reviewCount": 287
    },
    {
      "id": "135",
      "name": "github-copilot",
      "description": "AI pair programmer that suggests code and entire functions in real-time directly in your editor using OpenAI Codex.",
      "url": "https://github.com/features/copilot",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/be185d/fff&text=GitHub+Copilot",
      "rating": 4.8,
      "reviewCount": 1247
    },
    {
      "id": "136",
      "name": "openai-codex",
      "description": "AI system by OpenAI that translates natural language descriptions into functional code across multiple programming languages.",
      "url": "https://openai.com/blog/openai-codex/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/7c2d12/fff&text=OpenAI+Codex",
      "rating": 4.7,
      "reviewCount": 892
    },
    {
      "id": "137",
      "name": "ghostwriter",
      "description": "AI-powered pair programmer by Replit that assists with code completion, debugging, and development tasks.",
      "url": "https://replit.com/site/ghostwriter",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/1d4ed8/fff&text=Ghostwriter",
      "rating": 4.6,
      "reviewCount": 456
    },
    {
      "id": "138",
      "name": "amazon-codewhisperer",
      "description": "Build applications faster with Amazon's ML-powered coding companion that provides intelligent code suggestions.",
      "url": "https://aws.amazon.com/codewhisperer/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=CodeWhisperer",
      "rating": 4.5,
      "reviewCount": 623
    },
    {
      "id": "139",
      "name": "tabnine",
      "description": "AI code completion tool that provides whole-line and full-function code completions to accelerate development.",
      "url": "https://tabnine.com/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Tabnine",
      "rating": 4.4,
      "reviewCount": 534
    },
    {
      "id": "140",
      "name": "stenography",
      "description": "Automatic code documentation tool that generates comprehensive documentation for codebases using AI.",
      "url": "https://stenography.dev/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=Stenography",
      "rating": 4.3,
      "reviewCount": 287
    },
    {
      "id": "141",
      "name": "mintlify",
      "description": "AI-powered documentation writer that creates beautiful, comprehensive documentation from code automatically.",
      "url": "https://mintlify.com/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/ea580c/fff&text=Mintlify",
      "rating": 4.6,
      "reviewCount": 398
    },
    {
      "id": "142",
      "name": "debuild",
      "description": "AI-powered low-code tool for building web applications quickly without extensive programming knowledge.",
      "url": "https://debuild.app/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/0891b2/fff&text=Debuild",
      "rating": 4.2,
      "reviewCount": 245
    },
    {
      "id": "143",
      "name": "ai2sql",
      "description": "AI tool that enables engineers and non-engineers to write efficient, error-free SQL queries without knowing SQL.",
      "url": "https://ai2sql.io/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/be185d/fff&text=AI2SQL",
      "rating": 4.4,
      "reviewCount": 312
    },
    {
      "id": "144",
      "name": "codiumai",
      "description": "Generate non-trivial tests directly in your IDE to stay confident when you push code to production.",
      "url": "https://codium.ai/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/7c2d12/fff&text=CodiumAI",
      "rating": 4.5,
      "reviewCount": 423
    },
    {
      "id": "145",
      "name": "pr-agent",
      "description": "AI-powered tool for automated pull request analysis, feedback, suggestions, and code review assistance.",
      "url": "https://pr-agent.com/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/1d4ed8/fff&text=PR-Agent",
      "rating": 4.3,
      "reviewCount": 189
    },
    {
      "id": "146",
      "name": "mutableai",
      "description": "AI-accelerated software development platform that enhances coding productivity and code quality.",
      "url": "https://mutable.ai/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=MutableAI",
      "rating": 4.4,
      "reviewCount": 267
    },
    {
      "id": "147",
      "name": "turbopilot",
      "description": "Self-hosted copilot clone using llama.cpp to run Salesforce Codegen model in 4GB of RAM locally.",
      "url": "https://github.com/ravenscroftj/turbopilot",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=TurboPilot",
      "rating": 4.1,
      "reviewCount": 156
    },
    {
      "id": "148",
      "name": "gpt-code-ui",
      "description": "Open-source implementation of OpenAI's ChatGPT Code interpreter for code execution and analysis.",
      "url": "https://github.com/ricklamers/gpt-code-ui",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=GPT-Code+UI",
      "rating": 4.2,
      "reviewCount": 198
    },
    {
      "id": "149",
      "name": "metagpt",
      "description": "Multi-Agent Framework that takes one line requirement and returns PRD, Design, Tasks, and complete Repository.",
      "url": "https://github.com/geekan/MetaGPT",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/ea580c/fff&text=MetaGPT",
      "rating": 4.6,
      "reviewCount": 445
    },
    {
      "id": "150",
      "name": "marblism",
      "description": "Generate complete SaaS boilerplate applications from simple text prompts using advanced AI technology.",
      "url": "https://marblism.com/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/0891b2/fff&text=Marblism",
      "rating": 4.5,
      "reviewCount": 234
    },
    {
      "id": "151",
      "name": "mutahunterai",
      "description": "Accelerate developer productivity and code security with open-source AI-powered development tools.",
      "url": "https://mutahunter.ai/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/be185d/fff&text=MutahunterAI",
      "rating": 4.3,
      "reviewCount": 167
    },
    {
      "id": "152",
      "name": "ai-kernel-explorer",
      "description": "Explore the Linux kernel source code with AI-generated summaries and intelligent code analysis.",
      "url": "https://kernel.ai/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/7c2d12/fff&text=AI+Kernel+Explorer",
      "rating": 4.2,
      "reviewCount": 143
    },
    {
      "id": "153",
      "name": "whodb",
      "description": "SQL/NoSQL/Graph/Cache/Object data explorer with AI-powered chat and other useful database management features.",
      "url": "https://whodb.com/",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/1d4ed8/fff&text=WhoDB",
      "rating": 4.4,
      "reviewCount": 201
    },
    {
      "id": "154",
      "name": "dall-e-2",
      "description": "AI system by OpenAI that creates realistic images and art from natural language descriptions with unprecedented quality.",
      "url": "https://openai.com/dall-e-2/",
      "category": "Image",
      "imageUrl": "https://dummyimage.com/600x400/dc2626/fff&text=DALL%C2%B7E+2",
      "rating": 4.8,
      "reviewCount": 1543
    },
    {
      "id": "155",
      "name": "stable-diffusion",
      "description": "State-of-the-art open-source text-to-image model by Stability AI that generates high-quality images from text descriptions.",
      "url": "https://stability.ai/stable-diffusion",
      "category": "Image",
      "imageUrl": "https://dummyimage.com/600x400/059669/fff&text=Stable+Diffusion",
      "rating": 4.7,
      "reviewCount": 2156
    },
    {
      "id": "156",
      "name": "midjourney",
      "description": "Independent research lab exploring new mediums of thought and expanding imaginative powers through AI image generation.",
      "url": "https://midjourney.com/",
      "category": "Image",
      "imageUrl": "https://dummyimage.com/600x400/7c3aed/fff&text=Midjourney",
      "rating": 4.9,
      "reviewCount": 3421
    },
    {
      "id": "157",
      "name": "imagen",
      "description": "Text-to-image diffusion model by Google with unprecedented photorealism and deep language understanding.",
      "url": "https://imagen.research.google/",
      "category": "Image",
      "imageUrl": "https://dummyimage.com/600x400/ea580c/fff&text=Imagen",
      "rating": 4.6,
      "reviewCount": 892
    },
    {
      "id": "158",
      "name": "make-a-scene",
      "description": "Multimodal generative AI by Meta that puts creative control in users' hands through text descriptions and freeform sketches.",
      "url": "https://ai.facebook.com/blog/greater-creative-control-for-ai-image-generation/",
      "category": "Image",
      "imageUrl": "https://dummyimage.com/600x400/0891b2/fff&text=Make-A-Scene",
      "rating": 4.4,
      "reviewCount": 567
    },
    {
      "id": "159",
      "name": "draggan",
      "description": "Interactive point-based manipulation on generative image manifold allowing precise control over image editing.",
      "url": "https://vcai.mpi-inf.mpg.de/projects/DragGAN/",
      "category": "Image",
      "imageUrl": "https://dummyimage.com/600x400/be185d/fff&text=DragGAN",
      "rating": 4.3,
      "reviewCount": 234
    },
    {
      "id": "160",
      "name": "canva-ai",
      "description": "Generate and edit pictures with AI assistance integrated into Canva's design platform for enhanced creativity.",
      "url": "https://canva.com/ai-image-generator/",
      "category": "Image",
      "imageUrl": "https://dummyimage.com/600x400/7c2d12/fff&text=Canva+AI",
      "rating": 4.5,
      "reviewCount": 1678
    },
    {
      "id": "161",
      "name": "craiyon",
      "description": "AI model (formerly DALL-E mini) that creates images from any text prompt, making AI art generation accessible to everyone.",
      "url": "https://craiyon.com/",
      "category": "Services",
      "imageUrl": "https://dummyimage.com/600x400/1d4ed8/fff&text=Craiyon",
      "rating": 4.2,
      "reviewCount": 1234
    },

    {
      "id": "162",
      "name": "dreamstudio",
      "description": "Easy-to-use interface for creating images using the Stable Diffusion image generation model. Professional-grade AI image creation platform.",
      "url": "https://dreamstudio.ai",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=dreamstudio",
      "rating": 4.7,
      "reviewCount": 823
    },
    {
      "id": "163",
      "name": "artbreeder",
      "description": "Creative tool that empowers user creativity by making it easier to collaborate and explore image generation through AI breeding techniques.",
      "url": "https://artbreeder.com",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=artbreeder",
      "rating": 4.5,
      "reviewCount": 634
    },
    {
      "id": "164",
      "name": "gaugan2",
      "description": "Robust tool for creating photorealistic art using a combination of words and drawings, integrating segmentation mapping, inpainting, and text-to-image production.",
      "url": "https://www.nvidia.com/en-us/research/ai-playground/",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=gaugan2",
      "rating": 4.6,
      "reviewCount": 421
    },
    {
      "id": "165",
      "name": "magic-eraser",
      "description": "Remove unwanted things from images in seconds using advanced AI technology. Simple and effective photo editing tool.",
      "url": "https://magicstudio.com/magiceraser",
      "category": "Image Editing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=magic-eraser",
      "rating": 4.4,
      "reviewCount": 892
    },
    {
      "id": "166",
      "name": "imagine-by-magic-studio",
      "description": "Express yourself by describing what's on your mind. AI-powered image creation tool that turns ideas into visual content.",
      "url": "https://magicstudio.com/imagine",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=imagine-by-magic-studio",
      "rating": 4.3,
      "reviewCount": 567
    },
    {
      "id": "167",
      "name": "alpaca-photoshop-plugin",
      "description": "Stable Diffusion plugin for Photoshop, bringing AI image generation capabilities directly into your favorite photo editing software.",
      "url": "https://github.com/krea-ai/open-prompts",
      "category": "Image Editing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=alpaca-photoshop-plugin",
      "rating": 4.2,
      "reviewCount": 345
    },
    {
      "id": "168",
      "name": "patience-ai",
      "description": "App for creating images with Stable Diffusion, a cutting-edge AI developed by Stability.AI. Patient and precise image generation.",
      "url": "https://patience.ai",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=patience-ai",
      "rating": 4.1,
      "reviewCount": 289
    },
    {
      "id": "169",
      "name": "genshare",
      "description": "Generate art in seconds for free. Own and share what you create. A multimedia generative studio, democratizing design and creativity.",
      "url": "https://genshare.ai",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=genshare",
      "rating": 4.0,
      "reviewCount": 456
    },
    {
      "id": "170",
      "name": "playground-ai",
      "description": "Free-to-use online AI image creator. Create art, social media posts, presentations, posters, videos, logos and more.",
      "url": "https://playgroundai.com",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=playground-ai",
      "rating": 4.6,
      "reviewCount": 1234
    },
    {
      "id": "171",
      "name": "pixelz-ai-art-generator",
      "description": "Create incredible art from text using Stable Diffusion, CLIP Guided Diffusion & PXL·E realistic algorithms.",
      "url": "https://pixelz.ai",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=pixelz-ai-art-generator",
      "rating": 4.3,
      "reviewCount": 678
    },
    {
      "id": "172",
      "name": "modyfi",
      "description": "The image editor you've always wanted. AI-powered creative tools in your browser with real-time collaboration.",
      "url": "https://modyfi.com",
      "category": "Image Editing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=modyfi",
      "rating": 4.5,
      "reviewCount": 543
    },
    {
      "id": "173",
      "name": "ponzu",
      "description": "Free AI logo generator. Build your brand with creatively designed logos in seconds, using only your imagination.",
      "url": "https://ponzu.ai",
      "category": "Graphic Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ponzu",
      "rating": 4.2,
      "reviewCount": 789
    },
    {
      "id": "174",
      "name": "photoroom",
      "description": "Create product and portrait pictures using only your phone. Remove background, change background and showcase products.",
      "url": "https://photoroom.com",
      "category": "Image Editing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=photoroom",
      "rating": 4.7,
      "reviewCount": 2156
    },
    {
      "id": "175",
      "name": "avatar-ai",
      "description": "Create your own AI-generated avatars with personalized styles and unique characteristics.",
      "url": "https://avatarai.me",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=avatar-ai",
      "rating": 4.4,
      "reviewCount": 1098
    },
    {
      "id": "176",
      "name": "clipdrop",
      "description": "Create professional visuals without a photo studio, powered by stability.ai. Advanced AI image tools.",
      "url": "https://clipdrop.co",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=clipdrop",
      "rating": 4.6,
      "reviewCount": 987
    },
    {
      "id": "177",
      "name": "lensa",
      "description": "All-in-one image editing app that includes the generation of personalized avatars using Stable Diffusion.",
      "url": "https://prisma-ai.com/lensa",
      "category": "Image Editing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=lensa",
      "rating": 4.3,
      "reviewCount": 3245
    },
    {
      "id": "178",
      "name": "rundiffusion",
      "description": "Cloud-based workspace for creating AI-generated art with powerful diffusion models and collaborative features.",
      "url": "https://rundiffusion.com",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=rundiffusion",
      "rating": 4.4,
      "reviewCount": 567
    },
    {
      "id": "179",
      "name": "human-generator",
      "description": "AI generator for realistic looking photos of humans. Create diverse and photorealistic human portraits.",
      "url": "https://generated.photos",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=human-generator",
      "rating": 4.2,
      "reviewCount": 432
    },
    {
      "id": "180",
      "name": "vectorart-ai",
      "description": "Create vector images with AI. Generate scalable vector graphics using artificial intelligence.",
      "url": "https://vectorart.ai",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=vectorart-ai",
      "rating": 4.1,
      "reviewCount": 298
    },
    {
      "id": "181",
      "name": "stockphoto-ai",
      "description": "Great stock photos, made for you using AI technology. High-quality stock photography generation.",
      "url": "https://stockphotoai.net",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=stockphoto-ai",
      "rating": 4.3,
      "reviewCount": 654
    },
    {
      "id": "182",
      "name": "room-reinvented",
      "description": "Transform your room effortlessly! Upload a photo and let AI create over 30 stunning interior styles.",
      "url": "https://roomreinvented.com",
      "category": "Interior Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=room-reinvented",
      "rating": 4.5,
      "reviewCount": 876
    },
    {
      "id": "183",
      "name": "gensbot",
      "description": "Uses AI to craft personalised printed merchandise. One prompt creates one unique product to fit your needs.",
      "url": "https://gensbot.com",
      "category": "E-commerce",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=gensbot",
      "rating": 4.0,
      "reviewCount": 234
    },
    {
      "id": "184",
      "name": "plantphoto-ai",
      "description": "Free AI-generated plant images for botanical and gardening applications.",
      "url": "https://plantphoto.ai",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=plantphoto-ai",
      "rating": 3.9,
      "reviewCount": 187
    },
    {
      "id": "185",
      "name": "republiclabs-ai",
      "description": "Multi-model simultaneous generation from a single prompt, fully unrestricted and packed with the latest AI models.",
      "url": "https://republiclabs.ai",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=republiclabs-ai",
      "rating": 4.4,
      "reviewCount": 456
    },
    {
      "id": "186",
      "name": "black-headshots",
      "description": "AI headshots generator specifically designed for black professionals with diverse and inclusive representation.",
      "url": "https://blackheadshots.com",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=black-headshots",
      "rating": 4.6,
      "reviewCount": 324
    },
    {
      "id": "187",
      "name": "pixvify-ai",
      "description": "Free realistic AI photo generator platform for creating high-quality photorealistic images.",
      "url": "https://pixvify.ai",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=pixvify-ai",
      "rating": 4.2,
      "reviewCount": 567
    },
    {
      "id": "188",
      "name": "pawtrait",
      "description": "AI Pet Portraits - Create beautiful, personalized portraits of your beloved pets using artificial intelligence.",
      "url": "https://pawtrait.com",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=pawtrait",
      "rating": 4.7,
      "reviewCount": 1234
    },
    {
      "id": "189",
      "name": "icoloring",
      "description": "Free AI Coloring Pages Generator for creating custom coloring pages for children and adults.",
      "url": "https://icoloring.ai",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=icoloring",
      "rating": 4.1,
      "reviewCount": 345
    },
    {
      "id": "190",
      "name": "suit-me-up",
      "description": "Generate pictures of you wearing a suit with AI. Professional portrait generation for business use.",
      "url": "https://suitmeup.ai",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=suit-me-up",
      "rating": 4.0,
      "reviewCount": 289
    },
    {
      "id": "191",
      "name": "ai-photo-forge",
      "description": "A Telegram bot to generate AI pictures of you with various styles and customizations.",
      "url": "https://t.me/aiphotoforge",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-photo-forge",
      "rating": 3.8,
      "reviewCount": 156
    },
    {
      "id": "192",
      "name": "brandmark",
      "description": "AI-based logo design tool for creating professional brand identities and logos automatically.",
      "url": "https://brandmark.io",
      "category": "Graphic Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=brandmark",
      "rating": 4.5,
      "reviewCount": 987
    },
    {
      "id": "193",
      "name": "gamma",
      "description": "Create beautiful presentations and webpages with none of the formatting and design work using AI.",
      "url": "https://gamma.app",
      "category": "Presentation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=gamma",
      "rating": 4.6,
      "reviewCount": 1456
    },
    {
      "id": "194",
      "name": "microsoft-designer",
      "description": "Stunning designs in a flash. Microsoft's AI-powered design tool for creating professional graphics.",
      "url": "https://designer.microsoft.com",
      "category": "Graphic Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=microsoft-designer",
      "rating": 4.4,
      "reviewCount": 2134
    },
    {
      "id": "195",
      "name": "svgstudio",
      "description": "AI-based SVG Generation and Semantic Search for creating scalable vector graphics.",
      "url": "https://svgstud.io",
      "category": "Graphic Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=svgstudio",
      "rating": 4.2,
      "reviewCount": 345
    },
    {
      "id": "196",
      "name": "lexica",
      "description": "Stable Diffusion search engine for discovering and exploring AI-generated images and prompts.",
      "url": "https://lexica.art",
      "category": "Image Search",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=lexica",
      "rating": 4.7,
      "reviewCount": 1789
    },
    {
      "id": "197",
      "name": "libraire",
      "description": "The largest library of AI-generated images with comprehensive search and discovery features.",
      "url": "https://libraire.ai",
      "category": "Image Library",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=libraire",
      "rating": 4.5,
      "reviewCount": 876
    },
    {
      "id": "198",
      "name": "krea",
      "description": "Explore millions of AI-generated images and create collections of prompts featuring Stable Diffusion generations.",
      "url": "https://krea.ai",
      "category": "Image Library",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=krea",
      "rating": 4.6,
      "reviewCount": 1234
    },
    {
      "id": "199",
      "name": "openart",
      "description": "Search 10M+ prompts and generate AI art via Stable Diffusion and DALL·E 2.",
      "url": "https://openart.ai",
      "category": "Image Library",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=openart",
      "rating": 4.8,
      "reviewCount": 2345
    },
    {
      "id": "200",
      "name": "phygital",
      "description": "Built-in templates for generating or editing pictures. Create your own design with AI assistance.",
      "url": "https://phygital.plus",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=phygital",
      "rating": 4.1,
      "reviewCount": 432
    },
    {
      "id": "201",
      "name": "canva-ai-images",
      "description": "Canva's AI image generation feature for creating custom visuals within the design platform.",
      "url": "https://canva.com",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=canva-ai-images",
      "rating": 4.7,
      "reviewCount": 5678
    },
    {
      "id": "202",
      "name": "civitai",
      "description": "Community-driven AI model sharing tool for Stable Diffusion and other AI models.",
      "url": "https://civitai.com",
      "category": "Model Library",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=civitai",
      "rating": 4.8,
      "reviewCount": 3456
    },
    {
      "id": "203",
      "name": "stable-diffusion-models",
      "description": "Comprehensive list of Stable Diffusion checkpoints and models for various AI image generation needs.",
      "url": "https://rentry.org/sdmodels",
      "category": "Model Library",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=stable-diffusion-models",
      "rating": 4.4,
      "reviewCount": 987
    },
    {
      "id": "204",
      "name": "stable-horde",
      "description": "Crowdsourced distributed cluster of Stable Diffusion workers for collaborative AI image generation.",
      "url": "https://stablehorde.net",
      "category": "AI Infrastructure",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=stable-horde",
      "rating": 4.3,
      "reviewCount": 654
    },
    {
      "id": "205",
      "name": "diffusiondb",
      "description": "List of all public apps, developer tools, guides and plugins for Stable Diffusion with Airtable version.",
      "url": "https://diffusiondb.com",
      "category": "Resource Directory",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=diffusiondb",
      "rating": 4.2,
      "reviewCount": 543
    },
    {
      "id": "206",
      "name": "publicprompts",
      "description": "Collection of free prompts for Stable Diffusion to help users create better AI-generated images.",
      "url": "https://publicprompts.art",
      "category": "Prompt Library",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=publicprompts",
      "rating": 4.5,
      "reviewCount": 876
    },
    {
      "id": "207",
      "name": "stableboost",
      "description": "Stable Diffusion WebUI that lets you quickly generate lots of images to find the perfect ones.",
      "url": "https://stableboost.ai",
      "category": "Image Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=stableboost",
      "rating": 4.1,
      "reviewCount": 432
    },
    {
      "id": "208",
      "name": "huggingface-diffusion-course",
      "description": "Python materials for the online course on diffusion models by Hugging Face for learning AI image generation.",
      "url": "https://huggingface.co/course",
      "category": "Education",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=huggingface-diffusion-course",
      "rating": 4.7,
      "reviewCount": 1234
    },
    {
      "id": "209",
      "name": "runwayml",
      "description": "Magical AI tools, realtime collaboration, precision editing, and more. Next-generation content creation suite.",
      "url": "https://runwayml.com",
      "category": "Video Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=runwayml",
      "rating": 4.8,
      "reviewCount": 2345
    },
    {
      "id": "210",
      "name": "synthesia",
      "description": "Create videos from plain text in minutes using AI avatars and natural-sounding voices.",
      "url": "https://synthesia.io",
      "category": "Video Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=synthesia",
      "rating": 4.7,
      "reviewCount": 1876
    },
    {
      "id": "211",
      "name": "rephrase-ai",
      "description": "Technology enables hyper-personalized video creation at scale that drives engagement and business efficiencies.",
      "url": "https://rephrase.ai",
      "category": "Video Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=rephrase-ai",
      "rating": 4.5,
      "reviewCount": 987
    },
    {
      "id": "212",
      "name": "hour-one",
      "description": "Turn text into video featuring virtual presenters automatically with AI-powered video generation.",
      "url": "https://hourone.ai",
      "category": "Video Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=hour-one",
      "rating": 4.4,
      "reviewCount": 654
    },
    {
      "id": "213",
      "name": "d-id",
      "description": "Create and interact with talking avatars at the touch of a button using cutting-edge AI technology.",
      "url": "https://d-id.com",
      "category": "Video Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=d-id",
      "rating": 4.6,
      "reviewCount": 1432
    },
    {
      "id": "214",
      "name": "shortvideogen",
      "description": "Create short videos with audio using text prompts. AI-powered short-form video content creation.",
      "url": "https://shortvideogen.com",
      "category": "Video Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=shortvideogen",
      "rating": 4.2,
      "reviewCount": 543
    },
    {
      "id": "215",
      "name": "clipwing",
      "description": "Tool for cutting long videos into dozens of short clips automatically using AI video analysis.",
      "url": "https://clipwing.pro",
      "category": "Video Editing",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=clipwing",
      "rating": 4.3,
      "reviewCount": 678
    },
    {
      "id": "216",
      "name": "recast-studio",
      "description": "AI powered podcast marketing assistant for creating promotional content from podcast episodes.",
      "url": "https://recast.studio",
      "category": "Podcast Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=recast-studio",
      "rating": 4.4,
      "reviewCount": 432
    },
    {
      "id": "217",
      "name": "based-ai",
      "description": "AI Intuitive Interface for Video creating with advanced artificial intelligence capabilities.",
      "url": "https://based.ai",
      "category": "Video Generation",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=based-ai",
      "rating": 4.1,
      "reviewCount": 289
    },
    {
      "id": "218",
      "name": "descript-overdub",
      "description": "Seamlessly integrates with Descript's transcription and editing tools, ideal for content creators needing quick voiceovers.",
      "url": "https://descript.com",
      "category": "Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=descript-overdub",
      "rating": 4.6,
      "reviewCount": 1234
    },
    {
      "id": "219",
      "name": "respeecher",
      "description": "Professional tool widely used in the entertainment industry to create emotion-rich, realistic voice clones.",
      "url": "https://respeecher.com",
      "category": "Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=respeecher",
      "rating": 4.7,
      "reviewCount": 876
    },
    {
      "id": "220",
      "name": "elevenlabs",
      "description": "Known for ultra-realistic voice cloning and emotion modeling, setting a new standard in AI-driven voice synthesis.",
      "url": "https://elevenlabs.io",
      "category": "Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=elevenlabs",
      "rating": 4.8,
      "reviewCount": 2345
    },
    {
      "id": "221",
      "name": "resemble-ai",
      "description": "Offers real-time voice synthesis with customization options, making it versatile for both developers and creatives.",
      "url": "https://resemble.ai",
      "category": "Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=resemble-ai",
      "rating": 4.5,
      "reviewCount": 987
    },
    {
      "id": "222",
      "name": "murf-ai",
      "description": "User-friendly platform for quick, high-quality voiceovers, favored for commercial and marketing applications.",
      "url": "https://murf.ai",
      "category": "Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=murf-ai",
      "rating": 4.4,
      "reviewCount": 1456
    },
    {
      "id": "223",
      "name": "ispeech",
      "description": "Versatile solution for corporate applications with support for a wide array of languages and voices.",
      "url": "https://ispeech.org",
      "category": "Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ispeech",
      "rating": 4.2,
      "reviewCount": 654
    },
    {
      "id": "224",
      "name": "veritone-voice",
      "description": "Focuses on maintaining brand consistency with highly customizable voice cloning used in media and entertainment.",
      "url": "https://veritone.com",
      "category": "Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=veritone-voice",
      "rating": 4.3,
      "reviewCount": 432
    },
    {
      "id": "225",
      "name": "microsoft-azure-neural-tts",
      "description": "Scalable and highly customizable, ideal for integration into enterprise applications with neural voice synthesis.",
      "url": "https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/",
      "category": "Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=microsoft-azure-neural-tts",
      "rating": 4.6,
      "reviewCount": 1789
    },
    {
      "id": "226",
      "name": "wellsaid-labs",
      "description": "Gaining traction for its natural-sounding voiceovers, particularly in corporate training and e-learning applications.",
      "url": "https://wellsaidlabs.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=wellsaid-labs",
      "rating": 4.6,
      "reviewCount": 312
    },
    {
      "id": "227",
      "name": "lovo-ai",
      "description": "A compelling choice for creative professionals, especially useful in ads and explainer videos.",
      "url": "https://lovo.ai",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=lovo-ai",
      "rating": 4.5,
      "reviewCount": 287
    },
    {
      "id": "228",
      "name": "zenmic",
      "description": "An app to generate podcast episode (script + Audio) using AI.",
      "url": "https://zenmic.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=zenmic",
      "rating": 4.3,
      "reviewCount": 156
    },
    {
      "id": "229",
      "name": "splash-pro",
      "description": "A versatile platform offering intuitive music creation tools for all skill levels.",
      "url": "https://splashpro.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=splash-pro",
      "rating": 4.7,
      "reviewCount": 421
    },
    {
      "id": "230",
      "name": "aiva",
      "description": "AI composer specializing in classical and cinematic music creation.",
      "url": "https://aiva.ai",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=aiva",
      "rating": 4.8,
      "reviewCount": 534
    },
    {
      "id": "231",
      "name": "mubert",
      "description": "Real-time generative music tailored for different use cases.",
      "url": "https://mubert.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=mubert",
      "rating": 4.6,
      "reviewCount": 389
    },
    {
      "id": "232",
      "name": "soundraw",
      "description": "Allows users to customize music compositions based on mood and style.",
      "url": "https://soundraw.io",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=soundraw",
      "rating": 4.5,
      "reviewCount": 298
    },
    {
      "id": "233",
      "name": "beatoven-ai",
      "description": "AI-driven music generation focused on evoking specific emotions.",
      "url": "https://beatoven.ai",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=beatoven-ai",
      "rating": 4.4,
      "reviewCount": 267
    },
    {
      "id": "234",
      "name": "boomy",
      "description": "Democratizes music creation with quick track generation and monetization.",
      "url": "https://boomy.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=boomy",
      "rating": 4.3,
      "reviewCount": 445
    },
    {
      "id": "235",
      "name": "ecrett-music",
      "description": "Designed for video creators, offering royalty-free music.",
      "url": "https://ecrettmusic.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ecrett-music",
      "rating": 4.5,
      "reviewCount": 312
    },
    {
      "id": "236",
      "name": "loudly",
      "description": "Combines AI music generation with a social platform for collaboration.",
      "url": "https://loudly.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=loudly",
      "rating": 4.4,
      "reviewCount": 189
    },
    {
      "id": "237",
      "name": "soundful",
      "description": "High-quality, royalty-free music for content creators.",
      "url": "https://soundful.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=soundful",
      "rating": 4.6,
      "reviewCount": 356
    },
    {
      "id": "238",
      "name": "jasper-ai",
      "description": "AI-powered tool for generating marketing content like blogs, emails, and ad copy.",
      "url": "https://jasper.ai",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=jasper-ai",
      "rating": 4.7,
      "reviewCount": 823
    },
    {
      "id": "239",
      "name": "mutiny",
      "description": "Personalization platform to improve website conversions using AI.",
      "url": "https://mutinyhq.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=mutiny",
      "rating": 4.5,
      "reviewCount": 267
    },
    {
      "id": "240",
      "name": "clearbit",
      "description": "Lead enrichment and data intelligence platform.",
      "url": "https://clearbit.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=clearbit",
      "rating": 4.6,
      "reviewCount": 445
    },
    {
      "id": "241",
      "name": "seventh-sense",
      "description": "AI tool for email send time optimization.",
      "url": "https://seventhsense.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=seventh-sense",
      "rating": 4.4,
      "reviewCount": 198
    },
    {
      "id": "242",
      "name": "smartly-io",
      "description": "Automates social media ad creation and optimization.",
      "url": "https://smartly.io",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=smartly-io",
      "rating": 4.5,
      "reviewCount": 334
    },
    {
      "id": "243",
      "name": "adzooma",
      "description": "AI-powered PPC campaign management platform.",
      "url": "https://adzooma.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=adzooma",
      "rating": 4.3,
      "reviewCount": 221
    },
    {
      "id": "244",
      "name": "phrasee",
      "description": "AI tool that generates optimized marketing copy.",
      "url": "https://phrasee.co",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=phrasee",
      "rating": 4.6,
      "reviewCount": 289
    },
    {
      "id": "245",
      "name": "crimson-hexagon",
      "description": "AI-based social media sentiment analysis platform.",
      "url": "https://crimsonhexagon.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=crimson-hexagon",
      "rating": 4.4,
      "reviewCount": 167
    },
    {
      "id": "246",
      "name": "marketmuse",
      "description": "SEO content optimization platform using AI.",
      "url": "https://marketmuse.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=marketmuse",
      "rating": 4.7,
      "reviewCount": 412
    },
    {
      "id": "247",
      "name": "chatfuel",
      "description": "AI-driven chatbot for automating customer engagement on Messenger.",
      "url": "https://chatfuel.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=chatfuel",
      "rating": 4.5,
      "reviewCount": 534
    },
    {
      "id": "248",
      "name": "logicballs",
      "description": "An AI-powered writing tool to create any type of content and supercharge your productivity.",
      "url": "https://logicballs.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=logicballs",
      "rating": 4.4,
      "reviewCount": 298
    },
    {
      "id": "249",
      "name": "rupert-ai",
      "description": "AI tools for designers and marketers.",
      "url": "https://rupert.ai",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=rupert-ai",
      "rating": 4.3,
      "reviewCount": 156
    },
    {
      "id": "250",
      "name": "personaforce",
      "description": "Create and chat with AI buyer personas for smarter marketing.",
      "url": "https://personaforce.ai",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=personaforce",
      "rating": 4.5,
      "reviewCount": 223
    },
    {
      "id": "251",
      "name": "aicaller-io",
      "description": "Simple-to-use automated bulk calling solution that uses the latest Generative AI technology to trigger phone calls for lead qualification and data gathering.",
      "url": "https://aicaller.io",
      "category": "Phone Calls",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=aicaller-io",
      "rating": 4.2,
      "reviewCount": 189
    },
    {
      "id": "252",
      "name": "cald-ai",
      "description": "AI based calling agents for outbound and inbound phone calls.",
      "url": "https://cald.ai",
      "category": "Phone Calls",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=cald-ai",
      "rating": 4.4,
      "reviewCount": 134
    },
    {
      "id": "253",
      "name": "rosie",
      "description": "AI Phone Answering Service.",
      "url": "https://rosie.ai",
      "category": "Phone Calls",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=rosie",
      "rating": 4.3,
      "reviewCount": 167
    },
    {
      "id": "254",
      "name": "eleven-labs",
      "description": "AI voice generator.",
      "url": "https://elevenlabs.io",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=eleven-labs",
      "rating": 4.8,
      "reviewCount": 623
    },
    {
      "id": "255",
      "name": "resemble-ai",
      "description": "AI voice generator and voice cloning for text to speech.",
      "url": "https://resemble.ai",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=resemble-ai",
      "rating": 4.7,
      "reviewCount": 445
    },
    {
      "id": "256",
      "name": "wellsaid",
      "description": "Convert text to voice in real time.",
      "url": "https://wellsaidlabs.com",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=wellsaid",
      "rating": 4.6,
      "reviewCount": 389
    },
    {
      "id": "257",
      "name": "play-ht",
      "description": "AI Voice Generator. Generate realistic Text to Speech voice over online with AI. Convert text to audio.",
      "url": "https://play.ht",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=play-ht",
      "rating": 4.5,
      "reviewCount": 512
    },
    {
      "id": "258",
      "name": "coqui",
      "description": "Generative AI for Voice.",
      "url": "https://coqui.ai",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=coqui",
      "rating": 4.4,
      "reviewCount": 267
    },
    {
      "id": "259",
      "name": "podcast-ai",
      "description": "A podcast that is entirely generated by artificial intelligence, powered by Play.ht text-to-voice AI.",
      "url": "https://podcast.ai",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=podcast-ai",
      "rating": 4.3,
      "reviewCount": 198
    },
    {
      "id": "260",
      "name": "vall-e-x",
      "description": "A cross-lingual neural codec language model for cross-lingual speech synthesis.",
      "url": "https://vall-e-x.com",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=vall-e-x",
      "rating": 4.2,
      "reviewCount": 145
    },
    {
      "id": "261",
      "name": "tortoise",
      "description": "A multi-voice text-to-speech system trained with an emphasis on quality.",
      "url": "https://tortoise-tts.com",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=tortoise",
      "rating": 4.5,
      "reviewCount": 234
    },
    {
      "id": "262",
      "name": "bark",
      "description": "A transformer-based text-to-audio model.",
      "url": "https://bark.ai",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=bark",
      "rating": 4.4,
      "reviewCount": 189
    },
    {
      "id": "263",
      "name": "custompod-io",
      "description": "Generate daily news podcasts only on the topics you care about.",
      "url": "https://custompod.io",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=custompod-io",
      "rating": 4.3,
      "reviewCount": 156
    },
    {
      "id": "264",
      "name": "harmonai",
      "description": "Community-driven organization releasing open-source generative audio tools to make music production more accessible and fun for everyone.",
      "url": "https://harmonai.org",
      "category": "Music",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=harmonai",
      "rating": 4.6,
      "reviewCount": 312
    },
    {
      "id": "265",
      "name": "mubert-music",
      "description": "A royalty-free music ecosystem for content creators, brands and developers.",
      "url": "https://mubert.com",
      "category": "Music",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=mubert-music",
      "rating": 4.5,
      "reviewCount": 434
    },
    {
      "id": "266",
      "name": "musiclm",
      "description": "A model by Google Research for generating high-fidelity music from text descriptions.",
      "url": "https://musiclm.google.com",
      "category": "Music",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=musiclm",
      "rating": 4.7,
      "reviewCount": 289
    },
    {
      "id": "267",
      "name": "taranify",
      "description": "Using AI, Taranify finds you Spotify playlists, Netflix shows, Books & Foods you'd enjoy when you don't exactly know what you want.",
      "url": "https://taranify.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=taranify",
      "rating": 4.4,
      "reviewCount": 378
    },
    {
      "id": "268",
      "name": "diagram",
      "description": "Magical new ways to design products.",
      "url": "https://diagram.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=diagram",
      "rating": 4.3,
      "reviewCount": 245
    },
    {
      "id": "269",
      "name": "promptbase",
      "description": "A marketplace for buying and selling quality prompts for DALL·E, GPT-3, Midjourney, Stable Diffusion.",
      "url": "https://promptbase.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=promptbase",
      "rating": 4.5,
      "reviewCount": 567
    },
    {
      "id": "270",
      "name": "this-image-does-not-exist",
      "description": "Test your ability to tell if an image is human or computer generated.",
      "url": "https://thisimagedoesnotexist.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=this-image-does-not-exist",
      "rating": 4.2,
      "reviewCount": 189
    },
    {
      "id": "271",
      "name": "have-i-been-trained",
      "description": "Check if your image has been used to train popular AI art models.",
      "url": "https://haveibeentrained.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=have-i-been-trained",
      "rating": 4.1,
      "reviewCount": 134
    },
    {
      "id": "272",
      "name": "ai-dungeon",
      "description": "A text-based adventure-story game you direct (and star in) while the AI brings it to life.",
      "url": "https://aidungeon.io",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-dungeon",
      "rating": 4.6,
      "reviewCount": 823
    },
    {
      "id": "273",
      "name": "clickable",
      "description": "Generate ads in seconds with AI. Beautiful, brand-consistent, and highly converting ads for all marketing channels.",
      "url": "https://clickable.so",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=clickable",
      "rating": 4.5,
      "reviewCount": 412
    },
    {
      "id": "274",
      "name": "scale-spellbook",
      "description": "Build, compare, and deploy large language model apps with Scale Spellbook.",
      "url": "https://scale.com/spellbook",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=scale-spellbook",
      "rating": 4.4,
      "reviewCount": 267
    },
    {
      "id": "275",
      "name": "scenario",
      "description": "AI-generated gaming assets.",
      "url": "https://scenario.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=scenario",
      "rating": 4.3,
      "reviewCount": 298
    },
    {
      "id": "276",
      "name": "teleprompter",
      "description": "An on-device AI for your meetings that listens to you and makes charismatic quote suggestions.",
      "url": "https://teleprompter.ai",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=teleprompter",
      "rating": 4.2,
      "reviewCount": 156
    },
    {
      "id": "277",
      "name": "finchat",
      "description": "Using AI, FinChat generates answers to questions about public companies and investors.",
      "url": "https://finchat.io",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=finchat",
      "rating": 4.5,
      "reviewCount": 334
    },
    {
      "id": "278",
      "name": "petals",
      "description": "BitTorrent style platform for running AI models in a distributed way.",
      "url": "https://petals.dev",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=petals",
      "rating": 4.3,
      "reviewCount": 189
    },
    {
      "id": "279",
      "name": "shotstack-workflows",
      "description": "No-code, automation workflow tool for building Generative AI media applications.",
      "url": "https://shotstack.io/workflows",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=shotstack-workflows",
      "rating": 4.4,
      "reviewCount": 223
    },
    {
      "id": "280",
      "name": "aispect",
      "description": "New way to experience events.",
      "url": "https://aispect.io",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=aispect",
      "rating": 4.1,
      "reviewCount": 98
    },
    {
      "id": "281",
      "name": "presspulse-ai",
      "description": "Get personalized media coverage leads every morning.",
      "url": "https://presspulse.ai",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=presspulse-ai",
      "rating": 4.3,
      "reviewCount": 167
    },
    {
      "id": "282",
      "name": "gummysearch",
      "description": "AI-based customer research via Reddit. Discover problems to solve, sentiment on current solutions, and people who want to buy your product.",
      "url": "https://gummysearch.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=gummysearch",
      "rating": 4.4,
      "reviewCount": 245
    },
    {
      "id": "283",
      "name": "taplio",
      "description": "The all-in-one, AI-powered LinkedIn tool.",
      "url": "https://taplio.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=taplio",
      "rating": 4.6,
      "reviewCount": 512
    },
    {
      "id": "284",
      "name": "promptpal",
      "description": "Search for prompts and bots, then use them with your favorite AI. All in one place.",
      "url": "https://promptpal.net",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=promptpal",
      "rating": 4.2,
      "reviewCount": 178
    },
    {
      "id": "285",
      "name": "fairytailai",
      "description": "Personalized bedtime story generator.",
      "url": "https://fairytailai.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=fairytailai",
      "rating": 4.5,
      "reviewCount": 356
    },
    {
      "id": "286",
      "name": "myriad",
      "description": "Scale your content creation and get the best writing from ChatGPT, Copilot, and other AIs. Build and fine-tune prompts for any kind of content, from long-form to ads and email.",
      "url": "https://myriad.so",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=myriad",
      "rating": 4.4,
      "reviewCount": 289
    },
    {
      "id": "287",
      "name": "gradgpt",
      "description": "AI tools to simplify college applications. Review applications, draft essays, find universities and requirements and more.",
      "url": "https://gradgpt.ai",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=gradgpt",
      "rating": 4.3,
      "reviewCount": 234
    },
    {
      "id": "288",
      "name": "code-to-flow",
      "description": "Visualize, Analyze, and Understand Your Code flow. Turn Code into Interactive Flowcharts with AI. Simplify Complex Logic Instantly.",
      "url": "https://codetoflow.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=code-to-flow",
      "rating": 4.5,
      "reviewCount": 398
    },
    {
      "id": "289",
      "name": "ai-flow",
      "description": "Connect multiple AI models easily.",
      "url": "https://ai-flow.net",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-flow",
      "rating": 4.2,
      "reviewCount": 167
    },
    {
      "id": "290",
      "name": "architecture-helper",
      "description": "Analyze any building architecture, and generate your own custom styles, in seconds.",
      "url": "https://architecturehelper.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=architecture-helper",
      "rating": 4.3,
      "reviewCount": 189
    },
    {
      "id": "291",
      "name": "vocalreplica",
      "description": "AI-Powered Vocal and Instrumental Isolation for Your Favorite Tracks.",
      "url": "https://vocalreplica.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=vocalreplica",
      "rating": 4.4,
      "reviewCount": 256
    },
    {
      "id": "292",
      "name": "ai-wedding-toast",
      "description": "Generate a personalized wedding speech with AI.",
      "url": "https://aiweddingtoast.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-wedding-toast",
      "rating": 4.5,
      "reviewCount": 312
    },
    {
      "id": "293",
      "name": "interviews-chat",
      "description": "Your Personal Interview Prep & Copilot.",
      "url": "https://interviewschat.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=interviews-chat",
      "rating": 4.4,
      "reviewCount": 278
    },

    {
      "id": "294",
      "name": "context-data",
      "description": "Data Processing & ETL infrastructure for Generative AI applications. Streamlines data pipeline management and transformation processes for AI-powered solutions.",
      "url": "https://contextdata.com",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=context-data",
      "rating": 4.7,
      "reviewCount": 245
    },
    {
      "id": "295",
      "name": "ezjobs",
      "description": "Automated job search and applications platform that uses AI to streamline the job hunting process. Helps candidates find and apply to relevant positions efficiently.",
      "url": "https://ezjobs.com",
      "category": "Human Resources",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ezjobs",
      "rating": 4.5,
      "reviewCount": 389
    },
    {
      "id": "296",
      "name": "compass",
      "description": "AI driven answers to SaaS research questions. Provides intelligent insights and data-driven responses for software-as-a-service businesses and decision-making.",
      "url": "https://compass.com",
      "category": "Analytics",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=compass",
      "rating": 4.6,
      "reviewCount": 178
    },
    {
      "id": "297",
      "name": "adon-ai",
      "description": "CV screening automation and blind CV generator, AI backed ATS. Revolutionizes recruitment with automated resume screening and bias-free candidate evaluation.",
      "url": "https://adon.ai",
      "category": "Human Resources",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=adon-ai",
      "rating": 4.8,
      "reviewCount": 312
    },
    {
      "id": "298",
      "name": "persuva",
      "description": "AI-driven platform to create persuasive, high-converting ad copy at scale. Empowers marketers to generate compelling advertising content that drives results.",
      "url": "https://persuva.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=persuva",
      "rating": 4.7,
      "reviewCount": 456
    },
    {
      "id": "299",
      "name": "interview-solver",
      "description": "Ace your live coding interviews with our AI Copilot. Provides real-time assistance and guidance during technical interviews to improve success rates.",
      "url": "https://interviewsolver.com",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=interview-solver",
      "rating": 4.9,
      "reviewCount": 234
    },
    {
      "id": "300",
      "name": "socialsonic",
      "description": "AI LinkedIn Coach providing personalized content, trends & scheduling. Helps professionals optimize their LinkedIn presence and engagement strategy.",
      "url": "https://socialsonic.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=socialsonic",
      "rating": 4.5,
      "reviewCount": 567
    },
    {
      "id": "301",
      "name": "napkin",
      "description": "Turns your text into visuals so sharing your ideas is quick and effective. Transforms written content into engaging visual representations for better communication.",
      "url": "https://napkin.com",
      "category": "Graphic Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=napkin",
      "rating": 4.6,
      "reviewCount": 298
    },
    {
      "id": "302",
      "name": "exam-samurai",
      "description": "AI Exam Generator that creates comprehensive tests and assessments. Helps educators and trainers develop customized examinations efficiently.",
      "url": "https://examsamurai.com",
      "category": "Academia",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=exam-samurai",
      "rating": 4.4,
      "reviewCount": 189
    },
    {
      "id": "303",
      "name": "ai-watermark-remover",
      "description": "Remove watermarks from images and videos using advanced AI technology. Provides clean, professional media content for various applications.",
      "url": "https://aiwatermarkremover.com",
      "category": "Image",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-watermark-remover",
      "rating": 4.3,
      "reviewCount": 423
    },
    {
      "id": "304",
      "name": "aisaver",
      "description": "Collection of AI Powered Video and Photo Tools. Comprehensive suite for editing, enhancing, and transforming multimedia content with artificial intelligence.",
      "url": "https://aisaver.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=aisaver",
      "rating": 4.5,
      "reviewCount": 345
    },
    {
      "id": "305",
      "name": "harbor",
      "description": "Run LLM backends, APIs, frontends, and services with one command. Simplifies deployment and management of large language model applications.",
      "url": "https://harbor.com",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=harbor",
      "rating": 4.8,
      "reviewCount": 167
    },
    {
      "id": "306",
      "name": "langmagic",
      "description": "Learn languages from native content. AI-powered language learning platform that uses authentic materials to improve language skills naturally.",
      "url": "https://langmagic.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=langmagic",
      "rating": 4.6,
      "reviewCount": 278
    },
    {
      "id": "307",
      "name": "fynk",
      "description": "AI powered contract management software that streamlines legal document workflows. Automates contract creation, review, and management processes.",
      "url": "https://fynk.com",
      "category": "Productivity",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=fynk",
      "rating": 4.7,
      "reviewCount": 134
    },
    {
      "id": "308",
      "name": "looksmax-ai",
      "description": "Find out how attractive you are using AI. Provides objective beauty ratings and suggestions for appearance improvement based on facial analysis.",
      "url": "https://looksmaxai.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=looksmax-ai",
      "rating": 4.2,
      "reviewCount": 512
    },
    {
      "id": "309",
      "name": "taranify",
      "description": "Using AI, finds you Spotify playlists, Netflix shows, Books & Foods you'd enjoy when you don't exactly know what you want. Personalized content discovery.",
      "url": "https://taranify.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=taranify",
      "rating": 4.4,
      "reviewCount": 387
    },
    {
      "id": "310",
      "name": "diagram",
      "description": "Magical new ways to design products. AI-powered design platform that revolutionizes the product design process with intelligent tools and automation.",
      "url": "https://diagram.com",
      "category": "Graphic Design",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=diagram",
      "rating": 4.6,
      "reviewCount": 223
    },
    {
      "id": "311",
      "name": "promptbase",
      "description": "A marketplace for buying and selling quality prompts for DALL·E, GPT-3, Midjourney, Stable Diffusion. Connect prompt creators with AI users.",
      "url": "https://promptbase.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=promptbase",
      "rating": 4.5,
      "reviewCount": 445
    },
    {
      "id": "312",
      "name": "this-image-does-not-exist",
      "description": "Test your ability to tell if an image is human or computer generated. Educational tool for understanding AI-generated content detection.",
      "url": "https://thisimagedoesnotexist.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=this-image-does-not-exist",
      "rating": 4.3,
      "reviewCount": 289
    },
    {
      "id": "313",
      "name": "have-i-been-trained",
      "description": "Check if your image has been used to train popular AI art models. Helps artists and creators understand if their work has been used in AI training.",
      "url": "https://haveibeentrained.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=have-i-been-trained",
      "rating": 4.7,
      "reviewCount": 156
    },
    {
      "id": "314",
      "name": "ai-dungeon",
      "description": "A text-based adventure-story game you direct (and star in) while the AI brings it to life. Interactive storytelling powered by artificial intelligence.",
      "url": "https://aidungeon.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-dungeon",
      "rating": 4.6,
      "reviewCount": 678
    },
    {
      "id": "315",
      "name": "clickable",
      "description": "Generate ads in seconds with AI. Beautiful, brand-consistent, and highly converting ads for all marketing channels with automated design.",
      "url": "https://clickable.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=clickable",
      "rating": 4.8,
      "reviewCount": 534
    },
    {
      "id": "316",
      "name": "scale-spellbook",
      "description": "Build, compare, and deploy large language model apps with Scale Spellbook. Comprehensive platform for LLM application development and management.",
      "url": "https://scalespellbook.com",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=scale-spellbook",
      "rating": 4.7,
      "reviewCount": 198
    },
    {
      "id": "317",
      "name": "scenario",
      "description": "AI-generated gaming assets platform. Creates high-quality game art, characters, and environments using artificial intelligence for game developers.",
      "url": "https://scenario.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=scenario",
      "rating": 4.5,
      "reviewCount": 267
    },
    {
      "id": "318",
      "name": "teleprompter",
      "description": "An on-device AI for your meetings that listens to you and makes charismatic quote suggestions. Enhances presentation skills with real-time AI assistance.",
      "url": "https://teleprompter.com",
      "category": "Meeting Assistants",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=teleprompter",
      "rating": 4.4,
      "reviewCount": 312
    },
    {
      "id": "319",
      "name": "finchat",
      "description": "Using AI, FinChat generates answers to questions about public companies and investors. Financial research assistant for investment decision-making.",
      "url": "https://finchat.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=finchat",
      "rating": 4.6,
      "reviewCount": 234
    },
    {
      "id": "320",
      "name": "petals",
      "description": "BitTorrent style platform for running AI models in a distributed way. Enables collaborative AI model hosting and inference across multiple devices.",
      "url": "https://petals.com",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=petals",
      "rating": 4.8,
      "reviewCount": 145
    },
    {
      "id": "321",
      "name": "shotstack-workflows",
      "description": "No-code, automation workflow tool for building Generative AI media applications. Simplifies creation of AI-powered media processing pipelines.",
      "url": "https://shotstackworkflows.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=shotstack-workflows",
      "rating": 4.5,
      "reviewCount": 189
    },
    {
      "id": "322",
      "name": "aispect",
      "description": "New way to experience events with AI-powered enhancements. Transforms event participation through intelligent features and personalized experiences.",
      "url": "https://aispect.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=aispect",
      "rating": 4.3,
      "reviewCount": 167
    },
    {
      "id": "323",
      "name": "presspulse-ai",
      "description": "Get personalized media coverage leads every morning. AI-powered PR tool that identifies relevant media opportunities for businesses and brands.",
      "url": "https://presspulseai.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=presspulse-ai",
      "rating": 4.7,
      "reviewCount": 298
    },
    {
      "id": "324",
      "name": "gummysearch",
      "description": "AI-based customer research via Reddit. Discover problems to solve, sentiment on current solutions, and people who want to buy your product.",
      "url": "https://gummysearch.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=gummysearch",
      "rating": 4.6,
      "reviewCount": 356
    },
    {
      "id": "325",
      "name": "taplio",
      "description": "The all-in-one, AI-powered LinkedIn tool for content creation, scheduling, and engagement optimization. Comprehensive LinkedIn growth platform.",
      "url": "https://taplio.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=taplio",
      "rating": 4.8,
      "reviewCount": 489
    },
    {
      "id": "326",
      "name": "promptpal",
      "description": "Search for prompts and bots, then use them with your favorite AI. All in one place. Centralized platform for AI prompt discovery and management.",
      "url": "https://promptpal.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=promptpal",
      "rating": 4.4,
      "reviewCount": 278
    },
    {
      "id": "327",
      "name": "fairytailai",
      "description": "Personalized bedtime story generator that creates custom stories for children. AI-powered storytelling platform for engaging bedtime experiences.",
      "url": "https://fairytailai.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=fairytailai",
      "rating": 4.7,
      "reviewCount": 423
    },
    {
      "id": "328",
      "name": "myriad",
      "description": "Scale your content creation and get the best writing from ChatGPT, Copilot, and other AIs. Build and fine-tune prompts for any kind of content.",
      "url": "https://myriad.com",
      "category": "Writing Assistants",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=myriad",
      "rating": 4.6,
      "reviewCount": 334
    },
    {
      "id": "329",
      "name": "gradgpt",
      "description": "AI tools to simplify college applications. Review applications, draft essays, find universities and requirements and more for student success.",
      "url": "https://gradgpt.com",
      "category": "Academia",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=gradgpt",
      "rating": 4.5,
      "reviewCount": 267
    },
    {
      "id": "330",
      "name": "code-to-flow",
      "description": "Visualize, Analyze, and Understand Your Code flow. Turn Code into Interactive Flowcharts with AI. Simplify Complex Logic Instantly.",
      "url": "https://codetoflow.com",
      "category": "Code",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=code-to-flow",
      "rating": 4.8,
      "reviewCount": 198
    },
    {
      "id": "331",
      "name": "ai-flow",
      "description": "Connect multiple AI models easily with streamlined workflow management. Enables seamless integration and orchestration of various AI services.",
      "url": "https://aiflow.com",
      "category": "Developer Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-flow",
      "rating": 4.7,
      "reviewCount": 156
    },
    {
      "id": "332",
      "name": "architecture-helper",
      "description": "Analyze any building architecture, and generate your own custom styles, in seconds. AI-powered architectural design and analysis tool.",
      "url": "https://architecturehelper.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=architecture-helper",
      "rating": 4.4,
      "reviewCount": 189
    },
    {
      "id": "333",
      "name": "vocalreplica",
      "description": "AI-Powered Vocal and Instrumental Isolation for Your Favorite Tracks. Advanced audio separation technology for music production and analysis.",
      "url": "https://vocalreplica.com",
      "category": "Music",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=vocalreplica",
      "rating": 4.6,
      "reviewCount": 245
    },
    {
      "id": "334",
      "name": "ai-wedding-toast",
      "description": "Generate a personalized wedding speech with AI. Creates heartfelt and memorable wedding toasts tailored to your specific relationship and occasion.",
      "url": "https://aiweddingtoast.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-wedding-toast",
      "rating": 4.5,
      "reviewCount": 312
    },
    {
      "id": "335",
      "name": "harmonai",
      "description": "Community-driven organization releasing open-source generative audio tools to make music production more accessible and fun for everyone.",
      "url": "https://harmonai.com",
      "category": "Music",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=harmonai",
      "rating": 4.7,
      "reviewCount": 278
    },
    {
      "id": "336",
      "name": "mubert",
      "description": "A royalty-free music ecosystem for content creators, brands and developers. AI-generated music platform for various commercial applications.",
      "url": "https://mubert.com",
      "category": "Music",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=mubert",
      "rating": 4.6,
      "reviewCount": 445
    },
    {
      "id": "337",
      "name": "musiclm",
      "description": "A model by Google Research for generating high-fidelity music from text descriptions. Advanced AI music generation based on natural language prompts.",
      "url": "https://musiclm.com",
      "category": "Music",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=musiclm",
      "rating": 4.8,
      "reviewCount": 234
    },
    {
      "id": "338",
      "name": "eleven-labs",
      "description": "AI voice generator platform known for ultra-realistic voice cloning and emotion modeling. Sets new standards in AI-driven voice synthesis technology.",
      "url": "https://elevenlabs.com",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=eleven-labs",
      "rating": 4.9,
      "reviewCount": 567
    },
    {
      "id": "339",
      "name": "resemble-ai",
      "description": "AI voice generator and voice cloning for text to speech. Offers real-time voice synthesis with customization options for developers and creatives.",
      "url": "https://resembleai.com",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=resemble-ai",
      "rating": 4.7,
      "reviewCount": 389
    },
    {
      "id": "340",
      "name": "wellsaid",
      "description": "Convert text to voice in real time with natural-sounding voiceovers. Gaining traction for corporate training and e-learning applications.",
      "url": "https://wellsaid.com",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=wellsaid",
      "rating": 4.6,
      "reviewCount": 298
    },
    {
      "id": "341",
      "name": "play-ht",
      "description": "AI Voice Generator. Generate realistic Text to Speech voice over online with AI. Convert text to audio with high-quality voice synthesis.",
      "url": "https://play.ht",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=play-ht",
      "rating": 4.5,
      "reviewCount": 423
    },
    {
      "id": "342",
      "name": "coqui",
      "description": "Generative AI for Voice technology platform. Provides advanced voice synthesis and cloning capabilities for various applications and use cases.",
      "url": "https://coqui.com",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=coqui",
      "rating": 4.4,
      "reviewCount": 234
    },
    {
      "id": "343",
      "name": "podcast-ai",
      "description": "A podcast that is entirely generated by artificial intelligence, powered by Play.ht text-to-voice AI. Showcase of AI-generated audio content capabilities.",
      "url": "https://podcast.ai",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=podcast-ai",
      "rating": 4.3,
      "reviewCount": 178
    },
    {
      "id": "344",
      "name": "vall-e-x",
      "description": "A cross-lingual neural codec language model for cross-lingual speech synthesis. Advanced AI system for generating speech across multiple languages.",
      "url": "https://vallx.com",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=vall-e-x",
      "rating": 4.7,
      "reviewCount": 156
    },
    {
      "id": "345",
      "name": "tortoise",
      "description": "A multi-voice text-to-speech system trained with an emphasis on quality. Open-source TTS platform delivering high-fidelity voice synthesis.",
      "url": "https://tortoise.com",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=tortoise",
      "rating": 4.6,
      "reviewCount": 234
    },
    {
      "id": "346",
      "name": "bark",
      "description": "A transformer-based text-to-audio model. Open-source platform for generating diverse audio content from text descriptions with AI.",
      "url": "https://bark.com",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=bark",
      "rating": 4.5,
      "reviewCount": 289
    },
    {
      "id": "347",
      "name": "custompod-io",
      "description": "Generate daily news podcasts only on the topics you care about. Personalized podcast creation platform using AI for content curation.",
      "url": "https://custompod.io",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=custompod-io",
      "rating": 4.4,
      "reviewCount": 198
    },
    {
      "id": "348",
      "name": "aicaller-io",
      "description": "Simple-to-use automated bulk calling solution that uses Generative AI technology to trigger phone calls for lead qualification and data gathering.",
      "url": "https://aicaller.io",
      "category": "Phone Calls",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=aicaller-io",
      "rating": 4.6,
      "reviewCount": 167
    },
    {
      "id": "349",
      "name": "cald-ai",
      "description": "AI based calling agents for outbound and inbound phone calls. Automated phone communication system with intelligent conversation capabilities.",
      "url": "https://cald.ai",
      "category": "Phone Calls",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=cald-ai",
      "rating": 4.5,
      "reviewCount": 223
    },
    {
      "id": "350",
      "name": "rosie",
      "description": "AI Phone Answering Service that provides intelligent call handling and customer support automation for businesses of all sizes.",
      "url": "https://rosie.com",
      "category": "Phone Calls",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=rosie",
      "rating": 4.7,
      "reviewCount": 345
    },
    {
      "id": "351",
      "name": "jasper-ai",
      "description": "AI-powered tool for generating marketing content like blogs, emails, and ad copy. Comprehensive content creation platform for marketers and businesses.",
      "url": "https://jasper.ai",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=jasper-ai",
      "rating": 4.8,
      "reviewCount": 892
    },
    {
      "id": "352",
      "name": "mutiny",
      "description": "Personalization platform to improve website conversions using AI. Optimizes web experiences through intelligent content customization and testing.",
      "url": "https://mutiny.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=mutiny",
      "rating": 4.6,
      "reviewCount": 456
    },
    {
      "id": "353",
      "name": "clearbit",
      "description": "Lead enrichment and data intelligence platform that provides comprehensive business and contact information for sales and marketing teams.",
      "url": "https://clearbit.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=clearbit",
      "rating": 4.7,
      "reviewCount": 623
    },
    {
      "id": "354",
      "name": "seventh-sense",
      "description": "AI tool for email send time optimization that analyzes recipient behavior to determine the best times to send marketing emails.",
      "url": "https://seventhsense.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=seventh-sense",
      "rating": 4.5,
      "reviewCount": 234
    },
    {
      "id": "355",
      "name": "smartly-io",
      "description": "Automates social media ad creation and optimization across multiple platforms. AI-driven advertising solution for performance marketing.",
      "url": "https://smartly.io",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=smartly-io",
      "rating": 4.6,
      "reviewCount": 378
    },
    {
      "id": "356",
      "name": "adzooma",
      "description": "AI-powered PPC campaign management platform that optimizes Google Ads, Facebook Ads, and Microsoft Ads for better performance and ROI.",
      "url": "https://adzooma.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=adzooma",
      "rating": 4.4,
      "reviewCount": 289
    },
    {
      "id": "357",
      "name": "phrasee",
      "description": "AI tool that generates optimized marketing copy for email subject lines, social media posts, and advertising campaigns to improve engagement.",
      "url": "https://phrasee.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=phrasee",
      "rating": 4.7,
      "reviewCount": 345
    },
    {
      "id": "358",
      "name": "crimson-hexagon",
      "description": "AI-based social media sentiment analysis platform that provides insights into brand perception and market trends through social listening.",
      "url": "https://crimsonhexagon.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=crimson-hexagon",
      "rating": 4.5,
      "reviewCount": 198
    },
    {
      "id": "359",
      "name": "marketmuse",
      "description": "SEO content optimization platform using AI to analyze content gaps, suggest topics, and improve search engine rankings through data-driven insights.",
      "url": "https://marketmuse.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=marketmuse",
      "rating": 4.6,
      "reviewCount": 412
    },
    {
      "id": "360",
      "name": "chatfuel",
      "description": "AI-driven chatbot for automating customer engagement on Messenger. No-code platform for building intelligent conversational experiences.",
      "url": "https://chatfuel.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=chatfuel",
      "rating": 4.4,
      "reviewCount": 567
    },
    {
      "id": "361",
      "name": "logicballs",
      "description": "An AI-powered writing tool to create any type of content and supercharge your productivity. Versatile content generation platform for various use cases.",
      "url": "https://logicballs.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=logicballs",
      "rating": 4.5,
      "reviewCount": 298
    },
    {
      "id": "362",
      "name": "rupert-ai",
      "description": "AI tools for designers and marketers that streamline creative workflows and enhance productivity through intelligent automation and assistance.",
      "url": "https://rupert.ai",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=rupert-ai",
      "rating": 4.3,
      "reviewCount": 156
    },
    {
      "id": "363",
      "name": "personaforce",
      "description": "Create and chat with AI buyer personas for smarter marketing. Develop detailed customer profiles and test marketing strategies with AI personas.",
      "url": "https://personaforce.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=personaforce",
      "rating": 4.6,
      "reviewCount": 234
    },
    {
      "id": "364",
      "name": "splash-pro",
      "description": "A versatile platform offering intuitive music creation tools for all skill levels. AI-powered music generation with professional-quality output.",
      "url": "https://splashpro.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=splash-pro",
      "rating": 4.7,
      "reviewCount": 389
    },
    {
      "id": "365",
      "name": "aiva",
      "description": "AI composer specializing in classical and cinematic music creation. Professional music composition platform for film, games, and media.",
      "url": "https://aiva.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=aiva",
      "rating": 4.8,
      "reviewCount": 445
    },
    {
      "id": "366",
      "name": "soundraw",
      "description": "Allows users to customize music compositions based on mood and style. AI music generation platform with extensive customization options.",
      "url": "https://soundraw.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=soundraw",
      "rating": 4.5,
      "reviewCount": 312
    },
    {
      "id": "367",
      "name": "beatoven-ai",
      "description": "AI-driven music generation focused on evoking specific emotions. Creates mood-appropriate background music for videos and content.",
      "url": "https://beatoven.ai",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=beatoven-ai",
      "rating": 4.6,
      "reviewCount": 267
    },
    {
      "id": "368",
      "name": "boomy",
      "description": "Democratizes music creation with quick track generation and monetization. AI music platform that enables anyone to create and distribute music.",
      "url": "https://boomy.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=boomy",
      "rating": 4.4,
      "reviewCount": 523
    },
    {
      "id": "369",
      "name": "ecrett-music",
      "description": "Designed for video creators, offering royalty-free music generation. AI-powered background music creation for content creators and filmmakers.",
      "url": "https://ecrettmusic.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ecrett-music",
      "rating": 4.5,
      "reviewCount": 298
    },
    {
      "id": "370",
      "name": "loudly",
      "description": "Combines AI music generation with a social platform for collaboration. Community-driven music creation with AI-powered composition tools.",
      "url": "https://loudly.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=loudly",
      "rating": 4.3,
      "reviewCount": 189
    },
    {
      "id": "371",
      "name": "soundful",
      "description": "High-quality, royalty-free music for content creators. AI music generation platform focused on professional-grade tracks for commercial use.",
      "url": "https://soundful.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=soundful",
      "rating": 4.6,
      "reviewCount": 356
    },
    {
      "id": "372",
      "name": "descript-overdub",
      "description": "Seamlessly integrates with Descript's transcription and editing tools, ideal for content creators needing quick voiceovers with AI voice cloning.",
      "url": "https://descript.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=descript-overdub",
      "rating": 4.8,
      "reviewCount": 634
    },
    {
      "id": "373",
      "name": "respeecher",
      "description": "A professional tool widely used in the entertainment industry to create emotion-rich, realistic voice clones for films and media production.",
      "url": "https://respeecher.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=respeecher",
      "rating": 4.7,
      "reviewCount": 287
    },
    {
      "id": "374",
      "name": "murf-ai",
      "description": "User-friendly platform for quick, high-quality voiceovers, favored for commercial and marketing applications with extensive voice library.",
      "url": "https://murf.ai",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=murf-ai",
      "rating": 4.6,
      "reviewCount": 578
    },
    {
      "id": "375",
      "name": "ispeech",
      "description": "A versatile solution for corporate applications with support for a wide array of languages and voices for global business needs.",
      "url": "https://ispeech.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ispeech",
      "rating": 4.4,
      "reviewCount": 234
    },
    {
      "id": "376",
      "name": "veritone-voice",
      "description": "Focuses on maintaining brand consistency with highly customizable voice cloning used in media and entertainment industry applications.",
      "url": "https://veritone.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=veritone-voice",
      "rating": 4.5,
      "reviewCount": 189
    },
    {
      "id": "377",
      "name": "microsoft-azure-neural-tts",
      "description": "Scalable and highly customizable text-to-speech service, ideal for integration into enterprise applications with robust cloud infrastructure.",
      "url": "https://azure.microsoft.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=microsoft-azure-neural-tts",
      "rating": 4.7,
      "reviewCount": 445
    },
    {
      "id": "378",
      "name": "wellsaid-labs",
      "description": "Gaining traction for its natural-sounding voiceovers, particularly in corporate training and e-learning applications with professional quality.",
      "url": "https://wellsaidlabs.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=wellsaid-labs",
      "rating": 4.6,
      "reviewCount": 312
    },
    {
      "id": "379",
      "name": "lovo-ai",
      "description": "A compelling choice for creative professionals, especially useful in ads and explainer videos with emotion-rich voice synthesis capabilities.",
      "url": "https://lovo.ai",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=lovo-ai",
      "rating": 4.5,
      "reviewCount": 398
    },
    {
      "id": "380",
      "name": "zenmic-com",
      "description": "An app to generate podcast episodes (script + Audio) using AI. Complete podcast production solution with automated content creation.",
      "url": "https://zenmic.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=zenmic-com",
      "rating": 4.4,
      "reviewCount": 167
    },
    {
      "id": "381",
      "name": "runwayml",
      "description": "Magical AI tools, realtime collaboration, precision editing, and more. Your next-generation content creation suite for video production.",
      "url": "https://runwayml.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=runwayml",
      "rating": 4.8,
      "reviewCount": 789
    },
    {
      "id": "382",
      "name": "synthesia",
      "description": "Create videos from plain text in minutes using AI avatars. Professional video creation platform with synthetic presenters and multilingual support.",
      "url": "https://synthesia.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=synthesia",
      "rating": 4.7,
      "reviewCount": 567
    },
    {
      "id": "383",
      "name": "rephrase-ai",
      "description": "Rephrase's technology enables hyper-personalized video creation at scale that drive engagement and business efficiencies through AI avatars.",
      "url": "https://rephrase.ai",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=rephrase-ai",
      "rating": 4.6,
      "reviewCount": 234
    },
    {
      "id": "384",
      "name": "hour-one",
      "description": "Turn text into video, featuring virtual presenters, automatically. AI-powered video generation with realistic human avatars for business content.",
      "url": "https://hourone.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=hour-one",
      "rating": 4.5,
      "reviewCount": 298
    },
    {
      "id": "385",
      "name": "d-id",
      "description": "Create and interact with talking avatars at the touch of a button. Advanced AI technology for generating realistic talking head videos.",
      "url": "https://d-id.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=d-id",
      "rating": 4.6,
      "reviewCount": 445
    },
    {
      "id": "386",
      "name": "shortvideogen",
      "description": "Create short videos with audio using text prompts. AI-powered platform for generating engaging short-form video content for social media.",
      "url": "https://shortvideogen.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=shortvideogen",
      "rating": 4.4,
      "reviewCount": 189
    },
    {
      "id": "387",
      "name": "clipwing",
      "description": "A tool for cutting long videos into dozens of short clips. AI-powered video editing platform for creating social media content from longer videos.",
      "url": "https://clipwing.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=clipwing",
      "rating": 4.3,
      "reviewCount": 267
    },
    {
      "id": "388",
      "name": "recast-studio",
      "description": "AI powered podcast marketing assistant that transforms podcast content into various marketing materials and social media content automatically.",
      "url": "https://recaststudio.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=recast-studio",
      "rating": 4.5,
      "reviewCount": 156
    },
    {
      "id": "389",
      "name": "based-ai",
      "description": "AI Intuitive Interface for Video creating that simplifies the video production process with intelligent automation and user-friendly tools.",
      "url": "https://based.ai",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=based-ai",
      "rating": 4.4,
      "reviewCount": 223
    },
    {
      "id": "390",
      "name": "stable-horde",
      "description": "A crowdsourced distributed cluster of Stable Diffusion workers that enables free AI image generation through community-powered computing resources.",
      "url": "https://stablehorde.com",
      "category": "Stable Diffusion Resources",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=stable-horde",
      "rating": 4.6,
      "reviewCount": 345
    },
    {
      "id": "391",
      "name": "diffusiondb",
      "description": "A comprehensive list of all public apps, developer tools, guides and plugins for Stable Diffusion with extensive resource collection.",
      "url": "https://diffusiondb.com",
      "category": "Stable Diffusion Resources",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=diffusiondb",
      "rating": 4.5,
      "reviewCount": 234
    },
    {
      "id": "392",
      "name": "publicprompts",
      "description": "A collection of free prompts for Stable Diffusion that helps users generate better AI images with tested and optimized prompt templates.",
      "url": "https://publicprompts.com",
      "category": "Stable Diffusion Resources",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=publicprompts",
      "rating": 4.4,
      "reviewCount": 178
    },
    {
      "id": "393",
      "name": "stableboost",
      "description": "Stableboost is a Stable Diffusion WebUI that lets you quickly generate a lot of images so you can find the perfect ones efficiently.",
      "url": "https://stableboost.com",
      "category": "Stable Diffusion Resources",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=stableboost",
      "rating": 4.3,
      "reviewCount": 289
    },

    {
      "id": "394",
      "name": "hugging-face-diffusion-models-course",
      "description": "Python materials for the online course on diffusion models by Hugging Face. Comprehensive learning resource for understanding and implementing diffusion models.",
      "url": "https://huggingface.co/course/diffusion",
      "category": "Education",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=hugging-face-diffusion-models-course",
      "rating": 4.7,
      "reviewCount": 285
    },
    {
      "id": "395",
      "name": "runwayml",
      "description": "Magical AI tools, realtime collaboration, precision editing, and more. Your next-generation content creation suite for video production.",
      "url": "https://runwayml.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=runwayml",
      "rating": 4.6,
      "reviewCount": 1247
    },
    {
      "id": "396",
      "name": "synthesia",
      "description": "Create videos from plain text in minutes. AI-powered video generation platform with virtual presenters and automated video creation.",
      "url": "https://synthesia.io",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=synthesia",
      "rating": 4.5,
      "reviewCount": 892
    },
    {
      "id": "397",
      "name": "rephrase-ai",
      "description": "Rephrase's technology enables hyper-personalized video creation at scale that drive engagement and business efficiencies.",
      "url": "https://rephrase.ai",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=rephrase-ai",
      "rating": 4.4,
      "reviewCount": 567
    },
    {
      "id": "398",
      "name": "hour-one",
      "description": "Turn text into video, featuring virtual presenters, automatically. AI-powered video generation with realistic avatars.",
      "url": "https://hourone.ai",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=hour-one",
      "rating": 4.3,
      "reviewCount": 423
    },
    {
      "id": "399",
      "name": "d-id",
      "description": "Create and interact with talking avatars at the touch of a button. AI-powered avatar creation and animation platform.",
      "url": "https://d-id.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=d-id",
      "rating": 4.2,
      "reviewCount": 678
    },
    {
      "id": "400",
      "name": "shortvideogen",
      "description": "Create short videos with audio using text prompts. AI-powered short-form video content generation tool.",
      "url": "https://shortvideogen.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=shortvideogen",
      "rating": 4.1,
      "reviewCount": 234
    },
    {
      "id": "401",
      "name": "clipwing",
      "description": "A tool for cutting long videos into dozens of short clips. AI-powered video editing and content repurposing platform.",
      "url": "https://clipwing.com",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=clipwing",
      "rating": 4.0,
      "reviewCount": 345
    },
    {
      "id": "402",
      "name": "recast-studio",
      "description": "AI powered podcast marketing assistant. Transform long-form content into engaging social media clips and marketing materials.",
      "url": "https://recast.studio",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=recast-studio",
      "rating": 4.5,
      "reviewCount": 456
    },
    {
      "id": "403",
      "name": "based-ai",
      "description": "AI Intuitive Interface for Video creating. Streamlined video production with intelligent automation and user-friendly interface.",
      "url": "https://based.ai",
      "category": "Video",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=based-ai",
      "rating": 4.2,
      "reviewCount": 189
    },
    {
      "id": "404",
      "name": "descript-overdub",
      "description": "Seamlessly integrates with Descript's transcription and editing tools, ideal for content creators needing quick voiceovers.",
      "url": "https://descript.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=descript-overdub",
      "rating": 4.7,
      "reviewCount": 1234
    },
    {
      "id": "405",
      "name": "respeecher",
      "description": "A professional tool widely used in the entertainment industry to create emotion-rich, realistic voice clones.",
      "url": "https://respeecher.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=respeecher",
      "rating": 4.8,
      "reviewCount": 987
    },
    {
      "id": "406",
      "name": "elevenlabs",
      "description": "Known for ultra-realistic voice cloning and emotion modeling, setting a new standard in AI-driven voice synthesis.",
      "url": "https://elevenlabs.io",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=elevenlabs",
      "rating": 4.9,
      "reviewCount": 2156
    },
    {
      "id": "407",
      "name": "resemble-ai",
      "description": "Offers real-time voice synthesis with customization options, making it versatile for both developers and creatives.",
      "url": "https://resemble.ai",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=resemble-ai",
      "rating": 4.6,
      "reviewCount": 743
    },
    {
      "id": "408",
      "name": "murf-ai",
      "description": "User-friendly platform for quick, high-quality voiceovers, favored for commercial and marketing applications.",
      "url": "https://murf.ai",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=murf-ai",
      "rating": 4.5,
      "reviewCount": 1567
    },
    {
      "id": "409",
      "name": "ispeech",
      "description": "A versatile solution for corporate applications with support for a wide array of languages and voices.",
      "url": "https://ispeech.org",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ispeech",
      "rating": 4.3,
      "reviewCount": 432
    },
    {
      "id": "410",
      "name": "veritone-voice",
      "description": "Focuses on maintaining brand consistency with highly customizable voice cloning used in media and entertainment.",
      "url": "https://veritone.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=veritone-voice",
      "rating": 4.4,
      "reviewCount": 298
    },
    {
      "id": "411",
      "name": "microsoft-azure-neural-tts",
      "description": "Scalable and highly customizable, ideal for integration into enterprise applications.",
      "url": "https://azure.microsoft.com/services/cognitive-services/text-to-speech/",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=microsoft-azure-neural-tts",
      "rating": 4.6,
      "reviewCount": 876
    },
    {
      "id": "412",
      "name": "wellsaid-labs",
      "description": "Gaining traction for its natural-sounding voiceovers, particularly in corporate training and e-learning.",
      "url": "https://wellsaidlabs.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=wellsaid-labs",
      "rating": 4.5,
      "reviewCount": 654
    },
    {
      "id": "413",
      "name": "lovo-ai",
      "description": "A compelling choice for creative professionals, especially useful in ads and explainer videos.",
      "url": "https://lovo.ai",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=lovo-ai",
      "rating": 4.4,
      "reviewCount": 789
    },
    {
      "id": "414",
      "name": "zenmic",
      "description": "An app to generate podcast episode (script + Audio) using AI. Complete podcast production automation tool.",
      "url": "https://zenmic.com",
      "category": "AI Voice Cloning",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=zenmic",
      "rating": 4.2,
      "reviewCount": 156
    },
    {
      "id": "415",
      "name": "splash-pro",
      "description": "A versatile platform offering intuitive music creation tools for all skill levels. AI-powered music generation and composition.",
      "url": "https://splashpro.ai",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=splash-pro",
      "rating": 4.3,
      "reviewCount": 467
    },
    {
      "id": "416",
      "name": "aiva",
      "description": "AI composer specializing in classical and cinematic music creation. Professional-grade composition tool.",
      "url": "https://aiva.ai",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=aiva",
      "rating": 4.6,
      "reviewCount": 923
    },
    {
      "id": "417",
      "name": "mubert",
      "description": "Real-time generative music tailored for different use cases. Royalty-free music ecosystem for content creators.",
      "url": "https://mubert.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=mubert",
      "rating": 4.4,
      "reviewCount": 712
    },
    {
      "id": "418",
      "name": "soundraw",
      "description": "Allows users to customize music compositions based on mood and style. AI-driven music creation platform.",
      "url": "https://soundraw.io",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=soundraw",
      "rating": 4.5,
      "reviewCount": 834
    },
    {
      "id": "419",
      "name": "beatoven-ai",
      "description": "AI-driven music generation focused on evoking specific emotions. Mood-based music composition tool.",
      "url": "https://beatoven.ai",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=beatoven-ai",
      "rating": 4.3,
      "reviewCount": 456
    },
    {
      "id": "420",
      "name": "boomy",
      "description": "Democratizes music creation with quick track generation and monetization. AI music creation for everyone.",
      "url": "https://boomy.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=boomy",
      "rating": 4.2,
      "reviewCount": 1123
    },
    {
      "id": "421",
      "name": "ecrett-music",
      "description": "Designed for video creators, offering royalty-free music. AI music generation tailored for content creation.",
      "url": "https://ecrettmusic.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ecrett-music",
      "rating": 4.4,
      "reviewCount": 567
    },
    {
      "id": "422",
      "name": "loudly",
      "description": "Combines AI music generation with a social platform for collaboration. Community-driven music creation.",
      "url": "https://loudly.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=loudly",
      "rating": 4.1,
      "reviewCount": 289
    },
    {
      "id": "423",
      "name": "soundful",
      "description": "High-quality, royalty-free music for content creators. Professional AI music generation platform.",
      "url": "https://soundful.com",
      "category": "AI Music Generators",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=soundful",
      "rating": 4.5,
      "reviewCount": 678
    },
    {
      "id": "424",
      "name": "jasper-ai-marketing",
      "description": "AI-powered tool for generating marketing content like blogs, emails, and ad copy. Comprehensive marketing content creation.",
      "url": "https://jasper.ai",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=jasper-ai-marketing",
      "rating": 4.7,
      "reviewCount": 2456
    },
    {
      "id": "425",
      "name": "mutiny",
      "description": "Personalization platform to improve website conversions using AI. Smart website optimization and personalization.",
      "url": "https://mutinyhq.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=mutiny",
      "rating": 4.5,
      "reviewCount": 789
    },
    {
      "id": "426",
      "name": "clearbit",
      "description": "Lead enrichment and data intelligence platform. AI-powered customer data and lead generation tool.",
      "url": "https://clearbit.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=clearbit",
      "rating": 4.6,
      "reviewCount": 1234
    },
    {
      "id": "427",
      "name": "seventh-sense",
      "description": "AI tool for email send time optimization. Intelligent email timing for better engagement rates.",
      "url": "https://seventhsense.ai",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=seventh-sense",
      "rating": 4.3,
      "reviewCount": 456
    },
    {
      "id": "428",
      "name": "smartly-io",
      "description": "Automates social media ad creation and optimization. AI-powered social media advertising platform.",
      "url": "https://smartly.io",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=smartly-io",
      "rating": 4.4,
      "reviewCount": 892
    },
    {
      "id": "429",
      "name": "adzooma",
      "description": "AI-powered PPC campaign management platform. Automated pay-per-click advertising optimization.",
      "url": "https://adzooma.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=adzooma",
      "rating": 4.2,
      "reviewCount": 634
    },
    {
      "id": "430",
      "name": "phrasee",
      "description": "AI tool that generates optimized marketing copy. Language optimization for email and advertising campaigns.",
      "url": "https://phrasee.co",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=phrasee",
      "rating": 4.5,
      "reviewCount": 567
    },
    {
      "id": "431",
      "name": "crimson-hexagon",
      "description": "AI-based social media sentiment analysis platform. Advanced social listening and brand monitoring tool.",
      "url": "https://crimsonhexagon.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=crimson-hexagon",
      "rating": 4.3,
      "reviewCount": 423
    },
    {
      "id": "432",
      "name": "marketmuse",
      "description": "SEO content optimization platform using AI. Content strategy and optimization for better search rankings.",
      "url": "https://marketmuse.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=marketmuse",
      "rating": 4.6,
      "reviewCount": 987
    },
    {
      "id": "433",
      "name": "chatfuel",
      "description": "AI-driven chatbot for automating customer engagement on Messenger. No-code chatbot creation platform.",
      "url": "https://chatfuel.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=chatfuel",
      "rating": 4.4,
      "reviewCount": 1456
    },
    {
      "id": "434",
      "name": "logicballs",
      "description": "An AI-powered writing tool to create any type of content and supercharge your productivity. Versatile content generation platform.",
      "url": "https://logicballs.com",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=logicballs",
      "rating": 4.2,
      "reviewCount": 234
    },
    {
      "id": "435",
      "name": "rupert-ai",
      "description": "AI tools for designers and marketers. Creative automation and design assistance platform.",
      "url": "https://rupert.ai",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=rupert-ai",
      "rating": 4.1,
      "reviewCount": 189
    },
    {
      "id": "436",
      "name": "personaforce",
      "description": "Create and chat with AI buyer personas for smarter marketing. AI-powered customer persona development tool.",
      "url": "https://personaforce.ai",
      "category": "Marketing AI Tools",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=personaforce",
      "rating": 4.3,
      "reviewCount": 345
    },
    {
      "id": "437",
      "name": "aicaller-io",
      "description": "AICaller is a simple-to-use automated bulk calling solution that uses the latest Generative AI technology to trigger phone calls for you and get things done.",
      "url": "https://aicaller.io",
      "category": "Phone Calls",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=aicaller-io",
      "rating": 4.0,
      "reviewCount": 156
    },
    {
      "id": "438",
      "name": "cald-ai",
      "description": "AI based calling agents for outbound and inbound phone calls. Intelligent phone automation and call management.",
      "url": "https://cald.ai",
      "category": "Phone Calls",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=cald-ai",
      "rating": 4.2,
      "reviewCount": 278
    },
    {
      "id": "439",
      "name": "rosie-ai",
      "description": "AI Phone Answering Service. Automated phone reception and customer service solution.",
      "url": "https://rosie.ai",
      "category": "Phone Calls",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=rosie-ai",
      "rating": 4.1,
      "reviewCount": 167
    },
    {
      "id": "440",
      "name": "eleven-labs-speech",
      "description": "AI voice generator. High-quality text-to-speech and voice synthesis technology.",
      "url": "https://elevenlabs.io",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=eleven-labs-speech",
      "rating": 4.8,
      "reviewCount": 1567
    },
    {
      "id": "441",
      "name": "resemble-ai-speech",
      "description": "AI voice generator and voice cloning for text to speech. Advanced voice synthesis and cloning platform.",
      "url": "https://resemble.ai",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=resemble-ai-speech",
      "rating": 4.6,
      "reviewCount": 892
    },
    {
      "id": "442",
      "name": "wellsaid",
      "description": "Convert text to voice in real time. Professional text-to-speech conversion with natural-sounding voices.",
      "url": "https://wellsaidlabs.com",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=wellsaid",
      "rating": 4.5,
      "reviewCount": 723
    },
    {
      "id": "443",
      "name": "play-ht",
      "description": "AI Voice Generator. Generate realistic Text to Speech voice over online with AI. Convert text to audio with high-quality results.",
      "url": "https://play.ht",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=play-ht",
      "rating": 4.7,
      "reviewCount": 1234
    },

    {
      "id": "444",
      "name": "coqui",
      "description": "Generative AI for Voice. Open-source deep learning toolkit for text-to-speech and voice synthesis applications.",
      "url": "https://coqui.ai",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=coqui",
      "rating": 4.4,
      "reviewCount": 456
    },
    {
      "id": "445",
      "name": "podcast-ai",
      "description": "A podcast that is entirely generated by artificial intelligence, powered by Play.ht text-to-voice AI. AI-generated podcast content.",
      "url": "https://podcast.ai",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=podcast-ai",
      "rating": 4.2,
      "reviewCount": 234
    },
    {
      "id": "446",
      "name": "vall-e-x",
      "description": "A cross-lingual neural codec language model for cross-lingual speech synthesis. Advanced multilingual voice synthesis.",
      "url": "https://vallex-demo.github.io",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=vall-e-x",
      "rating": 4.3,
      "reviewCount": 167
    },
    {
      "id": "447",
      "name": "tortoise-tts",
      "description": "A multi-voice text-to-speech system trained with an emphasis on quality. Open-source high-quality voice synthesis.",
      "url": "https://github.com/neonbjb/tortoise-tts",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=tortoise-tts",
      "rating": 4.5,
      "reviewCount": 789
    },
    {
      "id": "448",
      "name": "bark",
      "description": "A transformer-based text-to-audio model. Open-source AI for generating speech, music, and sound effects.",
      "url": "https://github.com/suno-ai/bark",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=bark",
      "rating": 4.6,
      "reviewCount": 923
    },
    {
      "id": "449",
      "name": "custompod-io",
      "description": "Generate daily news podcasts only on the topics you care about. Personalized AI-generated news content.",
      "url": "https://custompod.io",
      "category": "Speech",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=custompod-io",
      "rating": 4.1,
      "reviewCount": 145
    },
    {
      "id": "450",
      "name": "harmonai",
      "description": "We are a community-driven organization releasing open-source generative audio tools to make music production more accessible and fun for everyone.",
      "url": "https://harmonai.org",
      "category": "Music",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=harmonai",
      "rating": 4.3,
      "reviewCount": 567
    },
    {
      "id": "451",
      "name": "mubert-music",
      "description": "A royalty-free music ecosystem for content creators, brands and developers. AI-powered music generation platform.",
      "url": "https://mubert.com",
      "category": "Music",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=mubert-music",
      "rating": 4.4,
      "reviewCount": 892
    },
    {
      "id": "452",
      "name": "musiclm",
      "description": "A model by Google Research for generating high-fidelity music from text descriptions. Advanced AI music composition.",
      "url": "https://google-research.github.io/musiclm/",
      "category": "Music",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=musiclm",
      "rating": 4.7,
      "reviewCount": 1234
    },
    {
      "id": "453",
      "name": "taranify",
      "description": "Using AI, Taranify finds you Spotify playlists, Netflix shows, Books & Foods you'd enjoy when you don't exactly know what you want.",
      "url": "https://taranify.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=taranify",
      "rating": 4.2,
      "reviewCount": 345
    },
    {
      "id": "454",
      "name": "diagram",
      "description": "Magical new ways to design products. AI-powered design tools and creative workflow automation.",
      "url": "https://diagram.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=diagram",
      "rating": 4.5,
      "reviewCount": 678
    },
    {
      "id": "455",
      "name": "promptbase",
      "description": "A marketplace for buying and selling quality prompts for DALL·E, GPT-3, Midjourney, Stable Diffusion.",
      "url": "https://promptbase.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=promptbase",
      "rating": 4.3,
      "reviewCount": 1456
    },
    {
      "id": "456",
      "name": "this-image-does-not-exist",
      "description": "Test your ability to tell if an image is human or computer generated. AI detection training and awareness tool.",
      "url": "https://this-image-does-not-exist.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=this-image-does-not-exist",
      "rating": 4.1,
      "reviewCount": 234
    },
    {
      "id": "457",
      "name": "have-i-been-trained",
      "description": "Check if your image has been used to train popular AI art models. AI training data transparency tool.",
      "url": "https://haveibeentrained.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=have-i-been-trained",
      "rating": 4.0,
      "reviewCount": 167
    },
    {
      "id": "458",
      "name": "ai-dungeon",
      "description": "A text-based adventure-story game you direct (and star in) while the AI brings it to life. Interactive AI storytelling.",
      "url": "https://aidungeon.io",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-dungeon",
      "rating": 4.4,
      "reviewCount": 2345
    },
    {
      "id": "459",
      "name": "clickable",
      "description": "Generate ads in seconds with AI. Beautiful, brand-consistent, and highly converting ads for all marketing channels.",
      "url": "https://clickable.so",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=clickable",
      "rating": 4.3,
      "reviewCount": 789
    },
    {
      "id": "460",
      "name": "scale-spellbook",
      "description": "Build, compare, and deploy large language model apps with Scale Spellbook. LLM application development platform.",
      "url": "https://scale.com/spellbook",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=scale-spellbook",
      "rating": 4.5,
      "reviewCount": 456
    },
    {
      "id": "461",
      "name": "scenario",
      "description": "AI-generated gaming assets. Create game art, characters, and environments with artificial intelligence.",
      "url": "https://scenario.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=scenario",
      "rating": 4.2,
      "reviewCount": 567
    },
    {
      "id": "462",
      "name": "teleprompter",
      "description": "An on-device AI for your meetings that listens to you and makes charismatic quote suggestions. AI meeting assistant.",
      "url": "https://teleprompter.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=teleprompter",
      "rating": 4.1,
      "reviewCount": 234
    },
    {
      "id": "463",
      "name": "finchat",
      "description": "Using AI, FinChat generates answers to questions about public companies and investors. Financial AI assistant.",
      "url": "https://finchat.io",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=finchat",
      "rating": 4.4,
      "reviewCount": 892
    },
    {
      "id": "464",
      "name": "petals",
      "description": "BitTorrent style platform for running AI models in a distributed way. Decentralized AI model hosting.",
      "url": "https://petals.ml",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=petals",
      "rating": 4.3,
      "reviewCount": 345
    },
    {
      "id": "465",
      "name": "shotstack-workflows",
      "description": "No-code, automation workflow tool for building Generative AI media applications. Video automation platform.",
      "url": "https://shotstack.io",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=shotstack-workflows",
      "rating": 4.2,
      "reviewCount": 456
    },
    {
      "id": "466",
      "name": "aispect",
      "description": "New way to experience events. AI-powered event management and experience platform.",
      "url": "https://aispect.io",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=aispect",
      "rating": 4.0,
      "reviewCount": 123
    },
    {
      "id": "467",
      "name": "presspulse-ai",
      "description": "Get personalized media coverage leads every morning. AI-powered PR and media outreach tool.",
      "url": "https://presspulse.ai",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=presspulse-ai",
      "rating": 4.1,
      "reviewCount": 234
    },
    {
      "id": "468",
      "name": "gummysearch",
      "description": "AI-based customer research via Reddit. Discover problems to solve, sentiment on current solutions, and people who want to buy your product.",
      "url": "https://gummysearch.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=gummysearch",
      "rating": 4.3,
      "reviewCount": 567
    },
    {
      "id": "469",
      "name": "taplio",
      "description": "The all-in-one, AI-powered LinkedIn tool. LinkedIn automation and content creation platform.",
      "url": "https://taplio.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=taplio",
      "rating": 4.4,
      "reviewCount": 1234
    },
    {
      "id": "470",
      "name": "promptpal",
      "description": "Search for prompts and bots, then use them with your favorite AI. All in one place. AI prompt management platform.",
      "url": "https://promptpal.net",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=promptpal",
      "rating": 4.2,
      "reviewCount": 345
    },
    {
      "id": "471",
      "name": "fairytailai",
      "description": "Personalized bedtime story generator. AI-powered custom children's story creation platform.",
      "url": "https://fairytailai.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=fairytailai",
      "rating": 4.5,
      "reviewCount": 678
    },
    {
      "id": "472",
      "name": "myriad",
      "description": "Scale your content creation and get the best writing from ChatGPT, Copilot, and other AIs. Build and fine-tune prompts for any kind of content.",
      "url": "https://myriad.ai",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=myriad",
      "rating": 4.3,
      "reviewCount": 789
    },
    {
      "id": "473",
      "name": "gradgpt",
      "description": "AI tools to simplify college applications. Review applications, draft essays, find universities and requirements and more.",
      "url": "https://gradgpt.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=gradgpt",
      "rating": 4.2,
      "reviewCount": 456
    },
    {
      "id": "474",
      "name": "code-to-flow",
      "description": "Visualize, Analyze, and Understand Your Code flow. Turn Code into Interactive Flowcharts with AI. Simplify Complex Logic Instantly.",
      "url": "https://codetoflow.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=code-to-flow",
      "rating": 4.4,
      "reviewCount": 567
    },
    {
      "id": "475",
      "name": "ai-flow",
      "description": "Connect multiple AI models easily. AI workflow automation and model integration platform.",
      "url": "https://ai-flow.net",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-flow",
      "rating": 4.1,
      "reviewCount": 234
    },
    {
      "id": "476",
      "name": "architecture-helper",
      "description": "Analyze any building architecture, and generate your own custom styles, in seconds. AI-powered architectural design assistant.",
      "url": "https://architecturehelper.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=architecture-helper",
      "rating": 4.3,
      "reviewCount": 345
    },
    {
      "id": "477",
      "name": "vocalreplica",
      "description": "AI-Powered Vocal and Instrumental Isolation for Your Favorite Tracks. Advanced audio separation technology.",
      "url": "https://vocalreplica.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=vocalreplica",
      "rating": 4.2,
      "reviewCount": 456
    },
    {
      "id": "478",
      "name": "ai-wedding-toast",
      "description": "Generate a personalized wedding speech with AI. Custom wedding toast and speech generation platform.",
      "url": "https://aiweddingtoast.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-wedding-toast",
      "rating": 4.4,
      "reviewCount": 234
    },
    {
      "id": "479",
      "name": "interviews-chat",
      "description": "Your Personal Interview Prep & Copilot. AI-powered interview preparation and practice platform.",
      "url": "https://interviews.chat",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=interviews-chat",
      "rating": 4.3,
      "reviewCount": 567
    },
    {
      "id": "480",
      "name": "context-data",
      "description": "Data Processing & ETL infrastructure for Generative AI applications. AI data pipeline and processing platform.",
      "url": "https://contextdata.ai",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=context-data",
      "rating": 4.2,
      "reviewCount": 345
    },
    {
      "id": "481",
      "name": "ezjobs",
      "description": "Automated job search and applications. AI-powered job hunting and application automation platform.",
      "url": "https://ezjobs.io",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ezjobs",
      "rating": 4.1,
      "reviewCount": 678
    },
    {
      "id": "482",
      "name": "compass",
      "description": "AI driven answers to SaaS research questions. Intelligent SaaS market research and analysis platform.",
      "url": "https://compass.ai",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=compass",
      "rating": 4.3,
      "reviewCount": 456
    },
    {
      "id": "483",
      "name": "adon-ai",
      "description": "CV screening automation and blind CV generator, AI backed ATS. Automated recruitment and hiring platform.",
      "url": "https://adon.ai",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=adon-ai",
      "rating": 4.2,
      "reviewCount": 789
    },
    {
      "id": "484",
      "name": "persuva",
      "description": "Persuva is the AI-driven platform to create persuasive, high-converting ad copy at scale. AI copywriting for advertising.",
      "url": "https://persuva.ai",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=persuva",
      "rating": 4.4,
      "reviewCount": 567
    },
    {
      "id": "485",
      "name": "interview-solver",
      "description": "Ace your live coding interviews with our AI Copilot. Real-time coding interview assistance and preparation.",
      "url": "https://interviewsolver.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=interview-solver",
      "rating": 4.3,
      "reviewCount": 345
    },
    {
      "id": "486",
      "name": "socialsonic",
      "description": "AI LinkedIn Coach: Personalized content, trends & scheduling. LinkedIn automation and content optimization platform.",
      "url": "https://socialsonic.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=socialsonic",
      "rating": 4.2,
      "reviewCount": 678
    },
    {
      "id": "487",
      "name": "napkin",
      "description": "Napkin turns your text into visuals so sharing your ideas is quick and effective. AI-powered visual content creation.",
      "url": "https://napkin.ai",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=napkin",
      "rating": 4.5,
      "reviewCount": 456
    },
    {
      "id": "488",
      "name": "exam-samurai",
      "description": "AI Exam Generator. Automated test and examination creation platform for educators.",
      "url": "https://examsamurai.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=exam-samurai",
      "rating": 4.1,
      "reviewCount": 234
    },
    {
      "id": "489",
      "name": "ai-watermark-remover",
      "description": "Remove watermarks from images and videos. AI-powered watermark removal and image editing tool.",
      "url": "https://aiwatermarkremover.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=ai-watermark-remover",
      "rating": 4.0,
      "reviewCount": 567
    },
    {
      "id": "490",
      "name": "aisaver",
      "description": "Collection of AI Powered Video and Photo Tools. Comprehensive AI media editing and enhancement suite.",
      "url": "https://aisaver.io",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=aisaver",
      "rating": 4.2,
      "reviewCount": 345
    },
    {
      "id": "491",
      "name": "harbor",
      "description": "Run LLM backends, APIs, frontends, and services with one command. Simplified LLM deployment and management platform.",
      "url": "https://harbor.dev",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=harbor",
      "rating": 4.3,
      "reviewCount": 456
    },
    {
      "id": "492",
      "name": "langmagic",
      "description": "Learn languages from native content. AI-powered language learning platform using authentic materials.",
      "url": "https://langmagic.ai",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=langmagic",
      "rating": 4.4,
      "reviewCount": 678
    },
    {
      "id": "493",
      "name": "fynk",
      "description": "AI powered contract management software. Intelligent contract analysis and management platform.",
      "url": "https://fynk.com",
      "category": "Other",
      "imageUrl": "https://dummyimage.com/600x400/000/fff&text=fynk",
      "rating": 4.2,
      "reviewCount": 789
    }
  ]

// Category breakdown for better organization
export const categories = [
  "Models",
  "Chatbots",
  "Search engines",
  "Writing assistants",
  "ChatGPT extensions",
  "Productivity",
  "Meeting assistants",
  "Academia",
  "Customer Support",
  "Other text generators",
  "Developer tools",
  "Code",
  "Image"
];