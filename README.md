# emr-projekt

### What it does:
#### This project consists of two applications:
##### emr-app:
An ionic app, which can be built to run on different devices, such as smartphones. The "Mérés" page is used to measure the accuracy of the geolocation service of a device, the "Kiirás" page displays the current, and average accuracy, as well as the number of samples. It requests this data from the emr-szerver.
##### emr.szerver:
A NodeJS server, which receives the data sent by the emr-app, calculates, and stores the current accuracy, average accuracy, and the number of samples, and sends it to the emr-app when requested.
### How to use it:
After installing NodeJS, Ionic, and their prerequisites, open a command prompt, navigate to the "emr-szerver" directory issue the command "node index.js". This starts the server.
Before launching the app, the ip adresses in "emr-app/src/httpservice/httpService.ts" and "emr-app/src/kiiras/kiiras.ts" should be set to the network address of your server. The app can be lounched on desktops by opening a command prompt, navigating to the "emr-app" directory, and issuing the "ionic serve" command. The app can also be built to run on mobile devices, for example to run it on Android, issue the command "ionic build android", this creates an apk file, which can be run on an android device. 
