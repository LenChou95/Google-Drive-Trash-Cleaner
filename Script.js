function myFunction() {
    var files = DriveApp.getTrashedFiles();
    while (files.hasNext()) {
        var currentFile = files.next();
        if (currentFile.isTrashed()) {
            try {
                DriveApp.removeFile(currentFile);
                Logger.log('Deleted file: ' + currentFile.getName());
            } catch (e) {
                Logger.log('Failed to delete file: ' + currentFile.getName() + ', error: ' + e.message);
            }
        }
    }
}
