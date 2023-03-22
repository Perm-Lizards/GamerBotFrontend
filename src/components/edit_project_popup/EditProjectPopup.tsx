import { useState } from 'react';

import Popup from '../popup/Popup';

const EditProjectPopup = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  return (
    <Popup
      fullWidth={true}
      open={open}
      onClose={onClose}></Popup>
  );
};

export default EditProjectPopup;
