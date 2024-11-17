import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.datingapp',
  appPath: 'src',
  appResourcesPath: '../../tools/assets/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;