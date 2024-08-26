import React from 'react';
import PropTypes from 'prop-types';
import TuneSharpIcon from '@material-ui/icons/TuneSharp';

import { MiradorMenuButton } from 'mirador/dist/es/src/components/MiradorMenuButton';

const MiradorImageToolsMenuItem = ({
  open, t, updateWindow, windowId,
}) => {
  const handleClickOpen = () => {
    updateWindow(windowId, { imageToolsOpen: !open });
  };

  return (
    <MiradorMenuButton
      aria-label={open ? t('hide') : t('show')}
      onClick={handleClickOpen}
    >
      <TuneSharpIcon />
    </MiradorMenuButton>
  );
};

MiradorImageToolsMenuItem.propTypes = {
  enabled: PropTypes.bool,
  open: PropTypes.bool,
  updateWindow: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  windowId: PropTypes.string.isRequired,
};

MiradorImageToolsMenuItem.defaultProps = {
  enabled: true,
  open: false,
};

export default MiradorImageToolsMenuItem;
