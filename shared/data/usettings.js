window.WZ_SCREENS = window.WZ_SCREENS || {};
window.WZ_SCREENS.usettings = {
 "command": "/usettings",
 "user": "You",
 "start": "main",
 "screens": {
  "m_THUMBNAIL": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → THUMBNAIL\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Photo or Doc\n┖ <b>Description</b> → Custom Thumbnail is used as the thumbnail for the files you upload to telegram in media or document mode.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_THUMBNAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "thumb_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for THUMBNAIL before anything is stored (Set only, value shows Not Exists)."
  },
  "p_THUMBNAIL": {
   "kind": "prompt",
   "text": "⌬ <b>Set Thumbnail</b>\n\n<i>Send a photo to save it as custom thumbnail.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_THUMBNAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_THUMBNAIL"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "[photo: cover.jpg]",
   "after": "m_THUMBNAIL_s",
   "note": "Prompt after pressing Set on THUMBNAIL. The bot waits 60s for a photo; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_THUMBNAIL_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → THUMBNAIL\n┃\n┠ <b>Option's Value</b> → <b>Exists</b>\n┃\n┠ <b>Default Input Type</b> → Photo or Doc\n┖ <b>Description</b> → Custom Thumbnail is used as the thumbnail for the files you upload to telegram in media or document mode.\n",
   "rows": [
    [
     {
      "t": "View Thumb",
      "to": "m_THUMBNAIL_s"
     }
    ],
    [
     {
      "t": "Change",
      "to": "p_THUMBNAIL_s"
     },
     {
      "t": "Remove",
      "to": "m_THUMBNAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "thumb_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for THUMBNAIL once a value is stored: the button reads Change and Remove deletes the saved file. View Thumb sends your saved thumbnail back as a photo."
  },
  "p_THUMBNAIL_s": {
   "kind": "prompt",
   "text": "⌬ <b>Set Thumbnail</b>\n\n<i>Send a photo to save it as custom thumbnail.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_THUMBNAIL_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_THUMBNAIL_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "[photo: cover.jpg]",
   "after": "m_THUMBNAIL_s",
   "note": "Prompt after pressing Change on THUMBNAIL. The bot waits 60s for a photo; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_THUMBNAIL_LAYOUT": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → THUMBNAIL_LAYOUT\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Grid, e.g. 3x3\n┖ <b>Description</b> → Grabs frames spread across the video and tiles them into one thumbnail. <code>2x2</code> is 4 frames, <code>3x3</code> is 9.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_THUMBNAIL_LAYOUT"
     }
    ],
    [
     {
      "t": "Back",
      "to": "thumb_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for THUMBNAIL_LAYOUT before anything is stored (Set only, value shows Not Exists)."
  },
  "p_THUMBNAIL_LAYOUT": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → THUMBNAIL_LAYOUT\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Grid, e.g. 3x3\n┖ <b>Description</b> → Grabs frames spread across the video and tiles them into one thumbnail. <code>2x2</code> is 4 frames, <code>3x3</code> is 9.\n\n\nSend thumbnail layout (widthxheight, 2x2, 3x3, 2x4, 4x4, ...). Example: 3x3. \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_THUMBNAIL_LAYOUT"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_THUMBNAIL_LAYOUT"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "3x3",
   "after": "m_THUMBNAIL_LAYOUT_s",
   "note": "Prompt after pressing Set on THUMBNAIL_LAYOUT. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_THUMBNAIL_LAYOUT_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → THUMBNAIL_LAYOUT\n┃\n┠ <b>Option's Value</b> → 3x3\n┃\n┠ <b>Default Input Type</b> → Grid, e.g. 3x3\n┖ <b>Description</b> → Grabs frames spread across the video and tiles them into one thumbnail. <code>2x2</code> is 4 frames, <code>3x3</code> is 9.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_THUMBNAIL_LAYOUT_s"
     },
     {
      "t": "Reset",
      "to": "m_THUMBNAIL_LAYOUT"
     }
    ],
    [
     {
      "t": "Back",
      "to": "thumb_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for THUMBNAIL_LAYOUT once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_THUMBNAIL_LAYOUT_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → THUMBNAIL_LAYOUT\n┃\n┠ <b>Option's Value</b> → 3x3\n┃\n┠ <b>Default Input Type</b> → Grid, e.g. 3x3\n┖ <b>Description</b> → Grabs frames spread across the video and tiles them into one thumbnail. <code>2x2</code> is 4 frames, <code>3x3</code> is 9.\n\n\nSend thumbnail layout (widthxheight, 2x2, 3x3, 2x4, 4x4, ...). Example: 3x3. \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_THUMBNAIL_LAYOUT_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_THUMBNAIL_LAYOUT_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "3x3",
   "after": "m_THUMBNAIL_LAYOUT_s",
   "note": "Prompt after pressing Change on THUMBNAIL_LAYOUT. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_RCLONE_CONFIG": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → RCLONE_CONFIG\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → rclone.conf file\n┖ <b>Description</b> → Your own rclone config. Used whenever the task runs in USER mode, or when the path starts with <code>mrcc:</code>.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_RCLONE_CONFIG"
     }
    ],
    [
     {
      "t": "Back",
      "to": "rclone_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for RCLONE_CONFIG before anything is stored (Set only, value shows Not Exists)."
  },
  "p_RCLONE_CONFIG": {
   "kind": "prompt",
   "text": "⌬ <b>Set Rclone Config</b>\n\n<i>Send your <code>rclone.conf</code> file to use as your Upload Dest to RClone.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_RCLONE_CONFIG"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_RCLONE_CONFIG"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "[file: rclone.conf]",
   "after": "m_RCLONE_CONFIG_s",
   "note": "Prompt after pressing Set on RCLONE_CONFIG. The bot waits 60s for a file; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_RCLONE_CONFIG_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → RCLONE_CONFIG\n┃\n┠ <b>Option's Value</b> → <b>Exists</b>\n┃\n┠ <b>Default Input Type</b> → rclone.conf file\n┖ <b>Description</b> → Your own rclone config. Used whenever the task runs in USER mode, or when the path starts with <code>mrcc:</code>.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_RCLONE_CONFIG_s"
     },
     {
      "t": "Remove",
      "to": "m_RCLONE_CONFIG"
     }
    ],
    [
     {
      "t": "Back",
      "to": "rclone_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for RCLONE_CONFIG once a value is stored: the button reads Change and Remove deletes the saved file."
  },
  "p_RCLONE_CONFIG_s": {
   "kind": "prompt",
   "text": "⌬ <b>Set Rclone Config</b>\n\n<i>Send your <code>rclone.conf</code> file to use as your Upload Dest to RClone.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_RCLONE_CONFIG_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_RCLONE_CONFIG_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "[file: rclone.conf]",
   "after": "m_RCLONE_CONFIG_s",
   "note": "Prompt after pressing Change on RCLONE_CONFIG. The bot waits 60s for a file; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_RCLONE_PATH": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → RCLONE_PATH\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → remote:folder\n┖ <b>Description</b> → Default rclone destination. Prefix with <code>mrcc:</code> to force your own config instead of the owner's.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_RCLONE_PATH"
     }
    ],
    [
     {
      "t": "Back",
      "to": "rclone_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for RCLONE_PATH before anything is stored (Set only, value shows Not Exists)."
  },
  "p_RCLONE_PATH": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → RCLONE_PATH\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → remote:folder\n┖ <b>Description</b> → Default rclone destination. Prefix with <code>mrcc:</code> to force your own config instead of the owner's.\n\n\nSend Rclone Path. If you want to use your rclone config edit using owner/user config from usetting or add mrcc: before rclone path. Example mrcc:remote:folder.  \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_RCLONE_PATH"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_RCLONE_PATH"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "mrcc:gdrive:Mirror",
   "after": "m_RCLONE_PATH_s",
   "note": "Prompt after pressing Set on RCLONE_PATH. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_RCLONE_PATH_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → RCLONE_PATH\n┃\n┠ <b>Option's Value</b> → mrcc:gdrive:Mirror\n┃\n┠ <b>Default Input Type</b> → remote:folder\n┖ <b>Description</b> → Default rclone destination. Prefix with <code>mrcc:</code> to force your own config instead of the owner's.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_RCLONE_PATH_s"
     },
     {
      "t": "Reset",
      "to": "m_RCLONE_PATH"
     }
    ],
    [
     {
      "t": "Back",
      "to": "rclone_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for RCLONE_PATH once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_RCLONE_PATH_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → RCLONE_PATH\n┃\n┠ <b>Option's Value</b> → mrcc:gdrive:Mirror\n┃\n┠ <b>Default Input Type</b> → remote:folder\n┖ <b>Description</b> → Default rclone destination. Prefix with <code>mrcc:</code> to force your own config instead of the owner's.\n\n\nSend Rclone Path. If you want to use your rclone config edit using owner/user config from usetting or add mrcc: before rclone path. Example mrcc:remote:folder.  \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_RCLONE_PATH_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_RCLONE_PATH_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "mrcc:gdrive:Mirror",
   "after": "m_RCLONE_PATH_s",
   "note": "Prompt after pressing Change on RCLONE_PATH. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_RCLONE_FLAGS": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → RCLONE_FLAGS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → key:value|key\n┖ <b>Description</b> → Extra flags passed to every rclone call. Separate them with <code>|</code>, and drop the value for a switch.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_RCLONE_FLAGS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "rclone_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for RCLONE_FLAGS before anything is stored (Set only, value shows Not Exists)."
  },
  "p_RCLONE_FLAGS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → RCLONE_FLAGS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → key:value|key\n┖ <b>Description</b> → Extra flags passed to every rclone call. Separate them with <code>|</code>, and drop the value for a switch.\n\n\nkey:value|key|key|key:value . Check here all <a href='https://rclone.org/flags/'>RcloneFlags</a>\nEx: --buffer-size:8M|--drive-starred-only",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_RCLONE_FLAGS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_RCLONE_FLAGS"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "--buffer-size:8M|--drive-starred-only",
   "after": "m_RCLONE_FLAGS_s",
   "note": "Prompt after pressing Set on RCLONE_FLAGS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_RCLONE_FLAGS_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → RCLONE_FLAGS\n┃\n┠ <b>Option's Value</b> → --buffer-size:8M|--drive-starred-only\n┃\n┠ <b>Default Input Type</b> → key:value|key\n┖ <b>Description</b> → Extra flags passed to every rclone call. Separate them with <code>|</code>, and drop the value for a switch.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_RCLONE_FLAGS_s"
     },
     {
      "t": "Reset",
      "to": "m_RCLONE_FLAGS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "rclone_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for RCLONE_FLAGS once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_RCLONE_FLAGS_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → RCLONE_FLAGS\n┃\n┠ <b>Option's Value</b> → --buffer-size:8M|--drive-starred-only\n┃\n┠ <b>Default Input Type</b> → key:value|key\n┖ <b>Description</b> → Extra flags passed to every rclone call. Separate them with <code>|</code>, and drop the value for a switch.\n\n\nkey:value|key|key|key:value . Check here all <a href='https://rclone.org/flags/'>RcloneFlags</a>\nEx: --buffer-size:8M|--drive-starred-only",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_RCLONE_FLAGS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_RCLONE_FLAGS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "--buffer-size:8M|--drive-starred-only",
   "after": "m_RCLONE_FLAGS_s",
   "note": "Prompt after pressing Change on RCLONE_FLAGS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_TOKEN_PICKLE": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → TOKEN_PICKLE\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → token.pickle file\n┖ <b>Description</b> → Your own Google Drive token. Used in USER mode, or when the id starts with <code>mtp:</code>.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_TOKEN_PICKLE"
     }
    ],
    [
     {
      "t": "Back",
      "to": "gdrive_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for TOKEN_PICKLE before anything is stored (Set only, value shows Not Exists)."
  },
  "p_TOKEN_PICKLE": {
   "kind": "prompt",
   "text": "⌬ <b>Set Token Pickle</b>\n\n<i>Send your <code>token.pickle</code> to use as your Upload Dest to GDrive</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_TOKEN_PICKLE"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_TOKEN_PICKLE"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "[file: token.pickle]",
   "after": "m_TOKEN_PICKLE_s",
   "note": "Prompt after pressing Set on TOKEN_PICKLE. The bot waits 60s for a file; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_TOKEN_PICKLE_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → TOKEN_PICKLE\n┃\n┠ <b>Option's Value</b> → <b>Exists</b>\n┃\n┠ <b>Default Input Type</b> → token.pickle file\n┖ <b>Description</b> → Your own Google Drive token. Used in USER mode, or when the id starts with <code>mtp:</code>.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_TOKEN_PICKLE_s"
     },
     {
      "t": "Remove",
      "to": "m_TOKEN_PICKLE"
     }
    ],
    [
     {
      "t": "Back",
      "to": "gdrive_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for TOKEN_PICKLE once a value is stored: the button reads Change and Remove deletes the saved file."
  },
  "p_TOKEN_PICKLE_s": {
   "kind": "prompt",
   "text": "⌬ <b>Set Token Pickle</b>\n\n<i>Send your <code>token.pickle</code> to use as your Upload Dest to GDrive</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_TOKEN_PICKLE_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_TOKEN_PICKLE_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "[file: token.pickle]",
   "after": "m_TOKEN_PICKLE_s",
   "note": "Prompt after pressing Change on TOKEN_PICKLE. The bot waits 60s for a file; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_GDRIVE_ID": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → GDRIVE_ID\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Folder or Drive id\n┖ <b>Description</b> → Default Google Drive destination. Prefix with <code>mtp:</code> for your own token, <code>tp:</code> for the owner's, <code>sa:</code> for service accounts.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_GDRIVE_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "gdrive_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for GDRIVE_ID before anything is stored (Set only, value shows Not Exists)."
  },
  "p_GDRIVE_ID": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → GDRIVE_ID\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Folder or Drive id\n┖ <b>Description</b> → Default Google Drive destination. Prefix with <code>mtp:</code> for your own token, <code>tp:</code> for the owner's, <code>sa:</code> for service accounts.\n\n\nSend Gdrive ID. If you want to use your token.pickle edit using owner/user token from usetting or add mtp: before the id. Example: mtp:F435RGGRDXXXXXX .  \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_GDRIVE_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_GDRIVE_ID"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "mtp:1a2B3c4D5e6F7g8H9i0J",
   "after": "m_GDRIVE_ID_s",
   "note": "Prompt after pressing Set on GDRIVE_ID. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_GDRIVE_ID_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → GDRIVE_ID\n┃\n┠ <b>Option's Value</b> → mtp:1a2B3c4D5e6F7g8H9i0J\n┃\n┠ <b>Default Input Type</b> → Folder or Drive id\n┖ <b>Description</b> → Default Google Drive destination. Prefix with <code>mtp:</code> for your own token, <code>tp:</code> for the owner's, <code>sa:</code> for service accounts.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_GDRIVE_ID_s"
     },
     {
      "t": "Reset",
      "to": "m_GDRIVE_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "gdrive_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for GDRIVE_ID once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_GDRIVE_ID_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → GDRIVE_ID\n┃\n┠ <b>Option's Value</b> → mtp:1a2B3c4D5e6F7g8H9i0J\n┃\n┠ <b>Default Input Type</b> → Folder or Drive id\n┖ <b>Description</b> → Default Google Drive destination. Prefix with <code>mtp:</code> for your own token, <code>tp:</code> for the owner's, <code>sa:</code> for service accounts.\n\n\nSend Gdrive ID. If you want to use your token.pickle edit using owner/user token from usetting or add mtp: before the id. Example: mtp:F435RGGRDXXXXXX .  \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_GDRIVE_ID_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_GDRIVE_ID_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "mtp:1a2B3c4D5e6F7g8H9i0J",
   "after": "m_GDRIVE_ID_s",
   "note": "Prompt after pressing Change on GDRIVE_ID. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_INDEX_URL": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → INDEX_URL\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → https:// link\n┖ <b>Description</b> → Your index for the drive above. When set, finished tasks also report a direct index link.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_INDEX_URL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "gdrive_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for INDEX_URL before anything is stored (Set only, value shows Not Exists)."
  },
  "p_INDEX_URL": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → INDEX_URL\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → https:// link\n┖ <b>Description</b> → Your index for the drive above. When set, finished tasks also report a direct index link.\n\n\nSend Index URL for your gdrive option.  \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_INDEX_URL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_INDEX_URL"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "https://index.example.workers.dev/0:",
   "after": "m_INDEX_URL_s",
   "note": "Prompt after pressing Set on INDEX_URL. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_INDEX_URL_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → INDEX_URL\n┃\n┠ <b>Option's Value</b> → https://index.example.workers.dev/0:\n┃\n┠ <b>Default Input Type</b> → https:// link\n┖ <b>Description</b> → Your index for the drive above. When set, finished tasks also report a direct index link.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_INDEX_URL_s"
     },
     {
      "t": "Reset",
      "to": "m_INDEX_URL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "gdrive_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for INDEX_URL once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_INDEX_URL_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → INDEX_URL\n┃\n┠ <b>Option's Value</b> → https://index.example.workers.dev/0:\n┃\n┠ <b>Default Input Type</b> → https:// link\n┖ <b>Description</b> → Your index for the drive above. When set, finished tasks also report a direct index link.\n\n\nSend Index URL for your gdrive option.  \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_INDEX_URL_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_INDEX_URL_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "https://index.example.workers.dev/0:",
   "after": "m_INDEX_URL_s",
   "note": "Prompt after pressing Change on INDEX_URL. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_DRIVE_CAT": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DRIVE_CAT\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → User-defined GDrive categories (name → drive_id). Format: {\"name\": \"drive_id|index_link\"}.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_DRIVE_CAT"
     }
    ],
    [
     {
      "t": "Back",
      "to": "gdrive_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for DRIVE_CAT before anything is stored (Set only, value shows Not Exists)."
  },
  "p_DRIVE_CAT": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DRIVE_CAT\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → User-defined GDrive categories (name → drive_id). Format: {\"name\": \"drive_id|index_link\"}.\n\n\n<i>Send dict of user drive categories.\nExample: {\"Movies\": \"0Bxxxxxxxx\", \"TV\": \"1Ayyyyyyy|https://index.tv\"}\nEach value: drive_id or drive_id|index_link</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_DRIVE_CAT"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_DRIVE_CAT"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{\"Movies\": \"0BxMoviesDriveId|https://index.example.dev/movies\", \"TV\": \"1AyTvDriveId\"}",
   "after": "m_DRIVE_CAT_s",
   "note": "Prompt after pressing Set on DRIVE_CAT. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_DRIVE_CAT_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DRIVE_CAT\n┃\n┠ <b>Option's Value</b> →   <b>Default</b>: <code>mtp:1a2B3c4D5e6F7g8H9i0J</code> | <code>https://index.example.workers.dev/0:</code>\n     <b>Movies</b>: <code>0BxMoviesDriveId</code> | <code>https://index.example.dev/movies</code>\n     <b>TV</b>: <code>1AyTvDriveId</code>\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → User-defined GDrive categories (name → drive_id). Format: {\"name\": \"drive_id|index_link\"}.\n",
   "rows": [
    [
     {
      "t": "Add One",
      "to": "pa_DRIVE_CAT"
     },
     {
      "t": "Remove One",
      "to": "pr_DRIVE_CAT"
     }
    ],
    [
     {
      "t": "Change",
      "to": "p_DRIVE_CAT_s"
     },
     {
      "t": "Reset",
      "to": "m_DRIVE_CAT"
     }
    ],
    [
     {
      "t": "Back",
      "to": "gdrive_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for DRIVE_CAT once a value is stored: the button reads Change and Reset clears the value; Add One/Remove One edit single keys."
  },
  "p_DRIVE_CAT_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DRIVE_CAT\n┃\n┠ <b>Option's Value</b> →   <b>Default</b>: <code>mtp:1a2B3c4D5e6F7g8H9i0J</code> | <code>https://index.example.workers.dev/0:</code>\n     <b>Movies</b>: <code>0BxMoviesDriveId</code> | <code>https://index.example.dev/movies</code>\n     <b>TV</b>: <code>1AyTvDriveId</code>\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → User-defined GDrive categories (name → drive_id). Format: {\"name\": \"drive_id|index_link\"}.\n\n\n<i>Send dict of user drive categories.\nExample: {\"Movies\": \"0Bxxxxxxxx\", \"TV\": \"1Ayyyyyyy|https://index.tv\"}\nEach value: drive_id or drive_id|index_link</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_DRIVE_CAT_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_DRIVE_CAT_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{\"Movies\": \"0BxMoviesDriveId|https://index.example.dev/movies\", \"TV\": \"1AyTvDriveId\"}",
   "after": "m_DRIVE_CAT_s",
   "note": "Prompt after pressing Change on DRIVE_CAT. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "pa_DRIVE_CAT": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DRIVE_CAT\n┃\n┠ <b>Option's Value</b> →   <b>Default</b>: <code>mtp:1a2B3c4D5e6F7g8H9i0J</code> | <code>https://index.example.workers.dev/0:</code>\n     <b>Movies</b>: <code>0BxMoviesDriveId</code> | <code>https://index.example.dev/movies</code>\n     <b>TV</b>: <code>1AyTvDriveId</code>\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → User-defined GDrive categories (name → drive_id). Format: {\"name\": \"drive_id|index_link\"}.\n\n\nAdd one or more string key and value to DRIVE_CAT. Example: {'key 1': 62625261, 'key 2': 'value 2'}. Timeout: 60 sec",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_DRIVE_CAT_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_DRIVE_CAT_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{\"Anime\": \"1AzAnimeDriveId\"}",
   "after": "m_DRIVE_CAT_s",
   "note": "Add One merges new key/value pairs into the existing DRIVE_CAT dict instead of replacing it."
  },
  "pr_DRIVE_CAT": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DRIVE_CAT\n┃\n┠ <b>Option's Value</b> →   <b>Default</b>: <code>mtp:1a2B3c4D5e6F7g8H9i0J</code> | <code>https://index.example.workers.dev/0:</code>\n     <b>Movies</b>: <code>0BxMoviesDriveId</code> | <code>https://index.example.dev/movies</code>\n     <b>TV</b>: <code>1AyTvDriveId</code>\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → User-defined GDrive categories (name → drive_id). Format: {\"name\": \"drive_id|index_link\"}.\n\n\nRemove one or more key from DRIVE_CAT. Example: key 1/key2/key 3. Timeout: 60 sec",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_DRIVE_CAT_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_DRIVE_CAT_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "TV",
   "after": "m_DRIVE_CAT_s",
   "note": "Remove One deletes the named keys (separated by /) from DRIVE_CAT."
  },
  "m_LEECH_SPLIT_SIZE": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_SPLIT_SIZE\n┃\n┠ <b>Option's Value</b> → 0B\n┃\n┠ <b>Default Input Type</b> → Size, e.g. 2GB\n┖ <b>Description</b> → Where a file is cut before upload. Capped at what your account allows, so a bigger number is silently clamped.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_LEECH_SPLIT_SIZE"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_b000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for LEECH_SPLIT_SIZE before anything is stored (Set only, value shows Not Exists)."
  },
  "p_LEECH_SPLIT_SIZE": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_SPLIT_SIZE\n┃\n┠ <b>Option's Value</b> → 0B\n┃\n┠ <b>Default Input Type</b> → Size, e.g. 2GB\n┖ <b>Description</b> → Where a file is cut before upload. Capped at what your account allows, so a bigger number is silently clamped.\n\n\nSend Leech split size in bytes or use gb or mb. Example: 40000000 or 2.5gb or 1000mb. PREMIUM_USER: False. \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_LEECH_SPLIT_SIZE"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_LEECH_SPLIT_SIZE"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "1gb",
   "after": "m_LEECH_SPLIT_SIZE_s",
   "note": "Prompt after pressing Set on LEECH_SPLIT_SIZE. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_LEECH_SPLIT_SIZE_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_SPLIT_SIZE\n┃\n┠ <b>Option's Value</b> → 1.00GB\n┃\n┠ <b>Default Input Type</b> → Size, e.g. 2GB\n┖ <b>Description</b> → Where a file is cut before upload. Capped at what your account allows, so a bigger number is silently clamped.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_LEECH_SPLIT_SIZE_s"
     },
     {
      "t": "Reset",
      "to": "m_LEECH_SPLIT_SIZE"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_f000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for LEECH_SPLIT_SIZE once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_LEECH_SPLIT_SIZE_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_SPLIT_SIZE\n┃\n┠ <b>Option's Value</b> → 1.00GB\n┃\n┠ <b>Default Input Type</b> → Size, e.g. 2GB\n┖ <b>Description</b> → Where a file is cut before upload. Capped at what your account allows, so a bigger number is silently clamped.\n\n\nSend Leech split size in bytes or use gb or mb. Example: 40000000 or 2.5gb or 1000mb. PREMIUM_USER: False. \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_LEECH_SPLIT_SIZE_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_LEECH_SPLIT_SIZE_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "1gb",
   "after": "m_LEECH_SPLIT_SIZE_s",
   "note": "Prompt after pressing Change on LEECH_SPLIT_SIZE. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_LEECH_DUMP_CHATS": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_DUMP_CHATS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Name and chat id per line\n┖ <b>Description</b> → Your own leech dump chats. Every leech gets copied to all of them, and each is selectable per task by name with -ud. Names are merged over the owner's list and yours wins a clash. Independent of the clone destinations. Every chat is checked at set time, so the bot must already be an admin there.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_LEECH_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_b000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for LEECH_DUMP_CHATS before anything is stored (Set only, value shows Not Exists)."
  },
  "p_LEECH_DUMP_CHATS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_DUMP_CHATS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Name and chat id per line\n┖ <b>Description</b> → Your own leech dump chats. Every leech gets copied to all of them, and each is selectable per task by name with -ud. Names are merged over the owner's list and yours wins a clash. Independent of the clone destinations. Every chat is checked at set time, so the bot must already be an admin there.\n\n\n<i>One per line: <code>Movies -1001234567890</code>\nAdd a topic with a pipe: <code>Movies -1001234567890|12</code>\nA dict works too: <code>{'Movies': -1001234567890}</code></i>\n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_LEECH_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_LEECH_DUMP_CHATS"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "Movies -1001234567890\nSeries -1009876543210|12",
   "after": "m_LEECH_DUMP_CHATS_s",
   "note": "Prompt after pressing Set on LEECH_DUMP_CHATS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_LEECH_DUMP_CHATS_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_DUMP_CHATS\n┃\n┠ <b>Option's Value</b> → \n     <b>Movies</b>: <code>-1001234567890</code>\n     <b>Series</b>: <code>-1009876543210|12</code>\n┃\n┠ <b>Default Input Type</b> → Name and chat id per line\n┖ <b>Description</b> → Your own leech dump chats. Every leech gets copied to all of them, and each is selectable per task by name with -ud. Names are merged over the owner's list and yours wins a clash. Independent of the clone destinations. Every chat is checked at set time, so the bot must already be an admin there.\n",
   "rows": [
    [
     {
      "t": "Add One",
      "to": "pa_LEECH_DUMP_CHATS"
     },
     {
      "t": "Remove One",
      "to": "pr_LEECH_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Change",
      "to": "p_LEECH_DUMP_CHATS_s"
     },
     {
      "t": "Reset",
      "to": "m_LEECH_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_f000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for LEECH_DUMP_CHATS once a value is stored: the button reads Change and Reset clears the value; Add One/Remove One edit single keys."
  },
  "p_LEECH_DUMP_CHATS_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_DUMP_CHATS\n┃\n┠ <b>Option's Value</b> → \n     <b>Movies</b>: <code>-1001234567890</code>\n     <b>Series</b>: <code>-1009876543210|12</code>\n┃\n┠ <b>Default Input Type</b> → Name and chat id per line\n┖ <b>Description</b> → Your own leech dump chats. Every leech gets copied to all of them, and each is selectable per task by name with -ud. Names are merged over the owner's list and yours wins a clash. Independent of the clone destinations. Every chat is checked at set time, so the bot must already be an admin there.\n\n\n<i>One per line: <code>Movies -1001234567890</code>\nAdd a topic with a pipe: <code>Movies -1001234567890|12</code>\nA dict works too: <code>{'Movies': -1001234567890}</code></i>\n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_LEECH_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_LEECH_DUMP_CHATS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "Movies -1001234567890\nSeries -1009876543210|12",
   "after": "m_LEECH_DUMP_CHATS_s",
   "note": "Prompt after pressing Change on LEECH_DUMP_CHATS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "pa_LEECH_DUMP_CHATS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_DUMP_CHATS\n┃\n┠ <b>Option's Value</b> → \n     <b>Movies</b>: <code>-1001234567890</code>\n     <b>Series</b>: <code>-1009876543210|12</code>\n┃\n┠ <b>Default Input Type</b> → Name and chat id per line\n┖ <b>Description</b> → Your own leech dump chats. Every leech gets copied to all of them, and each is selectable per task by name with -ud. Names are merged over the owner's list and yours wins a clash. Independent of the clone destinations. Every chat is checked at set time, so the bot must already be an admin there.\n\n\nAdd one or more string key and value to LEECH_DUMP_CHATS. Example: {'key 1': 62625261, 'key 2': 'value 2'}. Timeout: 60 sec",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_LEECH_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_LEECH_DUMP_CHATS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "Docs -1001122334455",
   "after": "m_LEECH_DUMP_CHATS_s",
   "note": "Add One merges new key/value pairs into the existing LEECH_DUMP_CHATS dict instead of replacing it."
  },
  "pr_LEECH_DUMP_CHATS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_DUMP_CHATS\n┃\n┠ <b>Option's Value</b> → \n     <b>Movies</b>: <code>-1001234567890</code>\n     <b>Series</b>: <code>-1009876543210|12</code>\n┃\n┠ <b>Default Input Type</b> → Name and chat id per line\n┖ <b>Description</b> → Your own leech dump chats. Every leech gets copied to all of them, and each is selectable per task by name with -ud. Names are merged over the owner's list and yours wins a clash. Independent of the clone destinations. Every chat is checked at set time, so the bot must already be an admin there.\n\n\nRemove one or more key from LEECH_DUMP_CHATS. Example: key 1/key2/key 3. Timeout: 60 sec",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_LEECH_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_LEECH_DUMP_CHATS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "Docs",
   "after": "m_LEECH_DUMP_CHATS_s",
   "note": "Remove One deletes the named keys (separated by /) from LEECH_DUMP_CHATS."
  },
  "m_LEECH_PREFIX": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_PREFIX\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Text, HTML allowed\n┖ <b>Description</b> → Goes in front of every leeched name. HTML is kept in the caption and stripped from the filename. Write <code>\\s</code> for a space.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_LEECH_PREFIX"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_b000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for LEECH_PREFIX before anything is stored (Set only, value shows Not Exists)."
  },
  "p_LEECH_PREFIX": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_PREFIX\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Text, HTML allowed\n┖ <b>Description</b> → Goes in front of every leeched name. HTML is kept in the caption and stripped from the filename. Write <code>\\s</code> for a space.\n\n\nSend Leech Filename Prefix. You can add HTML tags. Example: <code>@mychannel</code>. \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_LEECH_PREFIX"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_LEECH_PREFIX"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "@MyChannel",
   "after": "m_LEECH_PREFIX_s",
   "note": "Prompt after pressing Set on LEECH_PREFIX. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_LEECH_PREFIX_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_PREFIX\n┃\n┠ <b>Option's Value</b> → @MyChannel\n┃\n┠ <b>Default Input Type</b> → Text, HTML allowed\n┖ <b>Description</b> → Goes in front of every leeched name. HTML is kept in the caption and stripped from the filename. Write <code>\\s</code> for a space.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_LEECH_PREFIX_s"
     },
     {
      "t": "Reset",
      "to": "m_LEECH_PREFIX"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_f000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for LEECH_PREFIX once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_LEECH_PREFIX_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_PREFIX\n┃\n┠ <b>Option's Value</b> → @MyChannel\n┃\n┠ <b>Default Input Type</b> → Text, HTML allowed\n┖ <b>Description</b> → Goes in front of every leeched name. HTML is kept in the caption and stripped from the filename. Write <code>\\s</code> for a space.\n\n\nSend Leech Filename Prefix. You can add HTML tags. Example: <code>@mychannel</code>. \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_LEECH_PREFIX_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_LEECH_PREFIX_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "@MyChannel",
   "after": "m_LEECH_PREFIX_s",
   "note": "Prompt after pressing Change on LEECH_PREFIX. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_LEECH_SUFFIX": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_SUFFIX\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Text, HTML allowed\n┖ <b>Description</b> → Goes after the name, before the extension. Same HTML and <code>\\s</code> rules as the prefix.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_LEECH_SUFFIX"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_b000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for LEECH_SUFFIX before anything is stored (Set only, value shows Not Exists)."
  },
  "p_LEECH_SUFFIX": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_SUFFIX\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Text, HTML allowed\n┖ <b>Description</b> → Goes after the name, before the extension. Same HTML and <code>\\s</code> rules as the prefix.\n\n\nSend Leech Filename Suffix. You can add HTML tags. Example: <code>@mychannel</code>. \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_LEECH_SUFFIX"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_LEECH_SUFFIX"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "[WZ]",
   "after": "m_LEECH_SUFFIX_s",
   "note": "Prompt after pressing Set on LEECH_SUFFIX. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_LEECH_SUFFIX_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_SUFFIX\n┃\n┠ <b>Option's Value</b> → [WZ]\n┃\n┠ <b>Default Input Type</b> → Text, HTML allowed\n┖ <b>Description</b> → Goes after the name, before the extension. Same HTML and <code>\\s</code> rules as the prefix.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_LEECH_SUFFIX_s"
     },
     {
      "t": "Reset",
      "to": "m_LEECH_SUFFIX"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_f000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for LEECH_SUFFIX once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_LEECH_SUFFIX_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_SUFFIX\n┃\n┠ <b>Option's Value</b> → [WZ]\n┃\n┠ <b>Default Input Type</b> → Text, HTML allowed\n┖ <b>Description</b> → Goes after the name, before the extension. Same HTML and <code>\\s</code> rules as the prefix.\n\n\nSend Leech Filename Suffix. You can add HTML tags. Example: <code>@mychannel</code>. \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_LEECH_SUFFIX_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_LEECH_SUFFIX_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "[WZ]",
   "after": "m_LEECH_SUFFIX_s",
   "note": "Prompt after pressing Change on LEECH_SUFFIX. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_LEECH_CAPTION": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_CAPTION\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Template, HTML allowed\n┖ <b>Description</b> → Replaces the whole caption. Fill in <code>{filename} {size} {duration} {quality} {languages} {subtitles} {md5_hash} {mime_type} {prefilename} {precaption}</code>, then add <code>|find:replace</code> parts to patch the result. Escape a real one with <code>\\|</code> <code>\\{</code> <code>\\}</code>.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_LEECH_CAPTION"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_b000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for LEECH_CAPTION before anything is stored (Set only, value shows Not Exists)."
  },
  "p_LEECH_CAPTION": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_CAPTION\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Template, HTML allowed\n┖ <b>Description</b> → Replaces the whole caption. Fill in <code>{filename} {size} {duration} {quality} {languages} {subtitles} {md5_hash} {mime_type} {prefilename} {precaption}</code>, then add <code>|find:replace</code> parts to patch the result. Escape a real one with <code>\\|</code> <code>\\{</code> <code>\\}</code>.\n\n\nSend Leech Caption. You can add HTML tags. Example: <code>@mychannel</code>. \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_LEECH_CAPTION"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_LEECH_CAPTION"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "<b>{filename}</b>\nSize: {size}",
   "after": "m_LEECH_CAPTION_s",
   "note": "Prompt after pressing Set on LEECH_CAPTION. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_LEECH_CAPTION_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_CAPTION\n┃\n┠ <b>Option's Value</b> → <b>{filename}</b>\nSize: {size}\n┃\n┠ <b>Default Input Type</b> → Template, HTML allowed\n┖ <b>Description</b> → Replaces the whole caption. Fill in <code>{filename} {size} {duration} {quality} {languages} {subtitles} {md5_hash} {mime_type} {prefilename} {precaption}</code>, then add <code>|find:replace</code> parts to patch the result. Escape a real one with <code>\\|</code> <code>\\{</code> <code>\\}</code>.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_LEECH_CAPTION_s"
     },
     {
      "t": "Reset",
      "to": "m_LEECH_CAPTION"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_f000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for LEECH_CAPTION once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_LEECH_CAPTION_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → LEECH_CAPTION\n┃\n┠ <b>Option's Value</b> → <b>{filename}</b>\nSize: {size}\n┃\n┠ <b>Default Input Type</b> → Template, HTML allowed\n┖ <b>Description</b> → Replaces the whole caption. Fill in <code>{filename} {size} {duration} {quality} {languages} {subtitles} {md5_hash} {mime_type} {prefilename} {precaption}</code>, then add <code>|find:replace</code> parts to patch the result. Escape a real one with <code>\\|</code> <code>\\{</code> <code>\\}</code>.\n\n\nSend Leech Caption. You can add HTML tags. Example: <code>@mychannel</code>. \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_LEECH_CAPTION_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_LEECH_CAPTION_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "<b>{filename}</b>\nSize: {size}",
   "after": "m_LEECH_CAPTION_s",
   "note": "Prompt after pressing Change on LEECH_CAPTION. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_UPLOAD_PATHS": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → UPLOAD_PATHS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Dict of aliases\n┖ <b>Description</b> → Short names for long destinations. Once set, <code>-up name</code> is swapped for the real path, id or chat behind it.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_UPLOAD_PATHS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "advanced_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for UPLOAD_PATHS before anything is stored (Set only, value shows Not Exists)."
  },
  "p_UPLOAD_PATHS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → UPLOAD_PATHS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Dict of aliases\n┖ <b>Description</b> → Short names for long destinations. Once set, <code>-up name</code> is swapped for the real path, id or chat behind it.\n\n\nSend Dict of keys that have path values. Example: {'path 1': 'remote:rclonefolder', 'path 2': 'gdrive1 id', 'path 3': 'tg chat id', 'path 4': 'mrcc:remote:', 'path 5': b:@username} .  \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_UPLOAD_PATHS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_UPLOAD_PATHS"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{'movies': 'gdrive:Movies', 'chat': '-1001234567890'}",
   "after": "m_UPLOAD_PATHS_s",
   "note": "Prompt after pressing Set on UPLOAD_PATHS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_UPLOAD_PATHS_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → UPLOAD_PATHS\n┃\n┠ <b>Option's Value</b> → <code>{'movies': 'gdrive:Movies', 'chat': '-1001234567890'}</code>\n┃\n┠ <b>Default Input Type</b> → Dict of aliases\n┖ <b>Description</b> → Short names for long destinations. Once set, <code>-up name</code> is swapped for the real path, id or chat behind it.\n",
   "rows": [
    [
     {
      "t": "Add One",
      "to": "pa_UPLOAD_PATHS"
     },
     {
      "t": "Remove One",
      "to": "pr_UPLOAD_PATHS"
     }
    ],
    [
     {
      "t": "Change",
      "to": "p_UPLOAD_PATHS_s"
     },
     {
      "t": "Reset",
      "to": "m_UPLOAD_PATHS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "advanced_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for UPLOAD_PATHS once a value is stored: the button reads Change and Reset clears the value; Add One/Remove One edit single keys."
  },
  "p_UPLOAD_PATHS_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → UPLOAD_PATHS\n┃\n┠ <b>Option's Value</b> → <code>{'movies': 'gdrive:Movies', 'chat': '-1001234567890'}</code>\n┃\n┠ <b>Default Input Type</b> → Dict of aliases\n┖ <b>Description</b> → Short names for long destinations. Once set, <code>-up name</code> is swapped for the real path, id or chat behind it.\n\n\nSend Dict of keys that have path values. Example: {'path 1': 'remote:rclonefolder', 'path 2': 'gdrive1 id', 'path 3': 'tg chat id', 'path 4': 'mrcc:remote:', 'path 5': b:@username} .  \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_UPLOAD_PATHS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_UPLOAD_PATHS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{'movies': 'gdrive:Movies', 'chat': '-1001234567890'}",
   "after": "m_UPLOAD_PATHS_s",
   "note": "Prompt after pressing Change on UPLOAD_PATHS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "pa_UPLOAD_PATHS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → UPLOAD_PATHS\n┃\n┠ <b>Option's Value</b> → <code>{'movies': 'gdrive:Movies', 'chat': '-1001234567890'}</code>\n┃\n┠ <b>Default Input Type</b> → Dict of aliases\n┖ <b>Description</b> → Short names for long destinations. Once set, <code>-up name</code> is swapped for the real path, id or chat behind it.\n\n\nAdd one or more string key and value to UPLOAD_PATHS. Example: {'key 1': 62625261, 'key 2': 'value 2'}. Timeout: 60 sec",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_UPLOAD_PATHS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_UPLOAD_PATHS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{'tv': 'gdrive:TV'}",
   "after": "m_UPLOAD_PATHS_s",
   "note": "Add One merges new key/value pairs into the existing UPLOAD_PATHS dict instead of replacing it."
  },
  "pr_UPLOAD_PATHS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → UPLOAD_PATHS\n┃\n┠ <b>Option's Value</b> → <code>{'movies': 'gdrive:Movies', 'chat': '-1001234567890'}</code>\n┃\n┠ <b>Default Input Type</b> → Dict of aliases\n┖ <b>Description</b> → Short names for long destinations. Once set, <code>-up name</code> is swapped for the real path, id or chat behind it.\n\n\nRemove one or more key from UPLOAD_PATHS. Example: key 1/key2/key 3. Timeout: 60 sec",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_UPLOAD_PATHS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_UPLOAD_PATHS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "tv",
   "after": "m_UPLOAD_PATHS_s",
   "note": "Remove One deletes the named keys (separated by /) from UPLOAD_PATHS."
  },
  "m_EXCLUDED_EXTENSIONS": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → EXCLUDED_EXTENSIONS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Space separated\n┖ <b>Description</b> → Extensions never uploaded, written without the dot. <code>aria2</code> and <code>!qB</code> are always kept on top of yours. Applies to leech and mirror, not to /clone.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_EXCLUDED_EXTENSIONS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "advanced_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for EXCLUDED_EXTENSIONS before anything is stored (Set only, value shows Not Exists)."
  },
  "p_EXCLUDED_EXTENSIONS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → EXCLUDED_EXTENSIONS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Space separated\n┖ <b>Description</b> → Extensions never uploaded, written without the dot. <code>aria2</code> and <code>!qB</code> are always kept on top of yours. Applies to leech and mirror, not to /clone.\n\n\nSend excluded extensions separated by space without dot at beginning.  \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_EXCLUDED_EXTENSIONS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_EXCLUDED_EXTENSIONS"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "txt nfo jpg",
   "after": "m_EXCLUDED_EXTENSIONS_s",
   "note": "Prompt after pressing Set on EXCLUDED_EXTENSIONS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_EXCLUDED_EXTENSIONS_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → EXCLUDED_EXTENSIONS\n┃\n┠ <b>Option's Value</b> → ['aria2', '!qB', 'txt', 'nfo', 'jpg']\n┃\n┠ <b>Default Input Type</b> → Space separated\n┖ <b>Description</b> → Extensions never uploaded, written without the dot. <code>aria2</code> and <code>!qB</code> are always kept on top of yours. Applies to leech and mirror, not to /clone.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_EXCLUDED_EXTENSIONS_s"
     },
     {
      "t": "Reset",
      "to": "m_EXCLUDED_EXTENSIONS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "advanced_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for EXCLUDED_EXTENSIONS once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_EXCLUDED_EXTENSIONS_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → EXCLUDED_EXTENSIONS\n┃\n┠ <b>Option's Value</b> → ['aria2', '!qB', 'txt', 'nfo', 'jpg']\n┃\n┠ <b>Default Input Type</b> → Space separated\n┖ <b>Description</b> → Extensions never uploaded, written without the dot. <code>aria2</code> and <code>!qB</code> are always kept on top of yours. Applies to leech and mirror, not to /clone.\n\n\nSend excluded extensions separated by space without dot at beginning.  \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_EXCLUDED_EXTENSIONS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_EXCLUDED_EXTENSIONS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "txt nfo jpg",
   "after": "m_EXCLUDED_EXTENSIONS_s",
   "note": "Prompt after pressing Change on EXCLUDED_EXTENSIONS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_NAME_SWAP": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → NAME_SWAP\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → pattern:replace|...\n┖ <b>Description</b> → Regex rewrites run on every filename before upload, in order. Each rule is <code>pattern:replace:count:flag</code> where count 0 means every match and flag is a name like <code>IGNORECASE</code>. Chain rules with <code>|</code>.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_NAME_SWAP"
     }
    ],
    [
     {
      "t": "Back",
      "to": "advanced_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for NAME_SWAP before anything is stored (Set only, value shows Not Exists)."
  },
  "p_NAME_SWAP": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → NAME_SWAP\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → pattern:replace|...\n┖ <b>Description</b> → Regex rewrites run on every filename before upload, in order. Each rule is <code>pattern:replace:count:flag</code> where count 0 means every match and flag is a name like <code>IGNORECASE</code>. Chain rules with <code>|</code>.\n\n\n<i>Send your Name Swap. You can add pattern instead of normal text according to the format.</i>\n<b>Full Documentation Guide</b> <a href=\"https://t.me/WZML_X/77\">Click Here</a>\n┖ <b>Time Left :</b> <code>60 sec</code>\n",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_NAME_SWAP"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_NAME_SWAP"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "WEB-DL:WEBDL:0:IGNORECASE|\\.:_",
   "after": "m_NAME_SWAP_s",
   "note": "Prompt after pressing Set on NAME_SWAP. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_NAME_SWAP_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → NAME_SWAP\n┃\n┠ <b>Option's Value</b> → WEB-DL:WEBDL:0:IGNORECASE|\\.:_\n┃\n┠ <b>Default Input Type</b> → pattern:replace|...\n┖ <b>Description</b> → Regex rewrites run on every filename before upload, in order. Each rule is <code>pattern:replace:count:flag</code> where count 0 means every match and flag is a name like <code>IGNORECASE</code>. Chain rules with <code>|</code>.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_NAME_SWAP_s"
     },
     {
      "t": "Reset",
      "to": "m_NAME_SWAP"
     }
    ],
    [
     {
      "t": "Back",
      "to": "advanced_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for NAME_SWAP once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_NAME_SWAP_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → NAME_SWAP\n┃\n┠ <b>Option's Value</b> → WEB-DL:WEBDL:0:IGNORECASE|\\.:_\n┃\n┠ <b>Default Input Type</b> → pattern:replace|...\n┖ <b>Description</b> → Regex rewrites run on every filename before upload, in order. Each rule is <code>pattern:replace:count:flag</code> where count 0 means every match and flag is a name like <code>IGNORECASE</code>. Chain rules with <code>|</code>.\n\n\n<i>Send your Name Swap. You can add pattern instead of normal text according to the format.</i>\n<b>Full Documentation Guide</b> <a href=\"https://t.me/WZML_X/77\">Click Here</a>\n┖ <b>Time Left :</b> <code>60 sec</code>\n",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_NAME_SWAP_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_NAME_SWAP_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "WEB-DL:WEBDL:0:IGNORECASE|\\.:_",
   "after": "m_NAME_SWAP_s",
   "note": "Prompt after pressing Change on NAME_SWAP. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_YT_DLP_OPTIONS": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_DLP_OPTIONS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Dict of options\n┖ <b>Description</b> → Passed straight into yt-dlp for every yt task. API option names, not command line flags.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_YT_DLP_OPTIONS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ytdlp_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for YT_DLP_OPTIONS before anything is stored (Set only, value shows Not Exists)."
  },
  "p_YT_DLP_OPTIONS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_DLP_OPTIONS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Dict of options\n┖ <b>Description</b> → Passed straight into yt-dlp for every yt task. API option names, not command line flags.\n\n\nFormat: {key: value, key: value, key: value}.\nExample: {\"format\": \"bv*+mergeall[vcodec=none]\", \"nocheckcertificate\": True, \"playliststart\": 10, \"fragment_retries\": float(\"inf\"), \"matchtitle\": \"S13\", \"writesubtitles\": True, \"live_from_start\": True, \"postprocessor_args\": {\"ffmpeg\": [\"-threads\", \"4\"]}, \"wait_for_video\": (5, 100), \"download_ranges\": [{\"start_time\": 0, \"end_time\": 10}]}\nCheck all yt-dlp api options from this <a href='https://github.com/yt-dlp/yt-dlp/blob/master/yt_dlp/YoutubeDL.py#L184'>FILE</a> or use this <a href='https://t.me/mltb_official_channel/177'>script</a> to convert cli arguments to api options.\n\n<i>Send dict of YT-DLP Options according to format.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_YT_DLP_OPTIONS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_YT_DLP_OPTIONS"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{\"format\": \"bv*+ba/b\", \"writesubtitles\": True}",
   "after": "m_YT_DLP_OPTIONS_s",
   "note": "Prompt after pressing Set on YT_DLP_OPTIONS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_YT_DLP_OPTIONS_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_DLP_OPTIONS\n┃\n┠ <b>Option's Value</b> → <code>{'format': 'bv*+ba/b', 'writesubtitles': True}</code>\n┃\n┠ <b>Default Input Type</b> → Dict of options\n┖ <b>Description</b> → Passed straight into yt-dlp for every yt task. API option names, not command line flags.\n",
   "rows": [
    [
     {
      "t": "Add One",
      "to": "pa_YT_DLP_OPTIONS"
     },
     {
      "t": "Remove One",
      "to": "pr_YT_DLP_OPTIONS"
     }
    ],
    [
     {
      "t": "Change",
      "to": "p_YT_DLP_OPTIONS_s"
     },
     {
      "t": "Reset",
      "to": "m_YT_DLP_OPTIONS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ytdlp_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for YT_DLP_OPTIONS once a value is stored: the button reads Change and Reset clears the value; Add One/Remove One edit single keys."
  },
  "p_YT_DLP_OPTIONS_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_DLP_OPTIONS\n┃\n┠ <b>Option's Value</b> → <code>{'format': 'bv*+ba/b', 'writesubtitles': True}</code>\n┃\n┠ <b>Default Input Type</b> → Dict of options\n┖ <b>Description</b> → Passed straight into yt-dlp for every yt task. API option names, not command line flags.\n\n\nFormat: {key: value, key: value, key: value}.\nExample: {\"format\": \"bv*+mergeall[vcodec=none]\", \"nocheckcertificate\": True, \"playliststart\": 10, \"fragment_retries\": float(\"inf\"), \"matchtitle\": \"S13\", \"writesubtitles\": True, \"live_from_start\": True, \"postprocessor_args\": {\"ffmpeg\": [\"-threads\", \"4\"]}, \"wait_for_video\": (5, 100), \"download_ranges\": [{\"start_time\": 0, \"end_time\": 10}]}\nCheck all yt-dlp api options from this <a href='https://github.com/yt-dlp/yt-dlp/blob/master/yt_dlp/YoutubeDL.py#L184'>FILE</a> or use this <a href='https://t.me/mltb_official_channel/177'>script</a> to convert cli arguments to api options.\n\n<i>Send dict of YT-DLP Options according to format.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_YT_DLP_OPTIONS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_YT_DLP_OPTIONS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{\"format\": \"bv*+ba/b\", \"writesubtitles\": True}",
   "after": "m_YT_DLP_OPTIONS_s",
   "note": "Prompt after pressing Change on YT_DLP_OPTIONS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "pa_YT_DLP_OPTIONS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_DLP_OPTIONS\n┃\n┠ <b>Option's Value</b> → <code>{'format': 'bv*+ba/b', 'writesubtitles': True}</code>\n┃\n┠ <b>Default Input Type</b> → Dict of options\n┖ <b>Description</b> → Passed straight into yt-dlp for every yt task. API option names, not command line flags.\n\n\nAdd one or more string key and value to YT_DLP_OPTIONS. Example: {'key 1': 62625261, 'key 2': 'value 2'}. Timeout: 60 sec",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_YT_DLP_OPTIONS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_YT_DLP_OPTIONS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{\"nocheckcertificate\": True}",
   "after": "m_YT_DLP_OPTIONS_s",
   "note": "Add One merges new key/value pairs into the existing YT_DLP_OPTIONS dict instead of replacing it."
  },
  "pr_YT_DLP_OPTIONS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_DLP_OPTIONS\n┃\n┠ <b>Option's Value</b> → <code>{'format': 'bv*+ba/b', 'writesubtitles': True}</code>\n┃\n┠ <b>Default Input Type</b> → Dict of options\n┖ <b>Description</b> → Passed straight into yt-dlp for every yt task. API option names, not command line flags.\n\n\nRemove one or more key from YT_DLP_OPTIONS. Example: key 1/key2/key 3. Timeout: 60 sec",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_YT_DLP_OPTIONS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_YT_DLP_OPTIONS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "writesubtitles",
   "after": "m_YT_DLP_OPTIONS_s",
   "note": "Remove One deletes the named keys (separated by /) from YT_DLP_OPTIONS."
  },
  "m_USER_COOKIE_FILE": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → USER_COOKIE_FILE\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → File\n┖ <b>Description</b> → User's YT-DLP Cookie File to authenticate access to websites and youtube.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_USER_COOKIE_FILE"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ytdlp_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for USER_COOKIE_FILE before anything is stored (Set only, value shows Not Exists)."
  },
  "p_USER_COOKIE_FILE": {
   "kind": "prompt",
   "text": "⌬ <b>Set User Cookie File</b>\n\n<i>Send your cookie file (e.g., cookies.txt or abc.txt).</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_USER_COOKIE_FILE"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_USER_COOKIE_FILE"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "[file: cookies.txt]",
   "after": "m_USER_COOKIE_FILE_s",
   "note": "Prompt after pressing Set on USER_COOKIE_FILE. The bot waits 60s for a file; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_USER_COOKIE_FILE_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → USER_COOKIE_FILE\n┃\n┠ <b>Option's Value</b> → <b>Exists</b>\n┃\n┠ <b>Default Input Type</b> → File\n┖ <b>Description</b> → User's YT-DLP Cookie File to authenticate access to websites and youtube.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_USER_COOKIE_FILE_s"
     },
     {
      "t": "Remove",
      "to": "m_USER_COOKIE_FILE"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ytdlp_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for USER_COOKIE_FILE once a value is stored: the button reads Change and Remove deletes the saved file."
  },
  "p_USER_COOKIE_FILE_s": {
   "kind": "prompt",
   "text": "⌬ <b>Set User Cookie File</b>\n\n<i>Send your cookie file (e.g., cookies.txt or abc.txt).</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_USER_COOKIE_FILE_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_USER_COOKIE_FILE_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "[file: cookies.txt]",
   "after": "m_USER_COOKIE_FILE_s",
   "note": "Prompt after pressing Change on USER_COOKIE_FILE. The bot waits 60s for a file; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_YT_DESP": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_DESP\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Custom description for YouTube uploads. Default is used if not set.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_YT_DESP"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ytdlp_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for YT_DESP before anything is stored (Set only, value shows Not Exists)."
  },
  "p_YT_DESP": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_DESP\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Custom description for YouTube uploads. Default is used if not set.\n\n\n<i>Send your custom YouTube description.</i> \nTime Left : <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_YT_DESP"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_YT_DESP"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "Uploaded via my bot",
   "after": "m_YT_DESP_s",
   "note": "Prompt after pressing Set on YT_DESP. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_YT_DESP_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_DESP\n┃\n┠ <b>Option's Value</b> → Uploaded via my bot\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Custom description for YouTube uploads. Default is used if not set.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_YT_DESP_s"
     },
     {
      "t": "Reset",
      "to": "m_YT_DESP"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ytdlp_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for YT_DESP once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_YT_DESP_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_DESP\n┃\n┠ <b>Option's Value</b> → Uploaded via my bot\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Custom description for YouTube uploads. Default is used if not set.\n\n\n<i>Send your custom YouTube description.</i> \nTime Left : <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_YT_DESP_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_YT_DESP_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "Uploaded via my bot",
   "after": "m_YT_DESP_s",
   "note": "Prompt after pressing Change on YT_DESP. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_YT_TAGS": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_TAGS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Comma-separated strings\n┖ <b>Description</b> → Custom tags for YouTube uploads (e.g., tag1,tag2,tag3). Default is used if not set.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_YT_TAGS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ytdlp_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for YT_TAGS before anything is stored (Set only, value shows Not Exists)."
  },
  "p_YT_TAGS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_TAGS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Comma-separated strings\n┖ <b>Description</b> → Custom tags for YouTube uploads (e.g., tag1,tag2,tag3). Default is used if not set.\n\n\n<i>Send your custom YouTube tags as a comma-separated list.</i> \nTime Left : <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_YT_TAGS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_YT_TAGS"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "movies,hd",
   "after": "m_YT_TAGS_s",
   "note": "Prompt after pressing Set on YT_TAGS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_YT_TAGS_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_TAGS\n┃\n┠ <b>Option's Value</b> → ['movies', 'hd']\n┃\n┠ <b>Default Input Type</b> → Comma-separated strings\n┖ <b>Description</b> → Custom tags for YouTube uploads (e.g., tag1,tag2,tag3). Default is used if not set.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_YT_TAGS_s"
     },
     {
      "t": "Reset",
      "to": "m_YT_TAGS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ytdlp_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for YT_TAGS once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_YT_TAGS_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_TAGS\n┃\n┠ <b>Option's Value</b> → ['movies', 'hd']\n┃\n┠ <b>Default Input Type</b> → Comma-separated strings\n┖ <b>Description</b> → Custom tags for YouTube uploads (e.g., tag1,tag2,tag3). Default is used if not set.\n\n\n<i>Send your custom YouTube tags as a comma-separated list.</i> \nTime Left : <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_YT_TAGS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_YT_TAGS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "movies,hd",
   "after": "m_YT_TAGS_s",
   "note": "Prompt after pressing Change on YT_TAGS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_YT_CATEGORY_ID": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_CATEGORY_ID\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Number\n┖ <b>Description</b> → Custom category ID for YouTube uploads. Default is used if not set.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_YT_CATEGORY_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ytdlp_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for YT_CATEGORY_ID before anything is stored (Set only, value shows Not Exists)."
  },
  "p_YT_CATEGORY_ID": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_CATEGORY_ID\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Number\n┖ <b>Description</b> → Custom category ID for YouTube uploads. Default is used if not set.\n\n\n<i>Send your custom YouTube category ID (e.g., 22).</i> \nTime Left : <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_YT_CATEGORY_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_YT_CATEGORY_ID"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "24",
   "after": "m_YT_CATEGORY_ID_s",
   "note": "Prompt after pressing Set on YT_CATEGORY_ID. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_YT_CATEGORY_ID_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_CATEGORY_ID\n┃\n┠ <b>Option's Value</b> → 24\n┃\n┠ <b>Default Input Type</b> → Number\n┖ <b>Description</b> → Custom category ID for YouTube uploads. Default is used if not set.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_YT_CATEGORY_ID_s"
     },
     {
      "t": "Reset",
      "to": "m_YT_CATEGORY_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ytdlp_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for YT_CATEGORY_ID once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_YT_CATEGORY_ID_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_CATEGORY_ID\n┃\n┠ <b>Option's Value</b> → 24\n┃\n┠ <b>Default Input Type</b> → Number\n┖ <b>Description</b> → Custom category ID for YouTube uploads. Default is used if not set.\n\n\n<i>Send your custom YouTube category ID (e.g., 22).</i> \nTime Left : <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_YT_CATEGORY_ID_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_YT_CATEGORY_ID_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "24",
   "after": "m_YT_CATEGORY_ID_s",
   "note": "Prompt after pressing Change on YT_CATEGORY_ID. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_YT_PRIVACY_STATUS": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_PRIVACY_STATUS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → public, private, or unlisted\n┖ <b>Description</b> → Custom privacy status for YouTube uploads. Default is used if not set.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_YT_PRIVACY_STATUS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ytdlp_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for YT_PRIVACY_STATUS before anything is stored (Set only, value shows Not Exists)."
  },
  "p_YT_PRIVACY_STATUS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_PRIVACY_STATUS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → public, private, or unlisted\n┖ <b>Description</b> → Custom privacy status for YouTube uploads. Default is used if not set.\n\n\n<i>Send your custom YouTube privacy status (public, private, or unlisted).</i> \nTime Left : <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_YT_PRIVACY_STATUS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_YT_PRIVACY_STATUS"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "private",
   "after": "m_YT_PRIVACY_STATUS_s",
   "note": "Prompt after pressing Set on YT_PRIVACY_STATUS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_YT_PRIVACY_STATUS_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_PRIVACY_STATUS\n┃\n┠ <b>Option's Value</b> → private\n┃\n┠ <b>Default Input Type</b> → public, private, or unlisted\n┖ <b>Description</b> → Custom privacy status for YouTube uploads. Default is used if not set.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_YT_PRIVACY_STATUS_s"
     },
     {
      "t": "Reset",
      "to": "m_YT_PRIVACY_STATUS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ytdlp_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for YT_PRIVACY_STATUS once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_YT_PRIVACY_STATUS_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → YT_PRIVACY_STATUS\n┃\n┠ <b>Option's Value</b> → private\n┃\n┠ <b>Default Input Type</b> → public, private, or unlisted\n┖ <b>Description</b> → Custom privacy status for YouTube uploads. Default is used if not set.\n\n\n<i>Send your custom YouTube privacy status (public, private, or unlisted).</i> \nTime Left : <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_YT_PRIVACY_STATUS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_YT_PRIVACY_STATUS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "private",
   "after": "m_YT_PRIVACY_STATUS_s",
   "note": "Prompt after pressing Change on YT_PRIVACY_STATUS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_FFMPEG_CMDS": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → FFMPEG_CMDS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Dict of lists\n┖ <b>Description</b> → Named ffmpeg runs applied before upload, picked per task with <code>-ff</code>. Start at the arguments, never at the word ffmpeg, and every command needs an <code>-i</code>.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_FFMPEG_CMDS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ffset_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for FFMPEG_CMDS before anything is stored (Set only, value shows Not Exists)."
  },
  "p_FFMPEG_CMDS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → FFMPEG_CMDS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Dict of lists\n┖ <b>Description</b> → Named ffmpeg runs applied before upload, picked per task with <code>-ff</code>. Start at the arguments, never at the word ffmpeg, and every command needs an <code>-i</code>.\n\n\nDict of list values of ffmpeg commands. You can set multiple ffmpeg commands for all files before upload. Don't write ffmpeg at beginning, start directly with the arguments.\nExamples: {\"subtitle\": [\"-i mltb.mkv -c copy -c:s srt mltb.mkv\", \"-i mltb.video -c copy -c:s srt mltb\"], \"convert\": [\"-i mltb.m4a -c:a libmp3lame -q:a 2 mltb.mp3\", \"-i mltb.audio -c:a libmp3lame -q:a 2 mltb.mp3\"], extract: [\"-i mltb -map 0:a -c copy mltb.mka -map 0:s -c copy mltb.srt\"]}\nNotes:\n- Add `-del` to the list which you want from the bot to delete the original files after command run complete!\n- To execute one of those lists in bot for example, you must use -ff subtitle (list key) or -ff convert (list key)\nHere I will explain how to use mltb.* which is reference to files you want to work on.\n1. First cmd: the input is mltb.mkv so this cmd will work only on mkv videos and the output is mltb.mkv also so all outputs are mkv. -del will delete the original media after complete run of the cmd.\n2. Second cmd: the input is mltb.video so this cmd will work on all videos and the output is only mltb so the extension is the same as input files.\n3. Third cmd: the input is mltb.m4a so this cmd will work only on m4a audios and the output is mltb.mp3 so the output extension is mp3.\n4. Fourth cmd: the input is mltb.audio so this cmd will work on all audios and the output is mltb.mp3 so the output extension is mp3.\n\n<i>Send dict of FFMPEG_CMDS Options according to format.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>\n",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_FFMPEG_CMDS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_FFMPEG_CMDS"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{\"convert\": [\"-i mltb.m4a -c:a libmp3lame -q:a 2 mltb.mp3\"], \"subtitle\": [\"-i mltb.mkv -c copy -c:s srt mltb.mkv -del\"]}",
   "after": "m_FFMPEG_CMDS_s",
   "note": "Prompt after pressing Set on FFMPEG_CMDS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_FFMPEG_CMDS_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → FFMPEG_CMDS\n┃\n┠ <b>Option's Value</b> → <code>{'convert': ['-i mltb.m4a -c:a libmp3lame -q:a 2 mltb.mp3'], 'subtitle': ['-i mltb.mkv -c copy -c:s srt mltb.mkv -del']}</code>\n┃\n┠ <b>Default Input Type</b> → Dict of lists\n┖ <b>Description</b> → Named ffmpeg runs applied before upload, picked per task with <code>-ff</code>. Start at the arguments, never at the word ffmpeg, and every command needs an <code>-i</code>.\n",
   "rows": [
    [
     {
      "t": "Add One",
      "to": "pa_FFMPEG_CMDS"
     },
     {
      "t": "Remove One",
      "to": "pr_FFMPEG_CMDS"
     }
    ],
    [
     {
      "t": "Change",
      "to": "p_FFMPEG_CMDS_s"
     },
     {
      "t": "Reset",
      "to": "m_FFMPEG_CMDS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ffset_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for FFMPEG_CMDS once a value is stored: the button reads Change and Reset clears the value; Add One/Remove One edit single keys."
  },
  "p_FFMPEG_CMDS_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → FFMPEG_CMDS\n┃\n┠ <b>Option's Value</b> → <code>{'convert': ['-i mltb.m4a -c:a libmp3lame -q:a 2 mltb.mp3'], 'subtitle': ['-i mltb.mkv -c copy -c:s srt mltb.mkv -del']}</code>\n┃\n┠ <b>Default Input Type</b> → Dict of lists\n┖ <b>Description</b> → Named ffmpeg runs applied before upload, picked per task with <code>-ff</code>. Start at the arguments, never at the word ffmpeg, and every command needs an <code>-i</code>.\n\n\nDict of list values of ffmpeg commands. You can set multiple ffmpeg commands for all files before upload. Don't write ffmpeg at beginning, start directly with the arguments.\nExamples: {\"subtitle\": [\"-i mltb.mkv -c copy -c:s srt mltb.mkv\", \"-i mltb.video -c copy -c:s srt mltb\"], \"convert\": [\"-i mltb.m4a -c:a libmp3lame -q:a 2 mltb.mp3\", \"-i mltb.audio -c:a libmp3lame -q:a 2 mltb.mp3\"], extract: [\"-i mltb -map 0:a -c copy mltb.mka -map 0:s -c copy mltb.srt\"]}\nNotes:\n- Add `-del` to the list which you want from the bot to delete the original files after command run complete!\n- To execute one of those lists in bot for example, you must use -ff subtitle (list key) or -ff convert (list key)\nHere I will explain how to use mltb.* which is reference to files you want to work on.\n1. First cmd: the input is mltb.mkv so this cmd will work only on mkv videos and the output is mltb.mkv also so all outputs are mkv. -del will delete the original media after complete run of the cmd.\n2. Second cmd: the input is mltb.video so this cmd will work on all videos and the output is only mltb so the extension is the same as input files.\n3. Third cmd: the input is mltb.m4a so this cmd will work only on m4a audios and the output is mltb.mp3 so the output extension is mp3.\n4. Fourth cmd: the input is mltb.audio so this cmd will work on all audios and the output is mltb.mp3 so the output extension is mp3.\n\n<i>Send dict of FFMPEG_CMDS Options according to format.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>\n",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_FFMPEG_CMDS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_FFMPEG_CMDS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{\"convert\": [\"-i mltb.m4a -c:a libmp3lame -q:a 2 mltb.mp3\"], \"subtitle\": [\"-i mltb.mkv -c copy -c:s srt mltb.mkv -del\"]}",
   "after": "m_FFMPEG_CMDS_s",
   "note": "Prompt after pressing Change on FFMPEG_CMDS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "pa_FFMPEG_CMDS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → FFMPEG_CMDS\n┃\n┠ <b>Option's Value</b> → <code>{'convert': ['-i mltb.m4a -c:a libmp3lame -q:a 2 mltb.mp3'], 'subtitle': ['-i mltb.mkv -c copy -c:s srt mltb.mkv -del']}</code>\n┃\n┠ <b>Default Input Type</b> → Dict of lists\n┖ <b>Description</b> → Named ffmpeg runs applied before upload, picked per task with <code>-ff</code>. Start at the arguments, never at the word ffmpeg, and every command needs an <code>-i</code>.\n\n\nAdd one or more string key and value to FFMPEG_CMDS. Example: {'key 1': 62625261, 'key 2': 'value 2'}. Timeout: 60 sec",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_FFMPEG_CMDS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_FFMPEG_CMDS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{\"extract\": [\"-i mltb -map 0:a -c copy mltb.mka\"]}",
   "after": "m_FFMPEG_CMDS_s",
   "note": "Add One merges new key/value pairs into the existing FFMPEG_CMDS dict instead of replacing it."
  },
  "pr_FFMPEG_CMDS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → FFMPEG_CMDS\n┃\n┠ <b>Option's Value</b> → <code>{'convert': ['-i mltb.m4a -c:a libmp3lame -q:a 2 mltb.mp3'], 'subtitle': ['-i mltb.mkv -c copy -c:s srt mltb.mkv -del']}</code>\n┃\n┠ <b>Default Input Type</b> → Dict of lists\n┖ <b>Description</b> → Named ffmpeg runs applied before upload, picked per task with <code>-ff</code>. Start at the arguments, never at the word ffmpeg, and every command needs an <code>-i</code>.\n\n\nRemove one or more key from FFMPEG_CMDS. Example: key 1/key2/key 3. Timeout: 60 sec",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_FFMPEG_CMDS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_FFMPEG_CMDS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "extract",
   "after": "m_FFMPEG_CMDS_s",
   "note": "Remove One deletes the named keys (separated by /) from FFMPEG_CMDS."
  },
  "m_METADATA": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → METADATA\n┃\n┠ <b>Option's Value</b> → <b>Not Set</b>\n┃\n┠ <b>Default Input Type</b> → 🏷 Global Metadata (key=value|key=value)\n┠ <b>Description</b> → Apply metadata to all media files with dynamic variables.\n┃\n┠ <b>Dynamic Variables:</b>\n┠ • <code>{filename}</code> - Full filename\n┠ • <code>{basename}</code> - Filename without extension  \n┠ • <code>{extension}</code> - File extension\n┃\n┠ • <code>{audiolang}</code> - Audio language\n┖ • <code>{sublang}</code> - Subtitle language\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ffset_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for METADATA before anything is stored (Set only, value shows Not Exists)."
  },
  "p_METADATA": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → METADATA\n┃\n┠ <b>Option's Value</b> → <b>Not Set</b>\n┃\n┠ <b>Default Input Type</b> → 🏷 Global Metadata (key=value|key=value)\n┠ <b>Description</b> → Apply metadata to all media files with dynamic variables.\n┃\n┠ <b>Dynamic Variables:</b>\n┠ • <code>{filename}</code> - Full filename\n┠ • <code>{basename}</code> - Filename without extension  \n┠ • <code>{extension}</code> - File extension\n┃\n┠ • <code>{audiolang}</code> - Audio language\n┖ • <code>{sublang}</code> - Subtitle language\n\n\n<i>📝 Send metadata as</i> <code>key=value|key2=value2</code>\n\n<b>🔧 Dynamic Variables:</b>\n• <code>{filename}</code> - Original filename\n• <code>{basename}</code> - Name without extension\n• <code>{audiolang}</code> - Audio language (English/Hindi etc.)\n• <code>{year}</code> - Year from filename\n\n<b>📋 Example:</b>\n<code>title={basename}|artist={audiolang} Version|year={year}</code>\n\n⏱ <b>Time Left:</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_METADATA"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "title={basename}|artist=@MyChannel",
   "after": "m_METADATA_s",
   "note": "Prompt after pressing Set on METADATA. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_METADATA_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → METADATA\n┃\n┠ <b>Option's Value</b> → <code>title={basename}, artist=@MyChannel</code>\n┃\n┠ <b>Default Input Type</b> → 🏷 Global Metadata (key=value|key=value)\n┠ <b>Description</b> → Apply metadata to all media files with dynamic variables.\n┃\n┠ <b>Dynamic Variables:</b>\n┠ • <code>{filename}</code> - Full filename\n┠ • <code>{basename}</code> - Filename without extension  \n┠ • <code>{extension}</code> - File extension\n┃\n┠ • <code>{audiolang}</code> - Audio language\n┖ • <code>{sublang}</code> - Subtitle language\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_METADATA_s"
     },
     {
      "t": "Reset",
      "to": "m_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ffset_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for METADATA once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_METADATA_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → METADATA\n┃\n┠ <b>Option's Value</b> → <code>title={basename}, artist=@MyChannel</code>\n┃\n┠ <b>Default Input Type</b> → 🏷 Global Metadata (key=value|key=value)\n┠ <b>Description</b> → Apply metadata to all media files with dynamic variables.\n┃\n┠ <b>Dynamic Variables:</b>\n┠ • <code>{filename}</code> - Full filename\n┠ • <code>{basename}</code> - Filename without extension  \n┠ • <code>{extension}</code> - File extension\n┃\n┠ • <code>{audiolang}</code> - Audio language\n┖ • <code>{sublang}</code> - Subtitle language\n\n\n<i>📝 Send metadata as</i> <code>key=value|key2=value2</code>\n\n<b>🔧 Dynamic Variables:</b>\n• <code>{filename}</code> - Original filename\n• <code>{basename}</code> - Name without extension\n• <code>{audiolang}</code> - Audio language (English/Hindi etc.)\n• <code>{year}</code> - Year from filename\n\n<b>📋 Example:</b>\n<code>title={basename}|artist={audiolang} Version|year={year}</code>\n\n⏱ <b>Time Left:</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_METADATA_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_METADATA_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "title={basename}|artist=@MyChannel",
   "after": "m_METADATA_s",
   "note": "Prompt after pressing Change on METADATA. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_AUDIO_METADATA": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → AUDIO_METADATA\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → 🎵 Audio Stream Metadata\n┖ <b>Description</b> → Metadata applied to each audio track separately.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_AUDIO_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ffset_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for AUDIO_METADATA before anything is stored (Set only, value shows Not Exists)."
  },
  "p_AUDIO_METADATA": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → AUDIO_METADATA\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → 🎵 Audio Stream Metadata\n┖ <b>Description</b> → Metadata applied to each audio track separately.\n\n\n<i>🎧 Audio stream metadata with per-track language support</i>\n\n<b>📋 Example:</b>\n<code>language={audiolang}|title=Audio - {audiolang}</code>\n\n⏱ <b>Time Left:</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_AUDIO_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_AUDIO_METADATA"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "language={audiolang}|title=Audio - {audiolang}",
   "after": "m_AUDIO_METADATA_s",
   "note": "Prompt after pressing Set on AUDIO_METADATA. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_AUDIO_METADATA_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → AUDIO_METADATA\n┃\n┠ <b>Option's Value</b> → {'language': '{audiolang}', 'title': 'Audio - {audiolang}'}\n┃\n┠ <b>Default Input Type</b> → 🎵 Audio Stream Metadata\n┖ <b>Description</b> → Metadata applied to each audio track separately.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_AUDIO_METADATA_s"
     },
     {
      "t": "Reset",
      "to": "m_AUDIO_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ffset_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for AUDIO_METADATA once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_AUDIO_METADATA_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → AUDIO_METADATA\n┃\n┠ <b>Option's Value</b> → {'language': '{audiolang}', 'title': 'Audio - {audiolang}'}\n┃\n┠ <b>Default Input Type</b> → 🎵 Audio Stream Metadata\n┖ <b>Description</b> → Metadata applied to each audio track separately.\n\n\n<i>🎧 Audio stream metadata with per-track language support</i>\n\n<b>📋 Example:</b>\n<code>language={audiolang}|title=Audio - {audiolang}</code>\n\n⏱ <b>Time Left:</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_AUDIO_METADATA_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_AUDIO_METADATA_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "language={audiolang}|title=Audio - {audiolang}",
   "after": "m_AUDIO_METADATA_s",
   "note": "Prompt after pressing Change on AUDIO_METADATA. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_VIDEO_METADATA": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → VIDEO_METADATA\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → 🎥 Video Stream Metadata\n┖ <b>Description</b> → Metadata applied to video streams.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_VIDEO_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ffset_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for VIDEO_METADATA before anything is stored (Set only, value shows Not Exists)."
  },
  "p_VIDEO_METADATA": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → VIDEO_METADATA\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → 🎥 Video Stream Metadata\n┖ <b>Description</b> → Metadata applied to video streams.\n\n\n<i>📹 Video stream metadata for visual tracks</i>\n\n<b>📋 Example:</b>\n<code>title={basename}|comment=HD Video</code>\n\n⏱ <b>Time Left:</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_VIDEO_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_VIDEO_METADATA"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "title={basename}|comment=HD Video",
   "after": "m_VIDEO_METADATA_s",
   "note": "Prompt after pressing Set on VIDEO_METADATA. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_VIDEO_METADATA_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → VIDEO_METADATA\n┃\n┠ <b>Option's Value</b> → {'title': '{basename}', 'comment': 'HD Video'}\n┃\n┠ <b>Default Input Type</b> → 🎥 Video Stream Metadata\n┖ <b>Description</b> → Metadata applied to video streams.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_VIDEO_METADATA_s"
     },
     {
      "t": "Reset",
      "to": "m_VIDEO_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ffset_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for VIDEO_METADATA once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_VIDEO_METADATA_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → VIDEO_METADATA\n┃\n┠ <b>Option's Value</b> → {'title': '{basename}', 'comment': 'HD Video'}\n┃\n┠ <b>Default Input Type</b> → 🎥 Video Stream Metadata\n┖ <b>Description</b> → Metadata applied to video streams.\n\n\n<i>📹 Video stream metadata for visual tracks</i>\n\n<b>📋 Example:</b>\n<code>title={basename}|comment=HD Video</code>\n\n⏱ <b>Time Left:</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_VIDEO_METADATA_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_VIDEO_METADATA_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "title={basename}|comment=HD Video",
   "after": "m_VIDEO_METADATA_s",
   "note": "Prompt after pressing Change on VIDEO_METADATA. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_SUBTITLE_METADATA": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → SUBTITLE_METADATA\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → 💬 Subtitle Stream Metadata\n┖ <b>Description</b> → Metadata applied to each subtitle track separately.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_SUBTITLE_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ffset_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for SUBTITLE_METADATA before anything is stored (Set only, value shows Not Exists)."
  },
  "p_SUBTITLE_METADATA": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → SUBTITLE_METADATA\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → 💬 Subtitle Stream Metadata\n┖ <b>Description</b> → Metadata applied to each subtitle track separately.\n\n\n<i>📄 Subtitle stream metadata with per-track language support</i>\n\n<b>📋 Example:</b>\n<code>language={sublang}|title=Subtitles - {sublang}</code>\n\n⏱ <b>Time Left:</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_SUBTITLE_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_SUBTITLE_METADATA"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "language={sublang}|title=Subtitles - {sublang}",
   "after": "m_SUBTITLE_METADATA_s",
   "note": "Prompt after pressing Set on SUBTITLE_METADATA. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_SUBTITLE_METADATA_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → SUBTITLE_METADATA\n┃\n┠ <b>Option's Value</b> → {'language': '{sublang}', 'title': 'Subtitles - {sublang}'}\n┃\n┠ <b>Default Input Type</b> → 💬 Subtitle Stream Metadata\n┖ <b>Description</b> → Metadata applied to each subtitle track separately.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_SUBTITLE_METADATA_s"
     },
     {
      "t": "Reset",
      "to": "m_SUBTITLE_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "ffset_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for SUBTITLE_METADATA once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_SUBTITLE_METADATA_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → SUBTITLE_METADATA\n┃\n┠ <b>Option's Value</b> → {'language': '{sublang}', 'title': 'Subtitles - {sublang}'}\n┃\n┠ <b>Default Input Type</b> → 💬 Subtitle Stream Metadata\n┖ <b>Description</b> → Metadata applied to each subtitle track separately.\n\n\n<i>📄 Subtitle stream metadata with per-track language support</i>\n\n<b>📋 Example:</b>\n<code>language={sublang}|title=Subtitles - {sublang}</code>\n\n⏱ <b>Time Left:</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_SUBTITLE_METADATA_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_SUBTITLE_METADATA_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "language={sublang}|title=Subtitles - {sublang}",
   "after": "m_SUBTITLE_METADATA_s",
   "note": "Prompt after pressing Change on SUBTITLE_METADATA. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_USER_SESSION": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → USER_SESSION\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String Session\n┖ <b>Description</b> → Your own telegram session, sealed with a passphrase you choose. The bot stores only the ciphertext, salt and nonce, never the passphrase and never the derived key, so a database dump carries nothing usable. After one unlock the key is held in memory for 12h and is lost on restart. An owner who patches the running bot can read the plaintext during that window. If that is not acceptable to you, do not use this.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "sess_p1"
     }
    ],
    [
     {
      "t": "Back",
      "to": "clone_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for USER_SESSION before anything is stored (Set only, value shows Not Exists)."
  },
  "m_USER_SESSION_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → USER_SESSION\n┃\n┠ <b>Option's Value</b> → <b>Exists</b>\n┃\n┠ <b>Default Input Type</b> → String Session\n┖ <b>Description</b> → Your own telegram session, sealed with a passphrase you choose. The bot stores only the ciphertext, salt and nonce, never the passphrase and never the derived key, so a database dump carries nothing usable. After one unlock the key is held in memory for 12h and is lost on restart. An owner who patches the running bot can read the plaintext during that window. If that is not acceptable to you, do not use this.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "sess_p1"
     },
     {
      "t": "Reset",
      "to": "m_USER_SESSION"
     }
    ],
    [
     {
      "t": "Back",
      "to": "clone_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "USER_SESSION menu once a sealed session is stored; Change restarts the two-step passphrase/session prompt in DM, Reset deletes it."
  },
  "m_CLONE_DUMP_CHATS": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_DUMP_CHATS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → Default destinations for /clone when -ud is not given.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_CLONE_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "clone_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for CLONE_DUMP_CHATS before anything is stored (Set only, value shows Not Exists)."
  },
  "p_CLONE_DUMP_CHATS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_DUMP_CHATS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → Default destinations for /clone when -ud is not given.\n\n\n<i>Send a dict of name to chat id. Example: {'Movies': -1001234567890}</i>\n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_CLONE_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_CLONE_DUMP_CHATS"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{'Movies': -1001234567890}",
   "after": "m_CLONE_DUMP_CHATS_s",
   "note": "Prompt after pressing Set on CLONE_DUMP_CHATS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_CLONE_DUMP_CHATS_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_DUMP_CHATS\n┃\n┠ <b>Option's Value</b> → {'Movies': -1001234567890}\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → Default destinations for /clone when -ud is not given.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_CLONE_DUMP_CHATS_s"
     },
     {
      "t": "Reset",
      "to": "m_CLONE_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "clone_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for CLONE_DUMP_CHATS once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_CLONE_DUMP_CHATS_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_DUMP_CHATS\n┃\n┠ <b>Option's Value</b> → {'Movies': -1001234567890}\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → Default destinations for /clone when -ud is not given.\n\n\n<i>Send a dict of name to chat id. Example: {'Movies': -1001234567890}</i>\n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_CLONE_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_CLONE_DUMP_CHATS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{'Movies': -1001234567890}",
   "after": "m_CLONE_DUMP_CHATS_s",
   "note": "Prompt after pressing Change on CLONE_DUMP_CHATS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_CLONE_CONTENT_TYPE": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_CONTENT_TYPE\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → doc | med | all\n┖ <b>Description</b> → Restrict /clone to documents only, media only, or everything.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_CLONE_CONTENT_TYPE"
     }
    ],
    [
     {
      "t": "Back",
      "to": "clone_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for CLONE_CONTENT_TYPE before anything is stored (Set only, value shows Not Exists)."
  },
  "p_CLONE_CONTENT_TYPE": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_CONTENT_TYPE\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → doc | med | all\n┖ <b>Description</b> → Restrict /clone to documents only, media only, or everything.\n\n\n<i>Send one of: <code>doc</code>, <code>med</code>, <code>all</code></i>\n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_CLONE_CONTENT_TYPE"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_CLONE_CONTENT_TYPE"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "med",
   "after": "m_CLONE_CONTENT_TYPE_s",
   "note": "Prompt after pressing Set on CLONE_CONTENT_TYPE. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_CLONE_CONTENT_TYPE_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_CONTENT_TYPE\n┃\n┠ <b>Option's Value</b> → med\n┃\n┠ <b>Default Input Type</b> → doc | med | all\n┖ <b>Description</b> → Restrict /clone to documents only, media only, or everything.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_CLONE_CONTENT_TYPE_s"
     },
     {
      "t": "Reset",
      "to": "m_CLONE_CONTENT_TYPE"
     }
    ],
    [
     {
      "t": "Back",
      "to": "clone_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for CLONE_CONTENT_TYPE once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_CLONE_CONTENT_TYPE_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_CONTENT_TYPE\n┃\n┠ <b>Option's Value</b> → med\n┃\n┠ <b>Default Input Type</b> → doc | med | all\n┖ <b>Description</b> → Restrict /clone to documents only, media only, or everything.\n\n\n<i>Send one of: <code>doc</code>, <code>med</code>, <code>all</code></i>\n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_CLONE_CONTENT_TYPE_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_CLONE_CONTENT_TYPE_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "med",
   "after": "m_CLONE_CONTENT_TYPE_s",
   "note": "Prompt after pressing Change on CLONE_CONTENT_TYPE. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_CLONE_EXCLUDED_EXTENSIONS": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_EXCLUDED_EXTENSIONS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Space separated extensions\n┖ <b>Description</b> → Extensions skipped by /clone only. Independent of the leech list.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_CLONE_EXCLUDED_EXTENSIONS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "clone_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for CLONE_EXCLUDED_EXTENSIONS before anything is stored (Set only, value shows Not Exists)."
  },
  "p_CLONE_EXCLUDED_EXTENSIONS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_EXCLUDED_EXTENSIONS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Space separated extensions\n┖ <b>Description</b> → Extensions skipped by /clone only. Independent of the leech list.\n\n\n<i>Send extensions separated by space. Example: mkv srt txt</i>\n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_CLONE_EXCLUDED_EXTENSIONS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_CLONE_EXCLUDED_EXTENSIONS"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "mkv srt txt",
   "after": "m_CLONE_EXCLUDED_EXTENSIONS_s",
   "note": "Prompt after pressing Set on CLONE_EXCLUDED_EXTENSIONS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_CLONE_EXCLUDED_EXTENSIONS_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_EXCLUDED_EXTENSIONS\n┃\n┠ <b>Option's Value</b> → ['mkv', 'srt', 'txt']\n┃\n┠ <b>Default Input Type</b> → Space separated extensions\n┖ <b>Description</b> → Extensions skipped by /clone only. Independent of the leech list.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_CLONE_EXCLUDED_EXTENSIONS_s"
     },
     {
      "t": "Reset",
      "to": "m_CLONE_EXCLUDED_EXTENSIONS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "clone_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for CLONE_EXCLUDED_EXTENSIONS once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_CLONE_EXCLUDED_EXTENSIONS_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_EXCLUDED_EXTENSIONS\n┃\n┠ <b>Option's Value</b> → ['mkv', 'srt', 'txt']\n┃\n┠ <b>Default Input Type</b> → Space separated extensions\n┖ <b>Description</b> → Extensions skipped by /clone only. Independent of the leech list.\n\n\n<i>Send extensions separated by space. Example: mkv srt txt</i>\n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_CLONE_EXCLUDED_EXTENSIONS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_CLONE_EXCLUDED_EXTENSIONS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "mkv srt txt",
   "after": "m_CLONE_EXCLUDED_EXTENSIONS_s",
   "note": "Prompt after pressing Change on CLONE_EXCLUDED_EXTENSIONS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_CLONE_FILTERS": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_FILTERS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → Regex applied to every /clone task. mn keeps matching names, xn drops them, mc and xc do the same against the caption.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_CLONE_FILTERS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "clone_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for CLONE_FILTERS before anything is stored (Set only, value shows Not Exists)."
  },
  "p_CLONE_FILTERS": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_FILTERS\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → Regex applied to every /clone task. mn keeps matching names, xn drops them, mc and xc do the same against the caption.\n\n\n<i>Send a dict. Example: {'mn': '1080p', 'xc': 'sample'}</i>\n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_CLONE_FILTERS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_CLONE_FILTERS"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{'mn': '1080p', 'xc': 'sample'}",
   "after": "m_CLONE_FILTERS_s",
   "note": "Prompt after pressing Set on CLONE_FILTERS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_CLONE_FILTERS_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_FILTERS\n┃\n┠ <b>Option's Value</b> → {'mn': '1080p', 'xc': 'sample'}\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → Regex applied to every /clone task. mn keeps matching names, xn drops them, mc and xc do the same against the caption.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_CLONE_FILTERS_s"
     },
     {
      "t": "Reset",
      "to": "m_CLONE_FILTERS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "clone_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for CLONE_FILTERS once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_CLONE_FILTERS_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → CLONE_FILTERS\n┃\n┠ <b>Option's Value</b> → {'mn': '1080p', 'xc': 'sample'}\n┃\n┠ <b>Default Input Type</b> → Dict\n┖ <b>Description</b> → Regex applied to every /clone task. mn keeps matching names, xn drops them, mc and xc do the same against the caption.\n\n\n<i>Send a dict. Example: {'mn': '1080p', 'xc': 'sample'}</i>\n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_CLONE_FILTERS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_CLONE_FILTERS_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "{'mn': '1080p', 'xc': 'sample'}",
   "after": "m_CLONE_FILTERS_s",
   "note": "Prompt after pressing Change on CLONE_FILTERS. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_GOFILE_TOKEN": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → GOFILE_TOKEN\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Gofile API Token\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_GOFILE_TOKEN"
     }
    ],
    [
     {
      "t": "Back",
      "to": "gofile_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for GOFILE_TOKEN before anything is stored (Set only, value shows Not Exists)."
  },
  "p_GOFILE_TOKEN": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → GOFILE_TOKEN\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Gofile API Token\n\n\n<i>Send your Gofile API Token.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_GOFILE_TOKEN"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_GOFILE_TOKEN"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "AbCdEf123456GofileToken",
   "after": "m_GOFILE_TOKEN_s",
   "note": "Prompt after pressing Set on GOFILE_TOKEN. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_GOFILE_TOKEN_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → GOFILE_TOKEN\n┃\n┠ <b>Option's Value</b> → AbCdEf123456GofileToken\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Gofile API Token\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_GOFILE_TOKEN_s"
     },
     {
      "t": "Reset",
      "to": "m_GOFILE_TOKEN"
     }
    ],
    [
     {
      "t": "Back",
      "to": "gofile_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for GOFILE_TOKEN once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_GOFILE_TOKEN_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → GOFILE_TOKEN\n┃\n┠ <b>Option's Value</b> → AbCdEf123456GofileToken\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Gofile API Token\n\n\n<i>Send your Gofile API Token.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_GOFILE_TOKEN_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_GOFILE_TOKEN_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "AbCdEf123456GofileToken",
   "after": "m_GOFILE_TOKEN_s",
   "note": "Prompt after pressing Change on GOFILE_TOKEN. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_GOFILE_FOLDER_ID": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → GOFILE_FOLDER_ID\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Gofile Folder ID\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_GOFILE_FOLDER_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "gofile_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for GOFILE_FOLDER_ID before anything is stored (Set only, value shows Not Exists)."
  },
  "p_GOFILE_FOLDER_ID": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → GOFILE_FOLDER_ID\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Gofile Folder ID\n\n\n<i>Send your Gofile Folder ID. If empty, uploads to Root.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_GOFILE_FOLDER_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_GOFILE_FOLDER_ID"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "xYz9Ab",
   "after": "m_GOFILE_FOLDER_ID_s",
   "note": "Prompt after pressing Set on GOFILE_FOLDER_ID. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_GOFILE_FOLDER_ID_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → GOFILE_FOLDER_ID\n┃\n┠ <b>Option's Value</b> → xYz9Ab\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Gofile Folder ID\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_GOFILE_FOLDER_ID_s"
     },
     {
      "t": "Reset",
      "to": "m_GOFILE_FOLDER_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "gofile_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for GOFILE_FOLDER_ID once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_GOFILE_FOLDER_ID_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → GOFILE_FOLDER_ID\n┃\n┠ <b>Option's Value</b> → xYz9Ab\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Gofile Folder ID\n\n\n<i>Send your Gofile Folder ID. If empty, uploads to Root.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_GOFILE_FOLDER_ID_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_GOFILE_FOLDER_ID_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "xYz9Ab",
   "after": "m_GOFILE_FOLDER_ID_s",
   "note": "Prompt after pressing Change on GOFILE_FOLDER_ID. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_BUZZHEAVIER_TOKEN": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → BUZZHEAVIER_TOKEN\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → BuzzHeavier API Token\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_BUZZHEAVIER_TOKEN"
     }
    ],
    [
     {
      "t": "Back",
      "to": "buzzheavier_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for BUZZHEAVIER_TOKEN before anything is stored (Set only, value shows Not Exists)."
  },
  "p_BUZZHEAVIER_TOKEN": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → BUZZHEAVIER_TOKEN\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → BuzzHeavier API Token\n\n\n<i>Send your BuzzHeavier API Token (Account ID).</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_BUZZHEAVIER_TOKEN"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_BUZZHEAVIER_TOKEN"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "bz_acc_8f3k2j",
   "after": "m_BUZZHEAVIER_TOKEN_s",
   "note": "Prompt after pressing Set on BUZZHEAVIER_TOKEN. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_BUZZHEAVIER_TOKEN_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → BUZZHEAVIER_TOKEN\n┃\n┠ <b>Option's Value</b> → bz_acc_8f3k2j\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → BuzzHeavier API Token\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_BUZZHEAVIER_TOKEN_s"
     },
     {
      "t": "Reset",
      "to": "m_BUZZHEAVIER_TOKEN"
     }
    ],
    [
     {
      "t": "Back",
      "to": "buzzheavier_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for BUZZHEAVIER_TOKEN once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_BUZZHEAVIER_TOKEN_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → BUZZHEAVIER_TOKEN\n┃\n┠ <b>Option's Value</b> → bz_acc_8f3k2j\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → BuzzHeavier API Token\n\n\n<i>Send your BuzzHeavier API Token (Account ID).</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_BUZZHEAVIER_TOKEN_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_BUZZHEAVIER_TOKEN_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "bz_acc_8f3k2j",
   "after": "m_BUZZHEAVIER_TOKEN_s",
   "note": "Prompt after pressing Change on BUZZHEAVIER_TOKEN. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_BUZZHEAVIER_FOLDER_ID": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → BUZZHEAVIER_FOLDER_ID\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → BuzzHeavier Folder ID\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_BUZZHEAVIER_FOLDER_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "buzzheavier_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for BUZZHEAVIER_FOLDER_ID before anything is stored (Set only, value shows Not Exists)."
  },
  "p_BUZZHEAVIER_FOLDER_ID": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → BUZZHEAVIER_FOLDER_ID\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → BuzzHeavier Folder ID\n\n\n<i>Send your BuzzHeavier Folder ID.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_BUZZHEAVIER_FOLDER_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_BUZZHEAVIER_FOLDER_ID"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "f9d3kj",
   "after": "m_BUZZHEAVIER_FOLDER_ID_s",
   "note": "Prompt after pressing Set on BUZZHEAVIER_FOLDER_ID. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_BUZZHEAVIER_FOLDER_ID_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → BUZZHEAVIER_FOLDER_ID\n┃\n┠ <b>Option's Value</b> → f9d3kj\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → BuzzHeavier Folder ID\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_BUZZHEAVIER_FOLDER_ID_s"
     },
     {
      "t": "Reset",
      "to": "m_BUZZHEAVIER_FOLDER_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "buzzheavier_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for BUZZHEAVIER_FOLDER_ID once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_BUZZHEAVIER_FOLDER_ID_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → BUZZHEAVIER_FOLDER_ID\n┃\n┠ <b>Option's Value</b> → f9d3kj\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → BuzzHeavier Folder ID\n\n\n<i>Send your BuzzHeavier Folder ID.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_BUZZHEAVIER_FOLDER_ID_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_BUZZHEAVIER_FOLDER_ID_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "f9d3kj",
   "after": "m_BUZZHEAVIER_FOLDER_ID_s",
   "note": "Prompt after pressing Change on BUZZHEAVIER_FOLDER_ID. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_PIXELDRAIN_KEY": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → PIXELDRAIN_KEY\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → PixelDrain API Key\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_PIXELDRAIN_KEY"
     }
    ],
    [
     {
      "t": "Back",
      "to": "pixeldrain_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for PIXELDRAIN_KEY before anything is stored (Set only, value shows Not Exists)."
  },
  "p_PIXELDRAIN_KEY": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → PIXELDRAIN_KEY\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → PixelDrain API Key\n\n\n<i>Send your PixelDrain API Key.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_PIXELDRAIN_KEY"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_PIXELDRAIN_KEY"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
   "after": "m_PIXELDRAIN_KEY_s",
   "note": "Prompt after pressing Set on PIXELDRAIN_KEY. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_PIXELDRAIN_KEY_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → PIXELDRAIN_KEY\n┃\n┠ <b>Option's Value</b> → 1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → PixelDrain API Key\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_PIXELDRAIN_KEY_s"
     },
     {
      "t": "Reset",
      "to": "m_PIXELDRAIN_KEY"
     }
    ],
    [
     {
      "t": "Back",
      "to": "pixeldrain_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for PIXELDRAIN_KEY once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_PIXELDRAIN_KEY_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → PIXELDRAIN_KEY\n┃\n┠ <b>Option's Value</b> → 1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → PixelDrain API Key\n\n\n<i>Send your PixelDrain API Key.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_PIXELDRAIN_KEY_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_PIXELDRAIN_KEY_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
   "after": "m_PIXELDRAIN_KEY_s",
   "note": "Prompt after pressing Change on PIXELDRAIN_KEY. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_DEVUPLOADS_KEY": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DEVUPLOADS_KEY\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → DevUploads API Key\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_DEVUPLOADS_KEY"
     }
    ],
    [
     {
      "t": "Back",
      "to": "devuploads_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for DEVUPLOADS_KEY before anything is stored (Set only, value shows Not Exists)."
  },
  "p_DEVUPLOADS_KEY": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DEVUPLOADS_KEY\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → DevUploads API Key\n\n\n<i>Send your DevUploads API Key.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_DEVUPLOADS_KEY"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_DEVUPLOADS_KEY"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "dev_9f8e7d6c5b",
   "after": "m_DEVUPLOADS_KEY_s",
   "note": "Prompt after pressing Set on DEVUPLOADS_KEY. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_DEVUPLOADS_KEY_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DEVUPLOADS_KEY\n┃\n┠ <b>Option's Value</b> → dev_9f8e7d6c5b\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → DevUploads API Key\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_DEVUPLOADS_KEY_s"
     },
     {
      "t": "Reset",
      "to": "m_DEVUPLOADS_KEY"
     }
    ],
    [
     {
      "t": "Back",
      "to": "devuploads_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for DEVUPLOADS_KEY once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_DEVUPLOADS_KEY_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DEVUPLOADS_KEY\n┃\n┠ <b>Option's Value</b> → dev_9f8e7d6c5b\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → DevUploads API Key\n\n\n<i>Send your DevUploads API Key.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_DEVUPLOADS_KEY_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_DEVUPLOADS_KEY_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "dev_9f8e7d6c5b",
   "after": "m_DEVUPLOADS_KEY_s",
   "note": "Prompt after pressing Change on DEVUPLOADS_KEY. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_DEVUPLOADS_FOLDER": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DEVUPLOADS_FOLDER\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → DevUploads Folder ID\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_DEVUPLOADS_FOLDER"
     }
    ],
    [
     {
      "t": "Back",
      "to": "devuploads_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for DEVUPLOADS_FOLDER before anything is stored (Set only, value shows Not Exists)."
  },
  "p_DEVUPLOADS_FOLDER": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DEVUPLOADS_FOLDER\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → DevUploads Folder ID\n\n\n<i>Send your DevUploads Folder ID. Leave empty to upload to root.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_DEVUPLOADS_FOLDER"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_DEVUPLOADS_FOLDER"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "12345",
   "after": "m_DEVUPLOADS_FOLDER_s",
   "note": "Prompt after pressing Set on DEVUPLOADS_FOLDER. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_DEVUPLOADS_FOLDER_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DEVUPLOADS_FOLDER\n┃\n┠ <b>Option's Value</b> → 12345\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → DevUploads Folder ID\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_DEVUPLOADS_FOLDER_s"
     },
     {
      "t": "Reset",
      "to": "m_DEVUPLOADS_FOLDER"
     }
    ],
    [
     {
      "t": "Back",
      "to": "devuploads_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for DEVUPLOADS_FOLDER once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_DEVUPLOADS_FOLDER_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → DEVUPLOADS_FOLDER\n┃\n┠ <b>Option's Value</b> → 12345\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → DevUploads Folder ID\n\n\n<i>Send your DevUploads Folder ID. Leave empty to upload to root.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_DEVUPLOADS_FOLDER_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_DEVUPLOADS_FOLDER_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "12345",
   "after": "m_DEVUPLOADS_FOLDER_s",
   "note": "Prompt after pressing Change on DEVUPLOADS_FOLDER. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_VIKINGFILE_HASH": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → VIKINGFILE_HASH\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → VikingFile Hash\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_VIKINGFILE_HASH"
     }
    ],
    [
     {
      "t": "Back",
      "to": "vikingfile_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for VIKINGFILE_HASH before anything is stored (Set only, value shows Not Exists)."
  },
  "p_VIKINGFILE_HASH": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → VIKINGFILE_HASH\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → VikingFile Hash\n\n\n<i>Send your VikingFile User Hash.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_VIKINGFILE_HASH"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_VIKINGFILE_HASH"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "vk_7h2g1f0e9d",
   "after": "m_VIKINGFILE_HASH_s",
   "note": "Prompt after pressing Set on VIKINGFILE_HASH. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_VIKINGFILE_HASH_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → VIKINGFILE_HASH\n┃\n┠ <b>Option's Value</b> → vk_7h2g1f0e9d\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → VikingFile Hash\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_VIKINGFILE_HASH_s"
     },
     {
      "t": "Reset",
      "to": "m_VIKINGFILE_HASH"
     }
    ],
    [
     {
      "t": "Back",
      "to": "vikingfile_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for VIKINGFILE_HASH once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_VIKINGFILE_HASH_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → VIKINGFILE_HASH\n┃\n┠ <b>Option's Value</b> → vk_7h2g1f0e9d\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → VikingFile Hash\n\n\n<i>Send your VikingFile User Hash.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_VIKINGFILE_HASH_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_VIKINGFILE_HASH_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "vk_7h2g1f0e9d",
   "after": "m_VIKINGFILE_HASH_s",
   "note": "Prompt after pressing Change on VIKINGFILE_HASH. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_VIKINGFILE_FOLDER": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → VIKINGFILE_FOLDER\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → VikingFile folder name/path. Leave empty to upload to root.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_VIKINGFILE_FOLDER"
     }
    ],
    [
     {
      "t": "Back",
      "to": "vikingfile_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for VIKINGFILE_FOLDER before anything is stored (Set only, value shows Not Exists)."
  },
  "p_VIKINGFILE_FOLDER": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → VIKINGFILE_FOLDER\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → VikingFile folder name/path. Leave empty to upload to root.\n\n\n<i>Send your VikingFile folder name/path. Leave empty to upload to root.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_VIKINGFILE_FOLDER"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_VIKINGFILE_FOLDER"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "WZ/Uploads",
   "after": "m_VIKINGFILE_FOLDER_s",
   "note": "Prompt after pressing Set on VIKINGFILE_FOLDER. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_VIKINGFILE_FOLDER_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → VIKINGFILE_FOLDER\n┃\n┠ <b>Option's Value</b> → WZ/Uploads\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → VikingFile folder name/path. Leave empty to upload to root.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_VIKINGFILE_FOLDER_s"
     },
     {
      "t": "Reset",
      "to": "m_VIKINGFILE_FOLDER"
     }
    ],
    [
     {
      "t": "Back",
      "to": "vikingfile_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for VIKINGFILE_FOLDER once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_VIKINGFILE_FOLDER_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → VIKINGFILE_FOLDER\n┃\n┠ <b>Option's Value</b> → WZ/Uploads\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → VikingFile folder name/path. Leave empty to upload to root.\n\n\n<i>Send your VikingFile folder name/path. Leave empty to upload to root.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_VIKINGFILE_FOLDER_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_VIKINGFILE_FOLDER_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "WZ/Uploads",
   "after": "m_VIKINGFILE_FOLDER_s",
   "note": "Prompt after pressing Change on VIKINGFILE_FOLDER. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_MEGA_EMAIL": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → MEGA_EMAIL\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Mega.nz account email for per-user Mega downloads & uploads.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_MEGA_EMAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mega_b"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for MEGA_EMAIL before anything is stored (Set only, value shows Not Exists)."
  },
  "p_MEGA_EMAIL": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → MEGA_EMAIL\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Mega.nz account email for per-user Mega downloads & uploads.\n\n\n<i>Send your Mega.nz email address.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_MEGA_EMAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_MEGA_EMAIL"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "me@example.com",
   "after": "m_MEGA_EMAIL_s",
   "note": "Prompt after pressing Set on MEGA_EMAIL. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_MEGA_EMAIL_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → MEGA_EMAIL\n┃\n┠ <b>Option's Value</b> → me@example.com\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Mega.nz account email for per-user Mega downloads & uploads.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_MEGA_EMAIL_s"
     },
     {
      "t": "Reset",
      "to": "m_MEGA_EMAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mega_e"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for MEGA_EMAIL once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_MEGA_EMAIL_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → MEGA_EMAIL\n┃\n┠ <b>Option's Value</b> → me@example.com\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Mega.nz account email for per-user Mega downloads & uploads.\n\n\n<i>Send your Mega.nz email address.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_MEGA_EMAIL_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_MEGA_EMAIL_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "me@example.com",
   "after": "m_MEGA_EMAIL_s",
   "note": "Prompt after pressing Change on MEGA_EMAIL. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_MEGA_PASSWORD": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → MEGA_PASSWORD\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Mega.nz account password for per-user Mega downloads & uploads.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_MEGA_PASSWORD"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mega_e"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for MEGA_PASSWORD before anything is stored (Set only, value shows Not Exists)."
  },
  "p_MEGA_PASSWORD": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → MEGA_PASSWORD\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Mega.nz account password for per-user Mega downloads & uploads.\n\n\n<i>Send your Mega.nz account password.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_MEGA_PASSWORD"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_MEGA_PASSWORD"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "SuperSecret99",
   "after": "m_MEGA_PASSWORD_s",
   "note": "Prompt after pressing Set on MEGA_PASSWORD. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_MEGA_PASSWORD_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → MEGA_PASSWORD\n┃\n┠ <b>Option's Value</b> → SuperSecret99\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Mega.nz account password for per-user Mega downloads & uploads.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_MEGA_PASSWORD_s"
     },
     {
      "t": "Reset",
      "to": "m_MEGA_PASSWORD"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mega_f"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for MEGA_PASSWORD once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_MEGA_PASSWORD_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → MEGA_PASSWORD\n┃\n┠ <b>Option's Value</b> → SuperSecret99\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Mega.nz account password for per-user Mega downloads & uploads.\n\n\n<i>Send your Mega.nz account password.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_MEGA_PASSWORD_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_MEGA_PASSWORD_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "SuperSecret99",
   "after": "m_MEGA_PASSWORD_s",
   "note": "Prompt after pressing Change on MEGA_PASSWORD. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_SEEDR_EMAIL": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → SEEDR_EMAIL\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Seedr.cc account email for per-user Seedr cloud downloads.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_SEEDR_EMAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "seedr_b0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for SEEDR_EMAIL before anything is stored (Set only, value shows Not Exists)."
  },
  "p_SEEDR_EMAIL": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → SEEDR_EMAIL\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Seedr.cc account email for per-user Seedr cloud downloads.\n\n\n<i>Send your Seedr.cc email address.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_SEEDR_EMAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_SEEDR_EMAIL"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "me@example.com",
   "after": "m_SEEDR_EMAIL_s",
   "note": "Prompt after pressing Set on SEEDR_EMAIL. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_SEEDR_EMAIL_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → SEEDR_EMAIL\n┃\n┠ <b>Option's Value</b> → me@example.com\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Seedr.cc account email for per-user Seedr cloud downloads.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_SEEDR_EMAIL_s"
     },
     {
      "t": "Reset",
      "to": "m_SEEDR_EMAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "seedr_e0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for SEEDR_EMAIL once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_SEEDR_EMAIL_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → SEEDR_EMAIL\n┃\n┠ <b>Option's Value</b> → me@example.com\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Seedr.cc account email for per-user Seedr cloud downloads.\n\n\n<i>Send your Seedr.cc email address.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_SEEDR_EMAIL_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_SEEDR_EMAIL_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "me@example.com",
   "after": "m_SEEDR_EMAIL_s",
   "note": "Prompt after pressing Change on SEEDR_EMAIL. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_SEEDR_PASSWORD": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → SEEDR_PASSWORD\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Seedr.cc account password for per-user Seedr cloud downloads.\n",
   "rows": [
    [
     {
      "t": "Set",
      "to": "p_SEEDR_PASSWORD"
     }
    ],
    [
     {
      "t": "Back",
      "to": "seedr_e0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for SEEDR_PASSWORD before anything is stored (Set only, value shows Not Exists)."
  },
  "p_SEEDR_PASSWORD": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → SEEDR_PASSWORD\n┃\n┠ <b>Option's Value</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Seedr.cc account password for per-user Seedr cloud downloads.\n\n\n<i>Send your Seedr.cc account password.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_SEEDR_PASSWORD"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_SEEDR_PASSWORD"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "SeedrPass#42",
   "after": "m_SEEDR_PASSWORD_s",
   "note": "Prompt after pressing Set on SEEDR_PASSWORD. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "m_SEEDR_PASSWORD_s": {
   "kind": "menu",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → SEEDR_PASSWORD\n┃\n┠ <b>Option's Value</b> → SeedrPass#42\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Seedr.cc account password for per-user Seedr cloud downloads.\n",
   "rows": [
    [
     {
      "t": "Change",
      "to": "p_SEEDR_PASSWORD_s"
     },
     {
      "t": "Reset",
      "to": "m_SEEDR_PASSWORD"
     }
    ],
    [
     {
      "t": "Back",
      "to": "seedr_f0"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Option menu for SEEDR_PASSWORD once a value is stored: the button reads Change and Reset clears the value."
  },
  "p_SEEDR_PASSWORD_s": {
   "kind": "prompt",
   "text": "⌬ <b>Menu Settings :</b>\n│\n┟ <b>Option</b> → SEEDR_PASSWORD\n┃\n┠ <b>Option's Value</b> → SeedrPass#42\n┃\n┠ <b>Default Input Type</b> → String\n┖ <b>Description</b> → Your Seedr.cc account password for per-user Seedr cloud downloads.\n\n\n<i>Send your Seedr.cc account password.</i> \n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Stop",
      "to": "m_SEEDR_PASSWORD_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "m_SEEDR_PASSWORD_s"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "SeedrPass#42",
   "after": "m_SEEDR_PASSWORD_s",
   "note": "Prompt after pressing Change on SEEDR_PASSWORD. The bot waits 60s for a text message; Stop or Back cancels, then the menu refreshes with the new value."
  },
  "sess_p1": {
   "kind": "prompt",
   "text": "⌬ <b>Step 1 of 2 — Passphrase</b>\n│\n┟ <i>Choose a passphrase, at least 8 characters.</i>\n┠ <i>It is never stored. Lose it and the session is unrecoverable.</i>\n┖ <b>Timeout:</b> <code>120 sec</code>",
   "rows": [
    [
     {
      "t": "Cancel",
      "to": "clone_b"
     }
    ]
   ],
   "reply": "correct-horse-battery",
   "after": "sess_p2",
   "note": "Sent as a separate DM from the bot (private chat only; in groups pressing Set/Change shows an alert). Your reply is deleted immediately."
  },
  "sess_p2": {
   "kind": "prompt",
   "text": "⌬ <b>Step 2 of 2 — Session</b>\n│\n┟ <i>Send your Pyrogram V2 string session.</i>\n┠ <i>The message is deleted the moment it arrives.</i>\n┖ <b>Timeout:</b> <code>120 sec</code>",
   "rows": [
    [
     {
      "t": "Cancel",
      "to": "clone_b"
     }
    ]
   ],
   "reply": "BQC3x9kAAB1...(long Pyrogram V2 string session, 300+ chars)...",
   "after": "clone_f",
   "botMsg": "Session sealed and unlocked.",
   "note": "Second DM prompt. Strings shorter than 300 chars are rejected. On success the bot DMs \"Session sealed and unlocked.\" and Clone Settings refreshes."
  },
  "main": {
   "kind": "menu",
   "text": "⌬ <b>User Settings :</b>\n│\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┠ <b>UserID</b> → #ID123456789\n┠ <b>Username</b> → @alex_dev\n┠ <b>Telegram DC</b> → 4\n┖ <b>Telegram Lang</b> → English",
   "rows": [
    [
     {
      "t": "General Settings",
      "to": "general_rc_o"
     }
    ],
    [
     {
      "t": "Mirror Settings",
      "to": "mirror_00"
     },
     {
      "t": "Leech Settings",
      "to": "leech_b000"
     }
    ],
    [
     {
      "t": "Uphoster Settings",
      "to": "uphoster_10000"
     },
     {
      "t": "FF Media Settings",
      "to": "ffset_b"
     }
    ],
    [
     {
      "t": "Clone Settings",
      "to": "clone_b"
     },
     {
      "t": "YT-DLP Settings",
      "to": "ytdlp_b0"
     }
    ],
    [
     {
      "t": "Misc Settings",
      "to": "advanced_b"
     }
    ],
    [
     {
      "t": "Export",
      "to": "export"
     },
     {
      "t": "Import",
      "to": "import"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Main /usettings menu for a fresh user (no saved settings). Reset All is hidden until at least one setting or toggle is stored."
  },
  "main_r": {
   "kind": "menu",
   "text": "⌬ <b>User Settings :</b>\n│\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┠ <b>UserID</b> → #ID123456789\n┠ <b>Username</b> → @alex_dev\n┠ <b>Telegram DC</b> → 4\n┖ <b>Telegram Lang</b> → English",
   "rows": [
    [
     {
      "t": "General Settings",
      "to": "general_rc_o"
     }
    ],
    [
     {
      "t": "Mirror Settings",
      "to": "mirror_00"
     },
     {
      "t": "Leech Settings",
      "to": "leech_b000"
     }
    ],
    [
     {
      "t": "Uphoster Settings",
      "to": "uphoster_10000"
     },
     {
      "t": "FF Media Settings",
      "to": "ffset_b"
     }
    ],
    [
     {
      "t": "Clone Settings",
      "to": "clone_b"
     },
     {
      "t": "YT-DLP Settings",
      "to": "ytdlp_b0"
     }
    ],
    [
     {
      "t": "Misc Settings",
      "to": "advanced_b"
     }
    ],
    [
     {
      "t": "Export",
      "to": "export"
     },
     {
      "t": "Import",
      "to": "import"
     },
     {
      "t": "Reset All",
      "to": "confirm_reset_all"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Main /usettings menu for a user who already saved something: Reset All appears in the footer row between Import and Close."
  },
  "general_gd_o": {
   "kind": "menu",
   "text": "⌬ <b>General Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Default Upload Package</b> → <b>GDRIVE API</b>\n┖ <b>Default Usage Mode</b> → <b>OWNER's</b> token/config\n",
   "rows": [
    [
     {
      "t": "Swap to RCLONE Mode",
      "to": "general_rc_o"
     },
     {
      "t": "Swap to USER token/config",
      "to": "general_gd_u"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "General Settings: both buttons are swaps. The first flips the default upload package (RCLONE or GDRIVE API), the second flips between the owner's and your own token/config. Each press re-renders this screen."
  },
  "general_gd_u": {
   "kind": "menu",
   "text": "⌬ <b>General Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Default Upload Package</b> → <b>GDRIVE API</b>\n┖ <b>Default Usage Mode</b> → <b>USER's</b> token/config\n",
   "rows": [
    [
     {
      "t": "Swap to RCLONE Mode",
      "to": "general_rc_u"
     },
     {
      "t": "Swap to OWNER token/config",
      "to": "general_gd_o"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "General Settings: both buttons are swaps. The first flips the default upload package (RCLONE or GDRIVE API), the second flips between the owner's and your own token/config. Each press re-renders this screen."
  },
  "general_rc_o": {
   "kind": "menu",
   "text": "⌬ <b>General Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Default Upload Package</b> → <b>RCLONE</b>\n┖ <b>Default Usage Mode</b> → <b>OWNER's</b> token/config\n",
   "rows": [
    [
     {
      "t": "Swap to GDRIVE API Mode",
      "to": "general_gd_o"
     },
     {
      "t": "Swap to USER token/config",
      "to": "general_rc_u"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "General Settings: both buttons are swaps. The first flips the default upload package (RCLONE or GDRIVE API), the second flips between the owner's and your own token/config. Each press re-renders this screen."
  },
  "general_rc_u": {
   "kind": "menu",
   "text": "⌬ <b>General Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Default Upload Package</b> → <b>RCLONE</b>\n┖ <b>Default Usage Mode</b> → <b>USER's</b> token/config\n",
   "rows": [
    [
     {
      "t": "Swap to GDRIVE API Mode",
      "to": "general_gd_u"
     },
     {
      "t": "Swap to OWNER token/config",
      "to": "general_rc_o"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "General Settings: both buttons are swaps. The first flips the default upload package (RCLONE or GDRIVE API), the second flips between the owner's and your own token/config. Each press re-renders this screen."
  },
  "leech_b000": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>MEDIA</b>\n┠ Leech Split Size → <b>1.95GB</b>\n┠ Equal Splits → <b>Disabled</b>\n┠ Media Group → <b>Disabled</b>\n┠ Leech Prefix → <code>Not Exists</code>\n┠ Leech Suffix → <code>Not Exists</code>\n┠ Leech Caption → <code>Not Exists</code>\n┖ Leech Dump Chats → <code>None</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION"
     },
     {
      "t": "Send As Document",
      "to": "leech_b100"
     }
    ],
    [
     {
      "t": "Enable Equal Splits",
      "to": "leech_b010"
     },
     {
      "t": "Enable Media Group",
      "to": "leech_b001"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with defaults (owner config values; options unset). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_b001": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>MEDIA</b>\n┠ Leech Split Size → <b>1.95GB</b>\n┠ Equal Splits → <b>Disabled</b>\n┠ Media Group → <b>Enabled</b>\n┠ Leech Prefix → <code>Not Exists</code>\n┠ Leech Suffix → <code>Not Exists</code>\n┠ Leech Caption → <code>Not Exists</code>\n┖ Leech Dump Chats → <code>None</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION"
     },
     {
      "t": "Send As Document",
      "to": "leech_b101"
     }
    ],
    [
     {
      "t": "Enable Equal Splits",
      "to": "leech_b011"
     },
     {
      "t": "Disable Media Group",
      "to": "leech_b000"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with defaults (owner config values; options unset). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_b010": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>MEDIA</b>\n┠ Leech Split Size → <b>1.95GB</b>\n┠ Equal Splits → <b>Enabled</b>\n┠ Media Group → <b>Disabled</b>\n┠ Leech Prefix → <code>Not Exists</code>\n┠ Leech Suffix → <code>Not Exists</code>\n┠ Leech Caption → <code>Not Exists</code>\n┖ Leech Dump Chats → <code>None</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION"
     },
     {
      "t": "Send As Document",
      "to": "leech_b110"
     }
    ],
    [
     {
      "t": "Disable Equal Splits",
      "to": "leech_b000"
     },
     {
      "t": "Enable Media Group",
      "to": "leech_b011"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with defaults (owner config values; options unset). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_b011": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>MEDIA</b>\n┠ Leech Split Size → <b>1.95GB</b>\n┠ Equal Splits → <b>Enabled</b>\n┠ Media Group → <b>Enabled</b>\n┠ Leech Prefix → <code>Not Exists</code>\n┠ Leech Suffix → <code>Not Exists</code>\n┠ Leech Caption → <code>Not Exists</code>\n┖ Leech Dump Chats → <code>None</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION"
     },
     {
      "t": "Send As Document",
      "to": "leech_b111"
     }
    ],
    [
     {
      "t": "Disable Equal Splits",
      "to": "leech_b001"
     },
     {
      "t": "Disable Media Group",
      "to": "leech_b010"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with defaults (owner config values; options unset). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_b100": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>DOCUMENT</b>\n┠ Leech Split Size → <b>1.95GB</b>\n┠ Equal Splits → <b>Disabled</b>\n┠ Media Group → <b>Disabled</b>\n┠ Leech Prefix → <code>Not Exists</code>\n┠ Leech Suffix → <code>Not Exists</code>\n┠ Leech Caption → <code>Not Exists</code>\n┖ Leech Dump Chats → <code>None</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION"
     },
     {
      "t": "Send As Media",
      "to": "leech_b000"
     }
    ],
    [
     {
      "t": "Enable Equal Splits",
      "to": "leech_b110"
     },
     {
      "t": "Enable Media Group",
      "to": "leech_b101"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with defaults (owner config values; options unset). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_b101": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>DOCUMENT</b>\n┠ Leech Split Size → <b>1.95GB</b>\n┠ Equal Splits → <b>Disabled</b>\n┠ Media Group → <b>Enabled</b>\n┠ Leech Prefix → <code>Not Exists</code>\n┠ Leech Suffix → <code>Not Exists</code>\n┠ Leech Caption → <code>Not Exists</code>\n┖ Leech Dump Chats → <code>None</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION"
     },
     {
      "t": "Send As Media",
      "to": "leech_b001"
     }
    ],
    [
     {
      "t": "Enable Equal Splits",
      "to": "leech_b111"
     },
     {
      "t": "Disable Media Group",
      "to": "leech_b100"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with defaults (owner config values; options unset). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_b110": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>DOCUMENT</b>\n┠ Leech Split Size → <b>1.95GB</b>\n┠ Equal Splits → <b>Enabled</b>\n┠ Media Group → <b>Disabled</b>\n┠ Leech Prefix → <code>Not Exists</code>\n┠ Leech Suffix → <code>Not Exists</code>\n┠ Leech Caption → <code>Not Exists</code>\n┖ Leech Dump Chats → <code>None</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION"
     },
     {
      "t": "Send As Media",
      "to": "leech_b010"
     }
    ],
    [
     {
      "t": "Disable Equal Splits",
      "to": "leech_b100"
     },
     {
      "t": "Enable Media Group",
      "to": "leech_b111"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with defaults (owner config values; options unset). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_b111": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>DOCUMENT</b>\n┠ Leech Split Size → <b>1.95GB</b>\n┠ Equal Splits → <b>Enabled</b>\n┠ Media Group → <b>Enabled</b>\n┠ Leech Prefix → <code>Not Exists</code>\n┠ Leech Suffix → <code>Not Exists</code>\n┠ Leech Caption → <code>Not Exists</code>\n┖ Leech Dump Chats → <code>None</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION"
     },
     {
      "t": "Send As Media",
      "to": "leech_b011"
     }
    ],
    [
     {
      "t": "Disable Equal Splits",
      "to": "leech_b101"
     },
     {
      "t": "Disable Media Group",
      "to": "leech_b110"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with defaults (owner config values; options unset). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_f000": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>MEDIA</b>\n┠ Leech Split Size → <b>1.00GB</b>\n┠ Equal Splits → <b>Disabled</b>\n┠ Media Group → <b>Disabled</b>\n┠ Leech Prefix → <code>@MyChannel</code>\n┠ Leech Suffix → <code>[WZ]</code>\n┠ Leech Caption → <code>&lt;b&gt;{filename}&lt;/b&gt;\nSize: {size}</code>\n┖ Leech Dump Chats → <code>Movies, Series</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE_s"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX_s"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX_s"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION_s"
     },
     {
      "t": "Send As Document",
      "to": "leech_f100"
     }
    ],
    [
     {
      "t": "Enable Equal Splits",
      "to": "leech_f010"
     },
     {
      "t": "Enable Media Group",
      "to": "leech_f001"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with every text option already saved (so the option buttons open the Change/Reset menus). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_f001": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>MEDIA</b>\n┠ Leech Split Size → <b>1.00GB</b>\n┠ Equal Splits → <b>Disabled</b>\n┠ Media Group → <b>Enabled</b>\n┠ Leech Prefix → <code>@MyChannel</code>\n┠ Leech Suffix → <code>[WZ]</code>\n┠ Leech Caption → <code>&lt;b&gt;{filename}&lt;/b&gt;\nSize: {size}</code>\n┖ Leech Dump Chats → <code>Movies, Series</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE_s"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX_s"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX_s"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION_s"
     },
     {
      "t": "Send As Document",
      "to": "leech_f101"
     }
    ],
    [
     {
      "t": "Enable Equal Splits",
      "to": "leech_f011"
     },
     {
      "t": "Disable Media Group",
      "to": "leech_f000"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with every text option already saved (so the option buttons open the Change/Reset menus). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_f010": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>MEDIA</b>\n┠ Leech Split Size → <b>1.00GB</b>\n┠ Equal Splits → <b>Enabled</b>\n┠ Media Group → <b>Disabled</b>\n┠ Leech Prefix → <code>@MyChannel</code>\n┠ Leech Suffix → <code>[WZ]</code>\n┠ Leech Caption → <code>&lt;b&gt;{filename}&lt;/b&gt;\nSize: {size}</code>\n┖ Leech Dump Chats → <code>Movies, Series</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE_s"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX_s"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX_s"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION_s"
     },
     {
      "t": "Send As Document",
      "to": "leech_f110"
     }
    ],
    [
     {
      "t": "Disable Equal Splits",
      "to": "leech_f000"
     },
     {
      "t": "Enable Media Group",
      "to": "leech_f011"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with every text option already saved (so the option buttons open the Change/Reset menus). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_f011": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>MEDIA</b>\n┠ Leech Split Size → <b>1.00GB</b>\n┠ Equal Splits → <b>Enabled</b>\n┠ Media Group → <b>Enabled</b>\n┠ Leech Prefix → <code>@MyChannel</code>\n┠ Leech Suffix → <code>[WZ]</code>\n┠ Leech Caption → <code>&lt;b&gt;{filename}&lt;/b&gt;\nSize: {size}</code>\n┖ Leech Dump Chats → <code>Movies, Series</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE_s"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX_s"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX_s"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION_s"
     },
     {
      "t": "Send As Document",
      "to": "leech_f111"
     }
    ],
    [
     {
      "t": "Disable Equal Splits",
      "to": "leech_f001"
     },
     {
      "t": "Disable Media Group",
      "to": "leech_f010"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with every text option already saved (so the option buttons open the Change/Reset menus). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_f100": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>DOCUMENT</b>\n┠ Leech Split Size → <b>1.00GB</b>\n┠ Equal Splits → <b>Disabled</b>\n┠ Media Group → <b>Disabled</b>\n┠ Leech Prefix → <code>@MyChannel</code>\n┠ Leech Suffix → <code>[WZ]</code>\n┠ Leech Caption → <code>&lt;b&gt;{filename}&lt;/b&gt;\nSize: {size}</code>\n┖ Leech Dump Chats → <code>Movies, Series</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE_s"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX_s"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX_s"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION_s"
     },
     {
      "t": "Send As Media",
      "to": "leech_f000"
     }
    ],
    [
     {
      "t": "Enable Equal Splits",
      "to": "leech_f110"
     },
     {
      "t": "Enable Media Group",
      "to": "leech_f101"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with every text option already saved (so the option buttons open the Change/Reset menus). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_f101": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>DOCUMENT</b>\n┠ Leech Split Size → <b>1.00GB</b>\n┠ Equal Splits → <b>Disabled</b>\n┠ Media Group → <b>Enabled</b>\n┠ Leech Prefix → <code>@MyChannel</code>\n┠ Leech Suffix → <code>[WZ]</code>\n┠ Leech Caption → <code>&lt;b&gt;{filename}&lt;/b&gt;\nSize: {size}</code>\n┖ Leech Dump Chats → <code>Movies, Series</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE_s"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX_s"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX_s"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION_s"
     },
     {
      "t": "Send As Media",
      "to": "leech_f001"
     }
    ],
    [
     {
      "t": "Enable Equal Splits",
      "to": "leech_f111"
     },
     {
      "t": "Disable Media Group",
      "to": "leech_f100"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with every text option already saved (so the option buttons open the Change/Reset menus). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_f110": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>DOCUMENT</b>\n┠ Leech Split Size → <b>1.00GB</b>\n┠ Equal Splits → <b>Enabled</b>\n┠ Media Group → <b>Disabled</b>\n┠ Leech Prefix → <code>@MyChannel</code>\n┠ Leech Suffix → <code>[WZ]</code>\n┠ Leech Caption → <code>&lt;b&gt;{filename}&lt;/b&gt;\nSize: {size}</code>\n┖ Leech Dump Chats → <code>Movies, Series</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE_s"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX_s"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX_s"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION_s"
     },
     {
      "t": "Send As Media",
      "to": "leech_f010"
     }
    ],
    [
     {
      "t": "Disable Equal Splits",
      "to": "leech_f100"
     },
     {
      "t": "Enable Media Group",
      "to": "leech_f111"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with every text option already saved (so the option buttons open the Change/Reset menus). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "leech_f111": {
   "kind": "menu",
   "text": "⌬ <b>Leech Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ Leech Type → <b>DOCUMENT</b>\n┠ Leech Split Size → <b>1.00GB</b>\n┠ Equal Splits → <b>Enabled</b>\n┠ Media Group → <b>Enabled</b>\n┠ Leech Prefix → <code>@MyChannel</code>\n┠ Leech Suffix → <code>[WZ]</code>\n┠ Leech Caption → <code>&lt;b&gt;{filename}&lt;/b&gt;\nSize: {size}</code>\n┖ Leech Dump Chats → <code>Movies, Series</code>\n",
   "rows": [
    [
     {
      "t": "Thumbnail Settings",
      "to": "thumb_b0"
     }
    ],
    [
     {
      "t": "Leech Split Size",
      "to": "m_LEECH_SPLIT_SIZE_s"
     },
     {
      "t": "Leech Dump Chats",
      "to": "m_LEECH_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Leech Prefix",
      "to": "m_LEECH_PREFIX_s"
     },
     {
      "t": "Leech Suffix",
      "to": "m_LEECH_SUFFIX_s"
     }
    ],
    [
     {
      "t": "Leech Caption",
      "to": "m_LEECH_CAPTION_s"
     },
     {
      "t": "Send As Media",
      "to": "leech_f011"
     }
    ],
    [
     {
      "t": "Disable Equal Splits",
      "to": "leech_f101"
     },
     {
      "t": "Disable Media Group",
      "to": "leech_f110"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Leech Settings with every text option already saved (so the option buttons open the Change/Reset menus). The last three buttons are toggles that flip Leech Type, Equal Splits and Media Group; their labels always show the action you would take."
  },
  "thumb_b0": {
   "kind": "menu",
   "text": "⌬ <b>Thumbnail Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Custom Thumbnail</b> → <b>Not Exists</b>\n┠ <b>Auto Thumbnail</b> → <b>Disabled</b>\n┖ <b>Layout</b> → <b>None</b>\n",
   "rows": [
    [
     {
      "t": "Custom Thumbnail",
      "to": "m_THUMBNAIL"
     }
    ],
    [
     {
      "t": "Enable Auto Thumbnail",
      "to": "thumb_b1"
     },
     {
      "t": "Layout",
      "to": "m_THUMBNAIL_LAYOUT"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_b000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Thumbnail Settings with no custom thumbnail saved (View Thumb hidden). Auto Thumbnail is a toggle."
  },
  "thumb_b1": {
   "kind": "menu",
   "text": "⌬ <b>Thumbnail Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Custom Thumbnail</b> → <b>Not Exists</b>\n┠ <b>Auto Thumbnail</b> → <b>Enabled</b>\n┖ <b>Layout</b> → <b>None</b>\n",
   "rows": [
    [
     {
      "t": "Custom Thumbnail",
      "to": "m_THUMBNAIL"
     }
    ],
    [
     {
      "t": "Disable Auto Thumbnail",
      "to": "thumb_b0"
     },
     {
      "t": "Layout",
      "to": "m_THUMBNAIL_LAYOUT"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_b000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Thumbnail Settings with no custom thumbnail saved (View Thumb hidden). Auto Thumbnail is a toggle."
  },
  "thumb_f0": {
   "kind": "menu",
   "text": "⌬ <b>Thumbnail Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Custom Thumbnail</b> → <b>Exists</b>\n┠ <b>Auto Thumbnail</b> → <b>Disabled</b>\n┖ <b>Layout</b> → <b>3x3</b>\n",
   "rows": [
    [
     {
      "t": "Custom Thumbnail",
      "to": "m_THUMBNAIL_s"
     },
     {
      "t": "View Thumb",
      "to": "thumb_f0"
     }
    ],
    [
     {
      "t": "Enable Auto Thumbnail",
      "to": "thumb_f1"
     },
     {
      "t": "Layout",
      "to": "m_THUMBNAIL_LAYOUT_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_f000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Thumbnail Settings after a thumbnail is saved: the View Thumb button joins the header row (it sends the image back as a photo)."
  },
  "thumb_f1": {
   "kind": "menu",
   "text": "⌬ <b>Thumbnail Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Custom Thumbnail</b> → <b>Exists</b>\n┠ <b>Auto Thumbnail</b> → <b>Enabled</b>\n┖ <b>Layout</b> → <b>3x3</b>\n",
   "rows": [
    [
     {
      "t": "Custom Thumbnail",
      "to": "m_THUMBNAIL_s"
     },
     {
      "t": "View Thumb",
      "to": "thumb_f1"
     }
    ],
    [
     {
      "t": "Disable Auto Thumbnail",
      "to": "thumb_f0"
     },
     {
      "t": "Layout",
      "to": "m_THUMBNAIL_LAYOUT_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "leech_f000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Thumbnail Settings after a thumbnail is saved: the View Thumb button joins the header row (it sends the image back as a photo)."
  },
  "uphoster_00001": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_00001"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_00001": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_10001"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_01001"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_00101"
     },
     {
      "t": "Devuploads ",
      "to": "updest_00011"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_00001"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_00001"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_00010": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Devuploads",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_00010"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_00010": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_10010"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_01010"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_00110"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_00010"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_00011"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_00010"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_00011": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Devuploads, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_00011"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_00011": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_10011"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_01011"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_00111"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_00001"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_00010"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_00011"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_00100": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Pixeldrain",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_00100"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_00100": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_10100"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_01100"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_00100"
     },
     {
      "t": "Devuploads ",
      "to": "updest_00110"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_00101"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_00100"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_00101": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Pixeldrain, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_00101"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_00101": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_10101"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_01101"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_00001"
     },
     {
      "t": "Devuploads ",
      "to": "updest_00111"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_00100"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_00101"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_00110": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Pixeldrain, Devuploads",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_00110"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_00110": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_10110"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_01110"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_00010"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_00100"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_00111"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_00110"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_00111": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Pixeldrain, Devuploads, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_00111"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_00111": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_10111"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_01111"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_00011"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_00101"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_00110"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_00111"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_01000": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Buzzheavier",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_01000"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_01000": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_11000"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_01000"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_01100"
     },
     {
      "t": "Devuploads ",
      "to": "updest_01010"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_01001"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_01000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_01001": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Buzzheavier, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_01001"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_01001": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_11001"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_00001"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_01101"
     },
     {
      "t": "Devuploads ",
      "to": "updest_01011"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_01000"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_01001"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_01010": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Buzzheavier, Devuploads",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_01010"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_01010": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_11010"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_00010"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_01110"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_01000"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_01011"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_01010"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_01011": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Buzzheavier, Devuploads, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_01011"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_01011": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_11011"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_00011"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_01111"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_01001"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_01010"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_01011"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_01100": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Buzzheavier, Pixeldrain",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_01100"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_01100": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_11100"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_00100"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_01000"
     },
     {
      "t": "Devuploads ",
      "to": "updest_01110"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_01101"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_01100"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_01101": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Buzzheavier, Pixeldrain, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_01101"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_01101": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_11101"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_00101"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_01001"
     },
     {
      "t": "Devuploads ",
      "to": "updest_01111"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_01100"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_01101"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_01110": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Buzzheavier, Pixeldrain, Devuploads",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_01110"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_01110": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_11110"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_00110"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_01010"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_01100"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_01111"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_01110"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_01111": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Buzzheavier, Pixeldrain, Devuploads, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_01111"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_01111": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ",
      "to": "updest_11111"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_00111"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_01011"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_01101"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_01110"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_01111"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_10000": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_10000"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_10000": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_10000"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_11000"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_10100"
     },
     {
      "t": "Devuploads ",
      "to": "updest_10010"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_10001"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_10001": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_10001"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_10001": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_00001"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_11001"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_10101"
     },
     {
      "t": "Devuploads ",
      "to": "updest_10011"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_10000"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10001"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_10010": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Devuploads",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_10010"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_10010": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_00010"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_11010"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_10110"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_10000"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_10011"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10010"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_10011": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Devuploads, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_10011"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_10011": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_00011"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_11011"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_10111"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_10001"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_10010"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10011"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_10100": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Pixeldrain",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_10100"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_10100": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_00100"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_11100"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_10000"
     },
     {
      "t": "Devuploads ",
      "to": "updest_10110"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_10101"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10100"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_10101": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Pixeldrain, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_10101"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_10101": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_00101"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_11101"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_10001"
     },
     {
      "t": "Devuploads ",
      "to": "updest_10111"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_10100"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10101"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_10110": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Pixeldrain, Devuploads",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_10110"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_10110": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_00110"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_11110"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_10010"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_10100"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_10111"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10110"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_10111": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Pixeldrain, Devuploads, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_10111"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_10111": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_00111"
     },
     {
      "t": "Buzzheavier ",
      "to": "updest_11111"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_10011"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_10101"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_10110"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10111"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_11000": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Buzzheavier",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_11000"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_11000": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_01000"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_10000"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_11100"
     },
     {
      "t": "Devuploads ",
      "to": "updest_11010"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_11001"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_11000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_11001": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Buzzheavier, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_11001"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_11001": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_01001"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_10001"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_11101"
     },
     {
      "t": "Devuploads ",
      "to": "updest_11011"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_11000"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_11001"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_11010": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Buzzheavier, Devuploads",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_11010"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_11010": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_01010"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_10010"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_11110"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_11000"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_11011"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_11010"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_11011": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Buzzheavier, Devuploads, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_11011"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_11011": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_01011"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_10011"
     }
    ],
    [
     {
      "t": "Pixeldrain ",
      "to": "updest_11111"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_11001"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_11010"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_11011"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_11100": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Buzzheavier, Pixeldrain",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_11100"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_11100": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_01100"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_10100"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_11000"
     },
     {
      "t": "Devuploads ",
      "to": "updest_11110"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_11101"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_11100"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_11101": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Buzzheavier, Pixeldrain, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_11101"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_11101": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_01101"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_10101"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_11001"
     },
     {
      "t": "Devuploads ",
      "to": "updest_11111"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_11100"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_11101"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_11110": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Buzzheavier, Pixeldrain, Devuploads",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_11110"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_11110": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_01110"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_10110"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_11010"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_11100"
     }
    ],
    [
     {
      "t": "Vikingfile ",
      "to": "updest_11111"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_11110"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "uphoster_11111": {
   "kind": "menu",
   "text": "⌬ <b>Uphoster Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Current Destination</b> → Gofile, Buzzheavier, Pixeldrain, Devuploads, Vikingfile",
   "rows": [
    [
     {
      "t": "Change Destination ⇋",
      "to": "updest_11111"
     }
    ],
    [
     {
      "t": "Gofile Tools",
      "to": "gofile_b0"
     },
     {
      "t": "BuzzHeavier Tools",
      "to": "buzzheavier_b"
     }
    ],
    [
     {
      "t": "PixelDrain Tools",
      "to": "pixeldrain_b"
     },
     {
      "t": "DevUploads Tools",
      "to": "devuploads_b"
     }
    ],
    [
     {
      "t": "VikingFile Tools",
      "to": "vikingfile_b"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Uphoster Settings: Change Destination chooses which file-host(s) uploads go to; each Tools button opens that service's credentials. Default destination is Gofile."
  },
  "updest_11111": {
   "kind": "menu",
   "text": "⌬ <b>Select Uphoster Destinations :</b>",
   "rows": [
    [
     {
      "t": "Gofile ✓",
      "to": "updest_01111"
     },
     {
      "t": "Buzzheavier ✓",
      "to": "updest_10111"
     }
    ],
    [
     {
      "t": "Pixeldrain ✓",
      "to": "updest_11011"
     },
     {
      "t": "Devuploads ✓",
      "to": "updest_11101"
     }
    ],
    [
     {
      "t": "Vikingfile ✓",
      "to": "updest_11110"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_11111"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Tap a service to add or remove it; a ✓ marks selected ones. At least one must stay selected (removing the last one just shows an alert and does nothing). The choice is saved instantly."
  },
  "gofile_b0": {
   "kind": "menu",
   "text": "⌬ <b>Gofile Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Gofile Token</b> → <code>None</code>\n┠ <b>Gofile Folder ID</b> → <code>None (Uploads to Root)</code>\n┖ <b>Auto-Create Folder</b> → <code>Disabled</code>",
   "rows": [
    [
     {
      "t": "Gofile Token",
      "to": "m_GOFILE_TOKEN"
     }
    ],
    [
     {
      "t": "Gofile Folder ID",
      "to": "m_GOFILE_FOLDER_ID"
     }
    ],
    [
     {
      "t": "Auto-Create Folder ",
      "to": "gofile_b1"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Gofile Tools. Auto-Create Folder is a toggle (a trailing check mark means it is on)."
  },
  "gofile_b1": {
   "kind": "menu",
   "text": "⌬ <b>Gofile Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Gofile Token</b> → <code>None</code>\n┠ <b>Gofile Folder ID</b> → <code>None (Uploads to Root)</code>\n┖ <b>Auto-Create Folder</b> → <code>Enabled</code>",
   "rows": [
    [
     {
      "t": "Gofile Token",
      "to": "m_GOFILE_TOKEN"
     }
    ],
    [
     {
      "t": "Gofile Folder ID",
      "to": "m_GOFILE_FOLDER_ID"
     }
    ],
    [
     {
      "t": "Auto-Create Folder ✓",
      "to": "gofile_b0"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Gofile Tools. Auto-Create Folder is a toggle (a trailing check mark means it is on)."
  },
  "gofile_f0": {
   "kind": "menu",
   "text": "⌬ <b>Gofile Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Gofile Token</b> → <code>AbCdEf123456GofileToken</code>\n┠ <b>Gofile Folder ID</b> → <code>xYz9Ab</code>\n┖ <b>Auto-Create Folder</b> → <code>Disabled</code>",
   "rows": [
    [
     {
      "t": "Gofile Token",
      "to": "m_GOFILE_TOKEN_s"
     }
    ],
    [
     {
      "t": "Gofile Folder ID",
      "to": "m_GOFILE_FOLDER_ID_s"
     }
    ],
    [
     {
      "t": "Auto-Create Folder ",
      "to": "gofile_f1"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Gofile Tools. Auto-Create Folder is a toggle (a trailing check mark means it is on)."
  },
  "gofile_f1": {
   "kind": "menu",
   "text": "⌬ <b>Gofile Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Gofile Token</b> → <code>AbCdEf123456GofileToken</code>\n┠ <b>Gofile Folder ID</b> → <code>xYz9Ab</code>\n┖ <b>Auto-Create Folder</b> → <code>Enabled</code>",
   "rows": [
    [
     {
      "t": "Gofile Token",
      "to": "m_GOFILE_TOKEN_s"
     }
    ],
    [
     {
      "t": "Gofile Folder ID",
      "to": "m_GOFILE_FOLDER_ID_s"
     }
    ],
    [
     {
      "t": "Auto-Create Folder ✓",
      "to": "gofile_f0"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Gofile Tools. Auto-Create Folder is a toggle (a trailing check mark means it is on)."
  },
  "buzzheavier_b": {
   "kind": "menu",
   "text": "⌬ <b>BuzzHeavier Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>BuzzHeavier Token</b> → <code>None</code>\n┖ <b>BuzzHeavier Folder ID</b> → <code>None</code>",
   "rows": [
    [
     {
      "t": "BuzzHeavier Token",
      "to": "m_BUZZHEAVIER_TOKEN"
     }
    ],
    [
     {
      "t": "BuzzHeavier Folder ID",
      "to": "m_BUZZHEAVIER_FOLDER_ID"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "BuzzHeavier Tools: one button per credential. Nothing saved yet (None)."
  },
  "buzzheavier_f": {
   "kind": "menu",
   "text": "⌬ <b>BuzzHeavier Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>BuzzHeavier Token</b> → <code>bz_acc_8f3k2j</code>\n┖ <b>BuzzHeavier Folder ID</b> → <code>f9d3kj</code>",
   "rows": [
    [
     {
      "t": "BuzzHeavier Token",
      "to": "m_BUZZHEAVIER_TOKEN_s"
     }
    ],
    [
     {
      "t": "BuzzHeavier Folder ID",
      "to": "m_BUZZHEAVIER_FOLDER_ID_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "BuzzHeavier Tools: one button per credential. Values already saved."
  },
  "pixeldrain_b": {
   "kind": "menu",
   "text": "⌬ <b>PixelDrain Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>PixelDrain Key</b> → <code>None</code>",
   "rows": [
    [
     {
      "t": "PixelDrain Key",
      "to": "m_PIXELDRAIN_KEY"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "PixelDrain Tools: one button per credential. Nothing saved yet (None)."
  },
  "pixeldrain_f": {
   "kind": "menu",
   "text": "⌬ <b>PixelDrain Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>PixelDrain Key</b> → <code>1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d</code>",
   "rows": [
    [
     {
      "t": "PixelDrain Key",
      "to": "m_PIXELDRAIN_KEY_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "PixelDrain Tools: one button per credential. Values already saved."
  },
  "devuploads_b": {
   "kind": "menu",
   "text": "⌬ <b>DevUploads Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>DevUploads Key</b> → <code>None</code>\n┖ <b>DevUploads Folder ID</b> → <code>None (Root)</code>",
   "rows": [
    [
     {
      "t": "DevUploads API Key",
      "to": "m_DEVUPLOADS_KEY"
     }
    ],
    [
     {
      "t": "DevUploads Folder ID",
      "to": "m_DEVUPLOADS_FOLDER"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "DevUploads Tools: one button per credential. Nothing saved yet (None)."
  },
  "devuploads_f": {
   "kind": "menu",
   "text": "⌬ <b>DevUploads Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>DevUploads Key</b> → <code>dev_9f8e7d6c5b</code>\n┖ <b>DevUploads Folder ID</b> → <code>12345</code>",
   "rows": [
    [
     {
      "t": "DevUploads API Key",
      "to": "m_DEVUPLOADS_KEY_s"
     }
    ],
    [
     {
      "t": "DevUploads Folder ID",
      "to": "m_DEVUPLOADS_FOLDER_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "DevUploads Tools: one button per credential. Values already saved."
  },
  "vikingfile_b": {
   "kind": "menu",
   "text": "⌬ <b>VikingFile Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>VikingFile Hash</b> → <code>None</code>\n┖ <b>VikingFile Folder</b> → <code>None (Root)</code>",
   "rows": [
    [
     {
      "t": "VikingFile Hash",
      "to": "m_VIKINGFILE_HASH"
     }
    ],
    [
     {
      "t": "VikingFile Folder",
      "to": "m_VIKINGFILE_FOLDER"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "VikingFile Tools: one button per credential. Nothing saved yet (None)."
  },
  "vikingfile_f": {
   "kind": "menu",
   "text": "⌬ <b>VikingFile Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>VikingFile Hash</b> → <code>vk_7h2g1f0e9d</code>\n┖ <b>VikingFile Folder</b> → <code>WZ/Uploads</code>",
   "rows": [
    [
     {
      "t": "VikingFile Hash",
      "to": "m_VIKINGFILE_HASH_s"
     }
    ],
    [
     {
      "t": "VikingFile Folder",
      "to": "m_VIKINGFILE_FOLDER_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "uphoster_10000"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "VikingFile Tools: one button per credential. Values already saved."
  },
  "mirror_00": {
   "kind": "menu",
   "text": "⌬ <b>Mirror Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Bot Stop Duplicate</b> → <b>Disabled</b>\n",
   "rows": [
    [
     {
      "t": "Drive Categories: OFF",
      "to": "mirror_10"
     }
    ],
    [
     {
      "t": "RClone Tools",
      "to": "rclone_b"
     },
     {
      "t": "GDrive Tools",
      "to": "gdrive_b0"
     }
    ],
    [
     {
      "t": "Mega Tools",
      "to": "mega_b"
     },
     {
      "t": "Seedr Tools",
      "to": "seedr_b0"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Mirror Settings hub. Conditional buttons shown here: \"Drive Categories\" toggle only appears when the owner enabled DRIVE_CATEGORY_MODE, and \"Seedr Tools\" only when Seedr is not disabled (DISABLE_SEEDR=False). Both are shown for completeness."
  },
  "mirror_01": {
   "kind": "menu",
   "text": "⌬ <b>Mirror Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Bot Stop Duplicate</b> → <b>Enabled</b>\n",
   "rows": [
    [
     {
      "t": "Drive Categories: OFF",
      "to": "mirror_11"
     }
    ],
    [
     {
      "t": "RClone Tools",
      "to": "rclone_b"
     },
     {
      "t": "GDrive Tools",
      "to": "gdrive_b1"
     }
    ],
    [
     {
      "t": "Mega Tools",
      "to": "mega_b"
     },
     {
      "t": "Seedr Tools",
      "to": "seedr_b0"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Mirror Settings hub. Conditional buttons shown here: \"Drive Categories\" toggle only appears when the owner enabled DRIVE_CATEGORY_MODE, and \"Seedr Tools\" only when Seedr is not disabled (DISABLE_SEEDR=False). Both are shown for completeness."
  },
  "mirror_10": {
   "kind": "menu",
   "text": "⌬ <b>Mirror Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Bot Stop Duplicate</b> → <b>Disabled</b>\n",
   "rows": [
    [
     {
      "t": "Drive Categories: ON",
      "to": "mirror_00"
     }
    ],
    [
     {
      "t": "RClone Tools",
      "to": "rclone_b"
     },
     {
      "t": "GDrive Tools",
      "to": "gdrive_b0"
     }
    ],
    [
     {
      "t": "Mega Tools",
      "to": "mega_b"
     },
     {
      "t": "Seedr Tools",
      "to": "seedr_b0"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Mirror Settings hub. Conditional buttons shown here: \"Drive Categories\" toggle only appears when the owner enabled DRIVE_CATEGORY_MODE, and \"Seedr Tools\" only when Seedr is not disabled (DISABLE_SEEDR=False). Both are shown for completeness."
  },
  "mirror_11": {
   "kind": "menu",
   "text": "⌬ <b>Mirror Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┖ <b>Bot Stop Duplicate</b> → <b>Enabled</b>\n",
   "rows": [
    [
     {
      "t": "Drive Categories: ON",
      "to": "mirror_01"
     }
    ],
    [
     {
      "t": "RClone Tools",
      "to": "rclone_b"
     },
     {
      "t": "GDrive Tools",
      "to": "gdrive_b1"
     }
    ],
    [
     {
      "t": "Mega Tools",
      "to": "mega_b"
     },
     {
      "t": "Seedr Tools",
      "to": "seedr_b0"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Mirror Settings hub. Conditional buttons shown here: \"Drive Categories\" toggle only appears when the owner enabled DRIVE_CATEGORY_MODE, and \"Seedr Tools\" only when Seedr is not disabled (DISABLE_SEEDR=False). Both are shown for completeness."
  },
  "rclone_b": {
   "kind": "menu",
   "text": "⌬ <b>RClone Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Rclone Config</b> → <b>Not Exists</b>\n┠ <b>Rclone Flags</b> → <code>None</code>\n┖ <b>Rclone Path</b> → <code>None</code>",
   "rows": [
    [
     {
      "t": "Rclone Config",
      "to": "m_RCLONE_CONFIG"
     },
     {
      "t": "Default Rclone Path",
      "to": "m_RCLONE_PATH"
     }
    ],
    [
     {
      "t": "Rclone Flags",
      "to": "m_RCLONE_FLAGS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "RClone Tools with nothing configured."
  },
  "rclone_f": {
   "kind": "menu",
   "text": "⌬ <b>RClone Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Rclone Config</b> → <b>Exists</b>\n┠ <b>Rclone Flags</b> → <code>--buffer-size:8M|--drive-starred-only</code>\n┖ <b>Rclone Path</b> → <code>mrcc:gdrive:Mirror</code>",
   "rows": [
    [
     {
      "t": "Rclone Config",
      "to": "m_RCLONE_CONFIG_s"
     },
     {
      "t": "Default Rclone Path",
      "to": "m_RCLONE_PATH_s"
     }
    ],
    [
     {
      "t": "Rclone Flags",
      "to": "m_RCLONE_FLAGS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "RClone Tools after config, flags and path are saved."
  },
  "gdrive_b0": {
   "kind": "menu",
   "text": "⌬ <b>GDrive Tools Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Gdrive ID</b> → <code>None</code> <i>(Default)</i>\n┠ <b>Index URL</b> → <code>None</code> <i>(Default)</i>\n┠ <b>Stop Duplicate</b> → <b>Disabled</b>\n┠ <b>GDrive token.pickle</b> → <b>Not Exists</b>\n┠ <b>Drive Upload SA</b> → <code>Not Set</code>\n┠ <b>Drive Category</b> → <b>Disabled</b>\n┖ <b>Drive Categories:</b> \n     <b>Default</b>: <code>None</code>",
   "rows": [
    [
     {
      "t": "User Drive Categories",
      "to": "m_DRIVE_CAT"
     }
    ],
    [
     {
      "t": "Default Gdrive ID",
      "to": "m_GDRIVE_ID"
     },
     {
      "t": "Default Index URL",
      "to": "m_INDEX_URL"
     }
    ],
    [
     {
      "t": "Token.pickle",
      "to": "m_TOKEN_PICKLE"
     }
    ],
    [
     {
      "t": "Enable Stop Duplicate",
      "to": "gdrive_b1"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "GDrive Tools. Stop Duplicate is a toggle: when off its \"Enable\" button sits on its own row above the footer, when on its \"Disable\" button sits beside Token.pickle. User Drive Categories lives in the header row."
  },
  "gdrive_b1": {
   "kind": "menu",
   "text": "⌬ <b>GDrive Tools Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Gdrive ID</b> → <code>None</code> <i>(Default)</i>\n┠ <b>Index URL</b> → <code>None</code> <i>(Default)</i>\n┠ <b>Stop Duplicate</b> → <b>Enabled</b>\n┠ <b>GDrive token.pickle</b> → <b>Not Exists</b>\n┠ <b>Drive Upload SA</b> → <code>Not Set</code>\n┠ <b>Drive Category</b> → <b>Disabled</b>\n┖ <b>Drive Categories:</b> \n     <b>Default</b>: <code>None</code>",
   "rows": [
    [
     {
      "t": "User Drive Categories",
      "to": "m_DRIVE_CAT"
     }
    ],
    [
     {
      "t": "Default Gdrive ID",
      "to": "m_GDRIVE_ID"
     },
     {
      "t": "Default Index URL",
      "to": "m_INDEX_URL"
     }
    ],
    [
     {
      "t": "Token.pickle",
      "to": "m_TOKEN_PICKLE"
     },
     {
      "t": "Disable Stop Duplicate",
      "to": "gdrive_b0"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_01"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "GDrive Tools. Stop Duplicate is a toggle: when off its \"Enable\" button sits on its own row above the footer, when on its \"Disable\" button sits beside Token.pickle. User Drive Categories lives in the header row."
  },
  "gdrive_f0": {
   "kind": "menu",
   "text": "⌬ <b>GDrive Tools Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Gdrive ID</b> → <code>mtp:1a2B3c4D5e6F7g8H9i0J</code> <i>(Default)</i>\n┠ <b>Index URL</b> → <code>https://index.example.workers.dev/0:</code> <i>(Default)</i>\n┠ <b>Stop Duplicate</b> → <b>Disabled</b>\n┠ <b>GDrive token.pickle</b> → <b>Exists</b>\n┠ <b>Drive Upload SA</b> → <code>Not Set</code>\n┠ <b>Drive Category</b> → <b>Disabled</b>\n┖ <b>Drive Categories:</b> \n     <b>Default</b>: <code>mtp:1a2B3c4D5e6F7g8H9i0J</code> | <code>https://index.example.workers.dev/0:</code>\n     <b>Movies</b>: <code>0BxMoviesDriveId</code> | <code>https://index.example.dev/movies</code>\n     <b>TV</b>: <code>1AyTvDriveId</code>",
   "rows": [
    [
     {
      "t": "User Drive Categories",
      "to": "m_DRIVE_CAT_s"
     }
    ],
    [
     {
      "t": "Default Gdrive ID",
      "to": "m_GDRIVE_ID_s"
     },
     {
      "t": "Default Index URL",
      "to": "m_INDEX_URL_s"
     }
    ],
    [
     {
      "t": "Token.pickle",
      "to": "m_TOKEN_PICKLE_s"
     }
    ],
    [
     {
      "t": "Enable Stop Duplicate",
      "to": "gdrive_f1"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "GDrive Tools. Stop Duplicate is a toggle: when off its \"Enable\" button sits on its own row above the footer, when on its \"Disable\" button sits beside Token.pickle. User Drive Categories lives in the header row."
  },
  "gdrive_f1": {
   "kind": "menu",
   "text": "⌬ <b>GDrive Tools Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Gdrive ID</b> → <code>mtp:1a2B3c4D5e6F7g8H9i0J</code> <i>(Default)</i>\n┠ <b>Index URL</b> → <code>https://index.example.workers.dev/0:</code> <i>(Default)</i>\n┠ <b>Stop Duplicate</b> → <b>Enabled</b>\n┠ <b>GDrive token.pickle</b> → <b>Exists</b>\n┠ <b>Drive Upload SA</b> → <code>Not Set</code>\n┠ <b>Drive Category</b> → <b>Disabled</b>\n┖ <b>Drive Categories:</b> \n     <b>Default</b>: <code>mtp:1a2B3c4D5e6F7g8H9i0J</code> | <code>https://index.example.workers.dev/0:</code>\n     <b>Movies</b>: <code>0BxMoviesDriveId</code> | <code>https://index.example.dev/movies</code>\n     <b>TV</b>: <code>1AyTvDriveId</code>",
   "rows": [
    [
     {
      "t": "User Drive Categories",
      "to": "m_DRIVE_CAT_s"
     }
    ],
    [
     {
      "t": "Default Gdrive ID",
      "to": "m_GDRIVE_ID_s"
     },
     {
      "t": "Default Index URL",
      "to": "m_INDEX_URL_s"
     }
    ],
    [
     {
      "t": "Token.pickle",
      "to": "m_TOKEN_PICKLE_s"
     },
     {
      "t": "Disable Stop Duplicate",
      "to": "gdrive_f0"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_01"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "GDrive Tools. Stop Duplicate is a toggle: when off its \"Enable\" button sits on its own row above the footer, when on its \"Disable\" button sits beside Token.pickle. User Drive Categories lives in the header row."
  },
  "mega_b": {
   "kind": "menu",
   "text": "⌬ <b>Mega Tools :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Mega Email</b> → <code>Not Set</code>\n┠ <b>Mega Password</b> → <code>Not Set</code>\n┖ <b>Account</b> → ❌ Not Configured",
   "rows": [
    [
     {
      "t": "Mega Email",
      "to": "m_MEGA_EMAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Mega Tools with no account: only Mega Email is offered."
  },
  "mega_e": {
   "kind": "menu",
   "text": "⌬ <b>Mega Tools :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Mega Email</b> → <code>me@example.com</code>\n┠ <b>Mega Password</b> → <code>Not Set</code>\n┖ <b>Account</b> → ❌ Not Configured",
   "rows": [
    [
     {
      "t": "Mega Email",
      "to": "m_MEGA_EMAIL_s"
     }
    ],
    [
     {
      "t": "Mega Password",
      "to": "m_MEGA_PASSWORD"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Mega Tools after the email is saved: Mega Password button appears."
  },
  "mega_f": {
   "kind": "menu",
   "text": "⌬ <b>Mega Tools :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Mega Email</b> → <code>me@example.com</code>\n┠ <b>Mega Password</b> → <code>Su*********99</code>\n┖ <b>Account</b> → ✓ Configured\n\n⌬ <b>Mega Account Info</b>\n│\n┠ <b>Email</b> → <code>me@example.com</code>\n┠ <b>Account Type</b> → Free\n┃\n┠ <b>Storage</b> → 3.20GB / 20.00GB (16.0%)\n┠ <b>Transfer</b> → 1.10GB / 5.00GB (22.0%)\n┃\n┠ <b>Files</b> → 42\n┖ <b>Folders</b> → 6",
   "rows": [
    [
     {
      "t": "Mega Email",
      "to": "m_MEGA_EMAIL_s"
     }
    ],
    [
     {
      "t": "Mega Password",
      "to": "m_MEGA_PASSWORD_s"
     }
    ],
    [
     {
      "t": "Remove Account",
      "to": "m_MEGA_EMAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Mega Tools with both credentials: Remove Account appears and, after a moment, the bot appends live Mega account info (storage/transfer) fetched by logging in. Remove Account clears both fields (the password is shown masked)."
  },
  "seedr_b0": {
   "kind": "menu",
   "text": "⌬ <b>Seedr Tools :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Seedr Email</b> → <code>Not Set</code>\n┠ <b>Seedr Password</b> → <code>Not Set</code>\n┠ <b>Delete Folder</b> → Disabled\n┖ <b>Account</b> → ❌ Not Configured",
   "rows": [
    [
     {
      "t": "Seedr Email",
      "to": "m_SEEDR_EMAIL"
     }
    ],
    [
     {
      "t": "Delete Folder: OFF",
      "to": "seedr_b1"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Seedr Tools with no account (only visible when the owner enabled Seedr). Delete Folder is a toggle."
  },
  "seedr_b1": {
   "kind": "menu",
   "text": "⌬ <b>Seedr Tools :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Seedr Email</b> → <code>Not Set</code>\n┠ <b>Seedr Password</b> → <code>Not Set</code>\n┠ <b>Delete Folder</b> → Enabled\n┖ <b>Account</b> → ❌ Not Configured",
   "rows": [
    [
     {
      "t": "Seedr Email",
      "to": "m_SEEDR_EMAIL"
     }
    ],
    [
     {
      "t": "Delete Folder: ON",
      "to": "seedr_b0"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Seedr Tools with no account (only visible when the owner enabled Seedr). Delete Folder is a toggle."
  },
  "seedr_e0": {
   "kind": "menu",
   "text": "⌬ <b>Seedr Tools :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Seedr Email</b> → <code>me@example.com</code>\n┠ <b>Seedr Password</b> → <code>Not Set</code>\n┠ <b>Delete Folder</b> → Disabled\n┖ <b>Account</b> → ❌ Not Configured",
   "rows": [
    [
     {
      "t": "Seedr Email",
      "to": "m_SEEDR_EMAIL_s"
     }
    ],
    [
     {
      "t": "Seedr Password",
      "to": "m_SEEDR_PASSWORD"
     }
    ],
    [
     {
      "t": "Delete Folder: OFF",
      "to": "seedr_e1"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Seedr Tools after the email is saved: Seedr Password appears. Delete Folder is a toggle."
  },
  "seedr_e1": {
   "kind": "menu",
   "text": "⌬ <b>Seedr Tools :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Seedr Email</b> → <code>me@example.com</code>\n┠ <b>Seedr Password</b> → <code>Not Set</code>\n┠ <b>Delete Folder</b> → Enabled\n┖ <b>Account</b> → ❌ Not Configured",
   "rows": [
    [
     {
      "t": "Seedr Email",
      "to": "m_SEEDR_EMAIL_s"
     }
    ],
    [
     {
      "t": "Seedr Password",
      "to": "m_SEEDR_PASSWORD"
     }
    ],
    [
     {
      "t": "Delete Folder: ON",
      "to": "seedr_e0"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Seedr Tools after the email is saved: Seedr Password appears. Delete Folder is a toggle."
  },
  "seedr_f0": {
   "kind": "menu",
   "text": "⌬ <b>Seedr Tools :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Seedr Email</b> → <code>me@example.com</code>\n┠ <b>Seedr Password</b> → <code>Se********42</code>\n┠ <b>Delete Folder</b> → Disabled\n┖ <b>Account</b> → ✓ Configured\n\n<b>Seedr Space</b> → <code>1.20GB / 2.00GB</code>",
   "rows": [
    [
     {
      "t": "Seedr Email",
      "to": "m_SEEDR_EMAIL_s"
     }
    ],
    [
     {
      "t": "Seedr Password",
      "to": "m_SEEDR_PASSWORD_s"
     }
    ],
    [
     {
      "t": "Delete Folder: OFF",
      "to": "seedr_f1"
     }
    ],
    [
     {
      "t": "Clear Storage",
      "to": "seedr_f0"
     },
     {
      "t": "Remove Account",
      "to": "m_SEEDR_EMAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Seedr Tools with full credentials: Clear Storage and Remove Account appear on one row and the bot appends your Seedr space usage after logging in (Clear Storage shows an alert \"Removed N torrent(s) and M folder(s)!\" and refreshes). Delete Folder is a toggle."
  },
  "seedr_f1": {
   "kind": "menu",
   "text": "⌬ <b>Seedr Tools :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Seedr Email</b> → <code>me@example.com</code>\n┠ <b>Seedr Password</b> → <code>Se********42</code>\n┠ <b>Delete Folder</b> → Enabled\n┖ <b>Account</b> → ✓ Configured\n\n<b>Seedr Space</b> → <code>1.20GB / 2.00GB</code>",
   "rows": [
    [
     {
      "t": "Seedr Email",
      "to": "m_SEEDR_EMAIL_s"
     }
    ],
    [
     {
      "t": "Seedr Password",
      "to": "m_SEEDR_PASSWORD_s"
     }
    ],
    [
     {
      "t": "Delete Folder: ON",
      "to": "seedr_f0"
     }
    ],
    [
     {
      "t": "Clear Storage",
      "to": "seedr_f1"
     },
     {
      "t": "Remove Account",
      "to": "m_SEEDR_EMAIL"
     }
    ],
    [
     {
      "t": "Back",
      "to": "mirror_00"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Seedr Tools with full credentials: Clear Storage and Remove Account appear on one row and the bot appends your Seedr space usage after logging in (Clear Storage shows an alert \"Removed N torrent(s) and M folder(s)!\" and refreshes). Delete Folder is a toggle."
  },
  "clone_b": {
   "kind": "menu",
   "text": "⌬ <b>Clone Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>User Session</b> → <b>Not Exists 🔓</b>\n┠ <b>Key State</b> → <b>Locked</b>\n┠ <b>Destinations</b> → <code>None</code>\n┠ <b>Content Type</b> → <b>all</b>\n┠ <b>Excluded Ext</b> → <code>None</code>\n┖ <b>Regex Filters</b> → <code>None</code>",
   "rows": [
    [
     {
      "t": "User Session",
      "to": "m_USER_SESSION"
     }
    ],
    [
     {
      "t": "Destinations",
      "to": "m_CLONE_DUMP_CHATS"
     },
     {
      "t": "Content Type",
      "to": "m_CLONE_CONTENT_TYPE"
     }
    ],
    [
     {
      "t": "Excluded Ext",
      "to": "m_CLONE_EXCLUDED_EXTENSIONS"
     },
     {
      "t": "Regex Filters",
      "to": "m_CLONE_FILTERS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Clone Settings with nothing configured (default content type all)."
  },
  "clone_f": {
   "kind": "menu",
   "text": "⌬ <b>Clone Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>User Session</b> → <b>Exists 🔐</b>\n┠ <b>Key State</b> → <b>Unlocked (11h58m20s left)</b>\n┠ <b>Destinations</b> → <code>Movies</code>\n┠ <b>Content Type</b> → <b>med</b>\n┠ <b>Excluded Ext</b> → <code>mkv, srt, txt</code>\n┖ <b>Regex Filters</b> → <code>mn, xc</code>",
   "rows": [
    [
     {
      "t": "User Session",
      "to": "m_USER_SESSION_s"
     }
    ],
    [
     {
      "t": "Lock Now",
      "to": "clone_fl"
     },
     {
      "t": "Destinations",
      "to": "m_CLONE_DUMP_CHATS_s"
     }
    ],
    [
     {
      "t": "Content Type",
      "to": "m_CLONE_CONTENT_TYPE_s"
     },
     {
      "t": "Excluded Ext",
      "to": "m_CLONE_EXCLUDED_EXTENSIONS_s"
     }
    ],
    [
     {
      "t": "Regex Filters",
      "to": "m_CLONE_FILTERS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Clone Settings with a sealed session that is currently unlocked: the red Lock Now button appears and purges the key from memory (alert \"Session key purged from memory.\")."
  },
  "clone_fl": {
   "kind": "menu",
   "text": "⌬ <b>Clone Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>User Session</b> → <b>Exists 🔐</b>\n┠ <b>Key State</b> → <b>Locked</b>\n┠ <b>Destinations</b> → <code>Movies</code>\n┠ <b>Content Type</b> → <b>med</b>\n┠ <b>Excluded Ext</b> → <code>mkv, srt, txt</code>\n┖ <b>Regex Filters</b> → <code>mn, xc</code>",
   "rows": [
    [
     {
      "t": "User Session",
      "to": "m_USER_SESSION_s"
     }
    ],
    [
     {
      "t": "Destinations",
      "to": "m_CLONE_DUMP_CHATS_s"
     },
     {
      "t": "Content Type",
      "to": "m_CLONE_CONTENT_TYPE_s"
     }
    ],
    [
     {
      "t": "Excluded Ext",
      "to": "m_CLONE_EXCLUDED_EXTENSIONS_s"
     },
     {
      "t": "Regex Filters",
      "to": "m_CLONE_FILTERS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Clone Settings with a sealed session whose key is locked (after Lock Now or a restart); Lock Now is hidden."
  },
  "ffset_b": {
   "kind": "menu",
   "text": "⌬ <b>FF Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>FFmpeg CLI Commands</b> → <b>Not Exists</b>\n┃\n┠ <b>Default Metadata</b> → <b>Not Set</b>\n┠ <b>Audio Metadata</b> → <b>Not Set</b>\n┠ <b>Video Metadata</b> → <b>Not Set</b>\n┖ <b>Subtitle Metadata</b> → <b>Not Set</b>",
   "rows": [
    [
     {
      "t": "FFmpeg Cmds",
      "to": "m_FFMPEG_CMDS"
     }
    ],
    [
     {
      "t": "Metadata",
      "to": "m_METADATA"
     },
     {
      "t": "Audio Metadata",
      "to": "m_AUDIO_METADATA"
     }
    ],
    [
     {
      "t": "Video Metadata",
      "to": "m_VIDEO_METADATA"
     },
     {
      "t": "Subtitle Metadata",
      "to": "m_SUBTITLE_METADATA"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "FF Media Settings with nothing saved."
  },
  "ffset_f": {
   "kind": "menu",
   "text": "⌬ <b>FF Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>FFmpeg CLI Commands</b> → \n1. <b>convert</b>: <code>-i mltb.m4a -c:a libmp3lame -q:a 2 mltb.mp3</code>\n2. <b>subtitle</b>: <code>-i mltb.mkv -c copy -c:s srt mltb.mkv -del</code>\n┃\n┠ <b>Default Metadata</b> → <code>title={basename}, artist=@MyChannel</code>\n┠ <b>Audio Metadata</b> → <code>language={audiolang}, title=Audio - {audiolang}</code>\n┠ <b>Video Metadata</b> → <code>title={basename}, comment=HD Video</code>\n┖ <b>Subtitle Metadata</b> → <code>language={sublang}, title=Subtitles - {sublang}</code>",
   "rows": [
    [
     {
      "t": "FFmpeg Cmds",
      "to": "m_FFMPEG_CMDS_s"
     }
    ],
    [
     {
      "t": "Metadata",
      "to": "m_METADATA_s"
     },
     {
      "t": "Audio Metadata",
      "to": "m_AUDIO_METADATA_s"
     }
    ],
    [
     {
      "t": "Video Metadata",
      "to": "m_VIDEO_METADATA_s"
     },
     {
      "t": "Subtitle Metadata",
      "to": "m_SUBTITLE_METADATA_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "FF Media Settings with everything saved (only the first command of each ffmpeg list is previewed)."
  },
  "advanced_b": {
   "kind": "menu",
   "text": "⌬ <b>Advanced Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Auto Name Swaps</b> → <b>Not Exists</b>\n┠ <b>Excluded Extensions</b> → <code>aria2, !qB</code>\n┖ <b>Upload Paths</b> → <b>None</b>",
   "rows": [
    [
     {
      "t": "Excluded Extensions",
      "to": "m_EXCLUDED_EXTENSIONS"
     },
     {
      "t": "Name Swap",
      "to": "m_NAME_SWAP"
     }
    ],
    [
     {
      "t": "Upload Paths",
      "to": "m_UPLOAD_PATHS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Misc Settings (internally \"Advanced Settings\"): excluded extensions, name swap rules and upload path aliases. The screen title in the bot reads Advanced Settings."
  },
  "advanced_f": {
   "kind": "menu",
   "text": "⌬ <b>Advanced Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>Auto Name Swaps</b> → <code>WEB-DL:WEBDL:0:IGNORECASE|\\.:_</code>\n┠ <b>Excluded Extensions</b> → <code>aria2, !qB, txt, nfo, jpg</code>\n┖ <b>Upload Paths</b> → <b>{'movies': 'gdrive:Movies', 'chat': '-1001234567890'}</b>",
   "rows": [
    [
     {
      "t": "Excluded Extensions",
      "to": "m_EXCLUDED_EXTENSIONS_s"
     },
     {
      "t": "Name Swap",
      "to": "m_NAME_SWAP_s"
     }
    ],
    [
     {
      "t": "Upload Paths",
      "to": "m_UPLOAD_PATHS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Misc Settings (internally \"Advanced Settings\"): excluded extensions, name swap rules and upload path aliases. The screen title in the bot reads Advanced Settings."
  },
  "ytdlp_b0": {
   "kind": "menu",
   "text": "⌬ <b>YT-DLP Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>YT-DLP Options</b> → <code>None</code>\n┠ <b>Cookie File</b> → <b>Not Exists</b>\n┠ <b>Cookie In Use</b> → <b>Yours</b>\n┃\n┠ <b>Upload Description</b> → <code>Uploaded with WZML-X bot</code>\n┠ <b>Upload Tags</b> → <code>telegram,bot,youtube</code>\n┠ <b>Upload Category</b> → <code>22</code>\n┖ <b>Upload Privacy</b> → <code>unlisted</code>",
   "rows": [
    [
     {
      "t": "YT-DLP Options",
      "to": "m_YT_DLP_OPTIONS"
     }
    ],
    [
     {
      "t": "Cookie File",
      "to": "m_USER_COOKIE_FILE"
     },
     {
      "t": "Use OWNER Cookie",
      "to": "ytdlp_b1"
     }
    ],
    [
     {
      "t": "YT Description",
      "to": "m_YT_DESP"
     },
     {
      "t": "YT Tags",
      "to": "m_YT_TAGS"
     }
    ],
    [
     {
      "t": "YT Category ID",
      "to": "m_YT_CATEGORY_ID"
     },
     {
      "t": "YT Privacy Status",
      "to": "m_YT_PRIVACY_STATUS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "YT-DLP Settings. The cookie button is a toggle between your own cookie file and the owner's default cookies; the four YT fields are for YouTube upload defaults (unset values show the owner defaults)."
  },
  "ytdlp_b1": {
   "kind": "menu",
   "text": "⌬ <b>YT-DLP Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>YT-DLP Options</b> → <code>None</code>\n┠ <b>Cookie File</b> → <b>Not Exists</b>\n┠ <b>Cookie In Use</b> → <b>Owner's</b>\n┃\n┠ <b>Upload Description</b> → <code>Uploaded with WZML-X bot</code>\n┠ <b>Upload Tags</b> → <code>telegram,bot,youtube</code>\n┠ <b>Upload Category</b> → <code>22</code>\n┖ <b>Upload Privacy</b> → <code>unlisted</code>",
   "rows": [
    [
     {
      "t": "YT-DLP Options",
      "to": "m_YT_DLP_OPTIONS"
     }
    ],
    [
     {
      "t": "Cookie File",
      "to": "m_USER_COOKIE_FILE"
     },
     {
      "t": "Use YOUR Cookie",
      "to": "ytdlp_b0"
     }
    ],
    [
     {
      "t": "YT Description",
      "to": "m_YT_DESP"
     },
     {
      "t": "YT Tags",
      "to": "m_YT_TAGS"
     }
    ],
    [
     {
      "t": "YT Category ID",
      "to": "m_YT_CATEGORY_ID"
     },
     {
      "t": "YT Privacy Status",
      "to": "m_YT_PRIVACY_STATUS"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "YT-DLP Settings. The cookie button is a toggle between your own cookie file and the owner's default cookies; the four YT fields are for YouTube upload defaults (unset values show the owner defaults)."
  },
  "ytdlp_f0": {
   "kind": "menu",
   "text": "⌬ <b>YT-DLP Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>YT-DLP Options</b> → <code>{'format': 'bv*+ba/b', 'writesubtitles': True}</code>\n┠ <b>Cookie File</b> → <b>Exists</b>\n┠ <b>Cookie In Use</b> → <b>Yours</b>\n┃\n┠ <b>Upload Description</b> → <code>Uploaded via my bot</code>\n┠ <b>Upload Tags</b> → <code>movies,hd</code>\n┠ <b>Upload Category</b> → <code>24</code>\n┖ <b>Upload Privacy</b> → <code>private</code>",
   "rows": [
    [
     {
      "t": "YT-DLP Options",
      "to": "m_YT_DLP_OPTIONS_s"
     }
    ],
    [
     {
      "t": "Cookie File",
      "to": "m_USER_COOKIE_FILE_s"
     },
     {
      "t": "Use OWNER Cookie",
      "to": "ytdlp_f1"
     }
    ],
    [
     {
      "t": "YT Description",
      "to": "m_YT_DESP_s"
     },
     {
      "t": "YT Tags",
      "to": "m_YT_TAGS_s"
     }
    ],
    [
     {
      "t": "YT Category ID",
      "to": "m_YT_CATEGORY_ID_s"
     },
     {
      "t": "YT Privacy Status",
      "to": "m_YT_PRIVACY_STATUS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "YT-DLP Settings. The cookie button is a toggle between your own cookie file and the owner's default cookies; the four YT fields are for YouTube upload defaults (unset values show the owner defaults)."
  },
  "ytdlp_f1": {
   "kind": "menu",
   "text": "⌬ <b>YT-DLP Settings :</b>\n┟ <b>Name</b> → <a href=\"tg://user?id=123456789\">Alex</a>\n┃\n┠ <b>YT-DLP Options</b> → <code>{'format': 'bv*+ba/b', 'writesubtitles': True}</code>\n┠ <b>Cookie File</b> → <b>Exists</b>\n┠ <b>Cookie In Use</b> → <b>Owner's</b>\n┃\n┠ <b>Upload Description</b> → <code>Uploaded via my bot</code>\n┠ <b>Upload Tags</b> → <code>movies,hd</code>\n┠ <b>Upload Category</b> → <code>24</code>\n┖ <b>Upload Privacy</b> → <code>private</code>",
   "rows": [
    [
     {
      "t": "YT-DLP Options",
      "to": "m_YT_DLP_OPTIONS_s"
     }
    ],
    [
     {
      "t": "Cookie File",
      "to": "m_USER_COOKIE_FILE_s"
     },
     {
      "t": "Use YOUR Cookie",
      "to": "ytdlp_f0"
     }
    ],
    [
     {
      "t": "YT Description",
      "to": "m_YT_DESP_s"
     },
     {
      "t": "YT Tags",
      "to": "m_YT_TAGS_s"
     }
    ],
    [
     {
      "t": "YT Category ID",
      "to": "m_YT_CATEGORY_ID_s"
     },
     {
      "t": "YT Privacy Status",
      "to": "m_YT_PRIVACY_STATUS_s"
     }
    ],
    [
     {
      "t": "Back",
      "to": "main_r"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "YT-DLP Settings. The cookie button is a toggle between your own cookie file and the owner's default cookies; the four YT fields are for YouTube upload defaults (unset values show the owner defaults)."
  },
  "export": {
   "kind": "prompt",
   "text": "⌬ <b>Export Settings</b>\n\n<i>Send a passphrase to lock the file with. You need the same one to import it again, and nobody can recover it for you.</i>\n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Back",
      "to": "main"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "my-Backup-Pass-2026",
   "after": "main_r",
   "botMsg": "[file: wzmlx-settings-123456789.json] <b>12 setting(s) exported.</b> Import needs the same passphrase, so keep it somewhere safe.",
   "note": "Your passphrase message is deleted; the bot sends an encrypted JSON file and then refreshes the main menu."
  },
  "import": {
   "kind": "prompt",
   "text": "⌬ <b>Import Settings</b>\n\n<i>Send the exported file with its passphrase as the caption. Privileges, uploaded files and login state are never restored.</i>\n┖ <b>Time Left :</b> <code>60 sec</code>",
   "rows": [
    [
     {
      "t": "Back",
      "to": "main"
     },
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "reply": "[file: wzmlx-settings-123456789.json] caption: my-Backup-Pass-2026",
   "after": "main_r",
   "botMsg": "<b>Restored 12 setting(s).</b>",
   "note": "Send the exported JSON as a document with the passphrase as its caption; without a caption the bot answers \"Send the file again with the passphrase as its caption.\""
  },
  "confirm_reset_all": {
   "kind": "menu",
   "text": "<i>Are you sure you want to reset all your user settings?</i>",
   "rows": [
    [
     {
      "t": "Yes",
      "to": "main"
     },
     {
      "t": "No",
      "to": "main_r"
     }
    ],
    [
     {
      "t": "Close",
      "to": "__close"
     }
    ]
   ],
   "note": "Confirmation shown after Reset All. Yes wipes every saved setting and uploaded file (alert \"Reset Done!\") and returns to the fresh main menu; No returns to the main menu (alert \"Reset Cancelled.\")."
  }
 },
 "flows": [
  {
   "id": "thumbnail",
   "title": "Set a custom thumbnail",
   "desc": "Upload a thumbnail photo and turn on auto thumbnails.",
   "steps": [
    {
     "screen": "main",
     "press": "Leech Settings",
     "say": "Open Leech Settings; thumbnails live under the leech options."
    },
    {
     "screen": "leech_b000",
     "press": "Thumbnail Settings",
     "say": "Open the thumbnail submenu."
    },
    {
     "screen": "thumb_b0",
     "press": "Custom Thumbnail",
     "say": "Open the Custom Thumbnail option menu."
    },
    {
     "screen": "m_THUMBNAIL",
     "press": "Set",
     "say": "Press Set to be asked for the photo."
    },
    {
     "screen": "p_THUMBNAIL",
     "reply": "[photo: cover.jpg]",
     "say": "Send a photo within 60 seconds; the bot saves it and refreshes the menu."
    },
    {
     "screen": "m_THUMBNAIL_s",
     "press": "Back",
     "say": "The value now shows Exists, with View Thumb and Remove available. Go back."
    },
    {
     "screen": "thumb_f0",
     "press": "Enable Auto Thumbnail",
     "say": "Optionally turn on Auto Thumbnail so videos without a custom thumb get a generated one."
    },
    {
     "screen": "thumb_f1",
     "say": "Auto Thumbnail now reads Enabled."
    }
   ]
  },
  {
   "id": "leech-basics",
   "title": "Leech split size and document/media",
   "desc": "Set a split size, then switch between document and media upload.",
   "steps": [
    {
     "screen": "main",
     "press": "Leech Settings",
     "say": "Open Leech Settings."
    },
    {
     "screen": "leech_b000",
     "press": "Leech Split Size",
     "say": "Open the split size option. The size is capped to what your Telegram account allows (2GB, or 4GB with a premium user session)."
    },
    {
     "screen": "m_LEECH_SPLIT_SIZE",
     "press": "Set",
     "say": "Press Set."
    },
    {
     "screen": "p_LEECH_SPLIT_SIZE",
     "reply": "1gb",
     "say": "Type a size in bytes or with gb/mb. The prompt prints PREMIUM_USER so you know the cap."
    },
    {
     "screen": "m_LEECH_SPLIT_SIZE_s",
     "press": "Back",
     "say": "Saved as 1.00GB. Back to the leech menu."
    },
    {
     "screen": "leech_f000",
     "press": "Send As Document",
     "say": "Toggle upload type. The button always names the action; the line Leech Type shows the current state."
    },
    {
     "screen": "leech_f100",
     "press": "Enable Equal Splits",
     "say": "Enable Equal Splits to cut files into equal-sized parts."
    },
    {
     "screen": "leech_f110",
     "say": "Leech Type is DOCUMENT and Equal Splits Enabled."
    }
   ]
  },
  {
   "id": "dump-chats",
   "title": "Add leech dump chats",
   "desc": "Register named dump chats (the bot must be admin there) and add one more.",
   "steps": [
    {
     "screen": "main",
     "press": "Leech Settings",
     "say": "Open Leech Settings."
    },
    {
     "screen": "leech_b000",
     "press": "Leech Dump Chats",
     "say": "Open the dump chats option."
    },
    {
     "screen": "m_LEECH_DUMP_CHATS",
     "press": "Set",
     "say": "Press Set."
    },
    {
     "screen": "p_LEECH_DUMP_CHATS",
     "reply": "Movies -1001234567890\nSeries -1009876543210|12",
     "say": "One chat per line: name then chat id (with the -100 prefix). Add |topic for a forum topic. Each chat is verified at set time."
    },
    {
     "screen": "m_LEECH_DUMP_CHATS_s",
     "press": "Add One",
     "say": "Both chats are stored. Use Add One later to append without retyping."
    },
    {
     "screen": "pa_LEECH_DUMP_CHATS",
     "reply": "Docs -1001122334455",
     "say": "Send just the new entry."
    },
    {
     "screen": "m_LEECH_DUMP_CHATS_s",
     "press": "Back",
     "say": "Done. Select a name per task with -ud."
    },
    {
     "screen": "leech_f000",
     "say": "The leech menu lists the dump chats by name."
    }
   ]
  },
  {
   "id": "caption",
   "title": "Set a leech caption template",
   "desc": "Same pattern applies to Leech Prefix and Leech Suffix.",
   "steps": [
    {
     "screen": "main",
     "press": "Leech Settings",
     "say": "Open Leech Settings."
    },
    {
     "screen": "leech_b000",
     "press": "Leech Caption",
     "say": "Prefix, Suffix and Caption are three buttons that work identically."
    },
    {
     "screen": "m_LEECH_CAPTION",
     "press": "Set",
     "say": "Press Set."
    },
    {
     "screen": "p_LEECH_CAPTION",
     "reply": "<b>{filename}</b>\nSize: {size}",
     "say": "Write the caption using placeholders like {filename} and {size}; HTML tags are allowed."
    },
    {
     "screen": "m_LEECH_CAPTION_s",
     "press": "Back",
     "say": "Saved. Back to Leech Settings."
    },
    {
     "screen": "leech_f000",
     "say": "The caption is shown (escaped) in the leech summary."
    }
   ]
  },
  {
   "id": "rclone-conf",
   "title": "Upload your rclone.conf",
   "desc": "Give the bot your own rclone config for mirroring to your remotes.",
   "steps": [
    {
     "screen": "main",
     "press": "Mirror Settings",
     "say": "Open Mirror Settings."
    },
    {
     "screen": "mirror_00",
     "press": "RClone Tools",
     "say": "Open RClone Tools."
    },
    {
     "screen": "rclone_b",
     "press": "Rclone Config",
     "say": "Open the config option."
    },
    {
     "screen": "m_RCLONE_CONFIG",
     "press": "Set",
     "say": "Press Set to be asked for the file."
    },
    {
     "screen": "p_RCLONE_CONFIG",
     "reply": "[file: rclone.conf]",
     "say": "Send your rclone.conf as a document within 60 seconds."
    },
    {
     "screen": "m_RCLONE_CONFIG_s",
     "press": "Back",
     "say": "The config now shows Exists. Remove deletes it again."
    },
    {
     "screen": "rclone_f",
     "say": "RClone Settings shows Rclone Config Exists. Set a default path (use mrcc: to force your own config) and optional flags from here."
    }
   ]
  },
  {
   "id": "ytdlp",
   "title": "yt-dlp options and cookies",
   "desc": "Set yt-dlp API options and choose whose cookies are used.",
   "steps": [
    {
     "screen": "main",
     "press": "YT-DLP Settings",
     "say": "Open YT-DLP Settings."
    },
    {
     "screen": "ytdlp_b0",
     "press": "YT-DLP Options",
     "say": "Open the yt-dlp options menu."
    },
    {
     "screen": "m_YT_DLP_OPTIONS",
     "press": "Set",
     "say": "Press Set."
    },
    {
     "screen": "p_YT_DLP_OPTIONS",
     "reply": "{\"format\": \"bv*+ba/b\", \"writesubtitles\": True}",
     "say": "Send a Python-style dict of yt-dlp API options."
    },
    {
     "screen": "m_YT_DLP_OPTIONS_s",
     "press": "Back",
     "say": "Saved; Add One merges extra keys later."
    },
    {
     "screen": "ytdlp_f0",
     "press": "Use OWNER Cookie",
     "say": "Cookie File uploads your own cookies.txt (same Set/file flow as rclone.conf). This toggle chooses between yours and the owner's."
    },
    {
     "screen": "ytdlp_f1",
     "say": "Cookie In Use now reads Owner's."
    }
   ]
  },
  {
   "id": "ffmpeg-reset",
   "title": "Add ffmpeg commands, then reset",
   "desc": "Define named ffmpeg runs and learn how Reset works for any setting.",
   "steps": [
    {
     "screen": "main",
     "press": "FF Media Settings",
     "say": "Open FF Media Settings."
    },
    {
     "screen": "ffset_b",
     "press": "FFmpeg Cmds",
     "say": "Open the ffmpeg commands option."
    },
    {
     "screen": "m_FFMPEG_CMDS",
     "press": "Set",
     "say": "Press Set; the prompt explains the mltb.* placeholders."
    },
    {
     "screen": "p_FFMPEG_CMDS",
     "reply": "{\"convert\": [\"-i mltb.m4a -c:a libmp3lame -q:a 2 mltb.mp3\"], \"subtitle\": [\"-i mltb.mkv -c copy -c:s srt mltb.mkv -del\"]}",
     "say": "Send a dict of lists. Every command needs -i and must not start with the word ffmpeg. Use it per task with -ff convert."
    },
    {
     "screen": "m_FFMPEG_CMDS_s",
     "press": "Reset",
     "say": "Reset (alert \"Reset Done!\") removes the stored value; the menu falls back to Not Exists. Every non-file setting has the same button."
    },
    {
     "screen": "m_FFMPEG_CMDS",
     "say": "Back to the unset state with only Set offered."
    }
   ]
  },
  {
   "id": "clone-session",
   "title": "Clone settings and user session",
   "desc": "Seal a Telegram session with a passphrase (private chat only) and set clone defaults.",
   "steps": [
    {
     "screen": "main",
     "press": "Clone Settings",
     "say": "Open Clone Settings."
    },
    {
     "screen": "clone_b",
     "press": "User Session",
     "say": "Open the session option; this only works in a private chat with the bot."
    },
    {
     "screen": "m_USER_SESSION",
     "press": "Set",
     "say": "The bot starts a two-step prompt in DM."
    },
    {
     "screen": "sess_p1",
     "reply": "correct-horse-battery",
     "say": "Step 1: pick a passphrase (8+ characters). It is never stored."
    },
    {
     "screen": "sess_p2",
     "reply": "BQC3x9kAAB1...(string session)...",
     "say": "Step 2: paste your Pyrogram V2 string session; the message is deleted instantly."
    },
    {
     "screen": "clone_f",
     "press": "Content Type",
     "say": "The session is sealed and unlocked (Lock Now appears). Now set clone defaults, e.g. content type."
    },
    {
     "screen": "m_CLONE_CONTENT_TYPE_s",
     "press": "Back",
     "say": "Content type accepts doc, med or all."
    },
    {
     "screen": "clone_f",
     "say": "Clone Settings summary."
    }
   ]
  },
  {
   "id": "backup-reset",
   "title": "Export, import and Reset All",
   "desc": "Back up your settings with a passphrase, then wipe everything.",
   "steps": [
    {
     "screen": "main",
     "press": "Export",
     "say": "Export creates an encrypted file of your settings."
    },
    {
     "screen": "export",
     "reply": "my-Backup-Pass-2026",
     "say": "Send a passphrase. The bot replies with wzmlx-settings-<id>.json; keep the passphrase safe."
    },
    {
     "screen": "main_r",
     "press": "Import",
     "say": "Import restores a file made by Export (privileges, uploaded files and logins are never restored)."
    },
    {
     "screen": "import",
     "reply": "[file: wzmlx-settings-123456789.json] caption: my-Backup-Pass-2026",
     "say": "Send the file with the passphrase as caption."
    },
    {
     "screen": "main_r",
     "press": "Reset All",
     "say": "Reset All appears once anything is saved."
    },
    {
     "screen": "confirm_reset_all",
     "press": "Yes",
     "say": "Confirm to wipe all settings and uploaded files."
    },
    {
     "screen": "main",
     "say": "Back to a fresh main menu with no Reset All button."
    }
   ]
  }
 ]
};
