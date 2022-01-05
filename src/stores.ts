import { writable } from 'svelte/store';
import { pseudo } from './whirl.config.json';

export const selectedAnimation = writable(pseudo[0]);
