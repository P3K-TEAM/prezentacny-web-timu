
## Deploy
Deployment of team web on team10-20.studenti.fiit.stuba.sk.

#### Steps
1. Build the app locally:

	```shell script
	npm run build
	```
	This creates /dist folder which content is uploaded on server. 

1. Connect to server using ssh:

	```shell script
	ssh -i team10.key ubuntu@team10-20.studenti.fiit.stuba.sk
	```

1. Setup sftp server in FileZilla via File -> Site Manager -> New site:

    Protocol: sftp

    Host: ubuntu@team10-20.studenti.fiit.stuba.sk

	Logon Type: Key file
    
	User: ubuntu
    
	Key file: the key needs to be converted into a supported format (team10key.ppk)
    
	-> Connect -> enter password.

1. Upload files from /dist folder to /var/www/teamweb folder

    Ubuntu user doesn't have permission to access this folder and accessing via Root user doesn't work:
	```shell script
	Error:	FATAL ERROR: Received unexpected end-of-file from SFTP server
	Error:	Could not connect to server
	```
1. Since only root has access to the /var/www folder, we need to add the Ubuntu user to a group that has permission to access this folder.
	Use commands:
	
	```shell script
	sudo su
	usermod -a -G root ubuntu
	```

1. Now, it's possible to upload files via ubuntu user.

1. The content of the /dist folder is uploaded to /var/www/teamweb/html folder on server side. To upload files you need to select them on the left screen, right click the selected files and folders and click Upload or just drag and drop files between the two windows.

1. Team web is deployed on team10-20.studenti.fiit.stuba.sk.

