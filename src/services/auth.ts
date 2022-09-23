import UserModel from '../models/user';
import * as PasswordUtil from '../utils/password';

export const AuthenticateUser = async (userId: string, password: string) => {
  //유저 인증하는 로직 여기에
  const user = await UserModel.findOne({ id: userId });

  //해당 id를 사용하는 유저가 존재하지 않으면
  if (!user) {
    return { data: undefined };
  }

  //id에 해당하는 유저가 존재하는데 비밀번호 불일치일 경우
  if (user.password && !(await PasswordUtil.verify(user.password, password))) {
    return { data: undefined };
  }

  //이제는 인증 성공
  const res = {
    name: user.name,
    id: user.id,
    identity: user.identity,
    personID: user.personID,
    courseList: user.courseList,
  };

  return res;
};
