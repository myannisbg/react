import axios from 'axios';

export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
}

export interface Work {
  title: string;
  description?: string | { value: string };
  subjects?: string[];
  covers?: number[];
  authors?: { author: { key: string } }[];
}

const BASE_URL = 'https://openlibrary.org';

export async function searchBooks(query: string) {
  const url = `${BASE_URL}/search.json?q=${encodeURIComponent(query)}`;
  const res = await axios.get(url);
  return res.data.docs as Book[];
}

export interface AdvancedParams {
  title?: string;
  author?: string;
  subject?: string;
  year?: string;
}

export async function searchAdvanced(params: AdvancedParams) {
  const query = new URLSearchParams();
  if (params.title) query.append('title', params.title);
  if (params.author) query.append('author', params.author);
  if (params.subject) query.append('subject', params.subject);
  if (params.year) query.append('first_publish_year', params.year);
  const url = `${BASE_URL}/search.json?${query.toString()}`;
  const res = await axios.get(url);
  return res.data.docs as Book[];
}

export async function getRecentChanges(limit = 10) {
  const url = `${BASE_URL}/recentchanges.json?limit=${limit}`;
  const res = await axios.get(url);
  return res.data as any[];
}

export async function getWork(workKey: string) {
  const url = `${BASE_URL}${workKey}.json`;
  const res = await axios.get(url);
  return res.data as Work;
}

export async function getSubjectBooks(subject: string, limit = 10) {
  const url = `${BASE_URL}/subjects/${encodeURIComponent(subject)}.json?limit=${limit}`;
  const res = await axios.get(url);
  return (res.data.works as any[]).map((w) => ({
    key: w.key,
    title: w.title,
    author_name: w.authors?.map((a: any) => a.name),
    first_publish_year: w.first_publish_year,
    cover_i: w.cover_id,
  })) as Book[];
}
