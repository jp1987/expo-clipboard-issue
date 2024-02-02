import * as Clipboard from 'expo-clipboard';
import { Text, TextProps } from './Themed';
import { useState } from 'react';

export function MonoText(props: TextProps) {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('hello world');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
