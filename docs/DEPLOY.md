
## Deploy
Deployment of team web on [team10-20.studenti.fiit.stuba.sk](team10-20.studenti.fiit.stuba.sk).

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
	You can download private key (team10.key) from [Team web drive](https://drive.google.com/drive/folders/1_2V0B3b30o_aSnExcWm1lQqQ4STs3GjO).

1. Setup a connection to sftp server in SFTP Client. If you're using FileZilla, select File -> Site Manager -> New site and fill in following fields:

    Protocol: sftp

    Host: ubuntu@team10-20.studenti.fiit.stuba.sk

	Logon Type: Key file
    
	User: ubuntu
    
	Key file: you need to convert the key into a supported format (team10key.ppk), FileZilla does the convertion, so you just need to select the new converted key (team10key.ppk)
    
	-> Connect -> enter password.

1. Upload the content of the /dist folder to /var/www/teamweb/html folder on server side. To upload files you need to select them on the left screen, right click the selected files and folders and click Upload or just drag and drop files between the two windows.

1. Visit the [Team web](https://team10-20.studenti.fiit.stuba.sk) to check whether the upload was successful.

