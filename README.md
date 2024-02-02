## Description

running `npm test` produces the following warnings:

```
The native view manager required by name (ExpoClipboard) from NativeViewManagerAdapter isn't exported by expo-modules-core. Views of this type may not render correctly. Exported view managers: [ExpoAppleAuthentication, ExpoBarCodeScanner, ExpoBlurView, ExpoImage, ExpoLinearGradient, ExpoCamera, ExponentGLView, ExpoVideoView].
```

```
new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.
```

```
new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.
```

Steps taken to produce this repo:
- `npx create-expo-app --template` (Navigation / TypeScript template)
- Added [this commit](https://github.com/jp1987/expo-clipboard-issue/commit/27486a1dafd0d86c799343a9fe2833845d4cc9b3)
