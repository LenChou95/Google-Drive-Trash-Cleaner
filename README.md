# Google Drive Trash Cleaner



* [English](#Description)
* [中文](#描述)

<a name="english"></a>

## Description
Google Drive Trash Cleaner is a Google Apps Script for emptying the Google Drive trash. As the Google Drive web interface may fail when handling the operation of emptying the trash with a large number of files, this script provides an alternative solution. By calling the Google Drive API, it can gradually delete the files in the trash until all files are deleted.

## Usage
1. Open [Google Apps Script](https://script.google.com/).
2. Click on "New Project".
3. Change the project name to "Google Drive Trash Cleaner" and click "Save".
4. Copy and paste the code from this project into the new Apps Script project.
5. In the menu, click "Publish" -> "Deploy as web app".
6. For "Who has access to the app", select "Anyone, even anonymous", and then click "Deploy".

## Note
1. This script may need to be run multiple times to clear all files, as Google has a limit on the execution time of Apps Script for each user.
2. Due to the call frequency limit of Google Apps Script, the execution speed of this script may be slow, especially when there are a large number of files in the trash.
3. The operation of emptying the trash is irreversible. Once the file is deleted, it cannot be recovered. Please back up your data when using this script.



## 描述
Google Drive Trash Cleaner 是一个用于清空 Google Drive 回收站的 Google Apps Script。由于Google Drive 网页界面在处理大量文件的回收站清空操作时可能会失败，此脚本提供了一个替代方案。通过调用 Google Drive API，它可以逐步删除回收站中的文件，直到所有文件都被删除。

## 使用方法
1. 打开 [Google Apps Script](https://script.google.com/).
2. 点击 "新建项目"。
3. 将项目的名字改为 "Google Drive Trash Cleaner"，然后点击 "保存"。
4. 将本项目中的代码复制并粘贴到新的Apps Script项目中。
5. 在菜单中，点击 "发布" -> "部署为网页应用"。
6. 在 "谁有访问权限到该应用" 选择 "任何人，甚至是匿名用户"，然后点击 "部署"。

## 注意事项
1. 这个脚本可能需要运行多次才能清空所有的文件，因为Google对每个用户的Apps Script的执行时间有限制。
2. 由于Google Apps Script的调用频率限制，这个脚本的执行速度可能会比较慢，特别是当回收站中有大量文件时。
3. 清空回收站的操作是不可逆的，一旦文件被删除，就无法恢复。请在使用这个脚本时注意备份你的数据。

