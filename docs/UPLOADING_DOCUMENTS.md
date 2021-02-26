# Keeping the documents updated

As our webpage is not connected to any database, the data provided are static and
need to be updated manually.

### The current workflow is:

1. write the document in the [LaTeX](https://www.latex-project.org/) and compile the files to the PDF
1. add the documents into webpage static data
1. add the documents into assets

Each of these steps are described below in detail.

## Writing the document

As mentioned above, we write the documents in [LaTeX](https://www.latex-project.org/) syntax for being constant
in the template.

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

## Adding the documents into assets

Add documents into respective folder in `public/downloads` directory.


## Deploy 

After you've taken these steps, the documents will be deployed to the webserver automatically after 
you're changes make it to the `master` branch (e.g. merging the pull request).
