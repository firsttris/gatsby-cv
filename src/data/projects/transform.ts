/* eslint-disable */
const data = require('./de.json');
import * as fs from 'fs';

const projects = data.projects;

const logger = fs.createWriteStream('markdown.md', {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })

const writeLine = (line: any) => logger.write(`\n${line}`);

projects.forEach((project: any) => {
    writeLine(`# ${project.title}`)
    writeLine(`#### ${project.from} - ${project.to} in ${project.location}`)
    writeLine(project.company)
    writeLine('')
    writeLine(`### ${project.description}`)
    writeLine('')
    writeLine('## Ergebnisse')
    project.achievements.forEach((achievement: string) => writeLine(`- ${achievement}`))
    writeLine('')
    writeLine('## Verwendete Technologien')
    writeLine(`<Chips mb="30px" mt="10px" skills="${project.technologies}"/>`)
    writeLine('')
    writeLine('<PageBreak/>')
    writeLine('')
});
  

logger.end()