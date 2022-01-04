import { StyleSheet } from 'react-native'

// https://www.figma.com/file/BOLVCnayWxT24URrkK1r0Z/%D0%9C%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BA%D1%83%D1%80%D1%8C%D0%B5%D1%80-3?node-id=625%3A10828
const textPrimary = '#202020'
const activeChips = '#4E7BA5'
const inactiveChips = '#E8EEF1'
const activeSecondaryChips = '#5E6366'
const warning = '#FF900D'

export const lightTheme = {
  colors: {
    primary: '#1AB248',
    primaryInverse: '#FFFFFF',

    border: '#EBEDEE',
    divider: '#8E9194',

    success: '#4EB410',
    error: '#ED3D3D',
    warning: warning,

    warningLight: '#FDEDDB',
    successLight: '#E6FAE7',
    errorLight: '#FFE7E7',

    background: '#FFFFFF',
    backgroundCard: '#F9FAFB',

    textPrimary: textPrimary,
    textPrimaryLight: '#3E4345',
    textSecondary: '#919699',

    backdrop: '#00000099',

    activeSecondaryChips: activeSecondaryChips,
    activeChips: activeChips,
    inactiveChips: inactiveChips,
    chipsBackground: '#F7F9FA',
    chipsSelected: {
      new: activeChips,
      urgent: warning,
      get: activeSecondaryChips,
      send: activeSecondaryChips,
    },
    chipsUnselected: {
      new: '#D0EEF6',
      urgent: '#FDEDDB',
      get: inactiveChips,
      send: inactiveChips,
    },

    dhl: warning,

    /**
     * Border color for all selectable items in unselected state, like: checkbox, radio, switches
     */
    selectableBorder: '#ABBAC2',

    signBrush: '#000',
  },
  // https://www.figma.com/file/BOLVCnayWxT24URrkK1r0Z/%D0%9C%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BA%D1%83%D1%80%D1%8C%D0%B5%D1%80-3?node-id=1649%3A97888
  textStyle: StyleSheet.create({
    Headline: {
      fontFamily: 'System',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: 24,
      lineHeight: 28.13,
      letterSpacing: 0.18,
      color: textPrimary,
    },
    Title: {
      fontFamily: 'System',
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: 20,
      lineHeight: 26,
      letterSpacing: 0.15,
      color: textPrimary,
    },
    Body: {
      fontFamily: 'System',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: 16,
      lineHeight: 20,
      color: textPrimary,
    },
    Body2: {
      fontFamily: 'System',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: 14,
      lineHeight: 18,
      color: textPrimary,
    },
    'Body 2 Medium': {
      fontFamily: 'System',
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: 14,
      lineHeight: 20,
      color: textPrimary,
    },
    Caption: {
      fontFamily: 'System',
      fontWeight: '400',
      fontStyle: 'normal',
      fontSize: 12,
      lineHeight: 16,
      color: textPrimary,
    },
    'Subtitle 1': {
      fontFamily: 'System',
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: 16,
      lineHeight: 20,
      color: textPrimary,
    },
    'Subtitle 2': {
      fontFamily: 'System',
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: 14,
      lineHeight: 16,
      color: textPrimary,
    },
    'Subtitle 3': {
      fontFamily: 'System',
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: 14,
      lineHeight: 18,
      letterSpacing: 1,
      color: textPrimary,
    },
    // TODO: when resolved https://www.figma.com/file/BOLVCnayWxT24URrkK1r0Z?node-id=1763:46972#125004158
    'Caption Bold': {
      fontFamily: 'System',
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: 12,
      lineHeight: 16,
      color: textPrimary,
    },
    Menu: {
      fontFamily: 'System',
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0,
      color: textPrimary,
    },
  }),
  spacing: [
    0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108,
  ],
}
