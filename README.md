# rnFrame
A super clean ReactNative project

**Android**

## 调试运行

```
1. cd rnFrame
2. npm i
3. react-native run-android

// 如遇不能正常启动，再运行

1.npm start

// 打开android studio，点击运行，启动遇红屏错误

2.adb reverse tcp:8081 tcp:8081

```

**IOS**
```
1. cd rnFrame
2. npm i
3. react-native run-ios

// 如遇不能正常启动，再运行
1.npm start

```


## 打包发布

**Android**

```
1.在android/app/src/main/下新建assets文件夹

// 生成bundle
react-native bundle --platform android --dev false --entry-file index.js  --bundle-output android/app/src/main/assets/index.android.bundle  --assets-dest android/app/src/main/res/

// 如何设置密钥文件

1.用android studio打开项目到android文件夹

2.build -> Generate Signed Bundle or APK -> APK -> 点击create new...填写一堆，然后重新选择此密钥文件

3.在android/app/build.gradle 下添加 release部分即第二步生成的密钥信息

signingConfigs {
        // add this start

        release {
            keyAlias 'key0'
            keyPassword '123456'
            storeFile file('rnFramekey.keystore')
            storePassword '123456'
        }

        // add this end

        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
    }


// 如何生成apk文件

mac:./gradlew assembleRelease

window:gradlew assembleRelease

最后在 android/app/build/outputs/apk/release/ 拷贝出app-release.apk文件，即可发布到android应用市场

```

**IOS**

```
1.在ios文件夹下新建bundle文件夹

2.执行语句：

// 生成bundle
react-native bundle --platform ios --dev false --entry-file index.js  --bundle-output  ios/bundle/index.ios.bundle  --assets-dest ios/bundle


3.打开Xcode引入项目文件ios,


```


