import React from 'react';
import PropTypes from 'prop-types';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from 'src/components/ui/dialog';

const LogMealDialog = ({ isOpen, onClose }) => {
  return (
    <div>
      <Dialog
        // open prop reflects the dialog's state and drives its visibility
        open={isOpen}
        // when user interacts with the dialog (open state changes) onOpenChange event handler is called
        // dialog is opened: onOpenChange(true) called, onClose() not executed
        // dialog is closed: onOpenChange(false) called, onClose() executed
        onOpenChange={(isNowOpen) => !isNowOpen && onClose()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Log Meal</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

LogMealDialog.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default LogMealDialog;
