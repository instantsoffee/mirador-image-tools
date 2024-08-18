import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TuneSharpIcon from '@material-ui/icons/TuneSharp';

import { MiradorMenuButton } from 'mirador/dist/es/src/components/MiradorMenuButton';

const MiradorImageToolsMenuItem = ({
  enabled, t, updateWindow, windowId,
}) => {
  const handleClickOpen = () => {
    updateWindow(windowId, { imageToolsEnabled: !enabled });
  };

  return (
    <MiradorMenuButton
      aria-label={enabled ? t('hide') : t('show')}
      onClick={handleClickOpen}
    >
      <TuneSharpIcon />
    </MiradorMenuButton>
  );
};

MiradorImageToolsMenuItem.propTypes = {
  enabled: PropTypes.bool,
  updateWindow: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  windowId: PropTypes.string.isRequired,
};

MiradorImageToolsMenuItem.defaultProps = {
  enabled: true,
};

export default MiradorImageToolsMenuItem;
