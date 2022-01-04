import React from 'react';

import DarkModeButton from './DarkModeButton';
import LanguagePicker from '../../components/LanguagePicker';
import UserInfo from '../UserInfo';
import VimModeButton from './VimModeButton';
import GameActionButtons from '../../components/GameActionButtons';

const ModeButtons = ({ player }) => (
  <div
    className="btn-group align-items-center mr-auto"
    role="group"
    aria-label="Editor mode"
  >
    <VimModeButton player={player} />
    <DarkModeButton player={player} />
  </div>
);

const EditorToolbar = ({
  type,
  player,
  editor,
  toolbarClassNames,
  editorSettingClassNames,
  userInfoClassNames,
  langPickerStatus,
  actionBtnsProps,
  showControlBtns,
}) => (
  <div data-player-type={type}>
    <div className={toolbarClassNames} role="toolbar">
      <div
        className={editorSettingClassNames}
        role="group"
        aria-label="Editor settings"
      >
        <LanguagePicker editor={editor} status={langPickerStatus} />
      </div>

      {showControlBtns && (
        <>
          <ModeButtons player={player} />
          <GameActionButtons {...actionBtnsProps} />
        </>
      )}

      <div className={userInfoClassNames} role="group" aria-label="User info">
        <UserInfo user={player} />
      </div>
    </div>
  </div>
);

export default EditorToolbar;
