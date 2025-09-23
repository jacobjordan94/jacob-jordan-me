import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const robotsPath = path.join(distDir, 'robots.txt');
const policyUrl = 'https://jacob-jordan.me/content-policy';
const policyDirective = `Policy: ${policyUrl}`;

function patchRobotsTxt() {
    if (!fs.existsSync(robotsPath)) {
        console.warn('robots.txt not found. Skipping policy directive patch.');
        return;
    }

    try {
        let content = fs.readFileSync(robotsPath, 'utf-8');

        if (!content.includes(policyDirective)) {
            content += `\n${policyDirective}\n`;
            fs.writeFileSync(robotsPath, content, 'utf-8');
            console.log('robots.txt patched with Policy directive.');
        } else {
            console.log('robots.txt already includes Policy directive.');
        }
    } catch (error) {
        console.error('Error while patching robots.txt:', error);
    }
}

patchRobotsTxt();
