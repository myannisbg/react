import axios from 'axios';

export interface WikiSummary {
  extract?: string;
  content_urls?: { desktop?: { page: string } };
  thumbnail?: { source: string };
}

export async function fetchSummary(title: string) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const res = await axios.get(url).catch(() => ({ data: {} }));
  return res.data as WikiSummary;
}
