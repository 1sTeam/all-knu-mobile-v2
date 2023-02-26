import topTabMetaData from '../meta/page_navigate_meta-data';

export const findTopTabMetaData = (name: string) => {
  return topTabMetaData[name] ? topTabMetaData[name] : [];
};
