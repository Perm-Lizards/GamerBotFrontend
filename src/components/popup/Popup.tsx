import { Dialog, DialogContent, DialogTitle } from '@mui/material';

type Props = {
  fullWidth: boolean;
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
};

const Popup = ({ fullWidth, open, onClose, title, children, className }: Props) => {
  return (
    <Dialog
      fullWidth={fullWidth}
      open={open}
      onClose={onClose}
      className={className}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Popup;
