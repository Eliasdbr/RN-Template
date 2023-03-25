# React Native Template

## 📝 Description

This is a React Native 0.73 template project with some functionalities included like screen navigation, pre-installed icon library, some styles and components, etc.

The objective of this project is to save the developer from building all the boilerplate needed to run a basic React Native App.

You can find all the included dependencies in the `package.json` file.

***

## 📦 Installing dependencies

1. React Native dependencies:
	```
	yarn
	```
2. Pods for iOS:
	```
	cd ios ; pod install ; cd ..
	```

***

## ✏️ Renaming the project

If you want to rename the project including the app bundle name, you need to:

1. Run the rename command:
	```
	yarn react-native-rename "New name" -b "com.yourname.newname"
	```
2. Follow the steps from [**this response**](https://stackoverflow.com/a/65431080) on Stack Overflow.

***

## ⚛️ Changing the default icons

I generated the default icons with [**this tool**](https://icon.kitchen/i).

* For Android, you need to replace the

	> android/app/src/main/res

	folder with the "android/res" folder from the generated icons.

* For iOS, you need to replace the contents of

	> ios/\<project_name\>/Images.xcassets/AppIcon.appiconset

	with the contents of the "ios" folder from the generated icons.

***

## 📱 Changing the Splash Screens

* For Android, edit the

	> android/app/src/main/layout/launch_screen.xml

	file.

* For iOS, edit the

	> ios/\<project_name\>/LaunchScreen.storyboard

	file.

	---

	*Note: To edit these files you may use any text editor, but it is recommended to use Android Studio and XCode for Android and iOS respectively, since they have graphic tools for designing these splash screens.*

***