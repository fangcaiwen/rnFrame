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


3. a. 打开Xcode引入项目文件ios,右键打开项目同项目名的rnFrame的菜单，Add Files to "RNIos"。
   b. 然后选择bundle文件，在option中选择 Create folder references
   c. 点击Add(即可把bundle加入到项目当中，注意加入进来的文件夹必须是蓝色)

4.修改debug状态
  Xcode——>Product——>Schema——>Edit Scheme，查看run选择的模式，将项目由debug状态改成release状态（debug为内测，release为发布App Store）

5.点击项目根文件，确保左上角选择的是Generic IOS Device,即rnFrame>Generic IOS Device

6.点击General,填写Identity,版本号，Bundle Identifier等信息

7.点击并确认Signing & Capabilities等信息

8.点击Product——Archive开始打包。显示build完成之后，显示弹框：点击Distribute App 即可一步步选择便可打包完成


```


