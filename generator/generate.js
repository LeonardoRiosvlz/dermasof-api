const { generateTemplateFiles } = require('generate-template-files');


generateTemplateFiles([
  {
    option: 'GENERATE_MODULE',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './generator/module',
    },
    stringReplacers: [{ question: 'Insert Module Name', slot: '__name__' } ],
    output: {
      path: './src/modules/__name__(kebabCase)',
      pathAndFileNameDefaultCase: '(kebabCase)',
      overwrite: true,
    },
  }

]);
