require('dotenv').config();

const simpleGit = require('simple-git');

const fs = require('fs');

const aurDirectory = process.env.AUR_DIR;

fs.readdir(aurDirectory, (error, files) => {

    if (error) {
        console.trace(error);
    }

    files.forEach(file => {

        gitPull(`${aurDirectory}${file}`).then((result) => {
            console.log(file,' :\n', result.summary, '\n');
        });

    });
});

const gitPull = async(dir) => {
    const git = simpleGit(dir);

    try {
        const result = await git.pull();
        return result;
    } catch (error) {
        console.trace(error);
    }

};





