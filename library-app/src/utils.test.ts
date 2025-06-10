import { buildQuery } from './utils';

test('buildQuery constructs query string', () => {
  const q = buildQuery({ title: 'test', author: undefined, year: '2020' });
  expect(q).toBe('title=test&year=2020');
});
