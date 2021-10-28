import { Router } from 'express';

export const router = Router();

router.post('/regster', (req, res, next) => {
  res.send('/regster works');
});

router.post('/login', (req, res, next) => {
  res.send('/login works');
});

router.get('/users', (req, res, next) => {
  res.send('/users works');
});
