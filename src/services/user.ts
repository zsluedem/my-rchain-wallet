import request from '@/utils/request';
import { getDecryptedItem, getItem, setEncryptedItem } from '@/utils/utils';
import { IAccount } from '@/services/account';

export const query = (): IAccount[] => {
  return getDecryptedItem('userList');
};

export const queryCurrent = (): IAccount | undefined => {
  const currentUser = getItem('currentUser');
  if (!currentUser) {
    return;
  }
  const userList: IAccount[] = getDecryptedItem('userList');
  return userList.find(user => user.uid === currentUser);
};

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}

export const transfer = async () => {
  //TODO: make the rev transfer
};

export const updateUserList = (userList: IAccount[]) => {
  if (!userList) {
    return;
  }
  setEncryptedItem('userList', userList);
};
