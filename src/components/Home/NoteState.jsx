import React from 'react';
import NoteContext from '../common/NoteContext';

const NoteState = (props) => {
  const state = {
    name: 'Pickup your Order',
  };
  return <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>;
};

export default NoteState;
