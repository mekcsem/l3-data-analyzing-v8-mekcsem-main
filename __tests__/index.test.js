// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';

import { execSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };
const result1 = execSync(
  'bin/barbershops.js __fixtures__/barbershops1.csv',
  // @ts-ignore
  options,
);

const result2 = execSync(
  'bin/barbershops.js __fixtures__/barbershops2.csv',
  // @ts-ignore
  options,
);
const rows1 = result1.trim().split('\n');
const rows2 = result2.trim().split('\n');

test('step1', () => {
  assert.strictEqual(rows1[0], 'Count: 11');
  assert.strictEqual(rows2[0], 'Count: 10');
});

test('step2', () => {
  assert.strictEqual(rows1[1], 'Barbershops: Барбершоп Брутал, Барбершоп Элегант, Гламур Студия, Красота и Стиль, Мужской Стиль, Парикмахерская Престиж, Салон Красоты, Стрижка Эксперт, Стрижка-Мастерская, Хипстерский Барбер, Эксклюзив Салон');
  assert.strictEqual(rows2[1], 'Barbershops: Барбершоп Элита, Брутальный Барбер, Гламур Парикмахерская, Мастерской Стиля, Мужская Точка, Салон Красоты Леди, Салон Престиж, Стрижка Люкс, Стрижка Профи, Эксклюзивный Салон');
});

test('step3', () => {
  assert.strictEqual(rows1[2], 'Ratings: Min: 4.2 Max: 4.9');
  assert.strictEqual(rows2[2], 'Ratings: Min: 4.2 Max: 4.9');
});

test('step4', () => {
  assert.strictEqual(rows1[3], 'Oldest barbershop: Эксклюзив Салон');
  assert.strictEqual(rows2[3], 'Oldest barbershop: Эксклюзивный Салон');
});

test('step5', () => {
  assert.strictEqual(rows1[4], 'Best barbershop: Мужской Стиль');
  assert.strictEqual(rows2[4], 'Best barbershop: Салон Красоты Леди');
});
