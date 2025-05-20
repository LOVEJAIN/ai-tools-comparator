import { NewsData } from '@/types/news';

export const newsData: NewsData = [
    {
        "source": {
            "id": null,
            "name": "W3.org"
        },
        "author": "Kossi Amouzouvi",
        "title": "[CfP] Call for Research & Innovation Papers at SEMANTiCS 2025 - (Extended Deadline: May 20)",
        "description": null,
        "url": "https://lists.w3.org/Archives/Public/semantic-web/2025May/0024.html",
        "urlToImage": null,
        "publishedAt": "2025-05-16T12:57:03Z",
        "content": "Call for Research &amp; Innovation Papers\r\nSEMANTiCS 2025 EU\r\n21st International Conference on Semantic Systems\r\nVienna, Austria\r\nSeptember 3 - 5, 2025\r\nFollow us on *Twitter/X* &lt;https://x.com/Sem… [+10963 chars]"
    },
    // ... rest of the news articles ...
] as const; 