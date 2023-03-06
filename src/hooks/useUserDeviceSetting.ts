import { useRecoilValue } from 'recoil';
import { darkModeState } from '../store/darkMode';
import { profileImageState } from '../store/profileImage';

const useUserDeviceSetting = () => {
  const isDarkMode = useRecoilValue(darkModeState);
  const isProfileImage = useRecoilValue(profileImageState);

  return { isDarkMode, isProfileImage };
};

export default useUserDeviceSetting;
