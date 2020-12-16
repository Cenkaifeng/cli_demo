'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('underscore');

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(
            yosay(`Welcome to the sweet ${chalk.red('generator-cli-demo')} generator!`)
        );

        const prompts = [
        {
            type: 'confirm',
            name: 'someAnswer',
            message: 'Would you like to enable this option?',
            default: true
        }];

        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        this.fs.copy(
            this.templatePath('dummyfile.ejs'),
            this.destinationPath('dummyfile.ejs')
        );
    }
    // writing() {
    //     let target = [ // 需要加工的文件使用数组
    //         ['src/_route.js', 'src/route.js'],
    //         ['_index.ejs', 'index.ejs'],
    //         // 不需要加工的文件
    //         'README.md',
    //         'index.html',
    //         'package.json',
    //         'proxy.json',
    //         'build/build.js',
    //         'build/check-versions.js',
    //     ]; // 添加隐藏文件 .文件名称在linux下会有问题，所以.xxx在template里改为_xxx
    //     target = target.concat([
    //         ['_eslintrc.js', '.eslintrc.js'],
    //         ['_eslintignore', '.eslintignore'],
    //         ['_babelrc', '.babelrc'],
    //         ['_editorconfig', '.editorconfig'],
    //         ['_gitignore', '.gitignore'],
    //         ['_postcssrc.js', '.postcssrc.js']
    //     ]);
    //     _.forEach(target, (file) => {
    //         let toFile;
    //         let fromFile;

    //         if (_.isArray(file)) { // eslint-disable-next-line
    //             fromFile = file[0]; // eslint-disable-next-line
    //             toFile = file[1];
    //             this.fs.copyTpl(
    //                 this.templatePath(fromFile),
    //                 this.destinationPath(toFile),
    //                 this.props
    //             );
    //         } else {
    //             fromFile = file;
    //             toFile = file;
    //             this.fs.copy(this.templatePath(fromFile), this.destinationPath(toFile), this.props);
    //         }

    //     });
    // }

    // 安装npm依赖与bower依赖
    install() {
        this.installDependencies();
        // this.bowerInstall();
        this.npmInstall();
    }
};
