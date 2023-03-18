import React from 'react';
import MapInfoModal from '../domain/convenience/MapInfoModal';
import DefaultModal from '../modal/DefaultModal';

const modalScreens = {
  Default: DefaultModal,
  MapInfo: MapInfoModal,
} as const;

export interface DynamicModalProps {
  type: keyof typeof modalScreens;
  data: any;
  exitModal: () => void;
}

const DynamicModal = ({ type, data, exitModal }: DynamicModalProps) => {
  const screen = type ?? 'Default';

  const ModalComponent = modalScreens[screen];
  return <ModalComponent {...data} exitModal={exitModal} />;
};

export default DynamicModal;
