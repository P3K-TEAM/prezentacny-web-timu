# Keeping the documents updated

As our webpage is not connected to any database, the data provided are static and
need to be updated manually.

### The current workflow is:

-   write the documentation in the [LaTeX](https://www.latex-project.org/) and
    compile the files to the PDF
-   add the documents into webpage static data
-   rebuild the project
-   upload the documents and the builded files to the webserver

Each of these steps are described below in detail.

## Writing the documentation

As mentioned above, we write the documentation in [LaTeX](https://www.latex-project.org/) syntax for being constant
in the documentation.

Both the source files and output PDF's are stored in our [documents repository](https://github.com/P3K-TEAM/documents).
The source files are present in the `src` directory - please respect the folder structure. It should mirror the tabs in the documents page of our web.

To compile the `.tex` files into PDF's please read and follow the steps described in the [documents repository README](https://github.com/P3K-TEAM/documents/blob/master/README.md) file.

The corresponding result in form of PDF files will be in the `out` directory.

## Filling the newly created documents into the page static data

Our page reads the data provided in the page source files, therefore it needs to be hard-coded in there
and there rebuilt and re-deployed. This workflow should be simplified in the future using CI/CD auto-deploy.

But for now, the data is stored in `src/views/Documents.vue` in `documents` variable.
The basic folder structure looks following:

```json
{
	"Zápisnice": [],
	"Retrospektívy": [],
	"Exporty úloh": [],
	"Metodiky": []
}
```

Please add your files into the category. If you need to create new category, please do that after consulting with other developers.
Each of the category should be an array of Document objects.

**Example Document object:**

```typescript
{
	name: string; // File title, e.g. Metodika písania metodík
	date: string; // Last changed date, e.g. 5.11.2020
	link: string; // Relative path to the file, e.g. '/download/metodiky/metodika-definition-of-done.pdf'
}
```

## Rebuilding the project

As the JavaScript source files have been changed, the whole project needs to be bundled and rebuilt to the
resulting single JavaScript file.

You can do that by running the following command:

```shell script
npm run build
```

## Uploading the documents and built files to the webserver

The workflow of uploading to the server is same for both the documents and source files.
The built files from previous step are located in `dist` directory.

#### Documents

Documents should be uploaded into `download` folder and respective category subfolder - e.g. `/download/metodiky`.
:exclamation: The path should match the path you specified in the document object in static webpage data.

#### Built source files

You only need to upload and overwrite the `js` folder - all others remain untouched.

### Connecting to the server using SFTP

Whole workflow of uploading is described in [deploy docs](./DEPLOY.md).
