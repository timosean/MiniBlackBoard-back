import UserModel from '../models/user';

export async function get(id: string) {
  // 데이터베이스에서 들어온 id에 해당하는 유저의 정보를 찾아온다.
  // 해당 정보를 return 한다.

  const userInfo = await UserModel.findById(id);
}
