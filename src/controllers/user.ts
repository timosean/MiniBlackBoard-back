import { Request, Response, NextFunction } from 'express';

export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    // User service에서 로직 처리 후 결과를 반환받음.
    // 위 결과를 response 객체에 실어서 보냄
  } catch (err) {
    next(err);
  }
}
