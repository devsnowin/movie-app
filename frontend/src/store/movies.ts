import { Movie } from '@/types';
import { map } from 'nanostores';

export const movies = map<Record<number, Movie[]>>([]);
