export interface AINews {
  id: string;
  title: string;
  content: string;
  category: string;
  links: {
    text: string;
    url: string;
  }[];
  author: string;
  date: string;
}

export const aiNews: AINews[] = [
  {
    id: "1",
    title: "Understanding Transformers",
    content: "A comprehensive guide to understanding transformer architecture and its applications in modern AI.",
    category: "Architecture",
    links: [
      {
        text: "Visual intro to Transformers (3b1b)",
        url: "https://www.youtube.com/watch?v=4Bdc55j80l8"
      },
      {
        text: "nanoGPT & tokenization (Karpathy)",
        url: "https://www.youtube.com/watch?v=kCc8FmEb1nY"
      },
      {
        text: "Decoding strategies in LLMs",
        url: "https://github.com/maximelabonne/llm-course"
      }
    ],
    author: "AI Research Team",
    date: "2024-03-11"
  },
  {
    id: "2",
    title: "Pre-training Techniques",
    content: "Advanced methods and frameworks for pre-training large language models efficiently.",
    category: "Training",
    links: [
      {
        text: "Distributed training techniques",
        url: "https://arxiv.org/abs/2303.08774"
      },
      {
        text: "nanotron: Minimal training framework",
        url: "https://github.com/huggingface/nanotron"
      },
      {
        text: "Parallel training overview",
        url: "https://www.slideshare.net/chenyanxiong/parallel-training-of-neural-networks"
      }
    ],
    author: "ML Engineering Team",
    date: "2024-03-10"
  },
  {
    id: "3",
    title: "Post-training Optimization",
    content: "Best practices and tools for post-training optimization of language models.",
    category: "Optimization",
    links: [
      {
        text: "LLM datasets: Curated repo",
        url: "https://github.com/maximelabonne/llm-datasets"
      },
      {
        text: "NeMo-Curator: Dataset preparation",
        url: "https://github.com/NVIDIA/NeMo-curator"
      },
      {
        text: "Distilabel: Synthetic data generation",
        url: "https://github.com/argilla-io/distilabel"
      }
    ],
    author: "Data Science Team",
    date: "2024-03-09"
  },
  {
    id: "4",
    title: "Fine-tuning Strategies",
    content: "Comprehensive guide to fine-tuning large language models for specific tasks.",
    category: "Fine-tuning",
    links: [
      {
        text: "Fine-tune Llama 3.1 with Unsloth",
        url: "https://huggingface.co/blog/unsloth-llama"
      },
      {
        text: "Axolotl fine-tuning framework",
        url: "https://github.com/winglian/axolotl"
      },
      {
        text: "LoRA insights & parameters",
        url: "https://sebastianraschka.com/blog/2023/llm-finetuning-lora.html"
      }
    ],
    author: "AI Research Team",
    date: "2024-03-08"
  }
]; 