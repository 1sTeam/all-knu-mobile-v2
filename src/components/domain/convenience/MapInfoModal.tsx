import React from 'react';
import Button from '../../button/Button';
import {
  ModalBody,
  ModalDivider,
  ModalFooter,
  ModalHeader,
  ModalHeaderText,
} from '../../modal/styles';
import {
  MapInfoFooter,
  MapInfoFooterText,
  MapInfoHeader,
  MapInfoHeaderImage,
  MapInfoHeaderText,
  MapInfoHeaderTextContainer,
  MapInfoHeaderTitle,
} from './styles';

interface MapInfoProps {
  id: number;
  type: 'normal' | 'detail' | 'summary';
  title: string;
  subTitle: string;
  floor: string;
  room: string;
  name: string;
  icon: string;
  image: string;
  location: {
    lat: number;
    lon: number;
  };
  more: any | null;
  exitModal: () => void;
}

const MapInfoModal = ({
  exitModal,
  title,
  subTitle,
  name,
  floor,
  room,
  image,
  more,
}: MapInfoProps) => {
  const imgUrl = image
    ? { uri: image }
    : require('../../../../public/images/kangnang_face.png');

  return (
    <>
      <ModalHeader>
        <ModalHeaderText>{title}</ModalHeaderText>
      </ModalHeader>
      <ModalBody>
        <MapInfoHeader>
          <MapInfoHeaderImage source={imgUrl} />
          <MapInfoHeaderTextContainer>
            <MapInfoHeaderText>{subTitle}</MapInfoHeaderText>
            <MapInfoHeaderText>{`${floor} ${room}`}</MapInfoHeaderText>
            <MapInfoHeaderTitle>{name}</MapInfoHeaderTitle>
          </MapInfoHeaderTextContainer>
        </MapInfoHeader>
        <ModalDivider />
        <MapInfoFooter>
          <MapInfoFooterText>{`운영시간 : ${more.time}`}</MapInfoFooterText>
          <MapInfoFooterText>{`전화번호 : ${more.phone}`}</MapInfoFooterText>
        </MapInfoFooter>
      </ModalBody>
      <ModalFooter>
        <Button title="닫기" onPress={exitModal} />
      </ModalFooter>
    </>
  );
};

export default MapInfoModal;
